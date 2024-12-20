import "./style.css";

import "./swiper.js";

import "animate.css";

if (
  localStorage.getItem("consentimientoCookies") === "rechazado" ||
  !localStorage.getItem("consentimientoCookies")
) {
  document.getElementById("avisoCokkies").style.display = "block";
}

document.getElementById("aceptCookie").addEventListener("click", function () {
  console.log("acepte cookkies");
  //   Guarda el consentimiento del usuario en el almacenamiento local
  gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
  });
  localStorage.setItem("consentimientoCookies", "aceptado");

  let avisoCokkies = document.getElementById("avisoCokkies");

  avisoCokkies.classList.add("animate__backOutRight");

  avisoCokkies.addEventListener("animationend", function () {
    avisoCookies.style.display = "none";
  });
});

document.getElementById("closecookie").addEventListener("click", function () {
  // console.log('close cookie');
  gtag("consent", "update", {
    ad_storage: "denied",
    analytics_storage: "denied",
  });
  // Guarda el consentimiento del usuario en el almacenamiento local
  localStorage.setItem("consentimientoCookies", "rechazado");

  let avisoCookies = document.getElementById("avisoCokkies");

  avisoCookies.classList.add("animate__backOutRight");
  // Oculta el aviso de cookies
  //  document.getElementById('avisoCokkies').style.display = 'none';
  avisoCokkies.addEventListener("animationend", function () {
    avisoCookies.style.display = "none";
  });
});

let animeteNavLogo = document.getElementById("animateNavLogo");

if (animeteNavLogo) {
  animeteNavLogo.addEventListener("mouseover", function () {
    animeteNavLogo.classList.add("animate__slideOutRight");

    animeteNavLogo.addEventListener("animationend", function () {
      animeteNavLogo.classList.remove("animate__slideOutRight");
      animeteNavLogo.classList.add("animate__slideInLeft");
    });
  });
}

let animationLogo = document.getElementById("logoAnimation");

if (animationLogo) {
  animationLogo.addEventListener("mouseover", function () {
    animationLogo.classList.add("animate__headShake");
  });

  animationLogo.addEventListener("mouseout", function () {
    animationLogo.classList.remove("animate__headShake");
    animationLogo.classList.remove("animate__bounce");
  });
}

window.onload = () => {
    const logo = document.getElementById("logScreen");

  // Función para alternar las animaciones
  function animateLogo() {
    // Cambia a animate__lightSpeedOutRight después de 1 segundo
    setTimeout(() => {
      logo.classList.remove("animate__lightSpeedInLeft");
      logo.classList.add("animate__lightSpeedOutRight");
    }, 1000);
  }

  // Repite el ciclo de animación
  setInterval(animateLogo, 1000);

  const splash = document.getElementById("splash");
  const content = document.getElementById("content");

  // Retrasar un poco la transición del splash screen (opcional)
  setTimeout(() => {
    splash.classList.add("hidden"); // Oculta el splash screen
    content.classList.remove("hidden"); // Muestra el contenido principal
  }, 3000); // 2 segundos
};
