import"./main-TgB8TQMn.js";const A="modulepreload",L=function(a){return"/PapeleriaGatonio/"+a},b={},e=function(p,m,c){let l=Promise.resolve();if(m&&m.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),n=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));l=Promise.all(m.map(r=>{if(r=L(r),r in b)return;b[r]=!0;const o=r.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${u}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":A,o||(i.as="script",i.crossOrigin=""),i.href=r,n&&i.setAttribute("nonce",n),document.head.appendChild(i),o)return new Promise((g,d)=>{i.addEventListener("load",g),i.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})}))}return l.then(()=>p()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})};let v=[{nombre:"Lapiz Metrico DIXON n°2",precio:7,get img(){return e(()=>import("./lapiz-metrico-DIXON-2-224x224-DDC2dU7L.js"),[])}},{nombre:"Pluma punto fino blazor tinta azul",precio:8,get img(){return e(()=>import("./Pluma-punto-fino-blazor-tinta-az-CxH-HAs9.js"),[])}},{nombre:"Pluma punto fino blazor tinta negra",precio:8,get img(){return e(()=>import("./Pluma-punto-fino-blazor-tinta-ne-Dl2EwNTb.js"),[])}},{nombre:"Pluma punto fino blazor tinta roja",precio:8,get img(){return e(()=>import("./Pluma-punto-fino-blazor-tinta-ro-DXkibsNY.js"),[])}},{nombre:"Borrador pelikan ws 60",precio:3,get img(){return e(()=>import("./goma-plastica-ws-60-pelikan-CR-jkkRg.js"),[])}},{nombre:"Corrector de pluma SMART",precio:21,get img(){return e(()=>import("./Corrector-pluma-224-DB2VaKM_.js"),[])}},{nombre:"Cuaderno profecional SWING cuadros",precio:22,get img(){return e(()=>import("./Cuaderno-profecional-SWING-cuadr-BLKf8xqv.js"),[])}},{nombre:"Cuaderno profecional SWING rayas",precio:22,get img(){return e(()=>import("./Cuaderno-profecional-SWING-rayas-CwiEvqA3.js"),[])}},{nombre:"Pegamento liquido fix up 30g ",precio:6,get img(){return e(()=>import("./Pegamento-liquido-fix-up-30g-NwCZtcwf.js"),[])}},{nombre:"Reglas palticas 30cm REAN",precio:6,get img(){return e(()=>import("./Reglas-palticas-30cm-2-1-DkjlWKjn.js"),[])}},{nombre:"Tijeras escolares pekes '5.",precio:15,get img(){return e(()=>import("./Tijeras-escolares-pekes-5-qWabRCa_.js"),[])}},{nombre:"Cuaderno grapado italiano cuadros",precio:22,get img(){return e(()=>import("./Cuaderno-grapado-italiano-cuadro-BzdPOaFx.js"),[])}},{nombre:"Cuaderno grapado italiano rayas",precio:22,get img(){return e(()=>import("./Cuaderno-grapado-italiano-rayas-Bd5NKF8e.js"),[])}},{nombre:"Pegamento adhesivo Dixon 8g",precio:12,get img(){return e(()=>import("./Pegamento-adhesivo-Dixon-8g-2-BxlA07SV.js"),[])}},{nombre:"Papel bond C7",precio:5,get img(){return e(()=>import("./Pape-bond-C7-CIt0PyC7.js"),[])}},{nombre:"Hojas de color tamaño carta",precio:2,get img(){return e(()=>import("./Hojas-de-color-tamaño-carta-KgVABklJ.js"),[])}},{nombre:" Folder tamaño carta color crema",precio:5,get img(){return e(()=>import("./Folder-tamaño-carta-color-crema-D4cKp_6s.js"),[])}},{nombre:"Hojas blancas tamaño carta",precio:1,get img(){return e(()=>import("./Hojas-blancas-tamaño-carta-CF0t-Xbs.js"),[])}}],f=document.getElementById("myModal"),s=document.getElementById("modaContent"),I=document.getElementById("closeModal"),_=!1;I.onclick=function(){h()};f.addEventListener("click",function(a){s.contains(a.target)||h()});function h(){s.classList.remove("animate__backInUp"),s.classList.add("animate__backOutDown"),_=!1,s.addEventListener("animationend",function(){console.log("add hiiden: "+_),_||f.classList.add("hidden")})}let y=document.getElementById("sectionArt");v.forEach((a,p)=>{let m=document.createElement("article");m.className="flex flex-col justify-center items-center rounded shadow-lg hover:scale-105 ease-in transition-transform";let c=document.createElement("img");c.className="hover:scale-105 ease-in transition-transform p-2 w-56 h-56",a.img.then(u=>{c.src=u.default}),c.alt=a.nombre,c.loading="lazy";let l=document.createElement("div");l.className="p-2 flex flex-col w-full p-2 justify-center items-center";let t=document.createElement("p");t.className="font-normal text-justify text-sm ",t.innerText=a.nombre;let n=document.createElement("p");n.className="font-normal text-justify text-sm",n.innerText=`$${a.precio} pz`;let r=document.createElement("div");r.className="flex justify-end w-full";let o=document.createElement("button");o.className=" shadow-sm hover:text-whithe hover:bg-science-blue-500 rounded-lg text-sm px-5 py-1 me-2 mb-2  focus:border-orange",o.innerText="Ver mas",o.setAttribute("data-index",p),o.type="button",o.addEventListener("click",function(){let u=this.getAttribute("data-index"),i=document.getElementById("tituloArt"),g=document.getElementById("preiceArt"),d=v[u];d.img.then(P=>{let E=document.getElementById("imgArt");E.src=P.default,E.alt=d.nombre,E.loading="lazy"}),f.classList.remove("hidden"),s.classList.remove("animate__backOutDown"),s.classList.add("animate__backInUp"),i.innerText=d.nombre,g.innerText=`$${d.precio} pz`,_=!0}),r.appendChild(o),l.appendChild(t),l.appendChild(n),l.appendChild(r),m.appendChild(c),m.appendChild(l),y.appendChild(m)});