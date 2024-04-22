import json

# Open the input JSON file for reading with UTF-8 encoding
with open('input.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Transform the data to the desired format
transformed_data = []
for item in data:
    transformed_item = {
        'name_translations': item['name_translations'],
        'cases': item['cases'],
        'country_code': item['country_code'],
        'code': item['code'],
        'time_zone': item['time_zone'],
        'name': item['name'],
        'coordinates': item['coordinates']
    }
    transformed_data.append(transformed_item)

# Write the transformed data to output JSON file
with open('output.json', 'w', encoding='utf-8') as f:
    json.dump(transformed_data, f, indent=2, ensure_ascii=False)
