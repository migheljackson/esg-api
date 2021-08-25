const compurl="https://country-esg-api.herokuapp.com/api/v1.0/company-ESG"
d3.json(compurl).then(function(data) {
  var c=data.result
  console.log("company records retrieved:",c.length);

var company_array = []

var msci_2016 = []
var msci_2017 = []
var msci_2018 = []
var msci_2019 = []
var msci_2020 = []
var msci_2021 = []

var votes_2010 = []
var votes_2011 = []
var votes_2012 = []
var votes_2013 = []
var votes_2014 = []
var votes_2015 = []
var votes_2016 = []
var votes_2017 = []
var votes_2018 = []
var votes_2019 = []
var votes_2020 = []

var commitments_2010 = []
var commitments_2011 = []
var commitments_2012 = []
var commitments_2013 = []
var commitments_2014 = []
var commitments_2015 = []
var commitments_2016 = []
var commitments_2017 = []
var commitments_2018 = []
var commitments_2019 = []
var commitments_2020 = []

for (var i = 0; i < c.length; i++) {

company_array[i] = c[i]["company"];

msci_2016[i] = c[i]["MSCI ESG Rating 2016"];
msci_2017[i] = c[i]["MSCI ESG Rating 2017"];
msci_2018[i] = c[i]["MSCI ESG Rating 2018"];
msci_2019[i] = c[i]["MSCI ESG Rating 2019"];
msci_2020[i] = c[i]["MSCI ESG Rating 2020"];
msci_2021[i] = c[i]["MSCI ESG Rating 2021"];

votes_2010[i] = c[i]["2010 Votes"];
votes_2011[i] = c[i]["2011 Votes"];
votes_2012[i] = c[i]["2012 Votes"];
votes_2013[i] = c[i]["2013 Votes"];
votes_2014[i] = c[i]["2014 Votes"];
votes_2015[i] = c[i]["2015 Votes"];
votes_2016[i] = c[i]["2016 Votes"];
votes_2017[i] = c[i]["2017 Votes"];
votes_2018[i] = c[i]["2018 Votes"];
votes_2019[i] = c[i]["2019 Votes"];
votes_2020[i] = c[i]["2020 Votes"];

commitments_2010[i] = c[i]["2010 Commitments"];
commitments_2011[i] = c[i]["2011 Commitments"];
commitments_2012[i] = c[i]["2012 Commitments"];
commitments_2013[i] = c[i]["2013 Commitments"];
commitments_2014[i] = c[i]["2014 Commitments"];
commitments_2015[i] = c[i]["2015 Commitments"];
commitments_2016[i] = c[i]["2016 Commitments"];
commitments_2017[i] = c[i]["2017 Commitments"];
commitments_2018[i] = c[i]["2018 Commitments"];
commitments_2019[i] = c[i]["2019 Commitments"];
commitments_2020[i] = c[i]["2020 Commitments"];

}

// var trace1 = {
//     x: votes_2018,
//     y: msci_2021,
//     name: '2021',
//     text: company_array,
//     mode: 'markers',
//     marker: {
//       size: 25

//     }

//   };

var trace2 = {
  x: [votes_2017[0]],
  y: [msci_2020[0]],
  name: '2020',
  text: company_array[0],
  mode: 'markers',
  marker: {
    size: 80

  }

};

var trace3 = {
  x: [votes_2016[0]],
  y: [msci_2019[0]],
  name: '2019',
  text: company_array[0],
  mode: 'markers',
  marker: {
    size: 80

  }

};

var trace4 = {
  x: [votes_2015[0]],
  y: [msci_2018[0]],
  name: '2018',
  text: company_array[0],
  mode: 'markers',
  marker: {
    size: 80

  }

};

var trace5 = {
  x: [votes_2014[0]],
  y: [msci_2017[0]],
  name: '2017',
  text: company_array[0],
  mode: 'markers',
  marker: {
    size: 80

  }

};



var data = [trace2, trace3, trace4, trace5];

var layout = { 
  title: {
    text:'MSCI ESG Rating vs. Company Votes and Commitments',
    font: {
      family: 'Courier New, monospace',
      size: 40
    }
  },
  xaxis: {
    title: {
      text: 'Company Votes',
      font: {
        family: 'Courier New, monospace',
        size: 30,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'MSCI Rating',
      font: {
        family: 'Courier New, monospace',
        size: 30,
        color: '#7f7f7f'
      }
    }
  }

  
};



Plotly.newPlot('companyplot', data, layout);




d3.selectAll("#selCompany").on("change", updateCompany);


function updateCompany() {
        
      var dropdownMenu = d3.select("#selCompany");
       
      var set = dropdownMenu.property("value");


if (set === 'set1') {

trace2 = {
  //x: [votes_2017[0]],
  x: [parseInt(votes_2017[0]) + parseInt(commitments_2017[0])],
  y: [msci_2020[0]],
  name: '2020',
  text: company_array[0],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[0]) + parseInt(commitments_2016[0])],
  y: [msci_2019[0]],
  name: '2019',
  text: company_array[0],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[0]) + parseInt(commitments_2015[0])],
  y: [msci_2018[0]],
  name: '2018',
  text: company_array[0],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[0]) + parseInt(commitments_2014[0])],
  y: [msci_2017[0]],
  name: '2017',
  text: company_array[0],
  mode: 'markers',
  marker: {
    size: 80

  }

};


}

