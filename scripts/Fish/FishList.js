// Import the function that returns a copy of the fish array
import { getFishes } from '../database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFishes();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="currentFish">';

    // Create HTNL representations of each fish here
    for (let fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish">
            <div class="fish__name">${fish.name}</div>
            <div><img  class="fish__img" src="${fish.image}" /></div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__locations">${fish.locations}</div>
            <div class="fish__food">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`;

    return htmlString;
}

const target = document.querySelector(".dynamicFishes");

target.innerHTML = FishList();