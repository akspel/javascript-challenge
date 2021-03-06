// // from data.js
var tableData = data;

// // YOUR CODE HERE!
// Define table body
var tbody = d3.select("tbody");

// Build Table
console.log(data);

 function buildTable(data) {
     tbody.html("");
     data.map((dataRow)=> {
         var row = tbody.append("tr");
         Object.values(dataRow).map((value)=> {
             var cell = row.append("td");
             cell.text(value);
         });
     });
 }

// What happens when filter button is clicked
var filterEntries = d3.select("#filter-btn");
filterEntries.on("click", function () {
    // Prevent page from refreshing
    d3.event.preventDefault();
    // Select element and get node
    var datetimeElement = d3.select("#datetime");
    var citynameElement = d3.select("#city");
    var statenameElement = d3.select("#state");
    var countrynameElement = d3.select("#country");
    var shapenameElement = d3.select("#shape");
    // Get value property of inputs
    var datetimeValue = datetimeElement.property("value");
    var citynameValue = citynameElement.property("value").toLowerCase().trim();
    var statenameValue = statenameElement.property("value").toLowerCase().trim();
    var countrynameValue = countrynameElement.property("value").toLowerCase().trim();
    var shapenameValue = shapenameElement.property("value").toLowerCase().trim();
    // Create if statments for multiple filters
    if (datetimeValue != "") {
        tableData = tableData.filter(entry => entry.datetime === datetimeValue);
    }
    if (citynameValue != "") {
        tableData = tableData.filter(entry => entry.country === countrynameValue);
    }
    if (statenameValue != "") {
        tableData = tableData.filter(entry => entry.state ===statenameValue);
    }
    if (countrynameValue != "") {
        tableData = tableData.filter(entry => entry.country === countrynameValue);
    }
    if (shapenameValue != "") {
        tableData = tableData.filter(entry => entry.shape === shapenameValue);
    }
    console.log(tableData);
});

// clear button refreshes the page to reset everything
// var clearEntries = d3.select("#clear-btn");
// clearEntries.on("click", function() {
    // location.reload();
// })

buildTable()
// Create loop through all data to show everything in dataset
 function buildTable() {
     console.log(tableData);
     tableData.map(function(ufoSightings) {
         console.log(ufoSightings);
         var row = tbody.append("tr");
         Object.entries(ufoSightings).map(function([key,value]) {
             console.log(key,value);
             var cell = tbody.append("td");
             cell.text(value);
         });
     });
    }