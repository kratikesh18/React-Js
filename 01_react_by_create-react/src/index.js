import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//we must have to import that component which is exported 
import Hard from './Hard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // the strict mode is for more strict purpose while coding 
  //it also axpects a single element so using fragment 


  // <React.StrictMode>
  <>
  <App />
  <Hard/>
  </>

  // </React.StrictMode>
);

