import "./styles.scss";
import logoImg from "./content/logo_1.png";
import React from "react";
import { createRoot } from "react-dom/client";

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

const root = createRoot(document.getElementById("root"));
root.render(<div id="title-container-react">Hello World from React!!</div>);

const varToPrint: string = "Hello Webpack!!";
console.log(varToPrint);

console.log(`Api base: ${process.env.API_BASE}`);
