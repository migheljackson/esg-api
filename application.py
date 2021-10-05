from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

import pandas as pd
from joblib import dump, load



# Create an instance of our Flask app.
app = Flask(__name__)
CORS(app)

import ssl
import certifi

# Create connection variable
conn = 'mongodb+srv://admin:admin@cluster0.5lstl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn, tlsCAFile=certifi.where())

# Connect to a database. Will create one if not already available.
db = client.International_ESG_df

country = db.ESG
company = db.CompanyESG
gsir = db.GSIR

clf=load('model.pkl')

# Set route
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/dictionary/')
def dictionary_page():
    return render_template('esgdd.html')

@app.route('/country/')
def country_page():
    return render_template('country.html')

@app.route('/company/')
def company_page():
    return render_template('company.html')

@app.route('/conclusion/')
def conclusion_page():
    return render_template('conclusion.html')
    

@app.route('/api/v1.0/country-ESG', methods=['GET'])
def get_all_countries():
  output = []
  for i in country.find():
    output.append({'name' : i['Country'],
                'Continent Name' : i['Continent_Name'],
                # 'GSIA Region' : i['gsia_region'],
                '2020' : i["2020"],
                '2019' : i["2019"],
                '2018' : i["2018"],
                '2017' : i["2017"],
                '2016' : i["2020"],
                '2015' : i["2015"],
                '2014' : i["2014"],
                '2013' : i["2013"],
                '2012' : i["2012"],
                '2011' : i["2011"],
                '2010' : i["2010"],
                '2009' : i["2009"],
                '2008' : i["2008"],
                '2007' : i["2007"],
                '2006' : i["2006"],
                '2005' : i["2005"],
                '2004' : i["2004"],
                '2003' : i["2003"],
                '2002' : i["2002"],
                '2001' : i["2001"],
                '2000' : i["2000"],
                'EPI 2000' : i['EPI 2000'],
                'CCPI 2009' : i['CCPI 2009'],
                'EPI 2002' : i['EPI 2002'],
                'CCPI 2011' : i['CCPI 2011'],
                'EPI 2004' : i['EPI 2004'],
                'CCPI 2013' : i['CCPI 2013'],
                'EPI 2006' : i['EPI 2006'],
                'CCPI 2015' : i['CCPI 2015'],
                'CCPI 2017' : i['CCPI 2017'],
                'CCPI 2019' : i['CCPI 2019'],
                'EPI 2008' : i['EPI 2008'],
                'CCPI 2008' : i['CCPI 2008'],
                'EPI 2010' : i['EPI 2010'],
                'CCPI 2010' : i['CCPI 2010'],
                'EPI 2012' : i['EPI 2012'],
                'CCPI 2012' : i['CCPI 2012'],
                'EPI 2014' : i['EPI 2014'],
                'CCPI 2014' : i['CCPI 2014'],
                'EPI 2016' : i['EPI 2016'],
                'CCPI 2016' : i['CCPI 2016'],
                'EPI 2018' : i['EPI 2018'],
                'CCPI 2018' : i['CCPI 2018'],
                'EPI 2020' : i['EPI 2020'],
                'CCPI 2020' : i['CCPI 2020'],
                'GDP PER CAPITA 2000' : i['GDP PER CAPITA 2000'],
                'GDP PER CAPITA 2001' : i['GDP PER CAPITA 2001'],
                'GDP PER CAPITA 2002' : i['GDP PER CAPITA 2002'],
                'GDP PER CAPITA 2003' : i['GDP PER CAPITA 2003'],
                'GDP PER CAPITA 2004' : i['GDP PER CAPITA 2004'],
                'GDP PER CAPITA 2005' : i['GDP PER CAPITA 2005'],
                'GDP PER CAPITA 2006' : i['GDP PER CAPITA 2006'],
                'GDP PER CAPITA 2007' : i['GDP PER CAPITA 2007'],
                'GDP PER CAPITA 2008' : i['GDP PER CAPITA 2008'],
                'GDP PER CAPITA 2009' : i['GDP PER CAPITA 2009'],
                'GDP PER CAPITA 2010' : i['GDP PER CAPITA 2010'],
                'GDP PER CAPITA 2011' : i['GDP PER CAPITA 2011'],
                'GDP PER CAPITA 2012' : i['GDP PER CAPITA 2012'],
                'GDP PER CAPITA 2013' : i['GDP PER CAPITA 2013'],
                'GDP PER CAPITA 2014' : i['GDP PER CAPITA 2014'],
                'GDP PER CAPITA 2015' : i['GDP PER CAPITA 2015'],
                'GDP PER CAPITA 2016' : i['GDP PER CAPITA 2016'],
                'GDP PER CAPITA 2017' : i['GDP PER CAPITA 2017'],
                'GDP PER CAPITA 2018' : i['GDP PER CAPITA 2018'],
                'GDP PER CAPITA 2019' : i['GDP PER CAPITA 2019'],
                'GDP PER CAPITA 2020' : i['GDP PER CAPITA 2020'],
                'GNI per capita 2008' : i['GNI per capita 2008'],
                'GNI per capita 2010' : i['GNI per capita 2010'],
                'GNI per capita 2012' : i['GNI per capita 2012'],
                'GNI per capita 2014' : i['GNI per capita 2014'],
                'GNI per capita 2016' : i['GNI per capita 2016'],
                'GNI per capita 2018' : i['GNI per capita 2018'],
                'GNI per capita 2019' : i['GNI per capita 2019'],
                'GNI per capita 2000' : i['GNI per capita 2000'],
                'GNI per capita 2001' : i['GNI per capita 2001'],
                'GNI per capita 2002' : i['GNI per capita 2002'],
                'GNI per capita 2003' : i['GNI per capita 2003'],
                'GNI per capita 2004' : i['GNI per capita 2004'],
                'GNI per capita 2005' : i['GNI per capita 2005'],
                'GNI per capita 2006' : i['GNI per capita 2006'],
                'GNI per capita 2007' : i['GNI per capita 2007'],
                'GNI per capita 2009' : i['GNI per capita 2009'],
                'GNI per capita 2011' : i['GNI per capita 2011'],
                'GNI per capita 2013' : i['GNI per capita 2013'],
                'GNI per capita 2015' : i['GNI per capita 2015'],
                'GNI per capita 2017' : i['GNI per capita 2017'],
                '2020 Sustainable Competitiveness' : i['2020 Sustainable Competitiveness'],
                '2019 Sustainable Competitiveness' : i['2019 Sustainable Competitiveness'],
                '2018 Sustainable Competitiveness' : i['2018 Sustainable Competitiveness'],
                '2017 Sustainable Competitiveness' : i['2017 Sustainable Competitiveness'],
                '2016 Sustainable Competitiveness' : i['2016 Sustainable Competitiveness'],
                '2015 Sustainable Competitiveness' : i['2015 Sustainable Competitiveness'],
                '2014 Sustainable Competitiveness' : i['2014 Sustainable Competitiveness'],
                # 'Total ESG Investing 2020' : i['esg_tot_2020'],
                # 'Total ESG Investing 2018' : i['esg_tot_2018'],
                # 'Total ESG Investing 2016' : i['esg_tot_2016'],
                # 'Total ESG Investing 2014' : i['esg_tot_2014'],
                # 'Total ESG Investing 2012' : i['esg_tot_2012'] 
                })
  return jsonify({'result' : output})


