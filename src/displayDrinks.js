import getElement from "./getElement.js";

import {hideLoading} from './toggleLoading.js'

//drinks is an object with array inside with objects

const displayDrinks = ({ drinks }) => {


  const section = getElement(".section-center");
  const title = getElement(".title");

  console.log("drinksObject:", drinks);

  if (!drinks) {
     hideLoading();

    title.textContent = "Sorry, no drinks matched your search";
    section.innerHTML = null;
    return;
  }
  // if drinks object is succesful then :
  //we create new array and iterate through it to display it
  const newDrinks = drinks
    .map((drink) => {
      console.log("Drink", drink);

      // Descture from an object:
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;

      return `<a href="drink.html">
    <article class="coctail" data-id="${id}">
      <img src="${image}" alt="coctail" />
      <h3>"${name}</h3>
    </article>
  </a>`;
    })
    .join("");

    hideLoading();
  title.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