else if (set === 'set2') {

trace1 = {
  x: [parseInt(votes_2018[1]) + parseInt(commitments_2018[1])],
  y: [msci_2021[1]],
  name: '2021',
  text: company_array[1],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace2 = {
  //x: [votes_2017[0]],
  x: [parseInt(votes_2017[1]) + parseInt(commitments_2017[1])],
  y: [msci_2020[1]],
  name: '2020',
  text: company_array[1],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[1]) + parseInt(commitments_2016[1])],
  y: [msci_2019[1]],
  name: '2019',
  text: company_array[1],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[1]) + parseInt(commitments_2015[1])],
  y: [msci_2018[1]],
  name: '2018',
  text: company_array[1],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[1]) + parseInt(commitments_2014[1])],
  y: [msci_2017[1]],
  name: '2017',
  text: company_array[1],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace6 = {
  x: [parseInt(votes_2013[1]) + parseInt(commitments_2013[1])],
  y: [msci_2016[1]],
  name: '2016',
  text: company_array[1],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set3') {

trace1 = {
  x: [parseInt(votes_2018[2]) + parseInt(commitments_2018[2])],
  y: [msci_2021[2]],
  name: '2021',
  text: company_array[2],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace2 = {
  //x: [votes_2017[0]],
  x: [parseInt(votes_2017[2]) + parseInt(commitments_2017[2])],
  y: [msci_2020[2]],
  name: '2020',
  text: company_array[2],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[2]) + parseInt(commitments_2016[2])],
  y: [msci_2019[2]],
  name: '2019',
  text: company_array[2],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[2]) + parseInt(commitments_2015[2])],
  y: [msci_2018[2]],
  name: '2018',
  text: company_array[2],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[2]) + parseInt(commitments_2014[2])],
  y: [msci_2017[2]],
  name: '2017',
  text: company_array[2],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace6 = {
  x: [parseInt(votes_2013[2]) + parseInt(commitments_2013[2])],
  y: [msci_2016[2]],
  name: '2016',
  text: company_array[2],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set4') {

trace1 = {
  x: [parseInt(votes_2018[3]) + parseInt(commitments_2018[3])],
  y: [msci_2021[3]],
  name: '2021',
  text: company_array[3],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace2 = {
  //x: [votes_2017[0]],
  x: [parseInt(votes_2017[3]) + parseInt(commitments_2017[3])],
  y: [msci_2020[3]],
  name: '2020',
  text: company_array[3],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[3]) + parseInt(commitments_2016[3])],
  y: [msci_2019[3]],
  name: '2019',
  text: company_array[3],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[3]) + parseInt(commitments_2015[3])],
  y: [msci_2018[3]],
  name: '2018',
  text: company_array[3],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[3]) + parseInt(commitments_2014[3])],
  y: [msci_2017[3]],
  name: '2017',
  text: company_array[3],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace6 = {
  x: [parseInt(votes_2013[3]) + parseInt(commitments_2013[3])],
  y: [msci_2016[3]],
  name: '2016',
  text: company_array[3],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set5') {

trace1 = {
  x: [parseInt(votes_2018[4]) + parseInt(commitments_2018[4])],
  y: [msci_2021[4]],
  name: '2021',
  text: company_array[4],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace2 = {

  x: [parseInt(votes_2017[4]) + parseInt(commitments_2017[4])],
  y: [msci_2020[4]],
  name: '2020',
  text: company_array[4],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[4]) + parseInt(commitments_2016[4])],
  y: [msci_2019[4]],
  name: '2019',
  text: company_array[4],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[4]) + parseInt(commitments_2015[4])],
  y: [msci_2018[4]],
  name: '2018',
  text: company_array[4],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[4]) + parseInt(commitments_2014[4])],
  y: [msci_2017[4]],
  name: '2017',
  text: company_array[4],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace6 = {
  x: [parseInt(votes_2013[4]) + parseInt(commitments_2013[4])],
  y: [msci_2016[4]],
  name: '2016',
  text: company_array[4],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set6') {

trace1 = {
  x: [parseInt(votes_2018[5]) + parseInt(commitments_2018[5])],
  y: [msci_2021[5]],
  name: '2021',
  text: company_array[5],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace2 = {

  x: [parseInt(votes_2017[5]) + parseInt(commitments_2017[5])],
  y: [msci_2020[5]],
  name: '2020',
  text: company_array[5],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[5]) + parseInt(commitments_2016[5])],
  y: [msci_2019[5]],
  name: '2019',
  text: company_array[5],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[5]) + parseInt(commitments_2015[5])],
  y: [msci_2018[5]],
  name: '2018',
  text: company_array[5],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[5]) + parseInt(commitments_2014[5])],
  y: [msci_2017[5]],
  name: '2017',
  text: company_array[5],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace6 = {
  x: [parseInt(votes_2013[5]) + parseInt(commitments_2013[5])],
  y: [msci_2016[5]],
  name: '2016',
  text: company_array[5],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set7') {

trace1 = {
  x: [parseInt(votes_2018[6]) + parseInt(commitments_2018[6])],
  y: [msci_2021[6]],
  name: '2021',
  text: company_array[6],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace2 = {
  //x: [votes_2017[0]],
  x: [parseInt(votes_2017[6]) + parseInt(commitments_2017[6])],
  y: [msci_2020[6]],
  name: '2020',
  text: company_array[6],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[6]) + parseInt(commitments_2016[6])],
  y: [msci_2019[6]],
  name: '2019',
  text: company_array[6],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[6]) + parseInt(commitments_2015[6])],
  y: [msci_2018[6]],
  name: '2018',
  text: company_array[6],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[6]) + parseInt(commitments_2014[6])],
  y: [msci_2017[6]],
  name: '2017',
  text: company_array[6],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace6 = {
  x: [parseInt(votes_2013[6]) + parseInt(commitments_2013[6])],
  y: [msci_2016[6]],
  name: '2016',
  text: company_array[6],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set8') {

trace1 = {
  x: [parseInt(votes_2018[7]) + parseInt(commitments_2018[7])],
  y: [msci_2021[7]],
  name: '2021',
  text: company_array[7],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace2 = {
  //x: [votes_2017[0]],
  x: [parseInt(votes_2017[7]) + parseInt(commitments_2017[7])],
  y: [msci_2020[7]],
  name: '2020',
  text: company_array[7],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[7]) + parseInt(commitments_2016[7])],
  y: [msci_2019[7]],
  name: '2019',
  text: company_array[7],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[7]) + parseInt(commitments_2015[7])],
  y: [msci_2018[7]],
  name: '2018',
  text: company_array[7],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[7]) + parseInt(commitments_2014[7])],
  y: [msci_2017[7]],
  name: '2017',
  text: company_array[7],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace6 = {
  x: [parseInt(votes_2013[7]) + parseInt(commitments_2013[7])],
  y: [msci_2016[7]],
  name: '2016',
  text: company_array[7],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set9') {

trace1 = {
  x: [parseInt(votes_2018[8]) + parseInt(commitments_2018[8])],
  y: [msci_2021[8]],
  name: '2021',
  text: company_array[8],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace2 = {
  //x: [votes_2017[0]],
  x: [parseInt(votes_2017[8]) + parseInt(commitments_2017[8])],
  y: [msci_2020[8]],
  name: '2020',
  text: company_array[8],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[8]) + parseInt(commitments_2016[8])],
  y: [msci_2019[8]],
  name: '2019',
  text: company_array[8],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[8]) + parseInt(commitments_2015[8])],
  y: [msci_2018[8]],
  name: '2018',
  text: company_array[8],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[8]) + parseInt(commitments_2014[8])],
  y: [msci_2017[8]],
  name: '2017',
  text: company_array[8],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace6 = {
  x: [parseInt(votes_2013[8]) + parseInt(commitments_2013[8])],
  y: [msci_2016[8]],
  name: '2016',
  text: company_array[8],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set10') {


trace2 = {
  x: [parseInt(votes_2017[9]) + parseInt(commitments_2017[9])],
  y: [msci_2020[9]],
  name: '2020',
  text: company_array[9],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[9]) + parseInt(commitments_2016[9])],
  y: [msci_2019[9]],
  name: '2019',
  text: company_array[9],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[9]) + parseInt(commitments_2015[9])],
  y: [msci_2018[9]],
  name: '2018',
  text: company_array[9],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[9]) + parseInt(commitments_2014[9])],
  y: [msci_2017[9]],
  name: '2017',
  text: company_array[9],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set11') {


trace2 = {
  x: [parseInt(votes_2017[10]) + parseInt(commitments_2017[10])],
  y: [msci_2020[10]],
  name: '2020',
  text: company_array[10],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[10]) + parseInt(commitments_2016[10])],
  y: [msci_2019[10]],
  name: '2019',
  text: company_array[10],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[10]) + parseInt(commitments_2015[10])],
  y: [msci_2018[10]],
  name: '2018',
  text: company_array[10],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[10]) + parseInt(commitments_2014[10])],
  y: [msci_2017[10]],
  name: '2017',
  text: company_array[10],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set12') {


trace2 = {
  x: [parseInt(votes_2017[11]) + parseInt(commitments_2017[11])],
  y: [msci_2020[11]],
  name: '2020',
  text: company_array[11],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[11]) + parseInt(commitments_2016[11])],
  y: [msci_2019[11]],
  name: '2019',
  text: company_array[11],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[11]) + parseInt(commitments_2015[11])],
  y: [msci_2018[11]],
  name: '2018',
  text: company_array[11],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[11]) + parseInt(commitments_2014[11])],
  y: [msci_2017[11]],
  name: '2017',
  text: company_array[11],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set13') {


trace2 = {
  x: [parseInt(votes_2017[12]) + parseInt(commitments_2017[12])],
  y: [msci_2020[12]],
  name: '2020',
  text: company_array[12],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[12]) + parseInt(commitments_2016[12])],
  y: [msci_2019[12]],
  name: '2019',
  text: company_array[12],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[12]) + parseInt(commitments_2015[12])],
  y: [msci_2018[12]],
  name: '2018',
  text: company_array[12],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[12]) + parseInt(commitments_2014[12])],
  y: [msci_2017[12]],
  name: '2017',
  text: company_array[12],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set14') {


trace2 = {
  x: [parseInt(votes_2017[13]) + parseInt(commitments_2017[13])],
  y: [msci_2020[13]],
  name: '2020',
  text: company_array[13],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[13]) + parseInt(commitments_2016[13])],
  y: [msci_2019[13]],
  name: '2019',
  text: company_array[13],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[13]) + parseInt(commitments_2015[13])],
  y: [msci_2018[13]],
  name: '2018',
  text: company_array[13],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[13]) + parseInt(commitments_2014[13])],
  y: [msci_2017[13]],
  name: '2017',
  text: company_array[13],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set15') {


trace2 = {
  x: [parseInt(votes_2017[14]) + parseInt(commitments_2017[14])],
  y: [msci_2020[14]],
  name: '2020',
  text: company_array[14],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[14]) + parseInt(commitments_2016[14])],
  y: [msci_2019[14]],
  name: '2019',
  text: company_array[14],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[14]) + parseInt(commitments_2015[14])],
  y: [msci_2018[14]],
  name: '2018',
  text: company_array[14],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[14]) + parseInt(commitments_2014[14])],
  y: [msci_2017[14]],
  name: '2017',
  text: company_array[14],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set16') {


