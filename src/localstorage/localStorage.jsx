

export const insertLocalStorage = (key,item) => {
    localStorage.setItem(key,JSON.stringify(item))
}

export const getLocalStorage = (key) => {
    return  JSON.parse(localStorage.getItem(key))
}

export const deleteFromLocalStorage = (key,id) => {
    let items = JSON.parse(localStorage.getItem(key))
     let filteredItems =items.filter((item) => item.id !==id)
     localStorage.setItem(key,JSON.stringify(filteredItems))
    

    }