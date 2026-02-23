 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/kubejs/startup_scripts/items.js b/kubejs/startup_scripts/items.js
new file mode 100644
index 0000000000000000000000000000000000000000..22488fda58a133ea15e54533849712661d4c846b
--- /dev/null
+++ b/kubejs/startup_scripts/items.js
@@ -0,0 +1,10 @@
+// Create: High Pressure - custom materials
+StartupEvents.registry('item', event => {
+  event.create('graphite_powder')
+    .displayName('Graphite Powder')
+    .texture('minecraft:item/gunpowder')
+
+  event.create('graphite')
+    .displayName('Graphite')
+    .texture('minecraft:item/coal')
+})
 
EOF
)
