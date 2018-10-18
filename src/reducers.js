import v4 from 'uuid/v4';

const initialState = {
  entries: [],
};

const entries = (state = initialState, action) => {
  if (action.type === 'add-entry') {
    console.log('Adding action', action);
    return {
      entries: [
        ...state.entries,
        {
          id: v4(),
          ...action.payload,
        },
      ],
    };
  }
  return state;
};

export { entries };
