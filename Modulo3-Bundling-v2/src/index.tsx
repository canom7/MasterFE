import "./styles.scss";
import logoImg from "./content/logo_1.png";
import React from "react";
import { createRoot } from "react-dom/client";

const user = "Mire";
console.log(`Hello ${user}!!!`);

const numberA: number = 2;
const numberB: number = 3;

console.log(numberA + numberB);

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("imgContainer").appendChild(img);

const root = createRoot(document.getElementById("root"));
root.render(
  <div id="title-container-react">Hello World from React using parcel!!</div>
);
