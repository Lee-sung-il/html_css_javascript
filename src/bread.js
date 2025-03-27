const apiRandomDogs = 'https://dog.ceo/api/breeds/image/random/42';
const apiAllBreeds = 'https://dog.ceo/api/breeds/list/all';
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

const header = document.getElementById('header');
const main = document.getElementById('main');
const input = document.getElementById('filter-text');
const button = document.getElementById('filter-button');
const select = document.getElementById('filter-select');
const more = document.getElementById('more');
const tothetop = document.getElementById('tothetop');
const ResetBtn = document.getElementById('reset');

const currents = [];

function displayDogs(item) {
  const dogImgDiv = document.createElement('div');
  dogImgDiv.classList.add('flex-item');
  dogImgDiv.innerHTML = `<img src="${item}">`;
  main.appendChild(dogImgDiv);
}

window.addEventListener('load', () => {
  request1.open('get', apiRandomDogs);
  request1.addEventListener('load', (even) => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currents.push(item);
      displayDogs(item);
    });
  });
  request1.send();

  request2.open('get', apiAllBreeds);
  request2.addEventListener('load', (even) => {
    const response = JSON.parse(request2.response);
    Object.keys(response.message).forEach((item) => {
      const option = document.createElement('option');
      option.textContent = item;
      option.value = item;
      select.appendChild(option);
    });
  });
  request2.send();
});

button.addEventListener('click', (e) => {
  main.innerHTML = '';
  let filteredDogs = currents.filter((item) => {
    return item.indexOf(input.value) !== -1;
  });
  input.value = '';
  filteredDogs.forEach((item) => {
    displayDogs(item);
  });
});

select.addEventListener('change', () => {
  main.innerHTML = '';
  let filteredDogs = currents.filter((item) => {
    return item.indexOf(select.value) !== -1;
  });
  input.value = '';
  filteredDogs.forEach((item) => {
    displayDogs(item);
  });
});

more.addEventListener('click', (e) => {
  request1.open('get', apiRandomDogs);
  request1.addEventListener('load', (even) => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currents.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});

tothetop.addEventListener('click', (e) => {
  window.scrollTo({ top: 0 });
});

ResetBtn.addEventListener('click', (e) => {
  main.innerHTML = '';
  request1.open('get', apiRandomDogs);
  request1.addEventListener('load', (even) => {
    const response = JSON.parse(request1.response);
    response.message.forEach((item) => {
      currents.push(item);
      displayDogs(item);
    });
  });
  request1.send();
});
