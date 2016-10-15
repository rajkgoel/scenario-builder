declare var d3: any;
declare var c3: any;

export class Chart {
        private group: any;
 
        constructor() {}
 /*
        constructor(container: any) {
            this.init(container);
        }
 
        private init(container: any) {
            //this.group = d3.select('.chart');
        }
*/
        draw()
        {
            var scale = d3.scale.linear();
            
            scale.domain([0, 1]);
            scale.range([0, 800]);
            var axis = d3.svg.axis();
            axis.scale(scale);
            this.group.call(axis);
        }

        drawBarChart(data: number[])
        {
            var x = d3.scale.linear()
                .domain([0, d3.max(data)])
                .range([0, 420]);

            d3.select('.chart')
                .selectAll("div").remove();

            d3.select('.chart')
                .selectAll("div")
                .data(data)
                .enter().append("div")
                    .style("width", function(d: any) { return x(d) + "px"; })
                    .text(function(d: any) { return d; });
        }

        drawLinear(chartData: (string | number)[][], chartArea: string, chartType: string)
        {
            console.log(chartData);
            console.log('making chart on:' + chartArea);
            console.log('making chartType:' + chartType);
            var chart = c3.generate({
                bindto: chartArea,
                data: { 
                    x : 'x',
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

        }
 
    }