@app.route('/api/v1.0/country-ESG/<Country>', methods=['GET'])
def get_one_country(Country):
  country = db.ESG
  i = country.find_one({'Country' : Country})
  if i:
    output = {'name' : i['Country'],
                'Continent Name' : i['Continent Name'],
                '2020' : i["2020"],
                '2019' : i["2019"],
                '2018' : i["2018"],
                '2017' : i["2017"],
                '2016' : i["2020"],
                '2015' : i["2015"],
                '2014' : i["2014"],
                '2013' : i["2013"],
                '2012' : i["2012"],
                '2011' : i["2011"],
                '2010' : i["2010"],
                '2009' : i["2009"],
                '2008' : i["2008"],
                '2007' : i["2007"],
                '2006' : i["2006"],
                '2005' : i["2005"],
                '2004' : i["2004"],
                '2003' : i["2003"],
                '2002' : i["2002"],
                '2001' : i["2001"],
                '2000' : i["2000"], 
                'EPI 2008' : i['EPI 2008'],
                'CCPI 2008' : i['CCPI 2008'],
                'EPI 2010' : i['EPI 2010'],
                'CCPI 2010' : i['CCPI 2010'],
                'EPI 2012' : i['EPI 2012'],
                'CCPI 2012' : i['CCPI 2012'],
                'EPI 2014' : i['EPI 2014'],
                'CCPI 2014' : i['CCPI 2014'],
                'EPI 2016' : i['EPI 2016'],
                'CCPI 2016' : i['CCPI 2016'],
                'EPI 2018' : i['EPI 2018'],
                'CCPI 2018' : i['CCPI 2018'],
                'EPI 2020' : i['EPI 2020'],
                'CCPI 2020' : i['CCPI 2020'],
                'GDP PER CAPITA 2008' : i['GDP PER CAPITA 2008'],
                'GDP PER CAPITA 2010' : i['GDP PER CAPITA 2010'],
                'GDP PER CAPITA 2012' : i['GDP PER CAPITA 2012'],
                'GDP PER CAPITA 2014' : i['GDP PER CAPITA 2014'],
                'GDP PER CAPITA 2016' : i['GDP PER CAPITA 2016'],
                'GDP PER CAPITA 2018' : i['GDP PER CAPITA 2018'],
                'GDP PER CAPITA 2020' : i['GDP PER CAPITA 2020'],
                'GNI per capita 2008' : i['GNI per capita 2008'],
                'GNI per capita 2010' : i['GNI per capita 2010'],
                'GNI per capita 2012' : i['GNI per capita 2012'],
                'GNI per capita 2014' : i['GNI per capita 2014'],
                'GNI per capita 2016' : i['GNI per capita 2016'],
                'GNI per capita 2018' : i['GNI per capita 2018'],
                'GNI per capita 2019' : i['GNI per capita 2019'],
                '2020 Sustainable Competitiveness' : i['2020 Sustainable Competitiveness'],
                '2019 Sustainable Competitiveness' : i['2019 Sustainable Competitiveness'],
                '2018 Sustainable Competitiveness' : i['2018 Sustainable Competitiveness'],
                '2017 Sustainable Competitiveness' : i['2017 Sustainable Competitiveness'],
                '2016 Sustainable Competitiveness' : i['2016 Sustainable Competitiveness'],
                '2015 Sustainable Competitiveness' : i['2015 Sustainable Competitiveness'],
                '2014 Sustainable Competitiveness' : i['2014 Sustainable Competitiveness'],
                'GNI per capita 2010' : i['GNI per capita 2010'],
                'GNI per capita 2012' : i['GNI per capita 2012'],
                'GNI per capita 2014' : i['GNI per capita 2014'],
                'GNI per capita 2016' : i['GNI per capita 2016'],
                'GNI per capita 2018' : i['GNI per capita 2018'],
                'GNI per capita 2019' : i['GNI per capita 2019']
                }
  else:
    output = "No such name"
  return jsonify({'result' : output})

