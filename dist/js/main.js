"use strict";


categories.forEach((el) => {
    el.addEventListener('click', categoryClick);
});

newCategoryAdd.addEventListener('click', (e) => {
    newCategoryContainer.classList.add('d-flex');
    newCategoryContainer.classList.remove('d-none');
});

newCategoryCheck.addEventListener('click', (e) =>{
    newCategoryContainer.classList.add('d-none');
    newCategoryContainer.classList.remove('d-flex');

    const text = newCategoryInput.value;
    if(text === '') return;
    Storage.saveCategory(text);
    categoriesContainer.appendChild(DOM.makeCategory(text));
    newCategoryInput.value = '';
});

deleteCategory.addEventListener('click', (e) => {
    const category = currentCategory.innerText;
    DOM.removeCategory(category);
    Storage.removeCategory(category);
});



DOM.init(Storage.getData());

