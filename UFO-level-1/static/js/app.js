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
    
    var filterData =  ufoData;

    // use conditional (if) to filter the data by (Date)
    if (date){
        filterData = filterData.filter((row) => row.datetime === date);
        }

    
    // call function with filterData
    sightingSearch(filterData);
}

// select rows that match the date entered

d3.selectAll("#filter-btn").on("click", handleClick);
sightingSearch( ufoData);