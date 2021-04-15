// Fish Database

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
          },
          {
            name: "Spongebob",
            image: "https://blog.humanesociety.org/wp-content/uploads/2018/04/YELLOW-TANG-FISH-ISTOCK-486110113_381372-1220x813.jpg",
            species: "Yellow Tang",
            length: "3 inches",
            locations: "Hawaii",
            food: "Brine shrimp and worms",
          },
    ]
}



// Tips Database
const tipsDatabase = {
  tips: [
    "Feed the fish everyday.",
    "Check the water and salinity once a week.",
    "Keep cats away from top of tank.",
    "Sing to the fish",
    "Do not tap on tank glass!"
  ]
}

// Locations Database
const locationDatabase = {
  location: [
    {
      name: "Cabo",
      img: "https://www.loscabosguide.com/wp-content/uploads/2017/05/arch-cabo-san-lucas-1991-105-2516-6.jpg",
      harvest: "Discus"
    },
    {
      name: "Punta Cana",
      img: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobinraven%2Ffiles%2F2019%2F06%2FMain-from-Eden-Roc-at-Cap-Cana-1200x787.jpg",
      harvest: "Discus"
    },
    {
      name: "Bora Bora",
      img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-bora-bora.jpg",
      harvest: "Discus"
    },
    {
      name: "Hawaii",
      img: "https://www.planetware.com/photos-large/SEY/best-tropical-vacations-kauai.jpg",
      harvest: "Discus"
    }
  ]
}



// Export Section
export const getFishes = () => {
    return [...fishDatabase.fish]
};

export const getTips = () => {
  return [...tipsDatabase.tips]
}

export const getLocations = () => {
  return [...locationDatabase.location]
}