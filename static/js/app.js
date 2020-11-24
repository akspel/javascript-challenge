// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

console.log(data);

function buildTable(data) {
    tbody.html("");
    data.forEach((row)=> {
        const htmlRow = tbody.append("tr");
        Object.values(row).forEach((value)=> {
            var cell = htmlRow.append("td");
            cell.text(value);
        });
    });
}

function handleClick () {
    const date = d3.select("#datetime").property("value");
    var filterData = tableData;
    if (date) {
        filterData = filterData.filter(row=> row.datetime === date);
    }
    buildTable(filterData);
}



var filters = {};

function updateFilters () {
    var changedElement = d3.select(this).select("input");
    var elementValue = changedElement.property("value");
    var elementId = changedElement.attr("id");
    if (elementValue) {
        filters[elementId] = elementValue;
    }
    else {
        delete filters[elementId];
    }
    filterTable();

}

function filterTable() {
    var filterData = tableData;
    Object.entries(filters).forEach(([key, value])=> {
        filterData = filterData.filter(row=> row[key] === value);
    });
    buildTable(filterTable);
}

//d3.selectAll("#filter-btn").on("click", updateFilters);
d3.selectAll(".filter").on("change", updateFilters);
buildTable(tableData);



// //data.forEach(function(ufoReport) }
//     //console.log(ufoReport);
// });

// data.forEach(function(ufoReport) }
//     console.log(ufoReport);
//     var row = tbody.append("tr");
    
//     Object.defineProperties(uforeport.forEach(function([key, value]) {
//         console.log(key, value);
//     });
// });

// data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");

//     Object.defineProperties(ufoReport).forEach(function([key, value]) {
//      console.log(key, value);
//         var cell = row.append("td");
//     });    
// });

// data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
//     Object.defineProperties(ufoReport).forEach(function([key, value]) {
//         console.log(key, value);
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });

// data.forEach((uforeport) => {
//     var row = tbody.append("tr");
//     Object.defineProperties(ufoReport).forEach(([key, value]) => {
//         var cell = row.append("td");
//         cell.text(value);
//     });
// });