trace2 = {
  x: [parseInt(votes_2017[15]) + parseInt(commitments_2017[15])],
  y: [msci_2020[15]],
  name: '2020',
  text: company_array[15],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[15]) + parseInt(commitments_2016[15])],
  y: [msci_2019[15]],
  name: '2019',
  text: company_array[15],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[15]) + parseInt(commitments_2015[15])],
  y: [msci_2018[15]],
  name: '2018',
  text: company_array[15],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[15]) + parseInt(commitments_2014[15])],
  y: [msci_2017[15]],
  name: '2017',
  text: company_array[15],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set17') {


trace2 = {
  x: [parseInt(votes_2017[16]) + parseInt(commitments_2017[16])],
  y: [msci_2020[16]],
  name: '2020',
  text: company_array[16],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[16]) + parseInt(commitments_2016[16])],
  y: [msci_2019[16]],
  name: '2019',
  text: company_array[16],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[16]) + parseInt(commitments_2015[16])],
  y: [msci_2018[16]],
  name: '2018',
  text: company_array[16],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[16]) + parseInt(commitments_2014[16])],
  y: [msci_2017[16]],
  name: '2017',
  text: company_array[16],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set18') {


trace2 = {
  x: [parseInt(votes_2017[17]) + parseInt(commitments_2017[17])],
  y: [msci_2020[17]],
  name: '2020',
  text: company_array[17],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[17]) + parseInt(commitments_2016[17])],
  y: [msci_2019[17]],
  name: '2019',
  text: company_array[17],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[17]) + parseInt(commitments_2015[17])],
  y: [msci_2018[17]],
  name: '2018',
  text: company_array[17],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[17]) + parseInt(commitments_2014[17])],
  y: [msci_2017[17]],
  name: '2017',
  text: company_array[17],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set19') {


trace2 = {
  x: [parseInt(votes_2017[18]) + parseInt(commitments_2017[18])],
  y: [msci_2020[18]],
  name: '2020',
  text: company_array[18],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[18]) + parseInt(commitments_2016[18])],
  y: [msci_2019[18]],
  name: '2019',
  text: company_array[18],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[18]) + parseInt(commitments_2015[18])],
  y: [msci_2018[18]],
  name: '2018',
  text: company_array[18],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[18]) + parseInt(commitments_2014[18])],
  y: [msci_2017[18]],
  name: '2017',
  text: company_array[18],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set20') {


trace2 = {
  x: [parseInt(votes_2017[19]) + parseInt(commitments_2017[19])],
  y: [msci_2020[19]],
  name: '2020',
  text: company_array[19],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[19]) + parseInt(commitments_2016[19])],
  y: [msci_2019[19]],
  name: '2019',
  text: company_array[19],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[19]) + parseInt(commitments_2015[19])],
  y: [msci_2018[19]],
  name: '2018',
  text: company_array[19],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[19]) + parseInt(commitments_2014[19])],
  y: [msci_2017[19]],
  name: '2017',
  text: company_array[19],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set21') {


trace2 = {
  x: [parseInt(votes_2017[20]) + parseInt(commitments_2017[20])],
  y: [msci_2020[20]],
  name: '2020',
  text: company_array[20],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[20]) + parseInt(commitments_2016[20])],
  y: [msci_2019[20]],
  name: '2019',
  text: company_array[20],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[20]) + parseInt(commitments_2015[20])],
  y: [msci_2018[20]],
  name: '2018',
  text: company_array[20],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[20]) + parseInt(commitments_2014[20])],
  y: [msci_2017[20]],
  name: '2017',
  text: company_array[20],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set22') {


trace2 = {
  x: [parseInt(votes_2017[21]) + parseInt(commitments_2017[21])],
  y: [msci_2020[21]],
  name: '2020',
  text: company_array[21],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[21]) + parseInt(commitments_2016[21])],
  y: [msci_2019[21]],
  name: '2019',
  text: company_array[21],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[21]) + parseInt(commitments_2015[21])],
  y: [msci_2018[21]],
  name: '2018',
  text: company_array[21],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[21]) + parseInt(commitments_2014[21])],
  y: [msci_2017[21]],
  name: '2017',
  text: company_array[21],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set23') {


trace2 = {
  x: [parseInt(votes_2017[22]) + parseInt(commitments_2017[22])],
  y: [msci_2020[22]],
  name: '2020',
  text: company_array[22],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[22]) + parseInt(commitments_2016[22])],
  y: [msci_2019[22]],
  name: '2019',
  text: company_array[22],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[22]) + parseInt(commitments_2015[22])],
  y: [msci_2018[22]],
  name: '2018',
  text: company_array[22],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[22]) + parseInt(commitments_2014[22])],
  y: [msci_2017[22]],
  name: '2017',
  text: company_array[22],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set24') {


trace2 = {
  x: [parseInt(votes_2017[23]) + parseInt(commitments_2017[23])],
  y: [msci_2020[23]],
  name: '2020',
  text: company_array[23],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[23]) + parseInt(commitments_2016[23])],
  y: [msci_2019[23]],
  name: '2019',
  text: company_array[23],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[23]) + parseInt(commitments_2015[23])],
  y: [msci_2018[23]],
  name: '2018',
  text: company_array[23],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[23]) + parseInt(commitments_2014[23])],
  y: [msci_2017[23]],
  name: '2017',
  text: company_array[23],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set25') {


trace2 = {
  x: [parseInt(votes_2017[24]) + parseInt(commitments_2017[24])],
  y: [msci_2020[24]],
  name: '2020',
  text: company_array[24],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[24]) + parseInt(commitments_2016[24])],
  y: [msci_2019[24]],
  name: '2019',
  text: company_array[24],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[24]) + parseInt(commitments_2015[24])],
  y: [msci_2018[24]],
  name: '2018',
  text: company_array[24],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[24]) + parseInt(commitments_2014[24])],
  y: [msci_2017[24]],
  name: '2017',
  text: company_array[24],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set26') {


trace2 = {
  x: [parseInt(votes_2017[25]) + parseInt(commitments_2017[25])],
  y: [msci_2020[25]],
  name: '2020',
  text: company_array[25],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[25]) + parseInt(commitments_2016[25])],
  y: [msci_2019[25]],
  name: '2019',
  text: company_array[25],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[25]) + parseInt(commitments_2015[25])],
  y: [msci_2018[25]],
  name: '2018',
  text: company_array[25],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[25]) + parseInt(commitments_2014[25])],
  y: [msci_2017[25]],
  name: '2017',
  text: company_array[25],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set27') {


trace2 = {
  x: [parseInt(votes_2017[26]) + parseInt(commitments_2017[26])],
  y: [msci_2020[26]],
  name: '2020',
  text: company_array[26],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[26]) + parseInt(commitments_2016[26])],
  y: [msci_2019[26]],
  name: '2019',
  text: company_array[26],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[26]) + parseInt(commitments_2015[26])],
  y: [msci_2018[26]],
  name: '2018',
  text: company_array[26],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[26]) + parseInt(commitments_2014[26])],
  y: [msci_2017[26]],
  name: '2017',
  text: company_array[26],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set28') {


trace2 = {
  x: [parseInt(votes_2017[27]) + parseInt(commitments_2017[27])],
  y: [msci_2020[27]],
  name: '2020',
  text: company_array[27],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[27]) + parseInt(commitments_2016[27])],
  y: [msci_2019[27]],
  name: '2019',
  text: company_array[27],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[27]) + parseInt(commitments_2015[27])],
  y: [msci_2018[27]],
  name: '2018',
  text: company_array[27],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[27]) + parseInt(commitments_2014[27])],
  y: [msci_2017[27]],
  name: '2017',
  text: company_array[27],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set29') {


trace2 = {
  x: [parseInt(votes_2017[28]) + parseInt(commitments_2017[28])],
  y: [msci_2020[28]],
  name: '2020',
  text: company_array[28],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[28]) + parseInt(commitments_2016[28])],
  y: [msci_2019[28]],
  name: '2019',
  text: company_array[28],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[28]) + parseInt(commitments_2015[28])],
  y: [msci_2018[28]],
  name: '2018',
  text: company_array[28],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[28]) + parseInt(commitments_2014[28])],
  y: [msci_2017[28]],
  name: '2017',
  text: company_array[28],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set30') {


