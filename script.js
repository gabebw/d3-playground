var divs = d3.selectAll('.chart div')
divs.data([40,80,150,160,230,420])

divs.
  style('width', function(d, i){
    console.log(d + 'px');
    return d + 'px';
  }).
  html(function(d) { return d; });


