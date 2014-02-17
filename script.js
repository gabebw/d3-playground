var data = [4, 8, 15, 16, 23, 42];
// .enter().append('div') creates divs for each data point that did not have an
// associated <div>.
//
// Think of the enter() selection as declaring the elements you *want* to exist
// (but don't).
d3.select('.chart').
  selectAll('div').
  data(data).
  enter().append('div').
  style('width', function(d) { return d*10 + 'px'; }).
  text(function(d){ return d; });
