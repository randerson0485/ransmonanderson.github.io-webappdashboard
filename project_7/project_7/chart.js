const trafficCanvas = document.getElementById("trafficLineChart");
const dailyCanvas = document.getElementById("dailyBarChart");
const mobileCanvas = document.getElementById("dailyDoughnutChart");

// Traffic chart
var trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
      backgroundColor: "rgba(0, 123, 255, 0.5)", 
      borderWidth: 2 
    }
  ]
};
var chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true 
      }
    },
    plugins: {
      legend: {
        display: false 
      },
      animation: {
        duration: 0
      }
    },
  };
document.addEventListener("DOMContentLoaded", function() {
// Chart created
    var trafficChart = new Chart(trafficCanvas, {
        type: "line", 
        data: trafficData, 
        options: chartOptions 
    });  
});
  
// data for daily traffic bar chart
const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
};  
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
    });

    // data for daily traffic doughnut chart
    const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
        ]
        }]
        };

    const mobileOptions = {
        aspectRatio: 1.9,
        plugins: {
        legend: {
        position: 'right',
        labels: {
        boxWidth: 20,
        fontStyle: 'bold'
        }
        }
        }
        };

    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
        });