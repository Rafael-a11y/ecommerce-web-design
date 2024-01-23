let ancoraDried = document.querySelector(".ancora-dried");
ancoraDried.addEventListener("cliqueAncoraDried", () =>
{
    console.log("evento capturado com suscesso");
});

ancoraDried.addEventListener("click", () =>
{
    const eventoClique = new CustomEvent("cliqueAncoraDried");
    ancoraDried.dispatchEvent(eventoClique);
    console.log(ancoraDried);
    console.log("Evento Dried despachado");
    
});

