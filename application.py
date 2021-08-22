from flask import Flask, render_template, jsonify, request

# Import our pymongo library, which lets us connect our Flask app to our Mongo database.
import pymongo

# Create an instance of our Flask app.
app = Flask(__name__)

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
    return render_template('index.html', countries=countries)

@app.route('/api/v1.0/country-ESG', methods=['GET'])
def get_all_countries():
  #country = db.ESG
  output = []
  for i in country.find():
    output.append({'name' : i['Country'], 
                'EPI 2008' : i['EPI 2008'],
                'CCPI 2008' : i['CCPI 2008'],
                'EPI 2010' : i['EPI 2010'],
                'CCPI 2010' : i['CCPI 2010'],
                'EPI 2012' : i['EPI 2012'],
                'CCPI 2012' : i['CCPI 2012'],
                'GDP PER CAPITA 2008' : i['GDP PER CAPITA 2008'],
                'GDP PER CAPITA 2010' : i['GDP PER CAPITA 2010'],
                'GDP PER CAPITA 2012' : i['GDP PER CAPITA 2012']
                })
  return jsonify({'result' : output})


@app.route('/api/v1.0/country-ESG/<Country>', methods=['GET'])
def get_one_country(Country):
  country = db.ESG
  i = country.find_one({'Country' : Country})
  if i:
    output = {'name' : i['Country'], 
                'EPI 2008' : i['EPI 2008'],
                'CCPI 2008' : i['CCPI 2008'],
                'EPI 2010' : i['EPI 2010'],
                'CCPI 2010' : i['CCPI 2010'],
                'EPI 2012' : i['EPI 2012'],
                'CCPI 2012' : i['CCPI 2012']
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
    return jsonify({'result':output})


if __name__ == "__main__":
    app.run(debug=True)
