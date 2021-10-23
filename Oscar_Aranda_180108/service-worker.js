
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

self.addEventListener("fetch", (eventFetch)=>{
//solo va a responder lo que se encuentra en cache
//eventFecth.respondWith(
  //  caches.match(eventFecth.request)
//)
//eventFetch.respondWith(fetch(eventFetch.request)
//);
//cache first: Primero se va a buscar las peticiones al cache y si no estan se va a la red
/*const res = caches.match(eventFetch.request)
.then(cacheResponse=>{
    return cacheResponse;
    if (cacheResponse) 
    {
    return(cacheResponse)    
    }else{
        return fetch(eventFetch.request)
    }
    return cacheResponse ? cacheResponse : fetch(eventFetch.request)
})
.catch(cacheError=>{
console.error('Catch Error', cacheError);
});
eventFetch.respondWith(res);*/
//Network First: Primero hace un fetch a buscar en la red si no busca en el cache
const res = fetch(eventFetch.request)
.then(networkResponse=>{
    return networkResponse;
    if (networkResponse) 
    {
    return(cacheResponse)    
    }else{
        return caches.match(eventFetch.request)
    }
    return networkResponse ? networkResponse : caches.match(eventFetch.request)
})
.catch(networkError=>{
console.error('Network Error', networkError);
});
eventFetch.respondWith(res)

})
//function handleEror(){    
//}


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





