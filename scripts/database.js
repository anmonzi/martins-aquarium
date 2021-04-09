const fishDatabase = {
    fish: [
        {
            name: "Shipwreck",
            image: "https://www.buildyouraquarium.com/wp-content/uploads/2018/03/colorfulfish-01-compressor.jpg",
            species: "Discus",
            length: "8 inches",
            locations: "Bighorn River, Montana",
            food: "Brine shrimp and worms",
          },
          {
            name: "Wasabi",
            image: "https://previews.123rf.com/images/tan4ikk/tan4ikk1504/tan4ikk150400070/38428244-colorful-fish-in-aquarium-saltwater-world.jpg",
            species: "Discus",
            length: "8 inches",
            locations: "Bighorn River, Montana",
            food: "Brine shrimp and worms",
          },
          {
            name: "Caviar",
            image: "https://cdn.pixabay.com/photo/2019/08/09/15/30/tropical-4395272_960_720.jpg",
            species: "Discus",
            length: "8 inches",
            locations: "Bighorn River, Montana",
            food: "Brine shrimp and worms",
          },
          {
            name: "Nemo",
            image: "https://cdn.pixabay.com/photo/2014/09/25/11/05/butterflyfish-460423_960_720.jpg",
            species: "Discus",
            length: "8 inches",
            locations: "Bighorn River, Montana",
            food: "Brine shrimp and worms",
          }
    ]
}

export const getFishes = () => {
    return [...fishDatabase.fish]
};