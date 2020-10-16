import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Pie} from 'react-chartjs-2';

function PieChart() {
    const [chartData, setChartState] = useState({})
    const myChart = () => {
        let myData = [];
        let dataLabels = [];
        axios.get('http://localhost:5000/budget')
        .then(res =>{
            for(const dataObj of res.data.myBudget) {
                myData.push(parseInt(dataObj.budget))
                dataLabels.push(dataObj.title)
            }
            setChartState({
                labels: dataLabels,
                datasets: [
                    {
                        data: myData,
                        backgroundColor: [
                            '#ffcd56',
                            '#ff6384',
                            '#36a2eb',
                            '#fd6b19',
                            '#812abc',
                            '#ef87ba',
                            '#a7de09',
                        ]
                    }
                ]
            })
        })
    }


useEffect(() =>{
    myChart()

}, [])
return (
    <Pie data = {chartData}/>
);
}

export default PieChart;



