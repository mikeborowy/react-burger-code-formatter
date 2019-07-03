import tv4 from 'tv4';
import stateSchema from '../../constants/stateSchema';

export const stateValidator = ({ dispatch, getState }) => {
  return (next) => {
    return (action) => {
      next(action);
      if (!tv4.validate(getState(), stateSchema)) {
        /* eslint-disable-next-line */
        console.error('Invalid state schema detected');
      }
    };
  };
};
