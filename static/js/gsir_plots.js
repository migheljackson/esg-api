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
            name: 'Total ESG 2012',
            type: 'bar'
            };
              
        var trace2 = {
            x: gsia_region,
            y: esg_tot_2014,
            name: 'Total ESG 2014',
            type: 'bar'
            };

        var trace3 = {
            x: gsia_region,
            y: esg_tot_2016,
            name: 'Total ESG 2016',
            type: 'bar'
            };
            
        var trace4 = {
            x: gsia_region,
            y: esg_tot_2018,
            name: 'Total ESG 2018',
            type: 'bar'
            };

        var trace5 = {
            x: gsia_region,
            y: esg_tot_2020,
            name: 'Total ESG 2020',
            type: 'bar'
            };
              
        var plotdata = [trace1, trace2, trace3, trace4, trace5];
              
        var layout = {barmode: 'group'};
              
        Plotly.newPlot('gsir_plot', plotdata, layout);
  
    });
  
  
 