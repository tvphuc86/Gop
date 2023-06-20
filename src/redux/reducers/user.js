const initialState = {
    list: [],
    selectedId: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList,
            };
        }

        case 'REMOVE_USER': {
            const newList = [...state.list];
            return {
                ...state,
                list: newList.filter((item) => item.socketID !== action.payload),
            };
        }

        default:
            return state;
    }
};

export default userReducer;
