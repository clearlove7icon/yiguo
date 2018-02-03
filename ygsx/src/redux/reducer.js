const defaultState = {
    num: 1,
    cars: []
}

const reducer = (state = defaultState, action) => {
    let new_state = Object.assign({}, state)
    switch (action.type) {
        case 'ADD_NUMBER':
            new_state.num++;break;
        case 'REDUCE_NUMBER':
            new_state.num>1?new_state.num--:1;break;
        case 'CHANGE_CARS':
            new_state.cars = action.cars;break;
        //如果操作数据多就放在action中操作
    }
    return new_state;
}

export default reducer