/*event listener*/
const boton = document.getElementById('btn0').addEventListener("click", getResultado);
const menuList = document.getElementById("list");

/*funcion traer(?)*/
function tiempo (){
    setTimeout (() => {
        alert("Cargando informacion, un momento...");
    }, 10);
}

/*async y await*/
async function getResultado (){
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const resultado = await fetch(url);
        const data = await resultado.json()
        const limiter = data.slice(0,20);
        console.log(limiter)
        limiter.forEach(value =>{
            const myLi = document.createElement("li");
            const mytitle = document.createElement("h1");
            mytitle.textContent = value.title;
            myLi.appendChild(mytitle);
            const myBody = document.createElement('p');
            myBody.textContent = value.body;
            myLi.appendChild(myBody);
            menuList.appendChild(myLi);
        });
        tiempo(); 
    } catch (error) {
        console.log(error);
    };
};



