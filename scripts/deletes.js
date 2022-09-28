function deleteListEntries (){
    let ul = document.querySelector(".list-of-values")
    ul.remove()
    document.getElementById("section-sum-of-values-textsum").innerText = "R$ 0.00"
}

function deleteItemList (indexDeleteArray,filter){

    insertedValues.splice(indexDeleteArray,1)
    deleteListEntries ()
    renderArray(filter)
}

function deleteButtonsfilters (){
    let divButtons = document.querySelector(".section-financial-summary-buttons")
    divButtons.remove()
}