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
            somValuesHtml.innerText = somValues.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        }else {
                insertedValues.forEach(function(element,index,array){
                    createItemList(index,dataFilters)
                    somValues+=array[index].value
                })
                somValuesHtml.innerText = somValues.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
               
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