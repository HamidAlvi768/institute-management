import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart3 = () => {
    const series = [54];
    const radialoptions = {
        chart: {
            type: 'radialBar',
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 350
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#1b5642', '#a9cd98', '#f1b44c'],
        stroke: {
            lineCap: 'round',
            dashArray: 0
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 0,
                    size: '70%',
                    background: '#f8f9fa',
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.1
                    }
                },
                track: {
                    margin: 0,
                    background: '#e9ecef',
                    strokeWidth: '97%',
                    dropShadow: {
                        enabled: true,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.1
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },
                    value: {
                        offsetY: 5,
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#10b981',
                        show: true
                    }
                }
            }
        }
    };
  return(
    <React.Fragment>
        <ReactApexChart
          options={radialoptions}
          series={series}
          type="radialBar"
          height="72"
          width= "72"
          className="apex-charts"
        />
      </React.Fragment>
  )
}

export default RadialChart3;
