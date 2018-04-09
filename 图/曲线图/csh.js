// JavaScript Document
   $(function () {
    $('#container').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: '曲线图'
        },
        subtitle: {
            text: '副标题'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: '侧标题'
            }
        },
        tooltip: {
            enabled: false,
            formatter: function() {
                return '<b>'+ this.series.name +'</b>'+this.x +': '+ this.y +'°C';
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: '黑线',
            data: [1,]
        }, {
            name: '蓝线',
            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,9.9]
        }]
    });
});