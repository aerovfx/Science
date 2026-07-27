import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import solve_bvp
from scipy.special import hermite, eval_hermite
import math

plt.rcParams.update({'font.size': 12, 'figure.dpi': 150})

# 1. CONSTANTS
h = 6.626e-34    # Planck's constant (J s)
hbar = h / (2 * np.pi)
m_e = 9.109e-31  # Electron mass (kg)
eV = 1.602e-19   # Electron volt (J)


# 2. QUANTUM HARMONIC OSCILLATOR (1D)
def qho_wavefunction(n, x, m=m_e, omega=1e14):
    """
    Tính hàm sóng của Dao động tử điều hòa lượng tử.
    Calculate the wavefunction of the Quantum Harmonic Oscillator.
    """
    alpha = np.sqrt(m * omega / hbar)
    xi = alpha * x
    
    # Normalization constant
    N_n = 1.0 / np.sqrt((2**n) * math.factorial(n)) * np.sqrt(alpha / np.sqrt(np.pi))
    
    # Hermite polynomial
    H_n = eval_hermite(n, xi)
    
    # Wavefunction
    psi = N_n * H_n * np.exp(-0.5 * xi**2)
    return psi

def plot_qho(n_max=4, x_range=np.linspace(-3e-9, 3e-9, 500)):
    """Plot QHO wavefunctions and probabilities."""
    omega = 1e14
    
    fig, axes = plt.subplots(1, 2, figsize=(12, 5))
    
    for n in range(n_max + 1):
        psi = qho_wavefunction(n, x_range, omega=omega)
        prob = np.abs(psi)**2
        
        # Shift vertically by energy level for visualization
        E_n = hbar * omega * (n + 0.5) / eV  # Energy in eV
        
        axes[0].plot(x_range*1e9, psi + E_n*3e4, label=f'n={n}')
        axes[1].plot(x_range*1e9, prob + E_n*1e14, label=f'n={n}')
        
    axes[0].set_title(r"Hàm Sóng $\psi_n(x)$")
    axes[0].set_xlabel("Vị trí x (nm)")
    
    axes[1].set_title(r"Mật Độ Xác Suất $|\psi_n(x)|^2$")
    axes[1].set_xlabel("Vị trí x (nm)")
    
    for ax in axes:
        ax.grid(alpha=0.3)
        ax.legend()
        
    plt.tight_layout()
    plt.savefig("qho_levels.png")
    print("Saved 'qho_levels.png'")


# 3. 1D SCHRODINGER SOLVER (Finite Potential Well)
def solve_1d_well(V0_eV, width_nm, num_states=3):
    """
    Giải PT Schrodinger cho giếng thế hữu hạn.
    Solve TISE for a finite potential well.
    """
    V0 = V0_eV * eV
    L = width_nm * 1e-9
    
    # Grid
    x = np.linspace(-2*L, 2*L, 1000)
    dx = x[1] - x[0]
    
    # Potential V(x)
    V = np.zeros_like(x)
    V[(x < -L/2) | (x > L/2)] = V0
    
    # Kinetic Energy Operator Matrix (Finite Difference)
    # T = -hbar^2 / (2m) * d^2/dx^2
    diag = np.ones(len(x)) * -2.0
    off_diag = np.ones(len(x) - 1)
    
    D2 = np.diag(diag) + np.diag(off_diag, k=1) + np.diag(off_diag, k=-1)
    T = -hbar**2 / (2 * m_e * dx**2) * D2
    
    # Hamiltonian
    H = T + np.diag(V)
    
    # Eigenvalues and Eigenvectors
    E, psi = np.linalg.eigh(H)
    
    # Filter bound states (E < V0)
    bound_states = E < V0
    E_bound = E[bound_states][:num_states]
    psi_bound = psi[:, bound_states][:, :num_states]
    
    # Normalize
    for i in range(len(E_bound)):
        psi_bound[:, i] /= np.sqrt(np.trapz(psi_bound[:, i]**2, x))
    
    # Plotting
    plt.figure(figsize=(8, 6))
    plt.plot(x*1e9, V/eV, 'k-', linewidth=2, label='Thế năng V(x)')
    
    for i in range(len(E_bound)):
        # Shift psi to its energy level
        psi_plot = psi_bound[:, i] * 5 + E_bound[i]/eV
        plt.plot(x*1e9, psi_plot, label=f'E_{i} = {E_bound[i]/eV:.2f} eV')
        plt.axhline(E_bound[i]/eV, color='gray', linestyle='--', alpha=0.5)
        
    plt.title(f"Giếng Thế Hữu Hạn ({V0_eV} eV, {width_nm} nm)")
    plt.xlabel("Vị trí x (nm)")
    plt.ylabel("Năng lượng (eV)")
    plt.ylim(-0.2, V0_eV * 1.5)
    plt.legend()
    plt.grid(alpha=0.3)
    plt.savefig("finite_well.png")
    print("Saved 'finite_well.png'")


# 4. BELL STATE SIMULATION (QISKIT PLACEHOLDER)
# This serves as a template for students to fill in Qiskit code
def simulate_bell_state_qiskit_template():
    """
    Template for creating and running a Bell state circuit in Qiskit.
    Mẫu tạo và chạy mạch tạo trạng thái Bell bằng Qiskit.
    """
    print("\n--- QISKIT TEMPLATE ---")
    print("To run Qiskit simulations, install it via: pip install qiskit qiskit-aer")
    print("Code Example:")
    qiskit_code = """
    from qiskit import QuantumCircuit, transpile
    from qiskit_aer import Aer
    from qiskit.visualization import plot_histogram
    
    # Create a 2-qubit circuit
    qc = QuantumCircuit(2, 2)
    
    # Apply Hadamard to Qubit 0
    qc.h(0)
    
    # Apply CNOT (control=0, target=1)
    qc.cx(0, 1)
    
    # Measure
    qc.measure([0, 1], [0, 1])
    
    print(qc.draw())
    
    # Simulate
    simulator = Aer.get_backend('qasm_simulator')
    compiled_circuit = transpile(qc, simulator)
    job = simulator.run(compiled_circuit, shots=1000)
    result = job.result()
    counts = result.get_counts(qc)
    print("Measurement outcomes:", counts)
    """
    print(qiskit_code)


if __name__ == "__main__":
    print("⚛️ QUANTUM PHYSICS TOOLKIT ⚛️")
    print("Vẽ mô hình Dao động tử điều hòa...")
    plot_qho()
    
    print("Giải phương trình giếng thế 1D...")
    solve_1d_well(V0_eV=10.0, width_nm=1.0)
    
    simulate_bell_state_qiskit_template()
