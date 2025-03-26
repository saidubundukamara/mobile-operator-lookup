const libphonenumber = require("libphonenumber-js");
const telecomProviders = require("./data");

function lookupMobileOperator(phoneNumber) {
    const parsedNumber = libphonenumber.parsePhoneNumber(phoneNumber);
    
    if (!parsedNumber || !parsedNumber.isValid()) {
      return { error: "Invalid phone number" };
    }
  
    const countryCode = `+${parsedNumber.countryCallingCode}`;
    const nationalNumber = parsedNumber.nationalNumber;
    
    const countryData = telecomProviders.find(country => country.country_code === countryCode);
  
    if (!countryData) {
      return { error: "Country not supported" };
    }
  
    const operator = countryData.operators.find(op => 
      op.prefix.some(prefix => nationalNumber.startsWith(prefix))
    );
  
    if (!operator) {
      return { error: "Operator not found" };
    }
  
    return {
      company: operator.company,
      mobile_money: operator.m_money,
      slug: operator.slug,
      country_code: countryCode,
      monime_code: operator.monime_code
    };
  }
  
  module.exports = lookupMobileOperator;