import { parsePhoneNumber } from 'libphonenumber-js';
import { telecomProviders } from './data.js';
import type { MobileOperatorResult, LookupSuccess, LookupError } from './types.js';

/**
 * Looks up mobile operator information for a given phone number
 * 
 * @param phoneNumber - The phone number to look up (with or without country code)
 * @returns Object containing operator information or error details
 * 
 * @example
 * ```typescript
 * import { lookupMobileOperator } from 'mobile-operator-lookup';
 * 
 * const result = lookupMobileOperator("+23277123456");
 * if ('error' in result) {
 *   console.log('Error:', result.error);
 * } else {
 *   console.log('Operator:', result.company);
 *   console.log('Mobile Money:', result.mobile_money);
 * }
 * ```
 */
export function lookupMobileOperator(phoneNumber: string): MobileOperatorResult {
  try {
    const parsedNumber = parsePhoneNumber(phoneNumber);
    
    if (!parsedNumber || !parsedNumber.isValid()) {
      const errorResult: LookupError = { error: "Invalid phone number" };
      return errorResult;
    }

    const countryCode = `+${parsedNumber.countryCallingCode}`;
    const nationalNumber = parsedNumber.nationalNumber;
    
    const countryData = telecomProviders.find(country => country.country_code === countryCode);

    if (!countryData) {
      const errorResult: LookupError = { error: "Country not supported" };
      return errorResult;
    }

    const operator = countryData.operators.find(op => 
      op.prefix.some(prefix => nationalNumber.startsWith(prefix))
    );

    if (!operator) {
      const errorResult: LookupError = { error: "Operator not found" };
      return errorResult;
    }

    const successResult: LookupSuccess = {
      company: operator.company,
      mobile_money: operator.m_money,
      slug: operator.slug,
      country_code: countryCode,
      monime_code: operator.monime_code
    };
    
    return successResult;
  } catch (error) {
    const errorResult: LookupError = { 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    };
    return errorResult;
  }
}

// Export types for consumers
export type { 
  MobileOperatorResult, 
  LookupSuccess, 
  LookupError, 
  Operator, 
  Country 
} from './types.js';

export { isLookupSuccess, isLookupError } from './types.js';
export { telecomProviders } from './data.js';

// Default export for backward compatibility
export default lookupMobileOperator;