trace2 = {
  x: [parseInt(votes_2017[29]) + parseInt(commitments_2017[29])],
  y: [msci_2020[29]],
  name: '2020',
  text: company_array[29],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[29]) + parseInt(commitments_2016[29])],
  y: [msci_2019[29]],
  name: '2019',
  text: company_array[29],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[29]) + parseInt(commitments_2015[29])],
  y: [msci_2018[29]],
  name: '2018',
  text: company_array[29],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[29]) + parseInt(commitments_2014[29])],
  y: [msci_2017[29]],
  name: '2017',
  text: company_array[29],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set31') {


trace2 = {
  x: [parseInt(votes_2017[30]) + parseInt(commitments_2017[30])],
  y: [msci_2020[30]],
  name: '2020',
  text: company_array[30],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[30]) + parseInt(commitments_2016[30])],
  y: [msci_2019[30]],
  name: '2019',
  text: company_array[30],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[30]) + parseInt(commitments_2015[30])],
  y: [msci_2018[30]],
  name: '2018',
  text: company_array[30],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[30]) + parseInt(commitments_2014[30])],
  y: [msci_2017[30]],
  name: '2017',
  text: company_array[30],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set32') {


trace2 = {
  x: [parseInt(votes_2017[31]) + parseInt(commitments_2017[31])],
  y: [msci_2020[31]],
  name: '2020',
  text: company_array[31],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[31]) + parseInt(commitments_2016[31])],
  y: [msci_2019[31]],
  name: '2019',
  text: company_array[31],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[31]) + parseInt(commitments_2015[31])],
  y: [msci_2018[31]],
  name: '2018',
  text: company_array[31],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[31]) + parseInt(commitments_2014[31])],
  y: [msci_2017[31]],
  name: '2017',
  text: company_array[31],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set33') {


trace2 = {
  x: [parseInt(votes_2017[32]) + parseInt(commitments_2017[32])],
  y: [msci_2020[32]],
  name: '2020',
  text: company_array[32],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[32]) + parseInt(commitments_2016[32])],
  y: [msci_2019[32]],
  name: '2019',
  text: company_array[32],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[32]) + parseInt(commitments_2015[32])],
  y: [msci_2018[32]],
  name: '2018',
  text: company_array[32],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[32]) + parseInt(commitments_2014[32])],
  y: [msci_2017[32]],
  name: '2017',
  text: company_array[32],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set34') {


trace2 = {
  x: [parseInt(votes_2017[33]) + parseInt(commitments_2017[33])],
  y: [msci_2020[33]],
  name: '2020',
  text: company_array[33],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[33]) + parseInt(commitments_2016[33])],
  y: [msci_2019[33]],
  name: '2019',
  text: company_array[33],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[33]) + parseInt(commitments_2015[33])],
  y: [msci_2018[33]],
  name: '2018',
  text: company_array[33],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[33]) + parseInt(commitments_2014[33])],
  y: [msci_2017[33]],
  name: '2017',
  text: company_array[33],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set35') {


trace2 = {
  x: [parseInt(votes_2017[34]) + parseInt(commitments_2017[34])],
  y: [msci_2020[34]],
  name: '2020',
  text: company_array[34],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[34]) + parseInt(commitments_2016[34])],
  y: [msci_2019[34]],
  name: '2019',
  text: company_array[34],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[34]) + parseInt(commitments_2015[34])],
  y: [msci_2018[34]],
  name: '2018',
  text: company_array[34],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[34]) + parseInt(commitments_2014[34])],
  y: [msci_2017[34]],
  name: '2017',
  text: company_array[34],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set36') {


trace2 = {
  x: [parseInt(votes_2017[35]) + parseInt(commitments_2017[35])],
  y: [msci_2020[35]],
  name: '2020',
  text: company_array[35],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[35]) + parseInt(commitments_2016[35])],
  y: [msci_2019[35]],
  name: '2019',
  text: company_array[35],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[35]) + parseInt(commitments_2015[35])],
  y: [msci_2018[35]],
  name: '2018',
  text: company_array[35],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[35]) + parseInt(commitments_2014[35])],
  y: [msci_2017[35]],
  name: '2017',
  text: company_array[35],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set37') {


trace2 = {
  x: [parseInt(votes_2017[36]) + parseInt(commitments_2017[36])],
  y: [msci_2020[36]],
  name: '2020',
  text: company_array[36],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[36]) + parseInt(commitments_2016[36])],
  y: [msci_2019[36]],
  name: '2019',
  text: company_array[36],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[36]) + parseInt(commitments_2015[36])],
  y: [msci_2018[36]],
  name: '2018',
  text: company_array[36],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[36]) + parseInt(commitments_2014[36])],
  y: [msci_2017[36]],
  name: '2017',
  text: company_array[36],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set38') {


trace2 = {
  x: [parseInt(votes_2017[37]) + parseInt(commitments_2017[37])],
  y: [msci_2020[37]],
  name: '2020',
  text: company_array[37],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[37]) + parseInt(commitments_2016[37])],
  y: [msci_2019[37]],
  name: '2019',
  text: company_array[37],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[37]) + parseInt(commitments_2015[37])],
  y: [msci_2018[37]],
  name: '2018',
  text: company_array[37],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[37]) + parseInt(commitments_2014[37])],
  y: [msci_2017[37]],
  name: '2017',
  text: company_array[37],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set39') {


trace2 = {
  x: [parseInt(votes_2017[38]) + parseInt(commitments_2017[38])],
  y: [msci_2020[38]],
  name: '2020',
  text: company_array[38],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[38]) + parseInt(commitments_2016[38])],
  y: [msci_2019[38]],
  name: '2019',
  text: company_array[38],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[38]) + parseInt(commitments_2015[38])],
  y: [msci_2018[38]],
  name: '2018',
  text: company_array[38],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[38]) + parseInt(commitments_2014[38])],
  y: [msci_2017[38]],
  name: '2017',
  text: company_array[38],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set40') {


trace2 = {
  x: [parseInt(votes_2017[39]) + parseInt(commitments_2017[39])],
  y: [msci_2020[39]],
  name: '2020',
  text: company_array[39],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[39]) + parseInt(commitments_2016[39])],
  y: [msci_2019[39]],
  name: '2019',
  text: company_array[39],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[39]) + parseInt(commitments_2015[39])],
  y: [msci_2018[39]],
  name: '2018',
  text: company_array[39],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[39]) + parseInt(commitments_2014[39])],
  y: [msci_2017[39]],
  name: '2017',
  text: company_array[39],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set41') {


trace2 = {
  x: [parseInt(votes_2017[40]) + parseInt(commitments_2017[40])],
  y: [msci_2020[40]],
  name: '2020',
  text: company_array[40],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[40]) + parseInt(commitments_2016[40])],
  y: [msci_2019[40]],
  name: '2019',
  text: company_array[40],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[40]) + parseInt(commitments_2015[40])],
  y: [msci_2018[40]],
  name: '2018',
  text: company_array[40],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[40]) + parseInt(commitments_2014[40])],
  y: [msci_2017[40]],
  name: '2017',
  text: company_array[40],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set42') {


trace2 = {
  x: [parseInt(votes_2017[41]) + parseInt(commitments_2017[41])],
  y: [msci_2020[41]],
  name: '2020',
  text: company_array[41],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[41]) + parseInt(commitments_2016[41])],
  y: [msci_2019[41]],
  name: '2019',
  text: company_array[41],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[41]) + parseInt(commitments_2015[41])],
  y: [msci_2018[41]],
  name: '2018',
  text: company_array[41],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[41]) + parseInt(commitments_2014[41])],
  y: [msci_2017[41]],
  name: '2017',
  text: company_array[41],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set43') {


trace2 = {
  x: [parseInt(votes_2017[42]) + parseInt(commitments_2017[42])],
  y: [msci_2020[42]],
  name: '2020',
  text: company_array[42],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[42]) + parseInt(commitments_2016[42])],
  y: [msci_2019[42]],
  name: '2019',
  text: company_array[42],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[42]) + parseInt(commitments_2015[42])],
  y: [msci_2018[42]],
  name: '2018',
  text: company_array[42],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[42]) + parseInt(commitments_2014[42])],
  y: [msci_2017[42]],
  name: '2017',
  text: company_array[42],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set44') {


trace2 = {
  x: [parseInt(votes_2017[43]) + parseInt(commitments_2017[43])],
  y: [msci_2020[43]],
  name: '2020',
  text: company_array[43],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[43]) + parseInt(commitments_2016[43])],
  y: [msci_2019[43]],
  name: '2019',
  text: company_array[43],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[43]) + parseInt(commitments_2015[43])],
  y: [msci_2018[43]],
  name: '2018',
  text: company_array[43],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[43]) + parseInt(commitments_2014[43])],
  y: [msci_2017[43]],
  name: '2017',
  text: company_array[43],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set45') {


