import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import App from './components/App.js';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import * as serviceWorker from './serviceWorker';


function MyApp (){
  return(
    <>
      <div>
        <h1>Hello World!</h1>
      </div>
    </>
  );


}

ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);

serviceWorker.unregister();