 import './style.css';

 if(localStorage.getItem('consentimientoCookies') === 'rechazado' || !localStorage.getItem('consentimientoCookies')){
    document.getElementById('avisoCokkies').style.display = 'block';
 }
 
document.getElementById('aceptCookie').addEventListener('click',function(){
    // console.log('acepte cookkies');
     //Guarda el consentimiento del usuario en el almacenamiento local
     gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
      });
     localStorage.setItem('consentimientoCookies', 'aceptado');

    document.getElementById('avisoCokkies').style.display = 'none';
 });

 document.getElementById('closecookie').addEventListener('click',function(){
    // console.log('close cookie');
    gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      });
    // Guarda el consentimiento del usuario en el almacenamiento local
    localStorage.setItem('consentimientoCookies', 'rechazado');

    // Oculta el aviso de cookies
    document.getElementById('avisoCokkies').style.display = 'none';
 });