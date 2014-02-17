var width = 540,
    barHeight = 20;

var scale = d3.scale.linear().
  range([0, width]);

var chart = d3.select('.chart').
  attr('width', width);

function createChart(error, data){
  scale.domain([0,
    d3.max(data, function(d) { return d.value; })]);

  chart.attr('height', barHeight * data.length);

  // Add <g> elements for each data point
  var groupings = chart.selectAll('g').data(data).
    enter().append('g').
    attr('transform', function(d, i){
      return 'translate(0, ' + i*barHeight + ')';
    });

  // Add a bar for each <g>
  groupings.append('rect').
    attr('width', function(d){ return scale(d.value); }).
    attr('height', barHeight - 1);

  // Label each bar
  groupings.append("text").
    attr("x", function(d) { return scale(d.value) - 3; }).
    attr("y", barHeight / 2).
    attr("dy", ".35em").
    text(function(d) { return d.value + " (" + d.name + ")"; });
}

function type(d){
  d.value = +d.value; // coerce to number
  return d;
}

d3.tsv('data.tsv', type, createChart);
