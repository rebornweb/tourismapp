import json

# Load the JSON data
with open('iataCodes.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# Transform the data to include only 'code', 'country_code', and 'city' fields
transformed_data = [{'code': item['code'], 'country_code': item['country_code'], 'city': item['city']} for item in data]

# Write the transformed data to output JSON file
with open('output.json', 'w', encoding='utf-8') as f:
    json.dump(transformed_data, f, indent=2, ensure_ascii=False)
