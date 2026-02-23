// Create: High Pressure progression (Minecraft 1.21.x)
ServerEvents.recipes(event => {
  // Coal -> Graphite Powder (milling)
  event.recipes.create.milling('kubejs:graphite_powder', 'minecraft:coal')
    .id('create_high_pressure:milling/graphite_powder_from_coal')

  // Graphite Powder -> Graphite (heated compacting)
  event.recipes.create.compacting('kubejs:graphite', 'kubejs:graphite_powder')
    .heated()
    .id('create_high_pressure:compacting/graphite_from_graphite_powder')

  // Graphite -> Diamond (superheated compacting, low chance)
  event.recipes.create.compacting([
    Item.of('minecraft:diamond').withChance(0.05)
  ], 'kubejs:graphite')
    .superheated()
    .id('create_high_pressure:compacting/diamond_from_graphite')
})
