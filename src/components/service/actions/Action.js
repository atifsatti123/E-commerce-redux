export const ADD = (data) => {
    return {
        type: "ADD_TO-CART",
        payload: data
    }
}
// remove items
export const DLT = (id) => {
    return {
        type: "REMOVE_TO-CART",
        payload: id
    }
}

// remove individual item

export const REMOVE = (item) => {
    return {
        type: "REMOVE_ONE",
        payload: item
    }
}