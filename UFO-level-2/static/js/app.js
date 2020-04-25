var ufoData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// create Function sightingSearch:
function sightingSearch(data){
    //  clear existing data
    tbody.html("");
    data.forEach(dataRow => {
        console.table(dataRow);
        var row = tbody.append("tr");

       console.table(Object.values(dataRow));
       Object.values(dataRow).forEach((val) => {
           var cell = row.append("td");
           cell.text(val);
       });
    });
}


// create a function that makes call to the event
function handleClick(){
  // prevent self refreshing by Defualt
    d3.event.preventDefault() 

    // Get the value property of the input element
    
    var date = d3.select("#datetime").property("value");
    var city = d3.select("#city").property("value"); //
    var state = d3.select("#state").property("value");
    var country = d3.select("#country").property("value");
    var shape = d3.select("#shape").property("value");
    var filterData =  ufoData;

    // use conditional (if) to filter the data by (Date, city, state, country, shape)
    if (date){
        filterData = filterData.filter((row) => row.datetime === date);
        }

    if (city){
        filterData = filterData.filter((row) => row.city === city);
        }
    
    if (state){
        filterData = filterData.filter((row) => row.state === state);
        }

    if (country){
       filterData = filterData.filter((row) => row.country === country);
          }

    if (shape){
        filterData = filterData.filter((row) => row.shape === shape);
            }
    

    // call function with filterData
    sightingSearch(filterData);
}

// select rows that match the date entered

d3.selectAll("#filter-btn").on("click", handleClick);
sightingSearch( ufoData);