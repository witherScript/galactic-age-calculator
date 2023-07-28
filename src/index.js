import Person from './js/person.js';
import './css/styles.css';
import 'bootstrap';


function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;

  const person = new Person(name, age);
  let ages =
  {
    'mercury': person.toMercury(),
    'venus': person.toVenus(),
    'mars': person.toMars(),
    'jupiter': person.toJupiter()
  };

  ages = Object.entries(ages);
  ages.forEach(function (age) {
    document.querySelector(`#${age[0]}`).innerHTML = age[1];
  });

  document.querySelector('div#results').classList.remove('hidden');

}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form#age-form');
  form.addEventListener('submit', handleFormSubmit);
});