@app.route('/api/v1.0/company-ESG', methods=['GET'])
def get_all_companies():
  output = []
  for i in company.find():
    output.append({"name" : i["company"],
                'ticker' : i["ticker"],
                'MSCI ESG Rating 2016' : i["MSCI ESG Rating 2016"],
                'MSCI ESG Rating 2017' : i["MSCI ESG Rating 2017"],
                'MSCI ESG Rating 2018' : i["MSCI ESG Rating 2018"],
                'MSCI ESG Rating 2019' : i["MSCI ESG Rating 2019"],
                'MSCI ESG Rating 2020' : i["MSCI ESG Rating 2020"],
                'MSCI ESG Rating 2021' : i["MSCI ESG Rating 2021"],
                '2010 Votes' : i["2010 Votes"],
                '2011 Votes' : i["2011 Votes"],
                '2012 Votes' : i["2012 Votes"],
                '2013 Votes' : i["2013 Votes"],
                '2014 Votes' : i["2014 Votes"],
                '2015 Votes' : i["2015 Votes"],
                '2016 Votes' : i["2016 Votes"],
                '2017 Votes' : i["2017 Votes"],
                '2018 Votes' : i["2018 Votes"],
                '2019 Votes' : i["2019 Votes"],
                '2020 Votes' : i["2020 Votes"],
                '2010 Commitments' : i["2010 Commitments"],
                '2011 Commitments' : i["2011 Commitments"],
                '2012 Commitments' : i["2012 Commitments"],
                '2013 Commitments' : i["2013 Commitments"],
                '2014 Commitments' : i["2014 Commitments"],
                '2015 Commitments' : i["2015 Commitments"],
                '2016 Commitments' : i["2016 Commitments"],
                '2017 Commitments' : i["2017 Commitments"],
                '2018 Commitments' : i["2018 Commitments"],
                '2019 Commitments' : i["2019 Commitments"],
                '2020 Commitments' : i["2020 Commitments"]
                })
  return jsonify({'result' : output})


