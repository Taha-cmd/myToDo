"use strict";


categories.forEach((el) => {
    el.addEventListener('click', categoryClick);
});

addItem.addEventListener('click', addItemClick);

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

deleteCategory.addEventListener('click', deleteCategoryClick);


DOM.init(Storage.getData());

