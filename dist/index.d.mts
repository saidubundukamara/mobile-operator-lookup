interface Operator {
    prefix: string[];
    company: string;
    m_money: string;
    slug: string;
    monime_code: string;
}
interface Country {
    country: string;
    country_code: string;
    operators: Operator[];
}
interface LookupSuccess {
    company: string;
    mobile_money: string;
    slug: string;
    country_code: string;
    monime_code: string;
}
interface LookupError {
    error: string;
}
type MobileOperatorResult = LookupSuccess | LookupError;
declare function isLookupSuccess(result: MobileOperatorResult): result is LookupSuccess;
declare function isLookupError(result: MobileOperatorResult): result is LookupError;

declare const telecomProviders: readonly Country[];

declare function lookupMobileOperator(phoneNumber: string): MobileOperatorResult;

export { type Country, type LookupError, type LookupSuccess, type MobileOperatorResult, type Operator, lookupMobileOperator as default, isLookupError, isLookupSuccess, lookupMobileOperator, telecomProviders };
