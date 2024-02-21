const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { ...action.payload, completed: false }];

        case "DELETE":
            return state.filter((todo) => todo.id !== action.payload.id);

        case "EDIT_TODO":
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, name: action.payload.name }
                    : todo
            );

        case "TOGGLE_COMPLETED":
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
						case "deleteAll":
							return []

        default:
            return state;
    }
};

export default reducer;
