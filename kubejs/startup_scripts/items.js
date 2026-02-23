// Create: High Pressure - custom materials
StartupEvents.registry('item', event => {
  event.create('graphite_powder')
    .displayName('Graphite Powder')
    .texture('minecraft:item/gunpowder')

  event.create('graphite')
    .displayName('Graphite')
    .texture('minecraft:item/coal')
})
