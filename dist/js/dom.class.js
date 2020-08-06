class DOM {

    constructor(){

    }

    static makeCategory(text){
        const category = document.createElement('span');
        category.classList.add('category');
        category.innerText = text;
        category.addEventListener('click', categoryClick);

        return category;
    }

    static removeCategory(category){
        const listedCategories = Array.from(document.querySelectorAll('.category'));

        currentCategory.innerText = '';
        listedCategories.forEach((el) => {
            if(el.innerText === category){
                el.remove();
            }
        });
    
    }

    static makeItem(value){
        const item = document.createElement('div');
        item.setAttribute('class', 'form-group item d-flex flex-row');

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('class', 'form-control form-control-lg col-10');
        input.setAttribute('disabled', '');
        input.setAttribute('value', value);

        const div1 = document.createElement('div');
        div1.setAttribute('class', 'ml-0 pl-0');

        const div2 = document.createElement('div');
        div2.setAttribute('class', 'ml-0 pl-0');

        const deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'far fa-trash-alt delete-icon');

        const editIcon = document.createElement('i');
        editIcon.setAttribute('class', 'fas fa-edit edit-icon');

        div1.appendChild(deleteIcon);
        div2.appendChild(editIcon);
        item.appendChild(input);
        item.appendChild(div1);
        item.appendChild(div2);

        itemsContainer.appendChild(item);
        
       /* `<div class="form-group item d-flex flex-row">
            <input type="text" class="form-control form-control-lg col-10" disabled value="${value}">
            <div class=" ml-0 pl-0"> <i class="far fa-trash-alt delete-icon"></i> </div>
            <div class=" ml-0 pl-0"><i class="fas fa-edit edit-icon"></i> </div>
        </div>` */
    }



    static init(categories){
        const data = JSON.parse(categories);
         
        for(var category in data){
            categoriesContainer.appendChild(this.makeCategory(category));
        }

        currentCategory.innerText = 'general';
    }

}