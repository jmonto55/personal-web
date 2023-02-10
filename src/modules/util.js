const updateMealsQt = () => {
  const mealsQuantity = document.querySelectorAll('.card').length;
  const contMeals = document.querySelector('.cont_meals');
  contMeals.innerHTML = `Meals (${mealsQuantity})`;
};

export default updateMealsQt;