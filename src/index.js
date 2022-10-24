import dogs from 'asserts/dogs';

import './index.scss';

console.log('hello world');

class MyDog {
  name = 'Lucky'
};

const myDog = new MyDog();

const p = document.createElement('p');
p.textContent = `My dog name is ${myDog.name}`;

const h = document.createElement('h1');
h.textContent = 'Hello world!!!';

const ul = document.createElement('ul');

ul.className = 'dogs-container';

dogs.forEach(({ name, image }) => {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const img = document.createElement('img');

  li.className = 'dogs-container-item';

  img.src = image;
  img.className = 'dogs-container-item__image';

  div.textContent = name;
  div.className = 'dogs-container-item__name';

  li.appendChild(div);
  li.appendChild(img);

  ul.appendChild(li);
});

const app = document.querySelector('#root');

app.append(h, p, ul);