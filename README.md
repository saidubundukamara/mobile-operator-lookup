# Mobile Operator Lookup

A lightweight NPM package that identifies the telecom operator of a given mobile number, including company name, mobile money service, and country code, based on predefined prefixes.

## Features

- Identify telecom operators from phone numbers
- Supports country codes and mobile prefixes
- Returns mobile money services associated with operators
- Lightweight and easy to use

## Installation

```sh
npm install mobile-operator-lookup
```

## Usage

```
const lookupMobileOperator = require("mobile-operator-lookup");

console.log(lookupMobileOperator("+23277123456"));
/*
  {
    "company": "Africell",
    "m_money": "Afrimoney",
    "slug": "afrimoney",
    "country_code": "+232",
    "monime_code": "m17"
  }
*/
```
## Response Format
The function returns an object with the following fields:

| Field | Description |
| -------- | -------- |
| company     | Name of the telecom operator  |
| mobile_money|Name of the mobile money service
| slug|Slug version of the mobile money service
|country_code| The country code of the number
|monime_code| Monime Unique identifier


If the phone number is invalid or the operator is not found, it returns:

```
{ "error": "Invalid phone number" }
```

or
```
{ "error": "Operator not found" }
```

## Supported Countries
 - Sierra Leone (+232) – Orange, Africell, Qcell
 - More countries coming soon!

## Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

