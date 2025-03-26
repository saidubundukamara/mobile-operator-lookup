const telecomProviders = [
    {
      country: "Sierra Leone",
      country_code: "+232",
      operators: [
        { prefix: ["74", "75", "76", "78", "79"], company: "Orange", m_money: "Orange Money", slug: "orange-money" },
        { prefix: ["88", "77", "90", "99", "30", "33"], company: "Africell", m_money: "Afrimoney", slug: "afrimoney" },
        { prefix: ["31", "34"], company: "Qcell", m_money: "Qcell Money", slug: "qcell-money" }
      ]
    },
    // Add more countries and operators as needed
  ];
  
  module.exports = telecomProviders;
  