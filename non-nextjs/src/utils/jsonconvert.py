import json

# Define your JSON data with the first format
json_data = '''
[
  {
    "name_translations": {
      "en": "Auckland"
    },
    "cases": {
      "da": "Окленду",
      "pr": "Окленде",
      "ro": "Окленда",
      "su": "Окленд",
      "tv": "Оклендом",
      "vi": "в Окленд"
    },
    "country_code": "NZ",
    "code": "AKL",
    "time_zone": "Pacific/Auckland",
    "name": "Окленд",
    "coordinates": {
      "lat": -36.84846,
      "lon": 174.76334
    }
  },
  {
    "name_translations": {
      "en": "London"
    },
    "cases": {
      "da": "Лондону",
      "pr": "Лондоне",
      "ro": "Лондона",
      "su": "Лондон",
      "tv": "Лондоном",
      "vi": "в Лондон"
    },
    "country_code": "GB",
    "code": "LON",
    "time_zone": "Europe/London",
    "name": "Лондон",
    "coordinates": {
      "lat": 51.51,
      "lon": 0.06
    }
  }
]
'''

# Load the JSON data into a Python object
data = json.loads(json_data)

# Transform the data to the desired format
transformed_data = []
for item in data:
    transformed_item = {
        'code': item['code'],
        'city': item['name_translations']['en'],
        'country_code': item['country_code'],
        'time_zone': item['time_zone'],
        'coordinates': item['coordinates']
    }
    transformed_data.append(transformed_item)

# Convert the transformed data back to JSON format
output_json = json.dumps(transformed_data, indent=2)
print(output_json)
