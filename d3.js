(function() {

// appending simple svg element to the DOM
  var svg = d3.select('.firstRectangle')
    .append('svg')
    .attr('width', 200)
    .attr('height', 200);

// append rectangle to the DOM
  svg.append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr('width', 50)
    .attr('height', 100)
    .attr('fill', 'steelblue');

    var svg2 = d3.select('.secondRectangle')
      .append('svg')
      .attr('width', 200)
      .attr('height', 200);

    svg2.selectAll('rect').data([1,2]).enter()
      .append('rect')
      .attr('x', function(d){return d*20;})
      .attr('y', function(d){return d*50;})
      .attr('width', 50)
      .attr('height', 100)
      .attr('fill', 'red')
      .attr('fill-opacity', .5);
})();