trace2 = {
  x: [parseInt(votes_2017[44]) + parseInt(commitments_2017[44])],
  y: [msci_2020[44]],
  name: '2020',
  text: company_array[44],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[44]) + parseInt(commitments_2016[44])],
  y: [msci_2019[44]],
  name: '2019',
  text: company_array[44],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[44]) + parseInt(commitments_2015[44])],
  y: [msci_2018[44]],
  name: '2018',
  text: company_array[44],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[44]) + parseInt(commitments_2014[44])],
  y: [msci_2017[44]],
  name: '2017',
  text: company_array[44],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set46') {


trace2 = {
  x: [parseInt(votes_2017[45]) + parseInt(commitments_2017[45])],
  y: [msci_2020[45]],
  name: '2020',
  text: company_array[45],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[45]) + parseInt(commitments_2016[45])],
  y: [msci_2019[45]],
  name: '2019',
  text: company_array[45],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[45]) + parseInt(commitments_2015[45])],
  y: [msci_2018[45]],
  name: '2018',
  text: company_array[45],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[45]) + parseInt(commitments_2014[45])],
  y: [msci_2017[45]],
  name: '2017',
  text: company_array[45],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set47') {


trace2 = {
  x: [parseInt(votes_2017[46]) + parseInt(commitments_2017[46])],
  y: [msci_2020[46]],
  name: '2020',
  text: company_array[46],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[46]) + parseInt(commitments_2016[46])],
  y: [msci_2019[46]],
  name: '2019',
  text: company_array[46],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[46]) + parseInt(commitments_2015[46])],
  y: [msci_2018[46]],
  name: '2018',
  text: company_array[46],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[46]) + parseInt(commitments_2014[46])],
  y: [msci_2017[46]],
  name: '2017',
  text: company_array[46],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set48') {


trace2 = {
  x: [parseInt(votes_2017[47]) + parseInt(commitments_2017[47])],
  y: [msci_2020[47]],
  name: '2020',
  text: company_array[47],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[47]) + parseInt(commitments_2016[47])],
  y: [msci_2019[47]],
  name: '2019',
  text: company_array[47],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[47]) + parseInt(commitments_2015[47])],
  y: [msci_2018[47]],
  name: '2018',
  text: company_array[47],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[47]) + parseInt(commitments_2014[47])],
  y: [msci_2017[47]],
  name: '2017',
  text: company_array[47],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set49') {


trace2 = {
  x: [parseInt(votes_2017[48]) + parseInt(commitments_2017[48])],
  y: [msci_2020[48]],
  name: '2020',
  text: company_array[48],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[48]) + parseInt(commitments_2016[48])],
  y: [msci_2019[48]],
  name: '2019',
  text: company_array[48],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[48]) + parseInt(commitments_2015[48])],
  y: [msci_2018[48]],
  name: '2018',
  text: company_array[48],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[48]) + parseInt(commitments_2014[48])],
  y: [msci_2017[48]],
  name: '2017',
  text: company_array[48],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set50') {


trace2 = {
  x: [parseInt(votes_2017[49]) + parseInt(commitments_2017[49])],
  y: [msci_2020[49]],
  name: '2020',
  text: company_array[49],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[49]) + parseInt(commitments_2016[49])],
  y: [msci_2019[49]],
  name: '2019',
  text: company_array[49],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[49]) + parseInt(commitments_2015[49])],
  y: [msci_2018[49]],
  name: '2018',
  text: company_array[49],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[49]) + parseInt(commitments_2014[49])],
  y: [msci_2017[49]],
  name: '2017',
  text: company_array[49],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set51') {


trace2 = {
  x: [parseInt(votes_2017[50]) + parseInt(commitments_2017[50])],
  y: [msci_2020[50]],
  name: '2020',
  text: company_array[50],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[50]) + parseInt(commitments_2016[50])],
  y: [msci_2019[50]],
  name: '2019',
  text: company_array[50],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[50]) + parseInt(commitments_2015[50])],
  y: [msci_2018[50]],
  name: '2018',
  text: company_array[50],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[50]) + parseInt(commitments_2014[50])],
  y: [msci_2017[50]],
  name: '2017',
  text: company_array[50],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set52') {


trace2 = {
  x: [parseInt(votes_2017[51]) + parseInt(commitments_2017[51])],
  y: [msci_2020[51]],
  name: '2020',
  text: company_array[51],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[51]) + parseInt(commitments_2016[51])],
  y: [msci_2019[51]],
  name: '2019',
  text: company_array[51],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[51]) + parseInt(commitments_2015[51])],
  y: [msci_2018[51]],
  name: '2018',
  text: company_array[51],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[51]) + parseInt(commitments_2014[51])],
  y: [msci_2017[51]],
  name: '2017',
  text: company_array[51],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set53') {


trace2 = {
  x: [parseInt(votes_2017[52]) + parseInt(commitments_2017[52])],
  y: [msci_2020[52]],
  name: '2020',
  text: company_array[52],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[52]) + parseInt(commitments_2016[52])],
  y: [msci_2019[52]],
  name: '2019',
  text: company_array[52],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[52]) + parseInt(commitments_2015[52])],
  y: [msci_2018[52]],
  name: '2018',
  text: company_array[52],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[52]) + parseInt(commitments_2014[52])],
  y: [msci_2017[52]],
  name: '2017',
  text: company_array[52],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set54') {


trace2 = {
  x: [parseInt(votes_2017[53]) + parseInt(commitments_2017[53])],
  y: [msci_2020[53]],
  name: '2020',
  text: company_array[53],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[53]) + parseInt(commitments_2016[53])],
  y: [msci_2019[53]],
  name: '2019',
  text: company_array[53],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[53]) + parseInt(commitments_2015[53])],
  y: [msci_2018[53]],
  name: '2018',
  text: company_array[53],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[53]) + parseInt(commitments_2014[53])],
  y: [msci_2017[53]],
  name: '2017',
  text: company_array[53],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set55') {


trace2 = {
  x: [parseInt(votes_2017[54]) + parseInt(commitments_2017[54])],
  y: [msci_2020[54]],
  name: '2020',
  text: company_array[54],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[54]) + parseInt(commitments_2016[54])],
  y: [msci_2019[54]],
  name: '2019',
  text: company_array[54],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[54]) + parseInt(commitments_2015[54])],
  y: [msci_2018[54]],
  name: '2018',
  text: company_array[54],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[54]) + parseInt(commitments_2014[54])],
  y: [msci_2017[54]],
  name: '2017',
  text: company_array[54],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set56') {


trace2 = {
  x: [parseInt(votes_2017[55]) + parseInt(commitments_2017[55])],
  y: [msci_2020[55]],
  name: '2020',
  text: company_array[55],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[55]) + parseInt(commitments_2016[55])],
  y: [msci_2019[55]],
  name: '2019',
  text: company_array[55],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[55]) + parseInt(commitments_2015[55])],
  y: [msci_2018[55]],
  name: '2018',
  text: company_array[55],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[55]) + parseInt(commitments_2014[55])],
  y: [msci_2017[55]],
  name: '2017',
  text: company_array[55],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set57') {


trace2 = {
  x: [parseInt(votes_2017[56]) + parseInt(commitments_2017[56])],
  y: [msci_2020[56]],
  name: '2020',
  text: company_array[56],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[56]) + parseInt(commitments_2016[56])],
  y: [msci_2019[56]],
  name: '2019',
  text: company_array[56],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[56]) + parseInt(commitments_2015[56])],
  y: [msci_2018[56]],
  name: '2018',
  text: company_array[56],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[56]) + parseInt(commitments_2014[56])],
  y: [msci_2017[56]],
  name: '2017',
  text: company_array[56],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set58') {


trace2 = {
  x: [parseInt(votes_2017[57]) + parseInt(commitments_2017[57])],
  y: [msci_2020[57]],
  name: '2020',
  text: company_array[57],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[57]) + parseInt(commitments_2016[57])],
  y: [msci_2019[57]],
  name: '2019',
  text: company_array[57],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[57]) + parseInt(commitments_2015[57])],
  y: [msci_2018[57]],
  name: '2018',
  text: company_array[57],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[57]) + parseInt(commitments_2014[57])],
  y: [msci_2017[57]],
  name: '2017',
  text: company_array[57],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set59') {


