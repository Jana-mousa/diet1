document.getElementById('addBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    e.stopPropagation();
    let popupContainer = document.createElement('div');
    popupContainer.classList.add('modal-container')
    popupContainer.id = 'modalContainer';
    
    let name = document.createElement('input');
    name.type ="text"
    name.placeholder = "Food Item name"
    name.id = 'foodItemNameInput'

    
    let popup = document.createElement('div');
    popup.classList.add('modal');
    
    popup.addEventListener('click', (e)=>{
        e.stopPropagation()
    })
    
    popupContainer.appendChild(popup);

    document.body.appendChild(popupContainer);

    popupContainer.addEventListener('click', (e)=>{
        e.stopPropagation()
        popupContainer.remove();
    })
    
    // let saveBtn = document.createElement('button');​
    // // name, fat, protien, carbs

    // saveBtn.addEventListener('click', ()=>{
    //     let foodItemName = document.getElementById('foodItemNameInput').value;
    //     fetch('https://localhost:3000/items', {

    //         method: 'POST',
    //         headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //             },
    //         body: JSON.stringify({name: foodItemName, carbs: 10, protine: 10, fat:10})​
    //     })

    //     fetch('https://localhost:3000/items', {method: 'delete'})
    //     fetch('https://localhost:3000/items', {method: 'PUT'})
    // })​
})