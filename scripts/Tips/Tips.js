// Import the function that returns a copy of the fish array
import { getTips } from '../database.js'

export const Tips = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips();

    // Start building a string filled with HTML syntax
    let htmlString = '<aside class="tip-list">';

    // Create HTNL representations of each fish here
    for (let tip of tips) {

        // Why is there a backtick used for this string?
        htmlString += `<ul class="tips">
            <div class="fish__name">${fish.name}</div>
            <div><img  class="fish__img" src="${fish.image}" /></div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__locations">${fish.locations}</div>
            <div class="fish__food">${fish.food}</div>
        </ul>
`
    }
    htmlString += `</aside>`;

    return htmlString;
}

const target = document.querySelector(".dynamicTips");

target.innerHTML = Tips();


// Trying to automate fish tips

// Left off with creating the html to target correct location in index.html