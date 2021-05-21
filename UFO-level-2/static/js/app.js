const tableData = data;

var tbody = d3.select("tbody");

data.forEach(function(buildTable) {
  
  var row = tbody.append("tr");
  
  Object.entries(buildTable).forEach(function([key, value]) {
    var cell = row.append("td");
    cell.text(value);
  });
  
});

var button = d3.select("#filter-btn");
button.on("click",function() {
    
    d3.event.preventDefault();
    tbody.html("");
  
    var DateInput = d3.select("#datetime").property("value");
    var CityInput = d3.select("#city").property("value");
    var StateInput = d3.select("#state").property("value");
    var CountryInput = d3.select("#country").property("value");
    var ShapeInput = d3.select("#shape").property("value");

    var filteredData = data;
    
    if(DateInput) {
      filteredData = data.filter(data => data.datetime === DateInput);
    }
    if(CityInput) {
      filteredData = data.filter(data => data.city === CityInput);
    }
    if(StateInput) {
      filteredData = data.filter(data => data.state === StateInput);
    }
    if(CountryInput) {
      filteredData = data.filter(data => data.country === CountryInput);
    }
    if(ShapeInput) {
      filteredData = data.filter(data => data.shape === ShapeInput);
    }

    filteredData.forEach(function(newData) {
      var row = tbody.append("tr");
      Object.entries(newData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});

