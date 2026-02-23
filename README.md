# Create: High Pressure (KubeJS)

Script de progresión para Create usando KubeJS.

## Progresión

1. `Coal` → `Graphite Powder` (Milling)
2. `Graphite Powder` → `Graphite` (Compacting con calor `heated`)
3. `Graphite` → `Diamond` (Compacting con calor `superheated`, probabilidad baja 5%)

## Archivos

- `kubejs/startup_scripts/items.js`: registra `graphite_powder` y `graphite`.
- `kubejs/server_scripts/create_high_pressure_recipes.js`: recetas Create con sintaxis KubeJS actual (`create.milling`, `create.compacting`, `heated()`, `superheated()`).

## Requisitos

- Minecraft `1.21.x` (ajusta según versiones realmente disponibles de tus mods)
- **KubeJS** para tu loader
- **Create** para tu loader

> Importante: este proyecto no es un `.jar` de mod Java; es contenido de **KubeJS scripts**. Se instala dentro de la carpeta `kubejs/` de tu instancia/modpack.

---

## Cómo subirlo a GitHub

1. Crea un repositorio nuevo en GitHub (por ejemplo `create-high-pressure`).
2. Desde este proyecto:

```bash
git init
git add .
git commit -m "Initial Create High Pressure scripts"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/create-high-pressure.git
git push -u origin main
```

3. Comparte el link del repo para descargar/probar.

### Cómo descargar para probar

- Opción A: `git clone https://github.com/TU_USUARIO/create-high-pressure.git`
- Opción B: botón **Code → Download ZIP** en GitHub.

---

## Cómo probar en Fabric (primero)

1. Crea una instancia Fabric en tu launcher.
2. Instala mods compatibles de la **misma versión de Minecraft**:
   - Fabric API
   - KubeJS (Fabric)
   - Create (Fabric) / port compatible
3. Abre la carpeta de juego de esa instancia y copia esta carpeta:
   - `kubejs/startup_scripts/items.js`
   - `kubejs/server_scripts/create_high_pressure_recipes.js`
4. Inicia el juego y ejecuta:
   - `/reload`
   - Revisa recetas en JEI/REI.

---

## Después: resto de plataformas (Forge / NeoForge)

La buena noticia: **los scripts KubeJS suelen ser casi iguales** entre loaders.

Pasos:
1. Crea instancia Forge o NeoForge.
2. Instala:
   - KubeJS para ese loader
   - Create para ese loader
3. Copia la misma carpeta `kubejs/`.
4. Inicia, ejecuta `/reload`, prueba recetas.

### Recomendación de publicación por plataformas

- Usa ramas o carpetas por loader si aparecen diferencias:
  - `fabric/`
  - `forge/`
  - `neoforge/`
- Mantén un `README` con una tabla de compatibilidad por versión.

## Balance

- La receta final usa `withChance(0.05)` (5%).
- Puedes ajustar ese valor en `kubejs/server_scripts/create_high_pressure_recipes.js`.
