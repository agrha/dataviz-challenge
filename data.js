d3.csv("2017.csv", function(data) {
  data.map(function(d) {
    d['Happiness.Rank'] = +d['Happiness.Rank']
    d['Happiness.Score'] = +d['Happiness.Score']
    d['Whisker.high'] = +d['Whisker.high']
    d['Whisker.low'] = +d['Whisker.low']
    d['Economy..GDP.per.Capita.'] = +d['Economy..GDP.per.Capita.']
    d['Family'] = +d['Family']
    d['Health..Life.Expectancy.'] = +d['Health..Life.Expectancy.']
    d['Freedom'] = +d['Freedom']
    d['Generosity'] = +d['Generosity']
  })
  let array = []
  for(let i = 0; i < 20; i++){
    array.push(data[i])
  }
  console.log(array)
  d3.select('#body-chart').selectAll('div')
    .data(array)
    .enter()
    .append('div')
    .attr('id','country')
    .style('width', '10px')
    .style('height', function (array){
      return array['Happiness.Score'] * 25 + 'px'
    })
    
  const svg = d3.select('#chart-area').append('svg')
    .attr('width', 400)
    .attr('height', 300)
    .style('background','#cacaca')
  const yScale = d3.scaleLinear()
    .domain([0,10])
    .range([0,300])
  const colorScale = d3.scaleLinear()
    .domain([6,10])
    .range(['red','blue'])
  svg.selectAll('rect')
    .data(array)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => {
      return i * 20
    })
    .attr('y', (d) => {
      return 300 - yScale(d['Happiness.Score'])
    })
    .transition()
    .duration(2000)
    .delay(function(d, i) { return i * 100; })
    .attr('width', 10)
    .attr('height', (d) => {
      return yScale(d['Happiness.Score'])
    })
    .attr('fill', (d) => {
      return colorScale(d['Happiness.Score'])
    })
    
})



