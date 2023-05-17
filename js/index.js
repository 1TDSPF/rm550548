const btn = document.getElementById("meu-btn")

btn.addEventListener("click", function(){
    

    let r, g, b;

    r = Math.round(Math.random()*255)
    g = Math.round(Math.random()*255)
    b = Math.round(Math.random()*255)

    btn.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b});`);

})

// DESAFIO
//Recupere o elemento tit-sec e atrele a ele um evento de mouse a sua escolha.
//Altere a cor de fundo e a cor do texto quando o evento ocorrer

let tit_sec = document.querySelector(".tit-sec")
console.log(tit_sec)

tit_sec.addEventListener("mouseover", function(){
    tit_sec.setAttribute("style", "background-color: red")
})
