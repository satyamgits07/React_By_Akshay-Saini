/**
* 
* Hot modeule Reload (HMR)
* Parcel use something known as "file watcher   algorithm = C++"
* Parcel is cleaning our code
* MINIFY
* BUNDLING
* Dev and Production Build
* Super Fast build algorithm
* Parcel also do Image Optimization
* Parcel also do Caching while development
* Compression
*/



import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement( 
  "h1",
  {
    id: "title",
  },
  "Heading 1 for parcel"
 );
const heading2 = React.createElement(
  "h2",
   {
    id: "title", 
   },
   "Headind 2"
   );

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "HEY",
  },
  [heading,heading2]
  );
// console.log(heading); 

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root   
root.render(container);
