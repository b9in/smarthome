google.charts.load('current', {'packages':['corechart']});

    var btn_1 = document.getElementById('btn-1');
    var btn_2 = document.getElementById('btn-2');

    var chatArea = document.getElementById('curve_chart');
    var options = {
        chartArea: {
            left:25,
            right:10,
            width: '100%'
        },
        title: "",
        curveType: 'function',
        legend: { position: 'bottom'},
        width:'100%',
        height: 300,
        backgroundColor:'none',
        series: {
            0: {color: '#DC3912'}
        }
    };

    
    var numT = document.querySelector('#numT');
    var numH = document.querySelector('#numH');
    var ajax = new AjaxManager((result) => {
        let res = JSON.parse(result);
        
        if (res['type'] == "getState") {
            let chart = new google.visualization.LineChart(chatArea);
            let data = google.visualization.arrayToDataTable(res['data']);
            if (res['data'][0][1] == "Temperature") {
                options['series'] = {
                    0: {color: '#DC3912'}
                }
            }
            
            if (res['data'][0][1] == "Humidity") {
                options['series'] = {
                    0: {color: '#3366CC'}
                }
            }

            if (res['data'][0].length == 3) {
                options['series'] = {
                    0: {color: '#DC3912'},
                    1: {color: '#3366CC'}
                }
            }
            
            setTimeout(() => {chart.draw(data, options)}, 150);
            // chart.draw(data, options);
        }
        if (res['type'] == "getLastState") {
            numT.innerText = res['data']['temperature']  + ' °C';
            numH.innerText = res['data']['humidity'] + ' %';
        }
    });

    function callChartApi() {
        if(btn_1.value=="on" && btn_2.value =="on")
            ajax.connect('get', '/api/states/th');
        else if(btn_1.value=="on" && btn_2.value =="off")
            ajax.connect('get', '/api/states/temperature');
        else if(btn_1.value=="off" && btn_2.value =="on")
            ajax.connect('get', '/api/states/humidity');
    }

    $(window).resize(callChartApi);
    $(".gbtn").click(callChartApi);
    
    window.onload = function() {
        weatherBalloon( 1835848 );
        ajax.connect('get', '/api/states/last');
    }