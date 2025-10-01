// src/index.ts
import { parsePhoneNumber } from "libphonenumber-js";

// src/data.ts
var telecomProviders = [
  {
    country: "Sierra Leone",
    country_code: "+232",
    operators: [
      {
        prefix: ["74", "75", "76", "78", "79"],
        company: "Orange",
        m_money: "Orange Money",
        slug: "orange-money",
        monime_code: "m17"
      },
      {
        prefix: ["88", "77", "90", "99", "30", "33"],
        company: "Africell",
        m_money: "Afrimoney",
        slug: "afrimoney",
        monime_code: "m18"
      },
      {
        prefix: ["31", "34"],
        company: "Qcell",
        m_money: "Qcell Money",
        slug: "qcell-money",
        monime_code: "m13"
      }
    ]
  }
  // Add more countries and operators as needed
];

// src/types.ts
function isLookupSuccess(result) {
  return !("error" in result);
}
function isLookupError(result) {
  return "error" in result;
}

// src/index.ts
function lookupMobileOperator(phoneNumber) {
  try {
    const parsedNumber = parsePhoneNumber(phoneNumber);
    if (!parsedNumber || !parsedNumber.isValid()) {
      const errorResult = { error: "Invalid phone number" };
      return errorResult;
    }
    const countryCode = `+${parsedNumber.countryCallingCode}`;
    const nationalNumber = parsedNumber.nationalNumber;
    const countryData = telecomProviders.find((country) => country.country_code === countryCode);
    if (!countryData) {
      const errorResult = { error: "Country not supported" };
      return errorResult;
    }
    const operator = countryData.operators.find(
      (op) => op.prefix.some((prefix) => nationalNumber.startsWith(prefix))
    );
    if (!operator) {
      const errorResult = { error: "Operator not found" };
      return errorResult;
    }
    const successResult = {
      company: operator.company,
      mobile_money: operator.m_money,
      slug: operator.slug,
      country_code: countryCode,
      monime_code: operator.monime_code
    };
    return successResult;
  } catch (error) {
    const errorResult = {
      error: error instanceof Error ? error.message : "Unknown error occurred"
    };
    return errorResult;
  }
}
var index_default = lookupMobileOperator;
export {
  index_default as default,
  isLookupError,
  isLookupSuccess,
  lookupMobileOperator,
  telecomProviders
};
//# sourceMappingURL=index.mjs.map