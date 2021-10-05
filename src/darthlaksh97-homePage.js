import React from "react";
import ReactDOM from "react-dom";
import { getAppNames } from "single-spa";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
// import express from 'express';



// const app = express();

// app.use((req, res) => {
//    res.setHeaders('Access-Control-Allow-Origin', '*');
//    res.setHeaders('Access-Control-Allow-Headers', '*'); 
//    next();
// })


// // Import the library: 
// var cors = require('cors');
//  var app = express(); 
// // Then use it before your routes are set up: 
// app.use(cors());



//lifecycles.use(cors);

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
