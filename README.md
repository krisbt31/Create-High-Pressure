# Create: High Pressure (KubeJS)

¡Sí! Quedó actualizado para la rama moderna de **Minecraft 1.21.x** (incluyendo tu solicitud de 1.21.11 a nivel de scripts KubeJS/Create).

## Progresión

1. `Coal` → `Graphite Powder` (Milling)
2. `Graphite Powder` → `Graphite` (Compacting con calor `heated`)
3. `Graphite` → `Diamond` (Compacting con calor `superheated`, probabilidad baja 5%)

## Archivos

- `kubejs/startup_scripts/items.js`: registra `graphite_powder` y `graphite`.
- `kubejs/server_scripts/create_high_pressure_recipes.js`: registra recetas con sintaxis actual de Create para KubeJS (`create.milling`, `create.compacting`, `heated()`, `superheated()`).

## Requisitos recomendados (1.21.x)

- Minecraft `1.21.x`
- Loader/modpack con **KubeJS** compatible con `1.21.x`
- **Create** compatible con la misma versión

## Balance

- La receta final entrega diamante con `withChance(0.05)` (5%).
- Puedes subir o bajar ese valor para balancear tu modpack.
