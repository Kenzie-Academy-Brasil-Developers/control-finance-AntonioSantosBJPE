/* Desenvolva sua lógica aqui */
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
            divItemsButtons.classList = "list-of-values-items-buttons flex"

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
                buttonDelete.classList = "btn-icon"

                    let imgDelete = document.createElement("img")
                    buttonDelete.appendChild(imgDelete)
                    imgDelete.src = "/assets/trash.svg"

                        buttonDelete.addEventListener("click", function(){
                            
                            deleteItemList(indexArray,currentFilter)
                            
                        })
}



let voidListScreen=false // utilizado na lógica de gerar os avisos de não existem items no filtro

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
       

            if (dataFilters===0 ){
                
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
    let typeOfEntry = null
    let newId 

    btnEntry.addEventListener("click",function(){
        typeOfEntry = 0
    })
    btnOut.addEventListener("click",function(){
        typeOfEntry = 1
    })
    
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

    // insertedValues.push({id:  , value:  , categoryID:})
    //Number((Number(input.value)).toFixed(2))
    
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

// ======================================================================

window.addEventListener ("DOMContentLoaded", function(){
    renderArray(2)
    createEventFilters ()
    eventShowCloseModal ()
    registerItem ()
})


// quando for criar o cadastro de items, criar o id da nova entrada a partir do id
// do ultimo elemento do array e add +1