document.querySelector(".child").addEventListener
("click", (e) =>{
    e.stopPropagation
    alert("I am a child");
})

document.querySelector(".childcon").addEventListener
("click", (e) =>{
    e.stopPropagation
    alert("I am not a child");
})

document.querySelector(".con").addEventListener
("click", (e) =>{
    e.stopPropagation
    alert("I am a man");
})

function getco(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 300);
    let val3 = Math.ceil(0 + Math.random()* 100) ;
    return `rgb(${val1}, ${val2} , ${val3})`
}
setInterval(() => {
    document.querySelector(".child").style.background = getco();
}, 1000);