/**
 * Represents a telecom operator with associated mobile money service
 */
export interface Operator {
  /** Array of mobile number prefixes for this operator */
  prefix: string[];
  /** Name of the telecom company */
  company: string;
  /** Name of the mobile money service */
  m_money: string;
  /** URL-friendly slug for the mobile money service */
  slug: string;
  /** Unique identifier for Monime integration */
  monime_code: string;
}

/**
 * Represents a country with its operators and metadata
 */
export interface Country {
  /** Human-readable country name */
  country: string;
  /** International dialing code (e.g., "+232") */
  country_code: string;
  /** Array of telecom operators in this country */
  operators: Operator[];
}

/**
 * Successful lookup result containing operator information
 */
export interface LookupSuccess {
  /** Name of the telecom company */
  company: string;
  /** Name of the mobile money service */
  mobile_money: string;
  /** URL-friendly slug for the mobile money service */
  slug: string;
  /** International dialing code */
  country_code: string;
  /** Unique identifier for Monime integration */
  monime_code: string;
}

/**
 * Error result when lookup fails
 */
export interface LookupError {
  /** Error message describing why the lookup failed */
  error: string;
}

/**
 * Union type representing all possible return values from mobile operator lookup
 */
export type MobileOperatorResult = LookupSuccess | LookupError;

/**
 * Type guard to check if result is a successful lookup
 */
export function isLookupSuccess(result: MobileOperatorResult): result is LookupSuccess {
  return !('error' in result);
}

/**
 * Type guard to check if result is an error
 */
export function isLookupError(result: MobileOperatorResult): result is LookupError {
  return 'error' in result;
}