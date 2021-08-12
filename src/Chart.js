import React, { useRef, useLayoutEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

am4core.useTheme(am4themes_animated);

function Chart() {
    const chart = useRef(null);
    useLayoutEffect(() => {
        let x = am4core.create("chartdiv", am4charts.XYChart);
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth()+1;
        const lastMonth = ((month-1) >= 10 ? (month-1) : "0"+(month-1));
        const day = date.getDate();  
        const lastDate = year+"-"+lastMonth+"-"+day;
        async function fetchData(){
            const result = await axios(
                'chartData.json',
                );
                console.log(lastDate);
                x.data = (result.data).filter(item => item.date > lastDate);
            }
            fetchData();
            x.paddingRight = 20;
            
            
            let dateAxis = x.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.grid.template.location = 0;
            
            let valueAxis = x.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.minWidth = 35;
            
            let series = x.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = "date";
            series.dataFields.valueY = "value";
            series.tooltipText = "{valueY.value}";
            series.stroke = am4core.color("#ff0000"); // red
            series.strokeWidth = 2; // 2px
            x.cursor = new am4charts.XYCursor();
            
            chart.current = x;
            
            return () => {
                x.dispose();
            };
        }, []);
        return (
            <div>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
            </div>
            )
        }
        
        export default Chart
        