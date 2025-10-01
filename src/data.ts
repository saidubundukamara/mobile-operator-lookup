import type { Country } from './types.js';

/**
 * Telecom providers data organized by country
 * Contains operator information including prefixes, company names, and mobile money services
 */
export const telecomProviders: readonly Country[] = [
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
  },
  // Add more countries and operators as needed
] as const;

export default telecomProviders;