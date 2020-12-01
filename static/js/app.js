// // from data.js
// var tableData = data;

// // YOUR CODE HERE!

// var tbody = d3.select("tbody");

// console.log(data);

// function buildTable(data) {
//     tbody.html("");
//     data.forEach((row)=> {
//         const htmlRow = tbody.append("tr");
//         Object.values(row).forEach((value)=> {
//             var cell = htmlRow.append("td");
//             cell.text(value);
//         });
//     });
// }

// function handleClick () {
//     const date = d3.select("#datetime").property("value");
//     var filterData = tableData;
//     if (date) {
//         filterData = filterData.filter(row=> row.datetime === date);
//     }
//     buildTable(filterData);
// }



// var filters = {};

// function updateFilters () {
//     var changedElement = d3.select(this).select("input");
//     var elementValue = changedElement.property("value");
//     var elementId = changedElement.attr("id");
//     if (elementValue) {
//         filters[elementId] = elementValue;
//     }
//     else {
//         delete filters[elementId];
//     }
//     filterTable();

// }

// function filterTable() {
//     var filterData = tableData;
//     Object.entries(filters).forEach(([key, value])=> {
//         filterData = filterData.filter(row=> row[key] === value);
//     });
//     buildTable(filterTable);
// }

// //d3.selectAll("#filter-btn").on("click", updateFilters);
// d3.selectAll(".filter").on("change", updateFilters);
// buildTable(tableData);

var filterData = dataSet;

var tbody = d3.select("tbody");

var filterEntries = d3.select("#filter-btn");
filterEntries.on("click", function () {
    d3.event.preventDefault();
    
    var datetimeElement = d3.select("#datetime");
    var citynameElement = d3.select("#cityname");
    var statenameElement = d3.select("#statename");
    var countrynameElement = d3.select("#countryname");
    var shapenameElement = d3.select("#shapename");
    
    var datetimeValue = datetimeElement.property("value");
    var citynameValue = citynameElement.property("value").toLowerCase().trim();
    var statenameValue = statenameElement.property("value").toLowerCase().trim();
    var countrynameValue = countrynameElement.property("value").toLowerCase().trim();
    var shapenameValue = shapenameElement.property("value").toLowerCase().trim();
    
    if (datetumeValue != "") {
        filterData = filterData.filter(entry => entry.datetime === datetimeValue);
    }
    if (citynameValue != "") {
        filterData = filterData.filter(entry => entry.country === countrynameValue);
    }
    if (statenameValue != "") {
        filterData = filterData.filter(entry => entry.state ===statenameValue);
    }
    if (countrynameValue != "") {
        filterData = filterData.filter(entry => entry.country === countrynameValue);
    }
    if (shapenameValue != "") {
        filterData = filterData.filter(entry => entry.shape === shapenameValue);
    }
    console.log(filterData);
    renderTable();
});

var clearEntries = d3.select("#clear-btn");
clearEntries.on("click", function () {
    location.reload();
});

renderTable();

function renderTable() {
    $("tbodyid").empty();
    console.log(filterData);
    filterData.forEach(function(ufoSightings) {
        console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key,value]) {
            console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        });0
    });
}