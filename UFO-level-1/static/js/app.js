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
  
    var UserInput = d3.select("#datetime");
    var InputVal = UserInput.property("value");

    if (InputVal == "") {
      buildOriginalTable();
      return;
    }
    
    var filteredData = data.filter(data => data.datetime === InputVal);
  
    filteredData.forEach(newData => {
      var row = tbody.append("tr");
      Object.entries(newData).forEach(([_, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});
