"use strict";

/*
Exercitiu 2

Pornind de la acest array de culori, creeaza butoane dinamic;

1. Itereaza prin array
2. Creeaza un buton si seteaza culoare pt buton
3. Seteaza textul butonului
4. Adauga butonul in interfata utilizatorului UI
*/

const colors = [
  {
    label: "Primary Button",
    color: "#ff0000",
    isPrimary: true,
  },
  {
    label: "Click me",
    color: "#00ff00",
    isPrimary: true,
  },
  {
    label: "Yellow",
    color: "#fff00f",
    isPrimary: false,
  },
];

// prima data trebuie sa stim unde adaugam acest buton, deci facem o selectie dupa container
const containerEl = document.querySelector("#container");

// trebuie sa iterez prin fiecare buton/element
colors.forEach((element, index, arrayIntreg) => {
  const buttonEl = document.createElement("button");
  buttonEl.textContent = element.label;

  // daca butonul meu este primary atunci adaugam si clasa in css si deci vreau ca sa fie adaugata clasa cu stilizarea respectiva daca nu este atunci se aplica stilizarea din js, acest lucru se face cu if else

  if (element.isPrimary) {
    buttonEl.classList.add("primary-button");
    // daca e primary vreau de ex sa ma trimita pe pagina google
    // textContent => modifica doar textul din interior / adauga doar content
    // innerHTML => adaug/scriu peste continutul existent /adauga bucati intregi de HTML
    buttonEl.innerHTML = `<span><a href="https://google.com">${element.label}</a></span>`;
  } else {
    buttonEl.style.backgroundColor = element.color;
    buttonEl.style.margin = "10px";
    buttonEl.style.padding = "10px 20px";
  }

  containerEl.append(buttonEl);
});
