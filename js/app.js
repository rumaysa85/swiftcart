function displayProducts(products){
  productContainer.innerHTML = products.map(p => `
    <div class="bg-white rounded-2xl shadow hover:shadow-lg transition p-5 flex flex-col">
      
      <img src="${p.image}" 
        class="h-40 object-contain mb-4 mx-auto">

      <h3 class="font-semibold text-lg mb-2">
        ${p.title.slice(0,40)}...
      </h3>

      <p class="text-indigo-600 font-bold mb-2">$${p.price}</p>
      <p class="text-sm text-gray-500 mb-2">${p.category}</p>
      <p class="text-yellow-500 text-sm mb-4">⭐ ${p.rating.rate}</p>

      <div class="mt-auto flex gap-2">
        <button onclick="showDetails(${p.id})"
          class="flex-1 bg-gray-200 py-2 rounded-lg hover:bg-gray-300 transition">
          Details
        </button>

        <button onclick='addToCart(${JSON.stringify(p)})'
          class="flex-1 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          Add
        </button>
      </div>

    </div>
  `).join("");
}
