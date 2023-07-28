import Person from './js/person.js';
import './css/styles.css';
import 'bootstrap';


function handleYearsBetween(event) {
  event.preventDefault();
  document.querySelector('div#years-between').classList.remove('hidden');
  const birthday1 = document.querySelector('#birthday1').value;
  const birthday2 = document.querySelector('#birthday2').value;
  const person = new Person(document.querySelector('#name').value, document.querySelector('#age').value);
  let ages = person.yearsBetween(birthday1, birthday2);
  ages = Object.entries(ages);
  ages.forEach(function (age) {
    document.querySelector(`#${age[0]}`).innerHTML = age[1];
  });
}

function handleYearsUntil(event) {
  event.preventDefault();
  document.querySelector('div#years-until').classList.remove('hidden');
  document.querySelector('ul#years-until').classList.remove('hidden');
  const birthday = document.querySelector('#birthday').value;
  const person = new Person(document.querySelector('#name').value, document.querySelector('#age').value);
  let ages = person.yearsUntil(birthday);
  ages = {
    'earth': ages[0],
    'mercury': ages[1],
    'venus': ages[2],
    'mars': ages[3],
    'jupiter': ages[4]
  };
  ages = Object.entries(ages);
  ages.forEach(function (age) {
    document.querySelector(`#${age[0]}`).innerHTML = age[1];
  });

}



function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const age = document.querySelector('#age').value;
  const yearsBetween = document.querySelector('button#birthday');
  const yearsUntil = document.querySelector('button#years-until');
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

  yearsBetween.addEventListener('click', handleYearsBetween);
  yearsUntil.addEventListener('click', handleYearsUntil);

}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form#age-form');
  form.addEventListener('submit', handleFormSubmit);
});


