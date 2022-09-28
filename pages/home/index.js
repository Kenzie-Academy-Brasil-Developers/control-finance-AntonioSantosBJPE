/* Desenvolva sua lógica aqui */
let voidListScreen=false // utilizado na lógica de gerar os avisos de não existem items no filtro
// utilizados na lógica da seleção do tipo de valor do item registrado
let typeOfEntry = null 
let ClickBtnEntry = false
let ClickBtnOut = false
// --------------------------------------------------------------------
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
                p.innerText = `R$ ${insertedValues[indexArray].value}`
            
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

function renderArray (dataFilters){

    let somValues = 0
    let somValuesHtml = document.getElementById("section-sum-of-values-textsum") 
    
    let section = document.querySelector(".section-list-of-values")
    
    let ul = document.createElement("ul") 
    section.appendChild(ul)
    ul.classList = "container list-of-values flex flex-col"
       
        if (dataFilters===1 || dataFilters===0){
            insertedValues.forEach(function(element,index,array){
            
                if (dataFilters === array[index].categoryID){
                   
                    createItemList(index,dataFilters)
                    somValues+=array[index].value
                    
                } 
               
            })
            somValuesHtml.innerText = `R$ ${somValues}`
        }else {
                insertedValues.forEach(function(element,index,array){
                    createItemList(index,dataFilters)
                    somValues+=array[index].value
                })
                somValuesHtml.innerText = `R$ ${somValues}`
    
        }
        
        let ulVoid = document.querySelector(".list-of-values-void")
       
// da para simplificar esse codigo em uma function
            if (dataFilters===0 ){
                
                deleteButtonsfilters()
                createButtonsfilters(dataFilters)
                createEventFilters()

                if (somValues===0){
                    if (voidListScreen===false){
                        createListVoid ("Sem nenhum valor na categoria Entradas")
                        voidListScreen=true
                    } else{
                        ulVoid.remove()
                        createListVoid ("Sem nenhum valor na categoria Entradas")
                    }
                    
                } else{
                    if (voidListScreen===true){
                        voidListScreen=false
                        ulVoid.remove()
                    }
                }

            } else if (dataFilters===1 ){
               
                deleteButtonsfilters()
                createButtonsfilters(dataFilters)
                createEventFilters()

                if (somValues===0){
                    if (voidListScreen===false){
                        createListVoid ("Sem nenhum valor na categoria Saídas")
                        voidListScreen=true
                    } else{
                        ulVoid.remove()
                        createListVoid ("Sem nenhum valor na categoria Saídas")
                    }
                    
                } else{
                    if (voidListScreen===true){
                        voidListScreen=false
                        ulVoid.remove()
                    }
                }
                
            } else if (dataFilters===2 ){

                deleteButtonsfilters()
                createButtonsfilters(dataFilters)
                createEventFilters()

                if (somValues===0){
                    if (voidListScreen===false){
                        createListVoid ("Nenhum valor cadastrado")
                        voidListScreen=true
                    } else{
                        ulVoid.remove()
                        createListVoid ("Nenhum valor cadastrado")
                    }
                    
                } else{
                    if (voidListScreen===true){
                        voidListScreen=false
                        ulVoid.remove()
                    }
                }
                
                
            }  
  
}

function deleteListEntries (){
    let ul = document.querySelector(".list-of-values")
    ul.remove()
    document.getElementById("section-sum-of-values-textsum").innerText = "R$ 0.00"
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

function deleteItemList (indexDeleteArray,filter){

    insertedValues.splice(indexDeleteArray,1)
    deleteListEntries ()
    renderArray(filter)
}

function registerItem (){
    
    let input = document.querySelector("#modal-input")
    let btnOut = document.querySelector("#btn-value-type-out")
    let btnEntry = document.querySelector("#btn-value-type-entry")
    let btnCancel= document.querySelector(".btn-modal-cancel")
    let btnInsertValue= document.querySelector(".btn-modal-insert-value")
    let newId 

    // Lógica do funcionamente da seleção do tipo de valor do item registrado

    btnEntry.addEventListener("click",function(){
        
        if (ClickBtnEntry===false && ClickBtnOut===false){
            btnEntry.classList.add("btn-outline-activated") 
            ClickBtnEntry=true
            typeOfEntry = 0
        } else if (ClickBtnEntry===true && ClickBtnOut===false){
            btnEntry.classList.toggle("btn-outline-activated")
            ClickBtnEntry=false
            typeOfEntry = null
        } else if (ClickBtnEntry===false && ClickBtnOut===true){
            btnEntry.classList.add("btn-outline-activated") 
            btnOut.classList.toggle("btn-outline-activated")
            ClickBtnEntry=true
            ClickBtnOut =false
            typeOfEntry = 0
        }
        
    })

    btnOut.addEventListener("click",function(){
                
        if (ClickBtnOut===false && ClickBtnEntry===false ){
            btnOut.classList.add("btn-outline-activated") 
            ClickBtnOut=true
            typeOfEntry = 1
        } else if (ClickBtnOut===true && ClickBtnEntry===false){
            btnOut.classList.toggle("btn-outline-activated")
            ClickBtnOut=false
            typeOfEntry = null
        } else if (ClickBtnOut===false && ClickBtnEntry===true){
            btnOut.classList.add("btn-outline-activated") 
            btnEntry.classList.toggle("btn-outline-activated")
            ClickBtnOut =true
            ClickBtnEntry=false
            typeOfEntry = 1
        }

    })
    
    // ------------------------------------------------------------
    btnInsertValue.addEventListener("click", function(){
               
        if (typeOfEntry === null || input.value===null || input.value===""){
            alert("Dados inválidos")
        } else {
            
            if (insertedValues.length !==0){
                newId = insertedValues[insertedValues.length-1].id + 1
            } else {
                newId = 1
            }
            
            insertedValues.push({id:newId, value:Number((Number(input.value)).toFixed(1)) , categoryID:typeOfEntry})
            typeOfEntry=null
            input.value=""
            deleteListEntries()
            renderArray(2)
        }
        
    })


    btnCancel.addEventListener("click", function(){
            typeOfEntry=null
            input.value=""
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

function deleteButtonsfilters (){
    let divButtons = document.querySelector(".section-financial-summary-buttons")
    divButtons.remove()
}

// ======================================================================

window.addEventListener ("DOMContentLoaded", function(){
    renderArray(2)
    eventShowCloseModal ()
    registerItem ()
})