@app.route('/api/v1.0/gsir-ESG', methods=['GET'])
def get_all_gsir():
  output = []
  
  for i in gsir.find():
    output.append({"GSIA Region" : i["gsia_region"],
                'Total ESG Investing 2020' : i["esg_tot_2020"],
                'Total ESG Investing 2018' : i["esg_tot_2018"],
                'Total ESG Investing 2016' : i["esg_tot_2016"],
                'Total ESG Investing 2014' : i["esg_tot_2014"],
                'Total ESG Investing 2012' : i["esg_tot_2012"]
                })
  return jsonify({'result' : output})


@app.route('/find/', methods=['GET'])
def findAll():
    query = country.find()
    output = {}
    i = 0
    for x in query:
        output[i] = x
        output[i].pop('_id')
        i += 1
    return jsonify({'result ':output})


@app.route('/flag',methods=['GET','POST'])
def flag():
    if request.method == 'GET':
        return (render_template('fraud-flag.html'))
    
    if request.method == 'POST':
      nil = request.form['nil']
      she = request.form['she']
      cac = request.form['cac']
      cr = request.form['cr']
      pl = request.form['pl']
      oil = request.form['oil']
      itb = request.form['itb']
      assets = request.form['assets']

      input_variables = pd.DataFrame([[nil, she, cac, cr, pl, oil, itb, assets]],
                                       columns=['Net Income', 'Total Shareholder Equity', 'Cash and Cash Equivalent', 'Restricted Cash', 'Profit',
                                                'Operating Income', 'Tax Expense Benefit', 'Total Assets'],
                                       dtype='float',
                                       index=['input'])
      
      pred = clf.predict(input_variables)[0]
      print('prediction: ',pred)

      if pred>0:
        prediction="Fraud Indicators Found."
      else:
        prediction="No Fraud Indicators Found."

      original_input={'Net Income': nil, 
                      'Total Shareholder Equity': she, 
                       'Cash and Cash Equivalent': cac, 
                       'Restricted Cash': cr, 
                       'Profit': pl, 
                       'Operating Income': oil, 
                       'Tax Expense Benefit': itb, 
                       'Total Assets': assets}

      print (original_input)

      return render_template('fraud-result.html', prediction=prediction)


if __name__ == "__main__":
    app.run(host='127.0.0.1', port=105)
