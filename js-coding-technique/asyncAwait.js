// Best Practice
async function getAddress() {
  const streetAddress = await getStreetAddress();
  const city = await getCity();
  const state = await getState();
  const zip = await getZip();

  return `${streetAddress}, ${city}, ${state}, ${zip}`;
}

// Instated
async function getAddress() {
  let [streetAddress, city, state, zip] = await Promise.all([
    getStreetAddress(),
    getCity(),
    getState(),
    getZip(),
  ]);

  return `${streetAddress}, ${city}, ${state}, ${zip}`;
}
