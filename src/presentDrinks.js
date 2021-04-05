import fetchDrinks from "./fetchDrinks.js";
import displayDrinks from "./displayDrinks.js";
import setDrink from './setDrink.js';


const showDrinks = async (url) => {
  //fetch drinks
  const data = await fetchDrinks(url);
  console.log(data);

  //display drinks
  const section = await displayDrinks(data);
  //we are passing data to displayDrinks
  console.log("Section:", section);

  if(section) {
    setDrink(section);
  }
};

export default showDrinks;