trace2 = {
  x: [parseInt(votes_2017[58]) + parseInt(commitments_2017[58])],
  y: [msci_2020[58]],
  name: '2020',
  text: company_array[58],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[58]) + parseInt(commitments_2016[58])],
  y: [msci_2019[58]],
  name: '2019',
  text: company_array[58],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[58]) + parseInt(commitments_2015[58])],
  y: [msci_2018[58]],
  name: '2018',
  text: company_array[58],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[58]) + parseInt(commitments_2014[58])],
  y: [msci_2017[58]],
  name: '2017',
  text: company_array[58],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set60') {


trace2 = {
  x: [parseInt(votes_2017[59]) + parseInt(commitments_2017[59])],
  y: [msci_2020[59]],
  name: '2020',
  text: company_array[59],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[59]) + parseInt(commitments_2016[59])],
  y: [msci_2019[59]],
  name: '2019',
  text: company_array[59],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[59]) + parseInt(commitments_2015[59])],
  y: [msci_2018[59]],
  name: '2018',
  text: company_array[59],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[59]) + parseInt(commitments_2014[59])],
  y: [msci_2017[59]],
  name: '2017',
  text: company_array[59],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set61') {


trace2 = {
  x: [parseInt(votes_2017[60]) + parseInt(commitments_2017[60])],
  y: [msci_2020[60]],
  name: '2020',
  text: company_array[60],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[60]) + parseInt(commitments_2016[60])],
  y: [msci_2019[60]],
  name: '2019',
  text: company_array[60],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[60]) + parseInt(commitments_2015[60])],
  y: [msci_2018[60]],
  name: '2018',
  text: company_array[60],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[60]) + parseInt(commitments_2014[60])],
  y: [msci_2017[60]],
  name: '2017',
  text: company_array[60],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set62') {


trace2 = {
  x: [parseInt(votes_2017[61]) + parseInt(commitments_2017[61])],
  y: [msci_2020[61]],
  name: '2020',
  text: company_array[61],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[61]) + parseInt(commitments_2016[61])],
  y: [msci_2019[61]],
  name: '2019',
  text: company_array[61],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[61]) + parseInt(commitments_2015[61])],
  y: [msci_2018[61]],
  name: '2018',
  text: company_array[61],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[61]) + parseInt(commitments_2014[61])],
  y: [msci_2017[61]],
  name: '2017',
  text: company_array[61],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set63') {


trace2 = {
  x: [parseInt(votes_2017[62]) + parseInt(commitments_2017[62])],
  y: [msci_2020[62]],
  name: '2020',
  text: company_array[62],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[62]) + parseInt(commitments_2016[62])],
  y: [msci_2019[62]],
  name: '2019',
  text: company_array[62],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[62]) + parseInt(commitments_2015[62])],
  y: [msci_2018[62]],
  name: '2018',
  text: company_array[62],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[62]) + parseInt(commitments_2014[62])],
  y: [msci_2017[62]],
  name: '2017',
  text: company_array[62],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set64') {


trace2 = {
  x: [parseInt(votes_2017[63]) + parseInt(commitments_2017[63])],
  y: [msci_2020[63]],
  name: '2020',
  text: company_array[63],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[63]) + parseInt(commitments_2016[63])],
  y: [msci_2019[63]],
  name: '2019',
  text: company_array[63],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[63]) + parseInt(commitments_2015[63])],
  y: [msci_2018[63]],
  name: '2018',
  text: company_array[63],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[63]) + parseInt(commitments_2014[63])],
  y: [msci_2017[63]],
  name: '2017',
  text: company_array[63],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set65') {


trace2 = {
  x: [parseInt(votes_2017[64]) + parseInt(commitments_2017[64])],
  y: [msci_2020[64]],
  name: '2020',
  text: company_array[64],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[64]) + parseInt(commitments_2016[64])],
  y: [msci_2019[64]],
  name: '2019',
  text: company_array[64],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[64]) + parseInt(commitments_2015[64])],
  y: [msci_2018[64]],
  name: '2018',
  text: company_array[64],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[64]) + parseInt(commitments_2014[64])],
  y: [msci_2017[64]],
  name: '2017',
  text: company_array[64],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set66') {


trace2 = {
  x: [parseInt(votes_2017[65]) + parseInt(commitments_2017[65])],
  y: [msci_2020[65]],
  name: '2020',
  text: company_array[65],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[65]) + parseInt(commitments_2016[65])],
  y: [msci_2019[65]],
  name: '2019',
  text: company_array[65],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[65]) + parseInt(commitments_2015[65])],
  y: [msci_2018[65]],
  name: '2018',
  text: company_array[65],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[65]) + parseInt(commitments_2014[65])],
  y: [msci_2017[65]],
  name: '2017',
  text: company_array[65],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set67') {


trace2 = {
  x: [parseInt(votes_2017[66]) + parseInt(commitments_2017[66])],
  y: [msci_2020[66]],
  name: '2020',
  text: company_array[66],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[66]) + parseInt(commitments_2016[66])],
  y: [msci_2019[66]],
  name: '2019',
  text: company_array[66],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[66]) + parseInt(commitments_2015[66])],
  y: [msci_2018[66]],
  name: '2018',
  text: company_array[66],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[66]) + parseInt(commitments_2014[66])],
  y: [msci_2017[66]],
  name: '2017',
  text: company_array[66],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set68') {


trace2 = {
  x: [parseInt(votes_2017[67]) + parseInt(commitments_2017[67])],
  y: [msci_2020[67]],
  name: '2020',
  text: company_array[67],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[67]) + parseInt(commitments_2016[67])],
  y: [msci_2019[67]],
  name: '2019',
  text: company_array[67],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[67]) + parseInt(commitments_2015[67])],
  y: [msci_2018[67]],
  name: '2018',
  text: company_array[67],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[67]) + parseInt(commitments_2014[67])],
  y: [msci_2017[67]],
  name: '2017',
  text: company_array[67],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}


else if (set === 'set69') {


trace2 = {
  x: [parseInt(votes_2017[68]) + parseInt(commitments_2017[68])],
  y: [msci_2020[68]],
  name: '2020',
  text: company_array[68],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[68]) + parseInt(commitments_2016[68])],
  y: [msci_2019[68]],
  name: '2019',
  text: company_array[68],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[68]) + parseInt(commitments_2015[68])],
  y: [msci_2018[68]],
  name: '2018',
  text: company_array[68],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[68]) + parseInt(commitments_2014[68])],
  y: [msci_2017[68]],
  name: '2017',
  text: company_array[68],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set70') {


trace2 = {
  x: [parseInt(votes_2017[69]) + parseInt(commitments_2017[69])],
  y: [msci_2020[69]],
  name: '2020',
  text: company_array[69],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[69]) + parseInt(commitments_2016[69])],
  y: [msci_2019[69]],
  name: '2019',
  text: company_array[69],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[69]) + parseInt(commitments_2015[69])],
  y: [msci_2018[69]],
  name: '2018',
  text: company_array[69],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[69]) + parseInt(commitments_2014[69])],
  y: [msci_2017[69]],
  name: '2017',
  text: company_array[69],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set71') {


trace2 = {
  x: [parseInt(votes_2017[70]) + parseInt(commitments_2017[70])],
  y: [msci_2020[70]],
  name: '2020',
  text: company_array[70],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[70]) + parseInt(commitments_2016[70])],
  y: [msci_2019[70]],
  name: '2019',
  text: company_array[70],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[70]) + parseInt(commitments_2015[70])],
  y: [msci_2018[70]],
  name: '2018',
  text: company_array[70],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[70]) + parseInt(commitments_2014[70])],
  y: [msci_2017[70]],
  name: '2017',
  text: company_array[70],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set72') {


trace2 = {
  x: [parseInt(votes_2017[71]) + parseInt(commitments_2017[71])],
  y: [msci_2020[71]],
  name: '2020',
  text: company_array[71],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[71]) + parseInt(commitments_2016[71])],
  y: [msci_2019[71]],
  name: '2019',
  text: company_array[71],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[71]) + parseInt(commitments_2015[71])],
  y: [msci_2018[71]],
  name: '2018',
  text: company_array[71],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[71]) + parseInt(commitments_2014[71])],
  y: [msci_2017[71]],
  name: '2017',
  text: company_array[71],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set73') {


