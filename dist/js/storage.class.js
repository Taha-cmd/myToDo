class Storage{
    constructor(){

    }

    static saveCategory(category){
        let data = window.localStorage.getItem('data');

        if(data !== '') 
            data = JSON.parse(data);
        else
            data = {};

        data[category] = [];
        window.localStorage.setItem('data', JSON.stringify(data));
    }

    static removeCategory(category){
        let data = JSON.parse(window.localStorage.getItem('data'));
        delete data[category];
        window.localStorage.setItem('data', JSON.stringify(data));
    }

    static saveItem(item){
        const category = currentCategory.innerText;
        let data = JSON.parse(window.localStorage.getItem('data'));
        
        data[category].push(item);
        window.localStorage.setItem('data', JSON.stringify(data));
    }

    static removeItem(item){
        const category = currentCategory.innerText;
        let data = JSON.parse(window.localStorage.getItem('data'));

        data[category] = data[category].filter((el) => {
            return el !== item;
        });

        window.localStorage.setItem('data', JSON.stringify(data));
    }

    static getData(){
        return window.localStorage.getItem('data');
    }

    static getItems(category){
        const data = JSON.parse(window.localStorage.getItem('data'));   
        return data[category].length === 0 ? null : data[category];
    }
}