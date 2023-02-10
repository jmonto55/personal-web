import axios from 'axios';

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

export const countReservationsByItem = () => {
  const reservationCounter = document.getElementById('reservation_details').children.length;
  return reservationCounter;
};

export const getReservationByItem = async (item) => {
  const endpoint = `apps/kpvz19cjHtM9ksn2bg7S/reservations?item_id=${item}`;
  const res = await axios.get(baseUrl + endpoint);
  const result = res.data;
  const reservationDetailsByItem = document.getElementById('reservation_details');
  reservationDetailsByItem.innerHTML = result.map((elt) => `<li><b>From</b> ${elt.date_start}  <b>to</b> ${elt.date_end}  ${elt.username}</li>`).join('');

  const reservationCounter = countReservationsByItem();
  const totalReserveByItem = document.getElementById('total_reserve');
  totalReserveByItem.innerHTML = `Reservation(${reservationCounter})`;
};
