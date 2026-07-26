# DIY CAD Runtime

This local-only service converts DIY's validated scene JSON into native CAD artifacts through `FreeCADCmd` and OpenCascade.

```bash
FREECAD_CMD=/Applications/FreeCAD.app/Contents/Resources/bin/FreeCADCmd npm run cad:runtime
curl http://127.0.0.1:44045/health
```

The worker accepts only the typed primitive allowlist in `lib/cad-engine.ts`. It never evaluates Python or shell text supplied by an AI model. Each job produces an editable `.FCStd` document plus STEP, STL, and a manifest under `cad-runtime/artifacts/` (or `DIY_CAD_ARTIFACTS_DIR`).

FreeCAD is a separate LGPL-2.1-or-later program and is not redistributed in this repository. This process boundary keeps the DIY application independently licensed while using FreeCAD through its documented command-line/Python interface.
