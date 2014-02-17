var data = [4, 8, 15, 16, 23, 42];

var width = 420,
    barHeight = 20;

var scale = d3.scale.linear().
  domain([0, d3.max(data)]).
  range([0, width]);

var chart = d3.select('.chart').
  attr('width', width).
  attr('height', barHeight * data.length);

// Add <g> elements for each data point
var groupings = chart.selectAll('g').data(data).
  enter().append('g').
  attr('transform', function(d, i){
    return 'translate(0, ' + i*barHeight + ')';
  });

// Add a bar for each <g>
groupings.append('rect').
  attr('width', scale).
  attr('height', barHeight - 1);

// Label each bar
groupings.append("text").
  attr("x", function(d) { return scale(d) - 3; }).
  attr("y", barHeight / 2).
  attr("dy", ".35em").
  text(function(d) { return d; });
