# Mobile Operator Lookup

A lightweight, TypeScript-first NPM package that identifies the telecom operator of a given mobile number, including company name, mobile money service, and country code, based on predefined prefixes.

## Features

- 🔍 Identify telecom operators from phone numbers
- 🌍 Supports country codes and mobile prefixes
- 💳 Returns mobile money services associated with operators
- 📦 Lightweight and easy to use
- 🔷 **Full TypeScript support with comprehensive type definitions**
- ⚡ **Next.js compatible with ESM/CJS dual module support**
- 🛡️ **Type-safe with runtime validation**

## Installation

```sh
npm install mobile-operator-lookup
```

## Usage

### JavaScript (CommonJS)
```javascript
const { lookupMobileOperator } = require("mobile-operator-lookup");

const result = lookupMobileOperator("+23277123456");
console.log(result);
/*
  {
    "company": "Africell",
    "mobile_money": "Afrimoney",
    "slug": "afrimoney",
    "country_code": "+232",
    "monime_code": "m18"
  }
*/
```

### TypeScript / ES Modules
```typescript
import { lookupMobileOperator, isLookupSuccess } from 'mobile-operator-lookup';
import type { MobileOperatorResult } from 'mobile-operator-lookup';

const result: MobileOperatorResult = lookupMobileOperator("+23277123456");

if (isLookupSuccess(result)) {
  console.log(`Operator: ${result.company}`);
  console.log(`Mobile Money: ${result.mobile_money}`);
  console.log(`Country: ${result.country_code}`);
} else {
  console.log(`Error: ${result.error}`);
}
```

### Next.js Usage
```typescript
// Works seamlessly in Next.js App Router and Pages Router
import { lookupMobileOperator } from 'mobile-operator-lookup';

export default function MyComponent() {
  const handleLookup = () => {
    const result = lookupMobileOperator("+23277123456");
    // Fully typed result with IntelliSense support
  };
  
  return <div>{/* Your component */}</div>;
}
```
## Response Format

### Success Response
The function returns an object with the following fields when successful:

| Field | Type | Description |
| -------- | -------- | -------- |
| `company` | `string` | Name of the telecom operator |
| `mobile_money` | `string` | Name of the mobile money service |
| `slug` | `string` | URL-friendly slug for the mobile money service |
| `country_code` | `string` | The country code of the number (e.g., "+232") |
| `monime_code` | `string` | Unique identifier for Monime integration |

### Error Response
If the phone number is invalid or the operator is not found, it returns:

```typescript
{ "error": "Invalid phone number" }      // Invalid format
{ "error": "Country not supported" }     // Unsupported country
{ "error": "Operator not found" }        // Valid number, unknown operator
```

### Type Definitions

```typescript
// Available types for import
import type { 
  MobileOperatorResult,  // Union of success and error types
  LookupSuccess,         // Success response interface
  LookupError,          // Error response interface
  Operator,             // Operator data interface
  Country              // Country data interface
} from 'mobile-operator-lookup';

// Type guards for runtime checking
import { isLookupSuccess, isLookupError } from 'mobile-operator-lookup';
```

## Supported Countries
 - Sierra Leone (+232) – Orange, Africell, Qcell
 - More countries coming soon!

## Contributing
Contributions are welcome! Feel free to submit issues and pull requests.

