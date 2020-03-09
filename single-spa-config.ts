import React from 'react';
import ReactDOM from 'react-dom';
import rootComponent from './src/index';
// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props
import singleSpaReact from 'single-spa-react';
const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
});
export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;