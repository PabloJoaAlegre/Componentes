(function(){
    const botonAbrir = document.querySelector(".abre-ventana");
    const botonCerrar = document.querySelector(".ventana__cierra-ventana")
    const ventanaEl = document.querySelector(".ventana");
    
    botonAbrir.addEventListener("click",()=>{
        ventanaEl.style.display="inherit";
    })

    botonCerrar.addEventListener("click", ()=>{
        ventanaEl.style.display="none";
    })
})();