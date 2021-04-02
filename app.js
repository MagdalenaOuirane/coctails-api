
import presentDrinks from './src/presentDrinks.js';




const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a'; //url with coctails start with 'a' letter;






window.addEventListener("DOMContentLoaded", () => {
    presentDrinks(URL);
});