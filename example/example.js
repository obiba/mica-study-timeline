(function () {

  var data = [1, 3, 4, 6, 10];
  var chart = d3.select("#vis")
      .append("svg")
      .chart("Circles")
      .width(100)
      .height(50)
      .radius(5);
  chart.draw(data);

}());