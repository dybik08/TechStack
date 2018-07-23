export const selectLibrary = (id) => {
    console.log(id);
  return {
      type: 'select_library',
      payload: id
  };
};