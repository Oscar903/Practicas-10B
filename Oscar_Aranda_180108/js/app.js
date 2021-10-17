if ('serviceWorker' in navigator){

    window.addEventListener("load", ()=>{

        navigator.serviceWorker.register("../service-worker.js").
        then((data)=>{
            console.log('data then :>>', data);
        }).catch((data)=>{
            console.log('data catch :>>', data);
    })
}); 
}

