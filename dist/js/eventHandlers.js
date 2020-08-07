"use strict";

function categoryClick(e){
    const category = e.target.innerText
    currentCategory.innerText = category;

    DOM.removeItems();
    DOM.displayItems(category)
};

function deleteCategoryClick(e){
    const category = currentCategory.innerText;
    Storage.removeCategory(category);
    
    DOM.removeCategory(category);
    DOM.removeItems();

}

function addItemClick(e){
    const value = input.value;
    input.value = '';

    if(value === '') return;
    Storage.saveItem(value);
    DOM.addItem(value);
}

function deleteClick(e){
    const value = e.target.parentElement.previousElementSibling.value;

    Storage.removeItem(value);
    DOM.removeItem(value);
}

function modifyClick(e){
    const target = e.target.parentElement.previousElementSibling.previousElementSibling;
    const oldValue = target.value;
    target.removeAttribute('disabled');
    
    e.target.classList.remove('fa-edit');
    e.target.classList.add('fa-save');
    e.target.removeEventListener('click', modifyClick);
    e.target.addEventListener('click', (e) => {
        modifySave(e, oldValue, target)
    });
}

function modifySave(e, oldValue, target){
    const value = e.target.parentElement.previousElementSibling.previousElementSibling.value;

    Storage.removeItem(oldValue);
    Storage.saveItem(value);

    target.setAttribute('disabled', '');
    e.target.classList.add('fa-edit');
    e.target.classList.remove('fa-save');
    e.target.addEventListener('click', modifyClick);
}