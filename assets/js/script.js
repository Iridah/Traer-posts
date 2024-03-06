/*fetch*/
const requestOptions = {
    method: "GET",
    redirect: "follow"
    };

fetch("https://jsonplaceholder.typicode.com/posts?limit=20", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    /*event listener*/
const boton = document.getElementById('btn0').addEventListener("click", function(){
/*funcion traer(?)*/
    setTimeout (() => {
        alert("Cargando informacion, un momento...");
    }, 100);
    setTimeout(() => {
       resolve(result); 
    }, 3000);
});

async function getResultado (){
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const resultado = await fetch(url);
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    };
};

/*menu ul(?)*/
const menuList = document.querySelector("#list");
let menuItems = [];
function renderUpdateList(list, target) {
    target.textContent = "";
    menuItems = [];
    list.forEach((value, index) => {
        const myLi = document.createElement("li");
        myLi.textContent = value;
        myLi.dataset.key = index;
        if (value === undefined)
            myLi.classList.add(classZone);
            myLi.style.display = "none";
        target.appendChild(myLi);
        menuItems.push(myLi);
    });
}




// const doAsyncStuffWithCallback = () => {
//     const resultado =
//     return setTimeout(() => {
//         callback()
//     }, 500)
// }