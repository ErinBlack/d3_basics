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
      .attr('fill-opacity', '.5');


    var data = [
      {
        x:10,
        y:10,
        width:5,
        height:40
      },{
        x:40,
        y:10,
        width:100,
        height:40
      }
    ];

    var svg3 = d3.select('.thirdRectangle')
      .append('svg')
      .attr('width', 200)
      .attr('height', 200);

    svg3.selectAll('rect').data(data).enter()
      .append('rect')
      .attr('x', function(d){ return d.x})
      .attr('y', function(d){ return d.y})
      .attr('fill', 'green')
      .attr('fill-opacity', '.5')
      .attr("width", function(d){ return d.width})
      .attr("height", function(d){ return d.height});


      var makeData = function(n){
        var arr = [];

        for (var i=0; i<n; i++){
          arr.push({
            x:Math.floor((Math.random() * 100) + 1),
            y:Math.floor((Math.random() * 100) + 1),
            width:Math.floor((Math.random() * 100) + 1),
            height:Math.floor((Math.random() * 100) + 1)
          })
        };

        return arr;
      }

      var rectangles = function(svg) {
        var data = makeData(2);

        var rect = svg.selectAll('rect').data(data);

        // Enter
        rect.enter().append('rect')
          .attr('test', function(d,i) {
            // Enter called 2 times only
            console.log('enter placing initial rectangle: ', i)
        });

        // Update
        rect.transition().duration(500).attr('x', function(d){ return d.x; })
            .attr('y', function(d){ return d.y; })
            .attr('width', function(d){ return d.width; })
            .attr('height', function(d){ return d.height; })
            .attr('test', function(d, i) {
              // update every data change
              console.log('updating x position to: ', d.x)
            });
        // Exit
        rect.exit().attr('test', function(d) {
          console.log('no data...')
        }).remove();
      };

      var svg = d3.select("body")
          .append("svg")
          .attr("width", 200)
          .attr("height", 200);

      rectangles(svg);

      setInterval(function(){
        rectangles(svg);
      },1000);

})();
