import Person from './js/person.js';
import './css/styles.css';
import 'bootstrap';

function handleYearsBetween(event) {
  event.preventDefault();
  document.querySelector('div#years-between').classList.remove('hidden');
  const birthday1 = document.querySelector('#birthday1').value;
  const birthday2 = document.querySelector('#birthday2').value;
  const person = new Person(document.querySelector('#name').value, parseInt(document.querySelector('#age').value));
  let ages = person.yearsBetween(birthday1, birthday2);
  ages = {
    'mercury': ages[1],
    'venus': ages[2],
    'mars': ages[3],
    'jupiter': ages[4]
  };
  Object.entries(ages).forEach(function ([planet, age]) {
    document.querySelector(`span#${planet}Between`).innerHTML = age;
  });

  document.querySelector(`span#birthday1`).innerHTML = birthday1;
  document.querySelector(`span#birthday2`).innerHTML = birthday2;
  document.querySelector('ul#years-between').classList.remove('hidden');
}

function handleYearsUntil(event) {
  event.preventDefault();
  document.querySelector('div#years-until').classList.remove('hidden');
  const futurebirthday = document.querySelector('#futurebirthday').value;
  const person = new Person(document.querySelector('#name').value, document.querySelector('#age').value);
  let ages = person.yearsUntil(futurebirthday);
  ages = {
    'mercury': ages[1],
    'venus': ages[2],
    'mars': ages[3],
    'jupiter': ages[4]
  };

  Object.entries(ages).forEach(function ([planet, age]) {
    document.querySelector(`#${planet}Until`).innerHTML = age;
  });

  document.querySelector(`span#futurebirthday`).innerHTML = futurebirthday;
  document.querySelector('ul#years-until').classList.remove('hidden');
}



function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.querySelector('#name').value;
  const age = parseInt(document.querySelector('#age').value);

  const person = new Person(name, age);
  let ages =
  {
    'mercury': person.toMercury(),
    'venus': person.toVenus(),
    'mars': person.toMars(),
    'jupiter': person.toJupiter()
  };

  Object.entries(ages).forEach(function ([planet, age]) {
    document.querySelector(`#${planet}Age`).innerHTML = age;
  });


  document.querySelector('#age-form').classList.add('hidden');
  document.querySelector('#results').classList.remove('hidden');
  document.querySelector('#after-submit').classList.remove('hidden');

}

function reset() {
  document.querySelector('#age-form').classList.remove('hidden');
  document.querySelector('#results').classList.add('hidden');
  document.querySelector('#after-submit').classList.add('hidden');
  document.querySelector('div#years-between').classList.add('hidden');
  document.querySelector('div#years-until').classList.add('hidden');
  document.querySelector('ul#years-between').classList.add('hidden');
  document.querySelector('ul#years-until').classList.add('hidden');


  let formArr = document.querySelectorAll('form');
  formArr.forEach((form) => {
    form.reset();
  });


}

window.addEventListener('DOMContentLoaded', () => {
  const birthdayForm = document.querySelector('form#birthday-form');
  const futureBirthdayForm = document.querySelector('form#future-birthday-form');

  const form = document.querySelector('form#age-form');
  form.addEventListener('submit', handleFormSubmit);

  birthdayForm.addEventListener('submit', handleYearsBetween);
  futureBirthdayForm.addEventListener('submit', handleYearsUntil);

  document.querySelector('button#birthday').addEventListener('click', () => {
    document.querySelector('div#years-between').classList.remove('hidden');
  });
  document.querySelector('button#years-until').addEventListener('click', () => {
    document.querySelector('div#years-until').classList.remove('hidden');
  });

  document.querySelector('button#reset').addEventListener('click', reset);

});
