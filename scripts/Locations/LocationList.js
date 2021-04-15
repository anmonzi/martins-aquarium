// Import the function that returns a copy of the fish array
import { getLocations } from '../database.js'

export const locationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="harvestLocations">';

    // Create HTNL representations of each fish here
    for (let location of locations) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="locations">
            <div class="fish__name">${location.name}</div>
            <div><img  class="fish__img" src="${location.img}" /></div>
            <div class="fish__species">${location.harvest}</div>
        </section>
`
    }
    htmlString += `</article>`;

    return htmlString;
}

const target = document.querySelector(".dynamicLocations");

target.innerHTML = locationList();