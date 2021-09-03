const gsir_url="https://country-esg-api.herokuapp.com/api/v1.0/gsir-ESG"
d3.json(gsir_url).then(function(gsirdata) {
    var g=gsirdata.result
    console.log("gsir records retrieved:",g.length);
    console.log(g);

    var gsia_region = []
    var esg_tot_2020 = []
    var esg_tot_2018 = []
    var esg_tot_2016 = []
    var esg_tot_2014 = []
    var esg_tot_2012 = []
  
        
    for (var i = 0; i < g.length; i++) {
            esg_tot_2020[i] = g[i]["Total ESG Investing 2020"];
            esg_tot_2018[i] = g[i]["Total ESG Investing 2018"];
            esg_tot_2016[i] = g[i]["Total ESG Investing 2016"];
            esg_tot_2014[i] = g[i]["Total ESG Investing 2014"];
            esg_tot_2012[i] = g[i]["Total ESG Investing 2012"];
            gsia_region[i] = g[i]["GSIA Region"];
        }
        console.log(gsia_region);
        console.log(esg_tot_2020);
            
        var trace1 = {
            x: gsia_region,
            y: esg_tot_2012,
            name: 'Total ESG Assets 2012',
            type: 'bar'
            };
              
        var trace2 = {
            x: gsia_region,
            y: esg_tot_2014,
            name: 'Total ESG Assets 2014',
            type: 'bar'
            };

        var trace3 = {
            x: gsia_region,
            y: esg_tot_2016,
            name: 'Total ESG Assets 2016',
            type: 'bar'
            };
            
        var trace4 = {
            x: gsia_region,
            y: esg_tot_2018,
            name: 'Total ESG Assets 2018',
            type: 'bar'
            };

        var trace5 = {
            x: gsia_region,
            y: esg_tot_2020,
            name: 'Total ESG Assets 2020',
            type: 'bar'
            };
              
        var plotdata = [trace1, trace2, trace3, trace4, trace5];
              
        var layout = {barmode: 'group',
        autosize: false,
        width: 600, 
        height: 400, 
        title: {
            text:'Total ESG Investment By Year,Region',
            font: {
              family: 'Courier New, monospace',
              size: 20
            },
            xref: 'paper',
            x: 0.05,
          },
          xaxis: {
            title: {
              text: 'GSIA Region',
              font: {
                family: 'Courier New, monospace',
                size: 16,
                color: '#7f7f7f'
              }
            },
          },
          yaxis: {
            title: {
              text: 'Total ESG Assets In Billions($)',
              font: {
                family: 'Courier New, monospace',
                size: 16,
                color: '#7f7f7f'
              }
            }
          }

                    };
              
        Plotly.newPlot('gsir_plot', plotdata, layout);
  
    });
  
  
 
