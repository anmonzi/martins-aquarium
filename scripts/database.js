const database = {
    fish: [
        {
            name: "Shipwreck",
            species: "Discus",
            length: "8 inches",
            locations: "Bighorn River, Montana",
            food: "Brine shrimp and worms",
          },
          {
            name: "Wasabi",
            species: "Discus",
            length: "8 inches",
            locations: "Bighorn River, Montana",
            food: "Brine shrimp and worms",
          },
          {
            name: "Caviar",
            species: "Discus",
            length: "8 inches",
            locations: "Bighorn River, Montana",
            food: "Brine shrimp and worms",
          },
          {
            name: "Nemo",
            species: "Discus",
            length: "8 inches",
            locations: "Bighorn River, Montana",
            food: "Brine shrimp and worms",
          }
    ]
}

function fishDatabase(fishObjects) {
    return fishObjects;
}

export const fishData = fishDatabase(database);