trace2 = {
  x: [parseInt(votes_2017[72]) + parseInt(commitments_2017[72])],
  y: [msci_2020[72]],
  name: '2020',
  text: company_array[72],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[72]) + parseInt(commitments_2016[72])],
  y: [msci_2019[72]],
  name: '2019',
  text: company_array[72],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[72]) + parseInt(commitments_2015[72])],
  y: [msci_2018[72]],
  name: '2018',
  text: company_array[72],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[72]) + parseInt(commitments_2014[72])],
  y: [msci_2017[72]],
  name: '2017',
  text: company_array[72],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set74') {


trace2 = {
  x: [parseInt(votes_2017[73]) + parseInt(commitments_2017[73])],
  y: [msci_2020[73]],
  name: '2020',
  text: company_array[73],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[73]) + parseInt(commitments_2016[73])],
  y: [msci_2019[73]],
  name: '2019',
  text: company_array[73],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[73]) + parseInt(commitments_2015[73])],
  y: [msci_2018[73]],
  name: '2018',
  text: company_array[73],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[73]) + parseInt(commitments_2014[73])],
  y: [msci_2017[73]],
  name: '2017',
  text: company_array[73],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set75') {


trace2 = {
  x: [parseInt(votes_2017[74]) + parseInt(commitments_2017[74])],
  y: [msci_2020[74]],
  name: '2020',
  text: company_array[74],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[74]) + parseInt(commitments_2016[74])],
  y: [msci_2019[74]],
  name: '2019',
  text: company_array[74],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[74]) + parseInt(commitments_2015[74])],
  y: [msci_2018[74]],
  name: '2018',
  text: company_array[74],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[74]) + parseInt(commitments_2014[74])],
  y: [msci_2017[74]],
  name: '2017',
  text: company_array[74],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set76') {


trace2 = {
  x: [parseInt(votes_2017[75]) + parseInt(commitments_2017[75])],
  y: [msci_2020[75]],
  name: '2020',
  text: company_array[75],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[75]) + parseInt(commitments_2016[75])],
  y: [msci_2019[75]],
  name: '2019',
  text: company_array[75],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[75]) + parseInt(commitments_2015[75])],
  y: [msci_2018[75]],
  name: '2018',
  text: company_array[75],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[75]) + parseInt(commitments_2014[75])],
  y: [msci_2017[75]],
  name: '2017',
  text: company_array[75],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set77') {


trace2 = {
  x: [parseInt(votes_2017[76]) + parseInt(commitments_2017[76])],
  y: [msci_2020[76]],
  name: '2020',
  text: company_array[76],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[76]) + parseInt(commitments_2016[76])],
  y: [msci_2019[76]],
  name: '2019',
  text: company_array[76],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[76]) + parseInt(commitments_2015[76])],
  y: [msci_2018[76]],
  name: '2018',
  text: company_array[76],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[76]) + parseInt(commitments_2014[76])],
  y: [msci_2017[76]],
  name: '2017',
  text: company_array[76],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set78') {


trace2 = {
  x: [parseInt(votes_2017[77]) + parseInt(commitments_2017[77])],
  y: [msci_2020[77]],
  name: '2020',
  text: company_array[77],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[77]) + parseInt(commitments_2016[77])],
  y: [msci_2019[77]],
  name: '2019',
  text: company_array[77],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[77]) + parseInt(commitments_2015[77])],
  y: [msci_2018[77]],
  name: '2018',
  text: company_array[77],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[77]) + parseInt(commitments_2014[77])],
  y: [msci_2017[77]],
  name: '2017',
  text: company_array[77],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set79') {


trace2 = {
  x: [parseInt(votes_2017[78]) + parseInt(commitments_2017[78])],
  y: [msci_2020[78]],
  name: '2020',
  text: company_array[78],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[78]) + parseInt(commitments_2016[78])],
  y: [msci_2019[78]],
  name: '2019',
  text: company_array[78],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[78]) + parseInt(commitments_2015[78])],
  y: [msci_2018[78]],
  name: '2018',
  text: company_array[78],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[78]) + parseInt(commitments_2014[78])],
  y: [msci_2017[78]],
  name: '2017',
  text: company_array[78],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set80') {


trace2 = {
  x: [parseInt(votes_2017[79]) + parseInt(commitments_2017[79])],
  y: [msci_2020[79]],
  name: '2020',
  text: company_array[79],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[79]) + parseInt(commitments_2016[79])],
  y: [msci_2019[79]],
  name: '2019',
  text: company_array[79],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[79]) + parseInt(commitments_2015[79])],
  y: [msci_2018[79]],
  name: '2018',
  text: company_array[79],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[79]) + parseInt(commitments_2014[79])],
  y: [msci_2017[79]],
  name: '2017',
  text: company_array[79],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set81') {


trace2 = {
  x: [parseInt(votes_2017[80]) + parseInt(commitments_2017[80])],
  y: [msci_2020[80]],
  name: '2020',
  text: company_array[80],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[80]) + parseInt(commitments_2016[80])],
  y: [msci_2019[80]],
  name: '2019',
  text: company_array[80],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[80]) + parseInt(commitments_2015[80])],
  y: [msci_2018[80]],
  name: '2018',
  text: company_array[80],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[80]) + parseInt(commitments_2014[80])],
  y: [msci_2017[80]],
  name: '2017',
  text: company_array[80],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set82') {


trace2 = {
  x: [parseInt(votes_2017[81]) + parseInt(commitments_2017[81])],
  y: [msci_2020[81]],
  name: '2020',
  text: company_array[81],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[81]) + parseInt(commitments_2016[81])],
  y: [msci_2019[81]],
  name: '2019',
  text: company_array[81],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[81]) + parseInt(commitments_2015[81])],
  y: [msci_2018[81]],
  name: '2018',
  text: company_array[81],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[81]) + parseInt(commitments_2014[81])],
  y: [msci_2017[81]],
  name: '2017',
  text: company_array[81],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set83') {


trace2 = {
  x: [parseInt(votes_2017[82]) + parseInt(commitments_2017[82])],
  y: [msci_2020[82]],
  name: '2020',
  text: company_array[82],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[82]) + parseInt(commitments_2016[82])],
  y: [msci_2019[82]],
  name: '2019',
  text: company_array[82],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[82]) + parseInt(commitments_2015[82])],
  y: [msci_2018[82]],
  name: '2018',
  text: company_array[82],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[82]) + parseInt(commitments_2014[82])],
  y: [msci_2017[82]],
  name: '2017',
  text: company_array[82],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set84') {


trace2 = {
  x: [parseInt(votes_2017[83]) + parseInt(commitments_2017[83])],
  y: [msci_2020[83]],
  name: '2020',
  text: company_array[83],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[83]) + parseInt(commitments_2016[83])],
  y: [msci_2019[83]],
  name: '2019',
  text: company_array[83],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[83]) + parseInt(commitments_2015[83])],
  y: [msci_2018[83]],
  name: '2018',
  text: company_array[83],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[83]) + parseInt(commitments_2014[83])],
  y: [msci_2017[83]],
  name: '2017',
  text: company_array[83],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set85') {


trace2 = {
  x: [parseInt(votes_2017[84]) + parseInt(commitments_2017[84])],
  y: [msci_2020[84]],
  name: '2020',
  text: company_array[84],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[84]) + parseInt(commitments_2016[84])],
  y: [msci_2019[84]],
  name: '2019',
  text: company_array[84],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[84]) + parseInt(commitments_2015[84])],
  y: [msci_2018[84]],
  name: '2018',
  text: company_array[84],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[84]) + parseInt(commitments_2014[84])],
  y: [msci_2017[84]],
  name: '2017',
  text: company_array[84],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set86') {


trace2 = {
  x: [parseInt(votes_2017[85]) + parseInt(commitments_2017[85])],
  y: [msci_2020[85]],
  name: '2020',
  text: company_array[85],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[85]) + parseInt(commitments_2016[85])],
  y: [msci_2019[85]],
  name: '2019',
  text: company_array[85],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[85]) + parseInt(commitments_2015[85])],
  y: [msci_2018[85]],
  name: '2018',
  text: company_array[85],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[85]) + parseInt(commitments_2014[85])],
  y: [msci_2017[85]],
  name: '2017',
  text: company_array[85],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set87') {


trace2 = {
  x: [parseInt(votes_2017[86]) + parseInt(commitments_2017[86])],
  y: [msci_2020[86]],
  name: '2020',
  text: company_array[86],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[86]) + parseInt(commitments_2016[86])],
  y: [msci_2019[86]],
  name: '2019',
  text: company_array[86],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[86]) + parseInt(commitments_2015[86])],
  y: [msci_2018[86]],
  name: '2018',
  text: company_array[86],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[86]) + parseInt(commitments_2014[86])],
  y: [msci_2017[86]],
  name: '2017',
  text: company_array[86],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set88') {


