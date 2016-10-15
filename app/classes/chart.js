"use strict";
var Chart = (function () {
    function Chart() {
    }
    /*
           constructor(container: any) {
               this.init(container);
           }
    
           private init(container: any) {
               //this.group = d3.select('.chart');
           }
   */
    Chart.prototype.draw = function () {
        var scale = d3.scale.linear();
        scale.domain([0, 1]);
        scale.range([0, 800]);
        var axis = d3.svg.axis();
        axis.scale(scale);
        this.group.call(axis);
    };
    Chart.prototype.drawBarChart = function (data) {
        var x = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, 420]);
        d3.select('.chart')
            .selectAll("div").remove();
        d3.select('.chart')
            .selectAll("div")
            .data(data)
            .enter().append("div")
            .style("width", function (d) { return x(d) + "px"; })
            .text(function (d) { return d; });
    };
    Chart.prototype.drawLinear = function (chartData, chartArea, chartType) {
        console.log(chartData);
        console.log('making chart on:' + chartArea);
        console.log('making chartType:' + chartType);
        var chart = c3.generate({
            bindto: chartArea,
            data: {
                x: 'x',
                columns: chartData,
                type: chartType,
            },
            axis: {
                x: {
                    type: 'category',
                    tick: {
                        rotate: 90,
                        multiline: false
                    },
                    height: 130
                }
            }
        });
    };
    return Chart;
}());
exports.Chart = Chart;
//# sourceMappingURL=chart.js.map