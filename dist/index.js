"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  isLookupError: () => isLookupError,
  isLookupSuccess: () => isLookupSuccess,
  lookupMobileOperator: () => lookupMobileOperator,
  telecomProviders: () => telecomProviders
});
module.exports = __toCommonJS(index_exports);
var import_libphonenumber_js = require("libphonenumber-js");

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
    const parsedNumber = (0, import_libphonenumber_js.parsePhoneNumber)(phoneNumber);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  isLookupError,
  isLookupSuccess,
  lookupMobileOperator,
  telecomProviders
});
//# sourceMappingURL=index.js.map