// Define the bundle data as a JSON object
const bundles = {
    "Spring Foraging Bundle": [
        "Wild Horseradish",
        "Daffodil",
        "Leek",
        "Dandelion"
    ],
    "Summer Foraging Bundle": [
        "Grape",
        "Spice Berry",
        "Sweet Pea"
    ],
    "Fall Foraging Bundle": [
        "Common Mushroom",
        "Wild Plum",
        "Hazelnut",
        "Blackberry"
    ],
    "Winter Foraging Bundle": [
        "Winter Root",
        "Crystal Fruit",
        "Snow Yam",
        "Crocus"
    ]
};

// Generate the HTML for the bundle tables
function generateBundleTables() {
    // Loop through each bundle
    Object.keys(bundles).forEach(function (bundleName) {
        // Get the list of items for the current bundle
        const items = bundles[bundleName];

        // Generate the HTML for the current bundle table
        const bundleTable = `
        
              <table>
                <thead>
                  <th colspan="5">${bundleName}
                    <button class="toggle-button" data-table="table-${bundleName.replace(/ /g, '-')}">Hide/Show</button>
                  </th>

                </thead>
                <tbody id="table-${bundleName.replace(/ /g, '-')}">
                <tr>
                        <th>Item</th>
                        <th>Found In</th>
                        <th>Season</th>
                        <th>Checkbox</th>
                </tr>
                  ${items.map(function (item) {
                    return `
                      <tr>
                        <td>${item}</td>
                        <td>Various</td>
                        <td>${getSeason(item)}</td>
                        <td><input type="checkbox"></td>
                      </tr>
                    `;
                }).join('')}
                </tbody>
              </table>
             
    `;

        // Add the bundle table HTML to the page
        document.querySelector('#bundle-tables').innerHTML += bundleTable;
    });

    // Attach event listeners to the toggle buttons
    document.querySelectorAll('.toggle-button').forEach(function (button) {
        button.addEventListener('click', function () {
            const table = document.querySelector(`#${button.dataset.table}`);
            table.classList.toggle('hidden');
        });
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const row = this.parentNode.parentNode;
            if (this.checked) {
                row.style.textDecoration = "line-through";
            } else {
                row.style.textDecoration = "none";
            }
        });
    });
   
}

// Determine the season for a given item
function getSeason(item) {
    switch (item) {
        case "Wild Horseradish":
        case "Daffodil":
        case "Leek":
        case "Dandelion":
            return "Spring";
        case "Grape":
        case "Spice Berry":
        case "Sweet Pea":
            return "Summer";
        case "Common Mushroom":
        case "Wild Plum":
        case "Hazelnut":
        case "Blackberry":
            return "Fall";
        case "Winter Root":
        case "Crystal Fruit":
        case "Snow Yam":
        case "Crocus":
            return "Winter";
        default:
            return "Unknown";
    }
}

// Toggle the collapsible div
function toggleCollapsible(event) {
    const collapsible = event.target.parentNode.parentNode.querySelector('div');
    collapsible.classList.toggle('hidden');

}


// Call the generateBundleTables function on page load
window.onload = function () {
    generateBundleTables();

    // Attach event listener to the collapsible button
    const collapsibleButton = document.querySelector('.collapsible-button');
    collapsibleButton.addEventListener('click', toggleCollapsible);
};
