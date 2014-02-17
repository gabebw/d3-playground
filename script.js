var data = [4, 8, 15, 16, 23, 42];

// Scale 0-42 into 0-420
var scale = d3.scale.linear().
  domain([0, d3.max(data)]).
  range([0, 420]);

// .enter().append('div') creates divs for each data point that did not have an
// associated <div>.
//
// Think of the enter() selection as declaring the elements you *want* to exist
// (but don't).
d3.select('.chart').
  selectAll('div').
  data(data).
  enter().append('div').
  style('width', function(d) { return scale(d) + 'px'; }).
  text(function(d){ return d; });
