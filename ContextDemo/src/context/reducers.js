export default (state, action) => {
  switch (action.type) {
    case 'ADD_TXT_TO_LIST':
      const {text} = action.payload;
      const newList = [...state.list, text];

      return {...state, list: newList};

    case 'SAVE_USERNAME':
      return {...state, userName: action.payload.userName};

    case 'CLEAR_LIST':
      return {...state, list: []};
    default:
      return state;
  }
};
