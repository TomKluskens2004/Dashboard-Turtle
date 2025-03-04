// VARIABLES
//Left Header Value+Unit
let LValue= "16.950".bold();
let LUnit= "tP20"
document.getElementById("LValueAnno").innerHTML = LValue + "<br><br>" + LUnit + "/ANNO";
//Right Header Value+Unit
let RValue= "465".bold();
let RUnit= "tCO₂eq"
document.getElementById("RValueAnno").innerHTML = RValue + "<br><br>" + RUnit + "/ANNO";
//Ace Energia Value
let AEV= 32
document.getElementById("aceenergia").innerHTML = AEV +"%" ;
//Ace Trasport Value
let ATV= 100
document.getElementById("acetrasporti").innerHTML = ATV +"%" ;
//Ace Rifiuti Value
let ARV= 100
document.getElementById("acerifiuti").innerHTML = ARV +"%" ;
//Ace Acqua Value
let AAV= 100
document.getElementById("aceacqua").innerHTML = AAV +"%" ;
//Values of x-as
let x1= 2019;
let x2= 2020;
let x3= 2021;
let x4= 2022;
//data of Energia
let E1= 47.14;
let E2= 48.15;
let E3= 47.65;
let E4= 45.61;
//data of Rifiuti
let R1= 31.32;
let R2= 19.18;
let R3= 35.73;
let R4= 0;
//data of Acqua
let A1= 0.1;
let A2= 0.13;
let A3= 0.13;
let A4= 0.03;
//data of Trasporti
let T1= 10.27;
let T2= 28.4;
let T3= 21.42;
let T4= 6.72;



// SIDEBAR TOGGLE



///ENERGIA///
var barChartOptions = {
  series: [{
    data: [E1, E2, E3, E4]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  title: {
    text: "Energia",
    align: 'center',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '26px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#009933'
    },
  },
  colors: [
    "#009933",
    "#009933",
    "#009933",
    "#009933",
    "#009933"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [x1, x2, x3, x4],
  },
  yaxis: {
    title: {
      text: "kWh/" + LUnit
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

///RIFIUTI///

var barChartOptions2 = {
  series: [{
    data: [R1, R2, R3, R4]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  title: {
    text: "Rifiuti",
    align: 'center',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '26px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#787878'
    },
  },
  colors: [
    "#787878",
    "#787878",
    "#787878",
    "#787878",
    "#787878"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [x1, x2, x3, x4],
  },
  yaxis: {
    title: {
      text: "kg/" + LUnit
    }
  }
};

var barChart2 = new ApexCharts(document.querySelector("#bar-chart2"), barChartOptions2);
barChart2.render();

///ACQUA///

var barChartOptions3 = {
  series: [{
    data: [A1, A2, A3, A4]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  title: {
    text: "Acqua",
    align: 'center',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '26px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#6fafe3'
    },
  },
  colors: [
    "#6fafe3",
    "#6fafe3",
    "#6fafe3",
    "#6fafe3",
    "#6fafe3"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [x1, x2, x3, x4],
  },
  yaxis: {
    title: {
      text: "m³/" + LUnit
    }
  }
};

var barChart3 = new ApexCharts(document.querySelector("#bar-chart3"), barChartOptions3);
barChart3.render();

///Trasporti

var barChartOptions4 = {
  series: [{
    data: [T1, T2, T3, T4]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  title: {
    text: "Trasporti",
    align: 'center',
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize:  '26px',
      fontWeight:  'bold',
      fontFamily:  undefined,
      color:  '#8a3258'
    },
  },
  colors: [
    "#8a3258",
    "#8a3258",
    "#8a3258",
    "#8a3258",
    "#8a3258"
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: [x1, x2, x3, x4],
  },
  yaxis: {
    title: {
      text: "l eq/"+ LUnit
    }
  }
};

var barChart4 = new ApexCharts(document.querySelector("#bar-chart4"), barChartOptions4);
barChart4.render();

// Outer Donut
var options = {
  
  series: [50, 50],
  chart: {
    
  type: 'donut',
},

colors: [
  "#C2E19D",
  "#E8A6C7",
 
],
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
stroke:{
  show:true,
  colors:['#808080'],
 },
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    
  }
}]
};

var OuterDonutchart = new ApexCharts(document.querySelector("#donut-chart"), options);
OuterDonutchart.render();
let AEV2= AEV/2;
let ATV2= ATV/2;
//inner donut
var options2 = {
  
  series: [AEV2, ATV2, 100-ATV2-AEV2],
  chart: {
    
  type: 'donut',
},
colors: [
  "#C2E19D",
  "#E8A6C7",
  "#808080",
 
],
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
stroke: {
  show: false,
  width: 0
 
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    
  }
}]
};

var OuterDonutchart2 = new ApexCharts(document.querySelector("#donut-chart2"), options2);
OuterDonutchart2.render();
//Small energia
var options3 = {
  
  series: [AEV, 100-AEV],
  chart: {
    
  type: 'donut',
},
colors: [
  "#009933",
  "#afafaf",
 
 
],
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
stroke: {
  show: false,
  width: 0
 
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    
  }
}]
};

var OuterDonutchart3 = new ApexCharts(document.querySelector("#donut-chart3"), options3);
OuterDonutchart3.render();

//Small trasporti
var options4 = {
  
  series: [ATV, 100-ATV],
  chart: {
    
  type: 'donut',
},
colors: [
  "#8a3258",
  "#afafaf",
 
 
],
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
stroke: {
  show: false,
  width: 0
 
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    
  }
}]
};

var OuterDonutchart4 = new ApexCharts(document.querySelector("#donut-chart4"), options4);
OuterDonutchart4.render();


//Small trasporti
var options5 = {
  
  series: [ARV, 100-ARV],
  chart: {
    
  type: 'donut',
},
colors: [
  "#787878",
  "#afafaf",
 
 
],
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
stroke: {
  show: false,
  width: 0
 
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    
  }
}]
};

var OuterDonutchart5 = new ApexCharts(document.querySelector("#donut-chart5"), options5);
OuterDonutchart5.render();

//Small acqua
var options6 = {
  
  series: [AAV, 100-AAV],
  chart: {
    
  type: 'donut',
},
colors: [
  "#6fafe3",
  "#afafaf",
 
 
],
dataLabels: {
  enabled: false
},
legend: {
  show: false
},
stroke: {
  show: false,
  width: 0
 
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    
  }
}]
};

var OuterDonutchart6 = new ApexCharts(document.querySelector("#donut-chart6"), options6);
OuterDonutchart6.render();