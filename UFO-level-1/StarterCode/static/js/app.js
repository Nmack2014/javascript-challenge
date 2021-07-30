// from data.js
var tableData = data;

var tableBody = d3.select("tbody");

console.log(tableData);

var columns = ["datetime","city","state","country","shape","durationMinutes","comments"]


function initialData(){
    tableData.forEach(sightings =>{
    var row = tableBody.append("tr")
    columns.forEach(column => {
    if(column =="city" || column =="state" ||column == "country"){
        row.append("td").text(sightings[column].toUpperCase())
        }
    else 
        row.append("td").text(sightings[column])    
        })
    })
}

initialData()

var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

var filterButton = d3.select("#filter-btn");

var resetButton = d3.select("#reset-btn");


function filterData(){

    d3.event.preventDefault();

    var dateValue = inputDate.property("value")
    var stateValue = inputState.property("value")
    var countryValue = inputCountry.property("value")
    var shapeValue = inputShape.property("value")

    var filteredData = tableData.filter(fData => (fData.datetime == dateValue) && (fData.state == stateValue))
    }
console.log(filteredData)
  
tableBody.text("")
       
filteredData.forEach(sightings =>{
    var row = tableBody.append("tr")
    columns.forEach(column => {
        if(column =="city" || column =="state" ||column == "country"){
            row.append("td").text(sightings[column].toUpperCase())
        }
        else 
            row.append("td").text(sightings[column])    
        })
    })


filterButton.on("click",filterData)

