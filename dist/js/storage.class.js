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

    static saveItem(category, item){
        const data = JSON.parse(window.localStorage.getItem('data'));
        data.push(item);

        window.localStorage.setItem(category, data);
    }

    static removeItem(item){
        
    }

    static getData(){
        return window.localStorage.getItem('data');
    }
}