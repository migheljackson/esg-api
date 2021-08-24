const url="https://country-esg-api.herokuapp.com/api/v1.0/company-ESG"
d3.json(url).then(function(data) {
  var d=data.result
  console.log("records retrieved:",d.length);

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

for (var i = 0; i < d.length; i++) {

company_array[i] = d[i]["company"];

msci_2016[i] = d[i]["MSCI ESG Rating 2016"];
msci_2017[i] = d[i]["MSCI ESG Rating 2017"];
msci_2018[i] = d[i]["MSCI ESG Rating 2018"];
msci_2019[i] = d[i]["MSCI ESG Rating 2019"];
msci_2020[i] = d[i]["MSCI ESG Rating 2020"];
msci_2021[i] = d[i]["MSCI ESG Rating 2021"];

votes_2010[i] = d[i]["2010 Votes"];
votes_2011[i] = d[i]["2011 Votes"];
votes_2012[i] = d[i]["2012 Votes"];
votes_2013[i] = d[i]["2013 Votes"];
votes_2014[i] = d[i]["2014 Votes"];
votes_2015[i] = d[i]["2015 Votes"];
votes_2016[i] = d[i]["2016 Votes"];
votes_2017[i] = d[i]["2017 Votes"];
votes_2018[i] = d[i]["2018 Votes"];
votes_2019[i] = d[i]["2019 Votes"];
votes_2020[i] = d[i]["2020 Votes"];

commitments_2010[i] = d[i]["2010 Commitments"];
commitments_2011[i] = d[i]["2011 Commitments"];
commitments_2012[i] = d[i]["2012 Commitments"];
commitments_2013[i] = d[i]["2013 Commitments"];
commitments_2014[i] = d[i]["2014 Commitments"];
commitments_2015[i] = d[i]["2015 Commitments"];
commitments_2016[i] = d[i]["2016 Commitments"];
commitments_2017[i] = d[i]["2017 Commitments"];
commitments_2018[i] = d[i]["2018 Commitments"];
commitments_2019[i] = d[i]["2019 Commitments"];
commitments_2020[i] = d[i]["2020 Commitments"];

}

var trace1 = {
    x: votes_2018,
    y: msci_2021,
    name: '2021',
    text: company_array,
    mode: 'markers',
    marker: {
      size: 25

    }

  };

  var trace2 = {
    x: votes_2017,
    y: msci_2020,
    name: '2020',
    text: company_array,
    mode: 'markers',
    marker: {
      size: 25

    }

  };

  var trace3 = {
    x: votes_2016,
    y: msci_2019,
    name: '2019',
    text: company_array,
    mode: 'markers',
    marker: {
      size: 25

    }

  };

  var trace4 = {
    x: votes_2015,
    y: msci_2018,
    name: '2018',
    text: company_array,
    mode: 'markers',
    marker: {
      size: 25

    }

  };

  var trace5 = {
    x: votes_2014,
    y: msci_2017,
    name: '2017',
    text: company_array,
    mode: 'markers',
    marker: {
      size: 25

    }

  };

  var trace6 = {
    x: votes_2013,
    y: msci_2016,
    name: '2016',
    text: company_array,
    mode: 'markers',
    marker: {
      size: 25

    }

  };


  var data = [trace1, trace2, trace3, trace4, trace5, trace6];

  var layout = { 
    title: {
      text:'MSCI ESG Rating vs. Company Votes and Commitments',
      font: {
        family: 'Courier New, monospace',
        size: 40
      }
    },
    height: 1800,
    width: 1800,
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

//d3.selectAll("#selCompany").on("change", updatePlotly);

});