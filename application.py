from flask import Flask, render_template, jsonify, request
from flask_cors import CORS

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create an instance of our Flask app.
app = Flask(__name__)
CORS(app)
# Create connection variable
conn = 'mongodb+srv://admin:admin@cluster0.5lstl.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-efjkbc-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# Connect to a database. Will create one if not already available.
db = client.International_ESG_df

country = db.ESG

# Set route
@app.route('/')
def index():
    # Store the entire collection in a list
    countries = list(db.ESG.find())
    print(countries)

    # Return the template with the list passed in
    return render_template('index copy.html', countries=countries)

@app.route('/api/v1.0/country-ESG', methods=['GET'])
def get_all_countries():
  #country = db.ESG
  output = []
  for i in country.find():
    output.append({'name' : i['Country'],
                'Continent Name' : i['Continent_Name'],
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
                })
  return jsonify({'result' : output})


@app.route('/api/v1.0/country-ESG/<Country>', methods=['GET'])
def get_one_country(Country):
  country = db.ESG
  i = country.find_one({'Country' : Country})
  if i:
    output = {'name' : i['Country'],
                'Continent Name' : i['Continent_Name'],
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


# @app.route('/test/', methods=['GET'])
# def testfind():
#     for doc in country.find():
#       return (doc)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=105)
