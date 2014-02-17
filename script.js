d3.selectAll('p').style('color', function(d, i){
  return i % 2 ? "#aaa" : "#333";
});

// Bind data to each <p> element. Only need to bind data once, and then it's
// available every other time.
d3.selectAll('p').
  data([4,8,15,16,23,42]).
  style("font-size", function(d) { return d + 'px'; });
