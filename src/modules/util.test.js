/**
 * @jest-environment jsdom
 */

import updateMealsQt from './util.js';
import { countReservationsByItem } from './getReservationByItem.js';
import { commentCounter } from './commentCounter.js';

describe('Add all items counter Tests', () => {
  document.body.innerHTML = `
  <li class="cont_meals">Meals</li>
  <div class="cards_container">
    <card id="52776" class="card"></card>
    <card id="52765" class="card"></card>
    <card id="52776" class="card"></card>
    <card id="52765" class="card"></card>
  </div>

  <ul class="comment_list">
      <li></li>
      <li></li>
      <li></li>
  </ul>
    
  <ul id="reservation_details">
      <li></li>
      <li></li>
  </ul>`;

  it('Should test if updateMealsQt is adding all items counter to the home page', () => {
    const mealsCont = document.querySelector('.cont_meals');
    updateMealsQt();
    expect(mealsCont.innerHTML).toBe('Meals (4)');
  });

  it('Should test if number of comments was updated', () => {
    const counter = commentCounter();
    expect(counter).toBe(3);
  });

  it('Should test if countReservationsByItem can count total reservations by item', () => {
    const reservationCounter = countReservationsByItem();
    expect(reservationCounter).toBe(2);
  });
});
