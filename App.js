/* 
Using local storage to save data
    The use "useState" and "useEffect" are used to this example in order to do operations with localStorage
    This example is used to show to implement with a use case, the methods present are:

    setItem(): This method is used to add a key and a value to local storage, Remeber convert the item in a JSON OBJECT 
    getItem(): This method is used to get a item from local storage using the key, Remember to parse the JSON object to an string literal
    removeItem(): This technique is used to delete an item from localStorage based on it's key
    clear(): This technique is used delete all instance from local storage 
    */

import React from 'React';

export default fucntion App(){
    
    const [item, setItem] = React.useState([]);

    // Save items to local storage using use state hook
    React.useEffect(() => {
        localStorage.setItem('item', JSON.stringify(item));
    }, [item]);

    // Get items from local storage, remember to convert the JSON in to a string
    React.useEffect(() => {
        const data = JSON.parse(localStorage.getItem('item'));
        if(item){
            setItem(item);
        }
    }, [])
}