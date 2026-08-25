fetch("https://sheetdb.io/api/v1/j34sgiygc0i3k")
  .then(response => response.json())
  .then(data => {

    const inventario = document.getElementById("inventario");

    data.forEach(bolo => {

      const card = document.createElement("div");

      card.classList.add("item");

      card.innerHTML = `
        <h2>${bolo.Nome}</h2>
        <p>Preço: R$ ${bolo.Preço}</p>
        <p>Estoque: ${bolo.Estoque}</p>
        <button>
          ${Number(bolo.Estoque) > 0 ? "✅ Disponível" : "❌ Esgotado"}
        </button>
      `;

      inventario.appendChild(card);

    });

  })
  .catch(error => {
    console.error("Erro ao buscar dados:", error);
  });