function getCustomerData(id) {
  return {
    id,
    name: "Acme Corp",
    plan: "enterprise",
    apiKey: "ISLAND-DEMO-API-KEY-123456"
  };
}

module.exports = { getCustomerData };
