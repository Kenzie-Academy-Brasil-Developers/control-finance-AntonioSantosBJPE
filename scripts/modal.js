/* Desenvolva sua lógica aqui */
function openCloseModal () {
    let modal = document.querySelector(".modal-wrap-app")
    modal.classList.toggle("show-modal")
}

function eventShowCloseModal () {
    let btnOpenModal = document.getElementById("btn-register-new-value")
    let btnCloseModal = document.getElementById("btn-modal-close")

    btnOpenModal.addEventListener("click",function(event){
        openCloseModal ()
    })
    btnCloseModal.addEventListener("click",function(event){
        openCloseModal ()
    })
}


