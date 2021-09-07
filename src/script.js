function addItem(event){
   event.preventDefault()
   let inputValue = document.getElementById('todoInput').value
   
   console.log("Item has been added Successfuly!")
   console.log(`0 ${inputValue}`)
   inputValue = ""
}