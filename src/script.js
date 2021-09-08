items = []
completedItems = []
activeItems = []

class Item {
   constructor(id,text,status){
      this.id = id,
      this.text = text,
      this.status = status
   }
}

function addItem(event){
   event.preventDefault()
   let inputValue = document.querySelector('#todoInput')
   if(inputValue.value.length <= 0){
      document.querySelector('.form-wraper').classList.add('form-red');
      
   }
   else
      {let newItem = new Item(items.length, inputValue.value, 'active')
      items.push(newItem)
      activeItems.push(newItem)
      console.log(newItem.text)
      inputValue.value = ""
      generateItems()
      document.querySelector('.form-wraper').classList.remove('form-red');
   }
}

function generateItems(){
   todoHTML = ''
   items.forEach(item => {
      todoHTML += `
      <div class="todo-item ${item.status}">
         <div class="todo-check">
            <div data-id=${items.indexOf(item)} class="check">
               <i class="fa fa-check"></i>
            </div>
         </div>
         <div class="todo-text">
            ${item.text}
         </div>
         </div>
      `
   });
   document.querySelector('.todo-items').innerHTML = todoHTML
   updateActiveStatus()
   createEventListeners()
}



function createEventListeners(){
   let checkMark = document.querySelectorAll('.check')
   checkMark.forEach(check => {
      check.addEventListener('click', function(){
         updateStatus(check.dataset.id)
      })
   })
}


function updateActiveStatus(){
   document.querySelector('.active-todos').innerHTML = `${activeItems.length} Tasks to do`
}

function updateStatus(id){
   if(items[id].status == 'active'){
      completedItems.push(items[id])
      items[id].status = 'completed'
      activeItems.splice(activeItems.indexOf(items[id]),1)
      console.log(activeItems)
      console.log(completedItems)
   } else if(items[id].status == 'completed'){
      activeItems.push(items[id])
      items[id].status = 'active'
      completedItems.splice(completedItems.indexOf(items[id]),1)
      console.log(activeItems)
      console.log(completedItems)
   } else { alert(ERROR) }
   console.log(id)
   generateItems()
}

function clearCompleted(){
   items = [...activeItems]
   completedItems = []
   console.log(activeItems.length)
   console.log(items)
   updateActiveStatus()
   showAll()
   
}


function showAll(){
   generateItems()
   document.querySelector('.todo-all').classList.add('activated')
   document.querySelector('.todo-completed').classList.remove('activated')
   document.querySelector('.todo-active').classList.remove('activated')
}


function showCompleted(){
   if(completedItems.length == 0){
      todoHTML = ''
   }
   else{
      todoHTML = ''
   completedItems.forEach(item => {
      todoHTML += `
      <div class="todo-item ${item.status}">
         <div class="todo-check">
            <div data-id=${completedItems.indexOf(item)} class="check">
               <i class="fa fa-check"></i>
            </div>
         </div>
         <div class="todo-text">
            ${item.text}
         </div>
         </div>
      `
   });
}
   document.querySelector('.todo-items').innerHTML = todoHTML
   document.querySelector('.todo-completed').classList.add('activated')
   document.querySelector('.todo-active').classList.remove('activated')
   document.querySelector('.todo-all').classList.remove('activated')
   updateActiveStatus()
   createEventListeners()
}

function showActive(){
   if(activeItems.length == 0){
      todoHTML = ''
   }
   else{
      todoHTML = ''
      activeItems.forEach(item => {
      todoHTML += `
      <div class="todo-item ${item.status}">
         <div class="todo-check">
            <div data-id=${activeItems.indexOf(item)} class="check">
               <i class="fa fa-check"></i>
            </div>
         </div>
         <div class="todo-text">
            ${item.text}
         </div>
         </div>
      `
   });
   }

   
   document.querySelector('.todo-items').innerHTML = todoHTML
   document.querySelector('.todo-active').classList.add('activated')
   document.querySelector('.todo-completed').classList.remove('activated')
   document.querySelector('.todo-all').classList.remove('activated')
   updateActiveStatus()
   createEventListeners()
}





let body = document.querySelector('body')
let themeSwitch = document.querySelector('.themeSwitch')
let themeIcon  = document.querySelector('.theme-fa')


themeSwitch.addEventListener('click', function(){

   if(themeIcon.classList.contains('fa-moon')){
      themeIcon.classList.remove('fa-moon')
      themeIcon.classList.add('fa-sun')
      body.classList.add('light-theme')
      console.log('done')
   }

   else if (themeIcon.classList.contains('fa-sun')) {
      themeIcon.classList.remove('fa-sun')
      themeIcon.classList.add('fa-moon')
      body.classList.remove('light-theme')
      console.log('undone')
   }

})
