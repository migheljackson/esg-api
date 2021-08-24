const url="https://country-esg-api.herokuapp.com/api/v1.0/country-ESG"
d3.json(url).then(function(data) {
  var d=data.result
  console.log("country records retrieved:",d.length);
  var country_data = []

  var continent = []

  var gdp_per_cap_2020 = []
  var gdp_per_cap_2019 = []
  var gdp_per_cap_2018 = []
  var gdp_per_cap_2017 = []
  var gdp_per_cap_2016 = []
  var gdp_per_cap_2015 = []
  var gdp_per_cap_2014 = []
  var gdp_per_cap_2013 = []
  var gdp_per_cap_2012 = []
  var gdp_per_cap_2011 = []
  var gdp_per_cap_2010 = []
  var gdp_per_cap_2009 = []
  var gdp_per_cap_2008 = []
  var gdp_per_cap_2007 = []
  var gdp_per_cap_2006 = []
  var gdp_per_cap_2005 = []
  var gdp_per_cap_2004 = []
  var gdp_per_cap_2003 = []
  var gdp_per_cap_2002 = []
  var gdp_per_cap_2001 = []
  var gdp_per_cap_2000 = []

  var epi_2020 = []
  var epi_2018 = []
  var epi_2016 = []
  var epi_2014 = []
  var epi_2012 = []
  var epi_2010 = []
  var epi_2008 = []
  var epi_2006 = []
  var epi_2004 = []
  var epi_2002 = []
  var epi_2000 = []

  var ccpi_2020 = []
  var ccpi_2019 = []
  var ccpi_2018 = []
  var ccpi_2017 = []
  var ccpi_2016 = []
  var ccpi_2015 = []
  var ccpi_2014 = []
  var ccpi_2013 = []
  var ccpi_2012 = []
  var ccpi_2011 = []
  var ccpi_2010 = []
  var ccpi_2009 = []
  var ccpi_2008 = []

  var sus_comp_2020 = []
  var sus_comp_2019 = []
  var sus_comp_2018 = []
  var sus_comp_2017 = []
  var sus_comp_2016 = []
  var sus_comp_2015 = []
  var sus_comp_2014 = []

  var country_pop_2020 = []
  var country_pop_2019 = []
  var country_pop_2018 = []
  var country_pop_2017 = []
  var country_pop_2016 = []
  var country_pop_2015 = []
  var country_pop_2014 = []
  var country_pop_2013 = []
  var country_pop_2012 = []
  var country_pop_2011 = []
  var country_pop_2010 = []
  var country_pop_2009 = []
  var country_pop_2008 = []
  var country_pop_2007 = []
  var country_pop_2006 = []
  var country_pop_2005 = []
  var country_pop_2004 = []
  var country_pop_2003 = []
  var country_pop_2002 = []
  var country_pop_2001 = []
  var country_pop_2000 = []

  
  var gni_2019 = []
  var gni_2018 = []
  var gni_2017 = []
  var gni_2016 = []
  var gni_2015 = []
  var gni_2014 = []
  var gni_2013 = []
  var gni_2012 = []
  var gni_2011 = []
  var gni_2010 = []
  var gni_2009 = []
  var gni_2008 = []
  var gni_2007 = []
  var gni_2006 = []
  var gni_2005 = []
  var gni_2004 = []
  var gni_2003 = []
  var gni_2002 = []
  var gni_2001 = []
  var gni_2000 = []

//dictionary of color here
//color_dict = {"continent1": "Blue"....}
  symbol_dict = {"Asia": "circle", "North America": "star", "Oceania": "pentagon", "South America": "cross", "Europe": "square", "Africa": "x"}
  color_dict = {"L": "Red", "LM": "orange", "UM": "yellow", "H": "Green"}
  var symbol_array = []
  var color = []
    console.log(data);
    for (var i = 0; i < d.length; i++) {
      console.log(d[i]["name"]);
      country_data[i] = d[i]["name"];
      console.log(d[i]["GDP PER CAPITA 2020"]);

      gdp_per_cap_2020[i] = d[i]["GDP PER CAPITA 2020"];
      gdp_per_cap_2019[i] = d[i]["GDP PER CAPITA 2019"];
      gdp_per_cap_2018[i] = d[i]["GDP PER CAPITA 2018"];
      gdp_per_cap_2017[i] = d[i]["GDP PER CAPITA 2017"];
      gdp_per_cap_2016[i] = d[i]["GDP PER CAPITA 2016"];
      gdp_per_cap_2015[i] = d[i]["GDP PER CAPITA 2015"];
      gdp_per_cap_2014[i] = d[i]["GDP PER CAPITA 2014"];
      gdp_per_cap_2013[i] = d[i]["GDP PER CAPITA 2013"];
      gdp_per_cap_2012[i] = d[i]["GDP PER CAPITA 2012"];
      gdp_per_cap_2011[i] = d[i]["GDP PER CAPITA 2011"];
      gdp_per_cap_2010[i] = d[i]["GDP PER CAPITA 2010"];
      gdp_per_cap_2009[i] = d[i]["GDP PER CAPITA 2009"];
      gdp_per_cap_2008[i] = d[i]["GDP PER CAPITA 2008"];
      gdp_per_cap_2007[i] = d[i]["GDP PER CAPITA 2007"];
      gdp_per_cap_2006[i] = d[i]["GDP PER CAPITA 2006"];
      gdp_per_cap_2005[i] = d[i]["GDP PER CAPITA 2005"];
      gdp_per_cap_2004[i] = d[i]["GDP PER CAPITA 2004"];
      gdp_per_cap_2003[i] = d[i]["GDP PER CAPITA 2003"];
      gdp_per_cap_2002[i] = d[i]["GDP PER CAPITA 2002"];
      gdp_per_cap_2001[i] = d[i]["GDP PER CAPITA 2001"];
      gdp_per_cap_2000[i] = d[i]["GDP PER CAPITA 2000"];

      console.log(d[i]["EPI 2020"]);

      epi_2020[i] = d[i]["EPI 2020"];
      epi_2018[i] = d[i]["EPI 2018"];
      epi_2016[i] = d[i]["EPI 2016"];
      epi_2014[i] = d[i]["EPI 2014"];
      epi_2012[i] = d[i]["EPI 2012"];
      epi_2010[i] = d[i]["EPI 2010"];
      epi_2008[i] = d[i]["EPI 2008"];
      epi_2006[i] = d[i]["EPI 2006"];
      epi_2004[i] = d[i]["EPI 2004"];
      epi_2002[i] = d[i]["EPI 2002"];
      epi_2000[i] = d[i]["EPI 2000"];

      ccpi_2020[i] = d[i]["CCPI 2020"];
      ccpi_2019[i] = d[i]["CCPI 2019"];
      ccpi_2018[i] = d[i]["CCPI 2019"];
      ccpi_2017[i] = d[i]["CCPI 2017"];
      ccpi_2016[i] = d[i]["CCPI 2016"];
      ccpi_2015[i] = d[i]["CCPI 2015"];
      ccpi_2014[i] = d[i]["CCPI 2014"];
      ccpi_2013[i] = d[i]["CCPI 2013"];
      ccpi_2012[i] = d[i]["CCPI 2012"];
      ccpi_2011[i] = d[i]["CCPI 2011"];
      ccpi_2010[i] = d[i]["CCPI 2010"];
      ccpi_2009[i] = d[i]["CCPI 2009"];
      ccpi_2008[i] = d[i]["CCPI 2008"];

      sus_comp_2020[i] = d[i]["2020 Sustainable Competitiveness"];
      sus_comp_2019[i] = d[i]["2019 Sustainable Competitiveness"];
      sus_comp_2018[i] = d[i]["2018 Sustainable Competitiveness"];
      sus_comp_2017[i] = d[i]["2017 Sustainable Competitiveness"];
      sus_comp_2016[i] = d[i]["2016 Sustainable Competitiveness"];
      sus_comp_2015[i] = d[i]["2015 Sustainable Competitiveness"];
      sus_comp_2014[i] = d[i]["2014 Sustainable Competitiveness"];

      console.log(d[i]["2020"]);

      country_pop_2020[i] = (d[i]["2020"]) / 7000000;
      country_pop_2019[i] = (d[i]["2019"]) / 7000000;
      country_pop_2018[i] = (d[i]["2018"]) / 7000000;
      country_pop_2017[i] = (d[i]["2017"]) / 7000000;
      country_pop_2016[i] = (d[i]["2016"]) / 7000000;
      country_pop_2015[i] = (d[i]["2015"]) / 7000000;
      country_pop_2014[i] = (d[i]["2014"]) / 7000000;
      country_pop_2013[i] = (d[i]["2013"]) / 7000000;
      country_pop_2012[i] = (d[i]["2012"]) / 7000000;
      country_pop_2011[i] = (d[i]["2011"]) / 7000000;
      country_pop_2010[i] = (d[i]["2010"]) / 7000000;
      country_pop_2009[i] = (d[i]["2009"]) / 7000000;
      country_pop_2008[i] = (d[i]["2008"]) / 7000000;
      country_pop_2007[i] = (d[i]["2007"]) / 7000000;
      country_pop_2006[i] = (d[i]["2006"]) / 7000000;
      country_pop_2005[i] = (d[i]["2005"]) / 7000000;
      country_pop_2004[i] = (d[i]["2004"]) / 7000000;
      country_pop_2003[i] = (d[i]["2003"]) / 7000000;
      country_pop_2002[i] = (d[i]["2002"]) / 7000000;
      country_pop_2001[i] = (d[i]["2001"]) / 7000000;
      country_pop_2000[i] = (d[i]["2000"]) / 7000000;


      console.log(d[i]["Continent Name"]);

      continent[i] = d[i]["Continent Name"];

      gni_2019[i] = d[i]["GNI per capita 2019"];
      gni_2018[i] = d[i]["GNI per capita 2018"];
      gni_2017[i] = d[i]["GNI per capita 2017"];
      gni_2016[i] = d[i]["GNI per capita 2016"];
      gni_2015[i] = d[i]["GNI per capita 2015"];
      gni_2014[i] = d[i]["GNI per capita 2014"];
      gni_2013[i] = d[i]["GNI per capita 2013"];
      gni_2012[i] = d[i]["GNI per capita 2012"];
      gni_2011[i] = d[i]["GNI per capita 2011"];
      gni_2010[i] = d[i]["GNI per capita 2010"];
      gni_2009[i] = d[i]["GNI per capita 2009"];
      gni_2008[i] = d[i]["GNI per capita 2008"];
      gni_2007[i] = d[i]["GNI per capita 2007"];
      gni_2006[i] = d[i]["GNI per capita 2006"];
      gni_2005[i] = d[i]["GNI per capita 2005"];
      gni_2004[i] = d[i]["GNI per capita 2004"];
      gni_2003[i] = d[i]["GNI per capita 2003"];
      gni_2002[i] = d[i]["GNI per capita 2002"];
      gni_2001[i] = d[i]["GNI per capita 2001"];
      gni_2000[i] = d[i]["GNI per capita 2000"];
      
      
      color[i] = color_dict[gni_2019[i]]
      symbol_array[i] = symbol_dict[continent[i]]
   

  }

        var trace1 = {
          x: epi_2020,
          y: gdp_per_cap_2020,
          text: country_data,
          mode: 'markers',
          marker: {
            size: 25,
            color: color,
            symbol: symbol_array,
            opacity: 0.6 


          }

        };

        var data = [trace1];

        var layout = { 
          title: {
            text:'2020 GDP Per Capita vs. EPI Rating',
            font: {
              family: 'Courier New, monospace',
              size: 40
            }
          },
          // height: 1800,
          // width: 1800,
          xaxis: {
            title: {
              text: 'EPI Rating',
              font: {
                family: 'Courier New, monospace',
                size: 30,
                color: '#7f7f7f'
              }
            },
          },
          yaxis: {
            title: {
              text: 'GDP Per Capita',
              font: {
                family: 'Courier New, monospace',
                size: 30,
                color: '#7f7f7f'
              }
            }
          }

          
        };

        Plotly.newPlot('plot', data, layout);

        d3.selectAll("#selDataset").on("change", updatePlotly);


        function updatePlotly() {
          
          var dropdownMenu = d3.select("#selDataset");
         
          var dataset = dropdownMenu.property("value");

          // var x = [];
          // var y = [];
          // var size = [];
          // var new_title = "";

          if (dataset === 'dataset1') {
            x = epi_2020;
            y = gdp_per_cap_2020;
            //size = country_pop_2020;
            layout = { 
              title: '2020 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              // height: 1800,
              // width: 1800,
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };
          }

          else if (dataset === 'dataset2') {
            x = epi_2018;
            y = gdp_per_cap_2018;
            //size = country_pop_2018;
            layout = { 
              title: '2018 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              // height: 1800,
              // width: 1800,
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };
            
          }

          else if (dataset === 'dataset3') {
            x = epi_2016;
            y = gdp_per_cap_2016;
            //size = country_pop_2016;
            layout = { 
              title: '2016 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset4') {
            x = epi_2014;
            y = gdp_per_cap_2014;
            //size = country_pop_2014;
            layout = { 
              title: '2014 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset5') {
            x = epi_2012;
            y = gdp_per_cap_2012;
            //size = country_pop_2012;
            layout = { 
              title: '2012 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset6') {
            x = epi_2010;
            y = gdp_per_cap_2010;
            //size = country_pop_2010;
            layout = { 
              title: '2010 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset7') {
            x = epi_2008;
            y = gdp_per_cap_2008;
            //size = country_pop_2008;
            layout = { 
              title: '2008 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset8') {
            x = epi_2006;
            y = gdp_per_cap_2006;
            //size = country_pop_2006;
            layout = { 
              title: '2006 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset9') {
            x = epi_2004;
            y = gdp_per_cap_2004;
            //size = country_pop_2004;
            layout = { 
              title: '2004 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset10') {
            x = epi_2002;
            y = gdp_per_cap_2002;
            //size = country_pop_2002;
            layout = { 
              title: '2002 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };
            
          }

          else if (dataset === 'dataset11') {
            x = epi_2000;
            y = gdp_per_cap_2000;
            //size = country_pop_2000;
            layout = { 
              title: '2000 GDP Per Capita vs. EPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'EPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };
            
          }

          else if (dataset === 'dataset12') {
            x = ccpi_2020;
            y = gdp_per_cap_2020;
            //size = country_pop_2020;
            layout = { 
              title: '2020 GDP Per Capita vs. CCPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'CCPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset13') {
            x = ccpi_2018;
            y = gdp_per_cap_2018;
            //size = country_pop_2018;
            layout = { 
              title: '2018 GDP Per Capita vs. CCPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'CCPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };
            
          }

          else if (dataset === 'dataset14') {
            x = ccpi_2016;
            y = gdp_per_cap_2016;
            //size = country_pop_2016;
            layout = { 
              title: '2016 GDP Per Capita vs. CCPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'CCPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset15') {
            x = ccpi_2014;
            y = gdp_per_cap_2014;
            //size = country_pop_2014;
            layout = { 
              title: '2014 GDP Per Capita vs. CCPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'CCPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset16') {
            x = ccpi_2012;
            y = gdp_per_cap_2012;
            //size = country_pop_2012;
            layout = { 
              title: '2012 GDP Per Capita vs. CCPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'CCPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset17') {
            x = ccpi_2010;
            y = gdp_per_cap_2010;
            //size = country_pop_2010;
            layout = { 
              title: '2010 GDP Per Capita vs. CCPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'CCPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

          }

          else if (dataset === 'dataset18') {
            x = ccpi_2008;
            y = gdp_per_cap_2008;
            //size = country_pop_2008;
            layout = { 
              title: '2008 GDP Per Capita vs. CCPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'CCPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset19') {
            x = sus_comp_2020;
            y = gdp_per_cap_2020;
            //size = country_pop_2020;
            layout = { 
              title: '2006 GDP Per Capita vs. CCPI Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'CCPI Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset20') {
            x = sus_comp_2019;
            y = gdp_per_cap_2019;
            //size = country_pop_2019;
            layout = { 
              title: '2019 GDP Per Capita vs. Sustainable Competitiveness Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'Sustainable Competitiveness Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset21') {
            x = sus_comp_2018;
            y = gdp_per_cap_2018;
            //size = country_pop_2018;
            layout = { 
              title: '2018 GDP Per Capita vs. Sustainable Competitiveness Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'Sustainable Competitiveness Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }

          else if (dataset === 'dataset22') {
            x = sus_comp_2017;
            y = gdp_per_cap_2017;
            //size = country_pop_2017;
            layout = { 
              title: '2017 GDP Per Capita vs. Sustainable Competitiveness Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'Sustainable Competitiveness Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }
          else if (dataset === 'dataset23') {
            x = sus_comp_2016;
            y = gdp_per_cap_2016;
            //size = country_pop_2016;
            layout = { 
              title: '2016 GDP Per Capita vs. Sustainable Competitiveness Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'Sustainable Competitiveness Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }
          else if (dataset === 'dataset24') {
            x = sus_comp_2015;
            y = gdp_per_cap_2015;
            //size = country_pop_2015;
            layout = { 
              title: '2015 GDP Per Capita vs. Sustainable Competitiveness Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'Sustainable Competitiveness Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };

            
          }
          else if (dataset === 'dataset25') {
            x = sus_comp_2014;
            y = gdp_per_cap_2014;
            //size = country_pop_2014;
            layout = { 
              title: '2014 GDP Per Capita vs. Sustainable Competitiveness Rating',
              showlegend: false,
              
              xaxis: {
                title: {
                  text: 'Sustainable Competitiveness Rating',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                },
              },
              yaxis: {
                title: {
                  text: 'GDP Per Capita',
                  font: {
                    family: 'Courier New, monospace',
                    size: 30,
                    color: '#7f7f7f'
                  }
                }
              }
            };
          }
          
          
          
          
          Plotly.restyle("plot", "x", [x]);
          Plotly.restyle("plot", "y", [y]);
          //Plotly.restyle("plot", {'marker.size': [size]});
          Plotly.relayout("plot", layout);
        }







});

