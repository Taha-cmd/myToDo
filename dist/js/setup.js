"use strict";

const currentCategory       = document.getElementById('current-category-text');
const newCategoryAdd        = document.getElementById('new-category-add');
const newCategoryCheck      = document.getElementById('new-category-check');
const newCategoryContainer  = document.getElementById('new-category');
const newCategoryInput      = document.getElementById('new-category-input');
const categoriesContainer   = document.getElementById('categories');
const deleteCategory        = document.getElementById('delete-current-category');
const itemsContainer        = document.getElementById('items');

const categories = Array.from(document.querySelectorAll('.category'));
