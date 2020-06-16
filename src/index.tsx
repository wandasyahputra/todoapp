import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './pages/App';

import { FluentCustomizations } from '@uifabric/fluent-theme';
import { Customizer, mergeStyles } from 'office-ui-fabric-react';
import * as serviceWorker from './serviceWorker';
import { initializeIcons } from '@uifabric/icons';
import './assets/styles/style.scss'
import 'office-ui-fabric-react/dist/css/fabric.min.css'
import Routes from './routes';

initializeIcons(undefined, { disableWarnings: true });

// Inject some global styles
mergeStyles({
  selectors: {
    ':global(body), :global(html), :global(#root)': {
      margin: 0,
      padding: 0,
      height: '100vh'
    }
  }
});

ReactDOM.render(
  <Customizer {...FluentCustomizations}>
    <Routes />
  </Customizer>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
