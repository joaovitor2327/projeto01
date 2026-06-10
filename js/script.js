let btnBunner = document.getElementById("button-banner");
btnBunner.addEventListener("click", () => {
  alert("Obrigado pelo interesse!");
  btnBunner.classList.remove("bg-red-600", "hover:bg-red-700");
  btnBunner.classList.add("bg-green-600");
  btnBunner.innerText = "Aguarde novidades";
});

//selecionar os botões de like
let buttonsLike = document.querySelectorAll("#cards .btn-like");
buttonsLike.forEach((button) => {
  console.log(button);
  //escutar o click do button
  button.addEventListener("click", () => {
    let spanlikeCount = button.querySelector(".like-count");

    let count = Number(spanlikeCount.innerText);
    count++;

    spanlikeCount.innerText = count;

    if (count > 0) {
      button.classList.remove("text-gray-500", "hover:text-red-500");
      button.classList.add("text-red-500", "hover:text-red-700");
    }
  });
});

const MENU_API = "../back-end/menu.js";

async function renderMenu() {
  let resposta = await fetch(MENU_API);
  console.log(resposta);

  let dadosMenu = await resposta.json();
  console.log(dadosMenu);

  let menuHTML = document.getElementById("menu");

  dadosMenu.forEach((itemMenu) => {
    console.log(itemMenu.title);

    if (itemMenu.active) {
      const opTarget = itemMenu.external ? 'target="_blank"' : "";

      menuHTML.innerHTML += `
    <div><a class="p-5 rounded-xl hover:bg-sky-400 hover:text-white transition duration-300"
               href="${itemMenu.link}">
                  ${itemMenu.title}
                            
            </a>
            </div>
    `;
    }
  });
}

renderMenu();
