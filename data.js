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
  let top20Happiness = []
  for(let i = 0; i < 20; i++){
    top20Happiness.push(data[i])
  }
  console.log(top20Happiness)
  const svg = d3.select('#chart-area-happiness-high').append('svg')
    .attr('width', 1000)
    .attr('height', 500)
    .style('background','#cacaca')
  const yScale = d3.scaleLinear()
    .domain([0,10])
    .range([0,500])
  const colorScale = d3.scaleLinear()
    .domain([6,8])
    .range(['red','blue'])

  svg.selectAll('rect')
    .data(top20Happiness)
    .enter()
    .append('rect')
    .on('mouseover', function (d, i) {
      d3.select(this).style('fill','#bada55')
    })
    .on('mouseout', function (d, i) {
      d3.select(this).style('fill', colorScale(d['Happiness.Score']))
    })
    .transition()
    .duration(2000)
    .delay(function(d, i) { return i * 100; })
    .attr('class', 'bar')
    .attr('x', (d, i) => {
      return i * 50
    })
    .attr('y', (d) => {
      return 500 - yScale(d['Happiness.Score'])
    })
    .attr('width', 40)
    .attr('height', (d) => {
      return yScale(d['Happiness.Score'])
    })
    .text((d) => {
      return d.Country
    })
    .attr('fill', (d) => {
      return colorScale(d['Happiness.Score'])
    })

  svg.selectAll('text')
  .data(top20Happiness)
  .enter()
  .append('text')
  .transition()
  .duration(2000)
  .delay(function(d, i) { return i * 100; })
  .attr('class', 'name')
  .attr('transform', (d, i) => {
    return `translate(${20+(i * 50)}, 400) rotate (270)`  
  })
  .text((d) => {
    return d["Country"] + ` (${String(d['Happiness.Score']).substr(0,3)})`
  })
})

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
  let top20Saddest = []
  for(let i = 0; i < 20; i++){
    data.reverse()
    top20Saddest.push(data[i])
  }
  console.log(top20Saddest)
  const svg2 = d3.select('#chart-area-happiness-low').append('svg')
    .attr('width', 1000)
    .attr('height', 500)
    .attr('id','sad')
    .style('background','#cacaca')
  const yScale = d3.scaleLinear()
    .domain([0,10])
    .range([0,500])
  const colorScale = d3.scaleLinear()
    .domain([6,8])
    .range(['red','blue'])

  svg2.selectAll('#sad')
    .data(top20Saddest)
    .enter()
    .append('rect')
    .on('mouseover', function (d, i) {
      d3.select(this).style('fill','#bada55')
    })
    .on('mouseout', function (d, i) {
      d3.select(this).style('fill', colorScale(d['Happiness.Score']))
    })
    .transition()
    .duration(2000)
    .delay(function(d, i) { return i * 100; })
    .attr('class', 'bar')
    .attr('x', (d, i) => {
      return i * 50
    })
    .attr('y', (d) => {
      return 500 - yScale(d['Happiness.Score'])
    })
    .attr('width', 40)
    .attr('height', (d) => {
      return yScale(d['Happiness.Score'])
    })
    .text((d) => {
      return d.Country
    })
    .attr('fill', (d) => {
      return colorScale(d['Happiness.Score'])
    })

  svg2.selectAll('text')
  .data(top20Saddest)
  .enter()
  .append('text')
  .transition()
  .duration(2000)
  .delay(function(d, i) { return i * 100; })
  .attr('class', 'name')
  .attr('transform', (d, i) => {
    return `translate(${20+(i * 50)}, 400) rotate (270)`  
  })
  .text((d) => {
    return d["Country"] + ` (${String(d['Happiness.Score']).substr(0,3)})`
  })
})


