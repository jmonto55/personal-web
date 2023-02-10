import { getMeals, likeMeal, getLikes } from './api.js';
import modalReservation from './modalReservation.js';
import './comments.js';

const updateMealsQt = () => {
  const mealsQuantity = document.querySelectorAll('.card').length;
  const contMeals = document.querySelector('.cont_meals');
  contMeals.innerHTML = `Meals (${mealsQuantity})`;
};

const displayMeals = async () => {
  const idArr = await getMeals();
  const likesArr = await getLikes();
  const cardsCont = document.querySelector('.cards_container');
  for (let i = 0; i < 12; i += 1) {
    const id = idArr.meals[i].idMeal;
    const likes = likesArr.find((el) => el.item_id === id) || { likes: '0' };
    const link = idArr.meals[i].strMealThumb;
    const meal = idArr.meals[i].strMeal;
    cardsCont.innerHTML += `
    <card id="${id}" class="card flex">
      <img src='${link}' class="card_image" alt="dog image" />
      <div class="card_body flex">
        <h2 class="card_title">${meal}</h2>
        <div class="like_container flex">
          <span class="like material-symbols-outlined">favorite</span>
          <p class="like_text">${likes.likes} likes</p>
        </div>
      </div>
      <div class="buttons_container flex">
        <button class="comment btn" id="comment_${id}">Comments</button>
        <button class="reservation btn">Reservations</button>
      </div>
    </card>`;
    const reservationButton = document.querySelectorAll('.reservation');
    reservationButton.forEach((element) => element.addEventListener('click', modalReservation));
  }
  updateMealsQt();
};

const saveLikeDOM = (id) => {
  let currLikes = document.getElementById(id).childNodes[3].childNodes[3].childNodes[3].innerHTML;
  currLikes = Number(currLikes.substring(0, 2)) + 1;
  const likesContainer = document.getElementById(id).childNodes[3].childNodes[3].childNodes[3];
  likesContainer.innerHTML = `${currLikes} likes`;
  likesContainer.previousElementSibling.style.color = 'red';
};

const saveLikeAPI = async (id) => {
  await likeMeal(id);
};

const addLikesEvLis = async () => {
  await displayMeals();
  const likesArr = document.querySelectorAll('.like');
  likesArr.forEach((e) => {
    if (e.nextElementSibling.innerHTML !== '0 likes') e.style.color = 'red';
    e.onclick = () => {
      const { id } = e.parentElement.parentElement.parentElement;
      saveLikeAPI(id);
      saveLikeDOM(id);
    };
  });
};

addLikesEvLis();
