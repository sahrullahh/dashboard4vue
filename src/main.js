import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);




library.add(fas)
Vue.component('fa', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')

require('./assets/sass/main.css');

var ctx = document.querySelector("#myChart").getContext("2d");

var chart = new Chart(ctx, {
  type: 'doughnut',
   // also try bar or other graph types

	// The data for our dataset
	data: {
    datasets: [{
      label: 'My First Dataset',
      data: [20, 90, 57, 100],
      backgroundColor: [
        '#FEB801',
        '#36D6A0',
        '#FE4D61',
        '#7255EE'
      ],
      hoverOffset: 4
    }]
	},

	// Configuration options
	options: {
    responsive: true,
    cutout: "80%",
  }
	// 	legend: {
	// 		position: 'bottom',
	// 	},
	// 	title: {
	// 		display: true,
	// 		text: 'Precipitation in Toronto'
	// 	},
	// 	scales: {
	// 		yAxes: [{
	// 			scaleLabel: {
	// 				display: true,
	// 				labelString: 'Precipitation in mm'
	// 			}
	// 		}],
	// 		xAxes: [{
	// 			scaleLabel: {
	// 				display: true,
	// 				labelString: 'Month of the Year'
	// 			}
	// 		}]
	// 	}
	// }
});
var cts = document.querySelector("#barChart").getContext("2d");

var cbar = new Chart(cts, {
  type: 'bar',
  data: {
    labels: ['1', '2', '3'],
    datasets: [{
      label: 'Candidate A Votes',
      backgroundColor: "#000080",
      data: [90,0,0]
    }, {
      label: 'Candidate B Votes2',
      backgroundColor: "#d3d3d3",
      data: [0,70,0]
    }, {
      label: 'Candidate C  Votes3',
      backgroundColor: "#add8e6",
      data: [0,0,45]
    }]
  },

  options: {
    responsive: true,
    legend: {
      display: true,
      position: 'top',
      labels: {
        fontColor: "#000080",
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});