trace2 = {
  x: [parseInt(votes_2017[87]) + parseInt(commitments_2017[87])],
  y: [msci_2020[87]],
  name: '2020',
  text: company_array[87],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[87]) + parseInt(commitments_2016[87])],
  y: [msci_2019[87]],
  name: '2019',
  text: company_array[87],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[87]) + parseInt(commitments_2015[87])],
  y: [msci_2018[87]],
  name: '2018',
  text: company_array[87],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[87]) + parseInt(commitments_2014[87])],
  y: [msci_2017[87]],
  name: '2017',
  text: company_array[87],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set89') {


trace2 = {
  x: [parseInt(votes_2017[88]) + parseInt(commitments_2017[88])],
  y: [msci_2020[88]],
  name: '2020',
  text: company_array[88],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[88]) + parseInt(commitments_2016[88])],
  y: [msci_2019[88]],
  name: '2019',
  text: company_array[88],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[88]) + parseInt(commitments_2015[88])],
  y: [msci_2018[88]],
  name: '2018',
  text: company_array[88],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[88]) + parseInt(commitments_2014[88])],
  y: [msci_2017[88]],
  name: '2017',
  text: company_array[88],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set90') {


trace2 = {
  x: [parseInt(votes_2017[89]) + parseInt(commitments_2017[89])],
  y: [msci_2020[89]],
  name: '2020',
  text: company_array[89],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[89]) + parseInt(commitments_2016[89])],
  y: [msci_2019[89]],
  name: '2019',
  text: company_array[89],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[89]) + parseInt(commitments_2015[89])],
  y: [msci_2018[89]],
  name: '2018',
  text: company_array[89],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[89]) + parseInt(commitments_2014[89])],
  y: [msci_2017[89]],
  name: '2017',
  text: company_array[89],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set91') {


trace2 = {
  x: [parseInt(votes_2017[90]) + parseInt(commitments_2017[90])],
  y: [msci_2020[90]],
  name: '2020',
  text: company_array[90],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[90]) + parseInt(commitments_2016[90])],
  y: [msci_2019[90]],
  name: '2019',
  text: company_array[90],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[90]) + parseInt(commitments_2015[90])],
  y: [msci_2018[90]],
  name: '2018',
  text: company_array[90],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[90]) + parseInt(commitments_2014[90])],
  y: [msci_2017[90]],
  name: '2017',
  text: company_array[90],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set92') {


trace2 = {
  x: [parseInt(votes_2017[91]) + parseInt(commitments_2017[91])],
  y: [msci_2020[91]],
  name: '2020',
  text: company_array[91],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[91]) + parseInt(commitments_2016[91])],
  y: [msci_2019[91]],
  name: '2019',
  text: company_array[91],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[91]) + parseInt(commitments_2015[91])],
  y: [msci_2018[91]],
  name: '2018',
  text: company_array[91],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[91]) + parseInt(commitments_2014[91])],
  y: [msci_2017[91]],
  name: '2017',
  text: company_array[91],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set93') {


trace2 = {
  x: [parseInt(votes_2017[92]) + parseInt(commitments_2017[92])],
  y: [msci_2020[92]],
  name: '2020',
  text: company_array[92],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[92]) + parseInt(commitments_2016[92])],
  y: [msci_2019[92]],
  name: '2019',
  text: company_array[92],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[92]) + parseInt(commitments_2015[92])],
  y: [msci_2018[92]],
  name: '2018',
  text: company_array[92],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[92]) + parseInt(commitments_2014[92])],
  y: [msci_2017[92]],
  name: '2017',
  text: company_array[92],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set94') {


trace2 = {
  x: [parseInt(votes_2017[93]) + parseInt(commitments_2017[93])],
  y: [msci_2020[93]],
  name: '2020',
  text: company_array[93],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[93]) + parseInt(commitments_2016[93])],
  y: [msci_2019[93]],
  name: '2019',
  text: company_array[93],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[93]) + parseInt(commitments_2015[93])],
  y: [msci_2018[93]],
  name: '2018',
  text: company_array[93],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[93]) + parseInt(commitments_2014[93])],
  y: [msci_2017[93]],
  name: '2017',
  text: company_array[93],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set95') {


trace2 = {
  x: [parseInt(votes_2017[94]) + parseInt(commitments_2017[94])],
  y: [msci_2020[94]],
  name: '2020',
  text: company_array[94],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[94]) + parseInt(commitments_2016[94])],
  y: [msci_2019[94]],
  name: '2019',
  text: company_array[94],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[94]) + parseInt(commitments_2015[94])],
  y: [msci_2018[94]],
  name: '2018',
  text: company_array[94],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[94]) + parseInt(commitments_2014[94])],
  y: [msci_2017[94]],
  name: '2017',
  text: company_array[94],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set96') {


trace2 = {
  x: [parseInt(votes_2017[95]) + parseInt(commitments_2017[95])],
  y: [msci_2020[95]],
  name: '2020',
  text: company_array[95],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[95]) + parseInt(commitments_2016[95])],
  y: [msci_2019[95]],
  name: '2019',
  text: company_array[95],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[95]) + parseInt(commitments_2015[95])],
  y: [msci_2018[95]],
  name: '2018',
  text: company_array[95],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[95]) + parseInt(commitments_2014[95])],
  y: [msci_2017[95]],
  name: '2017',
  text: company_array[95],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set97') {


trace2 = {
  x: [parseInt(votes_2017[96]) + parseInt(commitments_2017[96])],
  y: [msci_2020[96]],
  name: '2020',
  text: company_array[96],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[96]) + parseInt(commitments_2016[96])],
  y: [msci_2019[96]],
  name: '2019',
  text: company_array[96],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[96]) + parseInt(commitments_2015[96])],
  y: [msci_2018[96]],
  name: '2018',
  text: company_array[96],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[96]) + parseInt(commitments_2014[96])],
  y: [msci_2017[96]],
  name: '2017',
  text: company_array[96],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set98') {


trace2 = {
  x: [parseInt(votes_2017[97]) + parseInt(commitments_2017[97])],
  y: [msci_2020[97]],
  name: '2020',
  text: company_array[97],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[97]) + parseInt(commitments_2016[97])],
  y: [msci_2019[97]],
  name: '2019',
  text: company_array[97],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[97]) + parseInt(commitments_2015[97])],
  y: [msci_2018[97]],
  name: '2018',
  text: company_array[97],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[97]) + parseInt(commitments_2014[97])],
  y: [msci_2017[97]],
  name: '2017',
  text: company_array[97],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set99') {


trace2 = {
  x: [parseInt(votes_2017[98]) + parseInt(commitments_2017[98])],
  y: [msci_2020[98]],
  name: '2020',
  text: company_array[98],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[98]) + parseInt(commitments_2016[98])],
  y: [msci_2019[98]],
  name: '2019',
  text: company_array[98],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[98]) + parseInt(commitments_2015[98])],
  y: [msci_2018[98]],
  name: '2018',
  text: company_array[98],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[98]) + parseInt(commitments_2014[98])],
  y: [msci_2017[98]],
  name: '2017',
  text: company_array[98],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}

else if (set === 'set100') {


trace2 = {
  x: [parseInt(votes_2017[99]) + parseInt(commitments_2017[99])],
  y: [msci_2020[99]],
  name: '2020',
  text: company_array[99],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace3 = {
  x: [parseInt(votes_2016[99]) + parseInt(commitments_2016[99])],
  y: [msci_2019[99]],
  name: '2019',
  text: company_array[99],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace4 = {
  x: [parseInt(votes_2015[99]) + parseInt(commitments_2015[99])],
  y: [msci_2018[99]],
  name: '2018',
  text: company_array[99],
  mode: 'markers',
  marker: {
    size: 80

  }

};

trace5 = {
  x: [parseInt(votes_2014[99]) + parseInt(commitments_2014[99])],
  y: [msci_2017[99]],
  name: '2017',
  text: company_array[99],
  mode: 'markers',
  marker: {
    size: 80

  }

};

}






















data = [trace2, trace3, trace4, trace5]

Plotly.newPlot('companyplot', data, layout);


// Plotly.restyle("companyplot", "trace1", [x]);
// Plotly.restyle("companyplot", "trace1", [y]);

}



});