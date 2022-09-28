function registerItem (){
    
    // voltando para default os valores das variaveis que são utilizadas na logica de seleção do tipo de entrada
    typeOfEntry = null
    ClickBtnEntry = false
    ClickBtnOut = false
    

   let input = document.querySelector("#modal-input")
   let btnOut = document.querySelector("#btn-value-type-out")
   let btnEntry = document.querySelector("#btn-value-type-entry")
   let btnCancel= document.querySelector(".btn-modal-cancel")
   let btnInsertValue= document.querySelector(".btn-modal-insert-value")
   let newId 

   // Lógica do funcionamente da seleção do tipo de valor do item registrado

   btnEntry.addEventListener("click",function(){
       
       if (ClickBtnEntry===false && ClickBtnOut===false){
           
           ClickBtnEntry=true
           typeOfEntry = 0
       } else if (ClickBtnEntry===true && ClickBtnOut===false){
           
       } else if (ClickBtnEntry===false && ClickBtnOut===true){
           
           ClickBtnEntry=true
           ClickBtnOut =false
           typeOfEntry = 0
       }
   
   })

   btnOut.addEventListener("click",function(){
               
       if (ClickBtnOut===false && ClickBtnEntry===false ){
          
           ClickBtnOut=true
           typeOfEntry = 1
       } else if (ClickBtnOut===true && ClickBtnEntry===false){
           
       } else if (ClickBtnOut===false && ClickBtnEntry===true){
          
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
           typeOfEntry = null
           ClickBtnEntry = false
           ClickBtnOut = false
           input.value=""
           openCloseModal ()
           deleteListEntries()
           renderArray(2)
       }
       
   })


   btnCancel.addEventListener("click", function(){
       // limpando o input do modal sempre que o modal for fechado
           input.value=""
       // voltando para default os valores das variaveis que são utilizadas na logica de seleção do tipo de entrada
               typeOfEntry = null
               ClickBtnEntry = false
               ClickBtnOut = false
   })

    
}
