function createItemList (indexArray, currentFilter){
    let ul = document.querySelector(".list-of-values")
    
        let li = document.createElement("li")
        ul.appendChild(li)
        li.classList = "list-of-values-items flex justify-between items-center"

            let divItemsValue = document.createElement("div")
            li.appendChild(divItemsValue)
            divItemsValue.classList = "list-of-values-items-value"

                let p = document.createElement("p")
                divItemsValue.appendChild(p)
                p.classList = "list-of-values-items-value-text"
                p.innerText = insertedValues[indexArray].value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
            
            let divItemsButtons = document.createElement("div")
            li.appendChild(divItemsButtons)
            divItemsButtons.classList = "list-of-values-items-buttons flex items-center "

                let buttonEntry = document.createElement("button")
                divItemsButtons.appendChild(buttonEntry)
                buttonEntry.classList = "btn-standard btn-tag bg-color-grey-4 text-color-grey-2"
                if (insertedValues[indexArray].categoryID === 0){
                    buttonEntry.innerText = "Entrada" 
                }else{
                    buttonEntry.innerText = "Saída" 
                }
                

                let buttonDelete = document.createElement("button")
                divItemsButtons.appendChild(buttonDelete)
                buttonDelete.classList = "btn-icon bg-color-white"

                    let imgDelete = document.createElement("img")
                    buttonDelete.appendChild(imgDelete)
                    imgDelete.src = "/assets/trash.svg"

                        buttonDelete.addEventListener("click", function(){
                            
                            deleteItemList(indexArray,currentFilter)
                            
                        })
}

function createEventFilters (){
    
    let btnAll = document.getElementById("btn-section-financial-all")
    let btnEntries = document.getElementById("btn-section-financial-money-entries")
    let btnOut = document.getElementById("btn-section-financial-money-out")

    btnAll.addEventListener("click", function(){
        deleteListEntries()
        renderArray(2)
    })

    btnEntries.addEventListener("click", function(){
        deleteListEntries()
        renderArray(0)
    })

    btnOut.addEventListener("click", function(){
        deleteListEntries()
        renderArray(1)
    })

}

function createListVoid (filterText){

    let section = document.querySelector(".section-list-of-values")

        let divListOfVoid = document.createElement("div")
        section.appendChild(divListOfVoid)
        divListOfVoid.classList = "container list-of-values-void"

            let divBody =document.createElement("div")
            divListOfVoid.appendChild(divBody)
            divBody.classList = "list-of-values-void-body flex flex-col justify-around items-center"
               
                let h3 = document.createElement("h3")
                divBody.appendChild(h3)
                h3.classList = "list-of-values-void-body-title-up"
                h3.innerText = filterText

                let h4 = document.createElement("h4")
                divBody.appendChild(h4)
                h4.classList = "list-of-values-void-body-title-down"
                h4.innerText = "Registrar novo valor"


}

function createButtonsfilters (activatedFilter) {

    let section = document.querySelector(".section-financial-summary")

        let divButtons = document.createElement("div")
        section.appendChild(divButtons)
        divButtons.classList = "section-financial-summary-buttons flex"

            let btnAll = document.createElement("button")
            divButtons.appendChild(btnAll)
            btnAll.classList = "btn-standard text-color-grey-2 bg-color-white btn-outline"
            btnAll.id = "btn-section-financial-all"
            btnAll.innerText = "Todos"

            let btnEntries = document.createElement("button")
            divButtons.appendChild(btnEntries)
            btnEntries.classList = "btn-standard text-color-grey-2 bg-color-white btn-outline"
            btnEntries.id = "btn-section-financial-money-entries"
            btnEntries.innerText = "Entradas"

            let btnOut = document.createElement("button")
            divButtons.appendChild(btnOut)
            btnOut.classList = "btn-standard text-color-grey-2 bg-color-white btn-outline"
            btnOut.id = "btn-section-financial-money-out"
            btnOut.innerText = "Saídas"

            if(activatedFilter===0){
                btnEntries.classList.toggle("btn-outline-activated")
            } else if (activatedFilter===1){
                btnOut.classList.toggle("btn-outline-activated")
            } else if (activatedFilter===2){
                btnAll.classList.toggle("btn-outline-activated")
            }

}