// main js code for barchart
//var drawBarChart = function(drawBarChart(data, options,elements))

var xValCount = 0;
var data = 0;
var labels = [];
var barChart = document.getElementById('myChart');

var options = {
              scaleBeginAtZero : true,
              scales: {
                      yAxes: [{
                              ticks: {
                                beginAtZero: true
                                      }
                              }]
                        },
              scaleShowGridLines : true,
              scaleGridLineWidth : 1,
              scaleShowHorizontalLines: true,
              scaleShowVerticalLines: true,
              barShowStroke : true,
              barStrokeWidth : 2,
              barValueSpacing : 5,
              barDatasetSpacing : 1,
              legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
};

// creates text boxes for input of xData
    $('#addXVal').on('click', function () {
      xValCount = $('#xValues').val();
      $('#xValTitle').append('<p> Add X Values</p>');
      $('#xLabelTitle').append('<p> Add labels</p>');
      for (var i = 0; i < $('#xValues').val(); i++) {

        $('#xValCont').append('<input type = "text" class = "chartData" id="xData'+ i +'"></input>');
        $('#xlabelCont').append('<input type = "text" class = "chartData" id="xLabel'+ i +'"></input>');

      }
      if($('#xValues').val()>0)
          $('#xValCont').append('<input type = "button" value ="Print" id = "drawChart"> </input>')
    },
  );

$(document).on('click', '#drawChart', function(event) {
  data = {
    labels: [],
    datasets: []
  }
  for (var i = 0; i < xValCount; i++) {
    // console.log($('xData').val())
    console.log($('#xData' + i).val())

    data.labels.push($('#xLabel' + i).val());
    data.datasets.push({
                label: [$('#xLabel' + i).val()],
                backgroundColor: 'lightsteelblue',
                data: [$('#xData' + i).val()]
                })
  }
      console.log(data);
      console.log(options);
      var mybarChart = new Chart(barChart, {type: 'bar', data: data, options: options});
  });
