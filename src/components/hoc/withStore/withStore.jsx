import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { config as configStore } from '../../../config/store';
import { getDisplayName } from '../../../helpers';

export const withStore = (WrappedComponent, initialState = {}) => {
  class WithStore extends Component {
    render() {
      return (
        <Provider store={configStore(initialState)} {...this.state}>
          <WrappedComponent />
        </Provider>
      );
    }
  }
  WithStore.displayName = `withStore(${getDisplayName(WrappedComponent)})`;
  return WithStore;
};
