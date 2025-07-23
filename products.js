// Your /products route
app.get('/products', async (req, res) => {
  try {
    const aliExpressProducts = await fetchAliExpress();
    const spocketProducts = await fetchSpocket();
    const printfulProducts = await fetchPrintful();
    const allProducts = [...aliExpressProducts, ...spocketProducts, ...printfulProducts];
    res.json(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Function to fetch AliExpress products (replace with real API calls)
async function fetchAliExpress() {
  // Your API call logic here
  return [
    { id: 'a1', title: 'Ali Product 1', price: 10 },
    { id: 'a2', title: 'Ali Product 2', price: 20 }
  ];
}

// Function to fetch Spocket products (replace with real API calls)
async function fetchSpocket() {
  // Your API call logic here
  return [
    { id: 's1', title: 'Spocket Product 1', price: 15 },
    { id: 's2', title: 'Spocket Product 2', price: 25 }
  ];
}

// Function to fetch Printful products (replace with real API calls)
async function fetchPrintful() {
  // Your API call logic here
  return [
    { id: 'p1', title: 'Printful Product 1', price: 12 },
    { id: 'p2', title: 'Printful Product 2', price: 22 }
  ];
}
