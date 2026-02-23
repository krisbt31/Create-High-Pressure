# Create: High Pressure (KubeJS)

Este proyecto agrega una mini progresión para **Create** usando **KubeJS**:

1. `Coal` → `Graphite Powder` (Milling)
2. `Graphite Powder` → `Graphite` (Compacting con calor `heated`)
3. `Graphite` → `Diamond` (Compacting con calor `superheated`, probabilidad baja 5%)

## Archivos

- `kubejs/startup_scripts/items.js`: registra `graphite_powder` y `graphite`.
- `kubejs/server_scripts/create_high_pressure_recipes.js`: registra las recetas de Create.

## Requisitos

- Minecraft con **KubeJS**
- Mod **Create**

## Notas

- La receta final entrega diamante con `chance: 0.05` (5%).
- Puedes ajustar el balance cambiando esa probabilidad.
