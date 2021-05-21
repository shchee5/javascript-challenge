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
  
    var UserInput = d3.select("#datetime");
    var InputVal = UserInput.property("value");

    var filteredData = data.filter(data => data.datetime === InputVal);
  
    filteredData.forEach(function(newData) {
      var row = tbody.append("tr");
      Object.entries(newData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});

