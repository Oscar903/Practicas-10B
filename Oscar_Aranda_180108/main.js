
    const URL = "https://www.omdbapi.com/?apikey=9ea37c31";
const xhr = new XMLHttpRequest();
const movie_img = "$";
const movie_titulo = "&";
const movie_des = "#";

const modelo = ' <div class="card">' +
                '<div class="icon" >' +
                    '<i class="fab fa-html5"></i> ' +
                    '<img src=" '+ movie_img +' " alt="">' +
                '</div>' +
                '</div>' +
                '</div>';
let lst_modelos = ""


const getTerror = () =>{
    return new Promise ((resolve, reject) => {
       
            fetch(URL + "&s=humor&page=1")
            .then((Response)=> Response.json())
            .then((movies) => { 
                resolve(movies);
                document.querySelector('#contenedor').innerHTML = cursor(movies);
            });       
    });

}

getTerror()
.then((modelos) => console.log(modelos)
);

function cursor(data){
    for (let i in data) {         
        for (let j in data[i]) {      
            if(data[i][j].Title){
                console.log(data[i][j].Title); 
                lst_modelos += modelo.replace("$", data[i][j].Poster)
                .replace("&", data[i][j].Title)
                .replace("#", data[i][j].Year)
            }          
        }
    }
    return lst_modelos;
}



