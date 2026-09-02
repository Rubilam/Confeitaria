const API_URL = "https://sheetdb.io/api/v1/j34sgiygc0i3k";

let bolos = [];

// Função para desenhar os cards
function renderizarBolos(lista) {

    const inventario = document.getElementById("inventario");

    inventario.innerHTML = "";

    lista.forEach(bolo => {

        const card = document.createElement("div");

        card.classList.add("item");

        card.innerHTML = `
            <h2>${bolo.Nome}</h2>
            <p>Preço: R$ ${bolo["Preço"]}</p>
            <p>Em estoque: ${bolo.Estoque}</p>
            <button>
                ${Number(bolo.Estoque) > 0
                    ? "✅ Disponível"
                    : "❌ Esgotado"}
            </button>
        `;

        inventario.appendChild(card);

    });
}

// Busca os dados da API
fetch(API_URL)
    .then(response => response.json())
    .then(data => {

        bolos = data;

        renderizarBolos(bolos);

        const pesquisa = document.getElementById("pesquisa");

        pesquisa.addEventListener("input", () => {

            const termo = pesquisa.value.toLowerCase();

            const resultado = bolos.filter(bolo =>
                bolo.Nome.toLowerCase().includes(termo)
            );

            renderizarBolos(resultado);

        });

    })
    .catch(error => {
        console.error("Erro ao buscar dados:", error);
    });