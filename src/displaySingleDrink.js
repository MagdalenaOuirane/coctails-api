import getElement from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrink = (data) => {
  hideLoading();

  const drink = data.drinks[0];

  const {
    strDrinkThumb: image,
    strDrink: name,
    strInstructions: description,
  } = drink;

  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];

  console.log(drink, list);

  const img = getElement(".drink-img");
  const drinkName = getElement(".drink-name");
  const drinkDescription = getElement(".drink-desc");
  const drinkIngredients = getElement(".drink-ingredients");

  //adding dynamically
  document.title = name;
  img.src = image;
  drinkName.textContent = name;
  drinkDescription.textContent = description;
  drinkIngredients.innerHTML = list
    .map((ingredient) => {
      if (!ingredient) return;
      return `<li><i class="far fa-check-square"></i>${ingredient}</li>`;
    })
    .join("");
};

export default displayDrink;
