async function fetchData() {

  const response = await fetch("https://data.mongodb-api.com/app/YOUR_APP_ID/endpoint/data/v1/action/find", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": "YOUR_DATA_API_KEY"
    },
    body: JSON.stringify({
      dataSource: "Cluster0",
      database: "cloudDB",
      collection: "products",
      filter: {}
    })
  });

  const result = await response.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  result.documents.forEach(item => {
    list.innerHTML += `
      <li>${item.name} - ₹${item.price} - Stock: ${item.stock}</li>
    `;
  });
}