// Create: High Pressure progression
ServerEvents.recipes(event => {
  // Coal -> Graphite Powder (milling)
  event.recipes.createMilling('kubejs:graphite_powder', 'minecraft:coal')

  // Graphite Powder -> Graphite (heated compacting)
  event.custom({
    type: 'create:compacting',
    ingredients: [
      {
        item: 'kubejs:graphite_powder'
      }
    ],
    results: [
      {
        item: 'kubejs:graphite'
      }
    ],
    heatRequirement: 'heated'
  })

  // Graphite -> Diamond (superheated compacting, low chance)
  event.custom({
    type: 'create:compacting',
    ingredients: [
      {
        item: 'kubejs:graphite'
      }
    ],
    results: [
      {
        item: 'minecraft:diamond',
        chance: 0.05
      }
    ],
    heatRequirement: 'superheated'
  })
})
