const newEntry = payload => {
  return {
    type: 'add-entry',
    payload: {
      ...payload,
    },
  };
};

export { newEntry };
