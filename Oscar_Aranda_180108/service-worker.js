
self.addEventListener('install', result =>{

    let nameCache ='cache-peliculas'
    let files = [
        '/',
    '/index.html','css/style.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
    ]
    caches.open('nameCache')
    .then(cache =>{
        return cache.addAll(files)
    })
    .catch(()=>{
        console.log('algo salio mal')
    })
})

self.addEventListener("fetch", (eventFecth)=>{
//solo va a responder lo que se encuentra en cache
//eventFecth.respondWith(
  //  caches.match(eventFecth.request)
//)
eventFecth.respondWith(fetch(eventFecth.request)

);
})
/*self.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((param)=>{
            if(param){
                return param
            }
            return fetch(event.request)
        })
    )
})*/





