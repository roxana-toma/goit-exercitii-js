"use strict";

/* 
Execrcitiu 1

const technologies = ["Javascript", "Pyton", "CSS", "HTML"];

1. Obtine elementul container (referinta care el)
2. Creeaza un ciclu pentru sortarea elementelor array-ului
3. Creeaza un tag li
4. Scrie textul din arraay in inreriorul elementelor de lista
5. Plaseaza elementul li in interiorul ul
6. Plaseaza tag-ul ul cu elemente pe pagina
*/

const technologies = ["Javascript", "Pyton", "CSS", "HTML"];

const containerEl = document.getElementById("container");
console.log(containerEl);

// Pasul 1 creare unui element
const list = document.createElement("ul");

// Pasul 2 lipirea elementului de un alt element deja existent in pagina
containerEl.append(list);

// Pasul 3 creare unui li
//const fistElementLi = document.createElement("li");

// Pasul 4 adaugare text
//fistElementLi.textContent = technologies[0];

// Pasul 5 lipire li de parinte
//list.append(fistElementLi);

// Pasul 6 adaugarea tututor elementelor din array cu for loop ca sa nu trebuiasca sa schimbam mereu la pasul 4 valoarea dinparantezele patrate,si astfel sa ne apara toate valorile din array nu doar prima.

// for
//for (let i = 0; i < technologies.length; i++) {
//const li = document.createElement("li");
//li.textContent = technologies[i];
//list.append(li);
//}

//for each

technologies.forEach((technology) => {
  const li = document.createElement("li");
  li.textContent = technology;
  list.append(li);
});
