export const getSampleCode = (language) => {
  const samples = {
    json: `{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "hobbies": ["reading", "swimming", "coding"],
  "address": {
    "street": "123 Main St",
    "zipcode": "10001"
  },
  "isActive": true
}`,

    javascript: `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

const cart = [
  { name: "Laptop", price: 999.99, quantity: 1 },
  { name: "Mouse", price: 29.99, quantity: 2 }
];

console.log("Total:", calculateTotal(cart));`,

    css: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  max-width: 400px;
}

.card h2 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}`,

    sql: `SELECT u.id, u.name, u.email, p.title as post_title, p.created_at
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.status = 'active'
AND p.published = true
ORDER BY p.created_at DESC
LIMIT 10;

UPDATE users 
SET last_login = NOW(), 
    login_count = login_count + 1 
WHERE id = 123;`,

    xml: `<?xml version="1.0" encoding="UTF-8"?>
<catalog>
  <book id="1">
    <title>The Great Gatsby</title>
    <author>F. Scott Fitzgerald</author>
    <genre>Fiction</genre>
    <price currency="USD">12.99</price>
    <published>1925</published>
    <description>A classic American novel set in the Jazz Age.</description>
  </book>
  <book id="2">
    <title>To Kill a Mockingbird</title>
    <author>Harper Lee</author>
    <genre>Fiction</genre>
    <price currency="USD">14.99</price>
    <published>1960</published>
  </book>
</catalog>`
  };

  return samples[language] || '';
};