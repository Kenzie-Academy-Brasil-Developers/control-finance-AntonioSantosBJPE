/* Desenvolva sua lógica aqui */
function openCloseModal () {
    let modal = document.querySelector(".modal-wrap-app")
    modal.classList.toggle("show-modal")
    // voltando para default os valores das variaveis que são utilizadas na logica de seleção do tipo de entrada
    typeOfEntry = null
    ClickBtnEntry = false
    ClickBtnOut = false
}

function eventShowCloseModal () {
    let btnOpenModal = document.getElementById("btn-register-new-value")
    let btnCloseModal = document.getElementById("btn-modal-close")

    btnOpenModal.addEventListener("click",function(event){
        openCloseModal ()
    })
    btnCloseModal.addEventListener("click",function(event){
        openCloseModal ()
        // limpando o input do modal sempre que o modal for fechado
        let input = document.querySelector("#modal-input")
        input.value=""
        // limpando a seleção do tipo de valor ao fechar o modal
        let btnOut = document.querySelector("#btn-value-type-out")
        let btnEntry = document.querySelector("#btn-value-type-entry")

        if (btnEntry.classList[4]==="btn-outline-activated"){
            btnEntry.classList.toggle("btn-outline-activated")
        }
        if (btnOut.classList[4]==="btn-outline-activated"){
            btnOut.classList.toggle("btn-outline-activated")
        }
    })
}


