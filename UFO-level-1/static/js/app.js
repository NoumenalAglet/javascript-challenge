// Import from data.js
var tableData = data;

// Create references
var tbody = d3.select("tbody");
var button = d3.selectAll("#filter-btn");
var form = d3.selectAll("form");

// Create initialization function to load page on start up
function init() {
    // For each report, append table row
    tableData.forEach((report) => {
        var row = tbody.append("tr");
        // Append a cell to the row for each value
        Object.values(report).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Create filter function
function dateFilter() {
    // Stop refresh
    d3.event.preventDefault();
    // Select value from datetime
    inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    // Create filtered data from inputValue
    var filteredData = tableData.filter(sighting  => sighting.datetime === inputValue);
    // Select tbody to be appended to
    var tbody = d3.select("tbody");
    tbody.html("");
    // Append relevant fields
    filteredData.forEach((report) => {
        var row = tbody.append("tr");
        Object.values(report).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Create event handlers
button.on("click", dateFilter);
form.on("submit", dateFilter);

init();

