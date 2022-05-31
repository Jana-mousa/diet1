fetch('http://localhost:3000/items')
.then(response => response.json())
.then(foodItems => {
    
    foodItems.forEach(item => {
        
        let rowEl = document.createElement('div');
        rowEl.id = item.id;
        rowEl.classList.add('row');
        
        let foodItemNameEl = document.createElement('h1');
        foodItemNameEl.innerHTML = item.name;
        rowEl.appendChild(foodItemNameEl);
        
        
        let pElementFat = document.createElement('p');
        pElementFat.innerHTML = "Fat: " + item.fat + 'g'; 
        rowEl.appendChild(pElementFat);
        
        
        let pElementProtein = document.createElement('p');
        pElementProtein.innerHTML = "Protein: " + item.protein + 'g';
        rowEl.appendChild(pElementProtein);
        
        let pElementCarbs = document.createElement('p');
        pElementCarbs.innerHTML = "Carbs: " + item.carbs + 'g';
        rowEl.appendChild(pElementCarbs);
        
        
        let editButton = document.createElement('button');
        editButton.id = 'edit';
        editButton.innerHTML = "Edit"
        rowEl.appendChild(editButton);
        
        let deleteButton = document.createElement('button');
        deleteButton.id = 'delete';
        deleteButton.innerHTML = "Delete"
        rowEl.appendChild(deleteButton);
        deleteButton.addEventListener('click', (e) =>{
            let elId = e.target.parentNode.id;
            fetch('https://localhost:3000/items/${elId}', {method: 'DELETE'})
            .finally(() =>{
                let deletedItem = document.getElementById(elId).remove();
            })

        })

        let container = document.getElementById('wrapper');
        
        container.appendChild(rowEl);

    })
})