let arrayArt = [
  {
    nombre: "Lapiz Metrico DIXON n°2",
    precio: 7,
    get img(){
      return import('../assets/img/Articulos/lapiz-metrico-DIXON-2-224x224.webp');
    }
  },
  {
    nombre: "Pluma punto fino blazor tinta azul",
    precio: 8,
    get img(){
      return import("../assets/img/Articulos/Pluma-punto-fino-blazor-tinta-az.webp");
    },
  },
  {
    nombre: "Pluma punto fino blazor tinta negra",
    precio: 8,
    get img(){
      return import("../assets/img/Articulos/Pluma-punto-fino-blazor-tinta-ne.webp");
    }
  },
  {
    nombre: "Pluma punto fino blazor tinta roja",
    precio: 8,
    get img(){
      return import("../assets/img/Articulos/Pluma-punto-fino-blazor-tinta-ro.webp");
    }
  },
  {
    nombre: "Borrador pelikan ws 60",
    precio: 3,
    get img(){
      return import("../assets/img/Articulos/goma-plastica-ws-60-pelikan.webp");
    }
  },
  {
    nombre: "Corrector de pluma SMART",
    precio: 21,
    get img(){
      return import("../assets/img/Articulos/Corrector-pluma-224.webp");
    }
  },
  {
    nombre: "Cuaderno profecional SWING cuadros",
    precio: 22,
    get img(){
      return import("../assets/img/Articulos/Cuaderno-profecional-SWING-cuadr.webp");
    }
  },
  {
    nombre: "Cuaderno profecional SWING rayas",
    precio: 22,
    get img(){
      return import("../assets/img/Articulos/Cuaderno-profecional-SWING-rayas.webp");
    }
  },
  {
    nombre: "Pegamento liquido fix up 30g ",
    precio: 6,
    get img(){
      return import("../assets/img/Articulos/Pegamento-liquido-fix-up-30g.webp");
    }
  },
  {
    nombre: "Reglas palticas 30cm REAN",
    precio: 6,
    get img(){
      return import("../assets/img/Articulos/Reglas-palticas-30cm-2-1.webp");
    }
  },
  {
    nombre: "Tijeras escolares pekes '5.",
    precio: 15,
    get img(){
      return import("../assets/img/Articulos/Tijeras-escolares-pekes-5.webp");
    }
  },
  {
    nombre: "Cuaderno grapado italiano cuadros",
    precio: 22,
    get img(){
      return import("../assets/img/Articulos/Cuaderno-grapado-italiano-cuadro.webp");
    }
  },
  {
    nombre: "Cuaderno grapado italiano rayas",
    precio: 22,
    get img(){
      return import("../assets/img/Articulos/Cuaderno-grapado-italiano-rayas.webp");
    }
  },
  {
    nombre: "Pegamento adhesivo Dixon 8g",
    precio: 12,
    get img(){
      return import("../assets/img/Articulos/Pegamento-adhesivo-Dixon-8g-2.webp");
    }
  },
  {
    nombre: "Papel bond C7",
    precio: 5,
    get img(){
      return import("../assets/img/Articulos/Pape-bond-C7.webp");
    }
  },
  {
    nombre: "Hojas de color tamaño carta",
    precio: 2,
    get img(){
      return import("../assets/img/Articulos/Hojas-de-color-tamaño-carta.webp");
    }
  },
  {
    nombre: " Folder tamaño carta color crema",
    precio: 5,
    get img(){
      return import("../assets/img/Articulos/Folder-tamaño-carta-color-crema.webp");
    }
  },
  {
    nombre: "Hojas blancas tamaño carta",
    precio: 1,
    get img(){
      return import("../assets/img/Articulos/Hojas-blancas-tamaño-carta.webp");
    }
  },
];

// Obtén el modal
let modal = document.getElementById("myModal");
let modalContent = document.getElementById("modaContent");

// Obtén el elemento que cierra el modal
let closemodal = document.getElementById("closeModal");

let modeModal = false;

// Cuando el usuario haga clic en <span> (x), cierra el modal
closemodal.onclick = function () {
  //   modal.classList.add("hidden");
  modalClose();
};

modal.addEventListener("click", function (event) {
  if (!modalContent.contains(event.target)) {
    // modal.classList.add("hidden");
    modalClose();
  }
});

function modalClose() {
  modalContent.classList.remove("animate__backInUp");
  modalContent.classList.add("animate__backOutDown");
  modeModal = false;
  modalContent.addEventListener("animationend", function () {
    console.log("add hiiden: " + modeModal);
    if (!modeModal) {
      modal.classList.add("hidden");
    }
  });
}

// crea los articulos para el html
let articles = document.getElementById("sectionArt");

arrayArt.forEach((object, index) => {
  let art = document.createElement("article");
  art.className = "flex flex-col justify-center items-center";

  //creo el contenedor para la imagen
  let img = document.createElement("img");
  img.className = "hover:scale-105 ease-in transition-transform p-2 w-56 h-56";
  object.img.then(imgURL =>{
    img.src = imgURL.default;
  });
  img.alt = object.nombre;
  img.loading = "lazy";

  let divfooter = document.createElement("div");
  divfooter.className = "p-2 flex flex-col w-full p-2 justify-center items-center";

  let PNombre = document.createElement("p");
  PNombre.className = "font-normal text-justify text-sm ";
  PNombre.innerText = object.nombre;

  let PPrecio = document.createElement("p");
  PPrecio.className = "font-normal text-justify text-sm";
  PPrecio.innerText = `$${object.precio} pz`;

  let divButton = document.createElement("div");
  divButton.className = "flex justify-end w-full";

  let button = document.createElement("button");
  button.className =
    "border-blue border hover:text-orange rounded-lg text-sm px-5 py-1 me-2 mb-2  focus:border-orange";
  button.innerText = "Ver mas";
  button.setAttribute("data-index", index);
  button.type = "button";
  // button.id = "buttonArtId";

  button.addEventListener("click", function () {
    let index = this.getAttribute("data-index");
    let tituloArt = document.getElementById("tituloArt");
    let priceArt = document.getElementById("preiceArt");
    let object = arrayArt[index];

    object.img.then(imgURL =>{
      let imgArt = document.getElementById("imgArt");
      imgArt.src = imgURL.default;
      imgArt.alt = object.nombre;
      imgArt.loading = "lazy";
    });
    
    modal.classList.remove("hidden");
    modalContent.classList.remove("animate__backOutDown");
    modalContent.classList.add("animate__backInUp");
    tituloArt.innerText = object.nombre;
    priceArt.innerText = `$${object.precio} pz`;

    // console.log(`${object.precio}`);
    modeModal = true;
  });

  divButton.appendChild(button);

  // se añade el nomre y el precio al div
  divfooter.appendChild(PNombre);
  divfooter.appendChild(PPrecio);
  divfooter.appendChild(divButton);

  //se alade la img y el div al article
  art.appendChild(img);
  art.appendChild(divfooter);

  // art.innerHTML =  `<button class="openModal" data-index="${index}">Ver más</button>`;
  articles.appendChild(art);
});
