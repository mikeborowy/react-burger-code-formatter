export const logger = (store) => {
  return (next) => {
    return (action) => {
      const result = next(action);
      /* eslint-disable-next-line */
  console.log('store logger', store.getState());
      return result;
    };
  };
};
