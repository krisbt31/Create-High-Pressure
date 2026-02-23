 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/kubejs/server_scripts/create_high_pressure_recipes.js b/kubejs/server_scripts/create_high_pressure_recipes.js
new file mode 100644
index 0000000000000000000000000000000000000000..04d9c2a86c32aaf9b11c4492d964b314c39ce34f
--- /dev/null
+++ b/kubejs/server_scripts/create_high_pressure_recipes.js
@@ -0,0 +1,18 @@
+// Create: High Pressure progression (Minecraft 1.21.x)
+ServerEvents.recipes(event => {
+  // Coal -> Graphite Powder (milling)
+  event.recipes.create.milling('kubejs:graphite_powder', 'minecraft:coal')
+    .id('create_high_pressure:milling/graphite_powder_from_coal')
+
+  // Graphite Powder -> Graphite (heated compacting)
+  event.recipes.create.compacting('kubejs:graphite', 'kubejs:graphite_powder')
+    .heated()
+    .id('create_high_pressure:compacting/graphite_from_graphite_powder')
+
+  // Graphite -> Diamond (superheated compacting, low chance)
+  event.recipes.create.compacting([
+    Item.of('minecraft:diamond').withChance(0.05)
+  ], 'kubejs:graphite')
+    .superheated()
+    .id('create_high_pressure:compacting/diamond_from_graphite')
+})
 
EOF
)
