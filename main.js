//Service Worker
// if('serviceWorker' in navigator){
//     console.log('Puede usar los SW en tu navegador');
//     navigator.serviceWorker.register('./SW.js')
//                             .then(res=>console.log('serviceWorker cargando correctamente',res))
//                             .catch(err => console.log('serviceWorker no se ha podido registrar', err))
// }else{
//     console.log('NO PUEDE usar el SW en tu navegador');
// }

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('sw.js');
}