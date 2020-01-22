/*const coursesEn = ["Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
 "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries"];

const coursesFi = ["Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];*/
import lunchMenu from './assets/lunchMenu.json';
const lunches = Object.values(lunchMenu.courses);
const coursesFi = lunches.map(a => a.title_fi);
const coursesEn = lunches.map(a => a.title_en);
console.log('lunch menu array', coursesFi);

let eLen = coursesEn.length;
let etext= "<ul>";
for (let i = 0; i < eLen; i++) {
  etext += "<li>" + coursesEn[i] + "</li>";
}
etext += "</ul>";

document.getElementById("en").innerHTML = etext;

let fLen = coursesFi.length;
let ftext= "<ul>";
for (let i = 0; i < fLen; i++) {
  ftext += "<li>" + coursesFi[i] + "</li>";
}
ftext += "</ul>";

document.getElementById("fi").innerHTML = ftext;

top.visible_id = 'fi';
document.getElementById('btn1').addEventListener('click', toggle_visibility, true);
function toggle_visibility() {
  const fi_e = document.getElementById('fi');
  const en_e = document.getElementById('en');
  if (top.visible_id == 'fi') {
    fi_e.style.display = 'none';
    en_e.style.display = 'block';
    top.visible_id = 'en';
  } else {
    fi_e.style.display = 'block';
    en_e.style.display = 'none';
    top.visible_id = 'fi';
  }
}
document.getElementById('btn2').addEventListener('click', sortFunction, true);
function sortFunction(){
  coursesFi.sort();

  let fLen = coursesFi.length;
  let ftext= "<ul>";
  for (let i = 0; i < fLen; i++) {
    ftext += "<li>" + coursesFi[i] + "</li>";
  }
  ftext += "</ul>";

  document.getElementById("fi").innerHTML = ftext;
}
document.getElementById('btn3').addEventListener('click',randomFunction, true);
const random = document.querySelector('.random');
let randomNumber = Math.floor(Math.random() * coursesFi.length);
export function randomFunction(){
  random.textContent = coursesFi[randomNumber] ;
}
