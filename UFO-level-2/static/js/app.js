const tableData = data;

var tbody = d3.select("tbody");

function buildOriginalTable() {
  data.forEach(originalData =>  {
    var row = tbody.append("tr");
    Object.entries(originalData).forEach(([_, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });  
  });
};

buildOriginalTable();

var button = d3.select("#filter-btn");

button.on("click",function() {
    
    d3.event.preventDefault();
    tbody.html("");
  
    var DateInput = d3.select("#datetime").property("value");
    var CityInput = d3.select("#city").property("value");
    var StateInput = d3.select("#state").property("value");
    var CountryInput = d3.select("#country").property("value");
    var ShapeInput = d3.select("#shape").property("value");

    if (DateInput == "" && CityInput == "" && StateInput == "" && CountryInput == "" && ShapeInput == "") {
      buildOriginalTable();
      return;
    }
    
    var filteredData = data;

    if(DateInput) {
      filteredData = filteredData.filter(data => data.datetime === DateInput);
    }
    if(CityInput) {
      filteredData = filteredData.filter(data => data.city === CityInput);
    }
    if(StateInput) {
      filteredData = filteredData.filter(data => data.state === StateInput);
    }
    if(CountryInput) {
      filteredData = filteredData.filter(data => data.country === CountryInput);
    }
    if(ShapeInput) {
      filteredData = filteredData.filter(data => data.shape === ShapeInput);
    }

    filteredData.forEach(newData => {
      var row = tbody.append("tr");
      Object.entries(newData).forEach(([_, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});

