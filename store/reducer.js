const intialState = {
    age: 21,
    history: []
}

const reducer = (state = intialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case "UP":
            return {
                ...state,
                age: state.age + action.value,
                history: state.history.concat({id:Math.random(), age: state.age + action.value })   //using concate instead of push coz concate return a new array intea of mutating the current state.
            }
            break;
        case "DOWN":
            return {
                ...state,
                age: state.age - action.value,
                history: state.history.concat({id:Math.random(), age: state.age - action.value })   //using concate instead of push coz concate return a new array intea of mutating the current state.
            }
            break;
        case "DEL":
            return {
                ...state,
                history: state.history.filter(aray=>aray.id !== action.key)
            }
            break;
    }
    return  ;
}


export default reducer;
