// main js code for barchart
//var drawBarChart = function(drawBarChart(data, options,elements))
let drawBarChart = function(dataInput, options, elements){
  var myChart = document.getElementById("myChart").getContext('2d');
  let barChart = new Chart(myChart,{
    type:'bar',
      data:{
        lables: elements,
        datasets:{
          lable: 'Bar Chart',
          data: dataInput
      },
    options:{
      width: options[0],
      height: options[1]
    }
  }
});
}
// function drawBarChart(data, chart, labels ) {
//     myChart.data.labels.push(labels);
//     myChart.data.datasets.forEach((dataset) => {
//         dataset.data.push(data);
//     });
//     myChart.update();
//   }

console.log(drawBarChart([1,2,3,4,5],[400,400],['one','two','three','four','five']));
