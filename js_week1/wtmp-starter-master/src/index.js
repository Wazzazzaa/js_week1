const coursesEn = ["Hamburger, cream sauce and poiled potates",
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
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset"];

var eLen = coursesEn.length;
var etext= "<ul>";
for (i = 0; i < eLen; i++) {
  etext += "<li>" + coursesEn[i] + "</li>";
}
etext += "</ul>";

document.getElementById("en").innerHTML = etext;

var fLen = coursesFi.length;
var ftext= "<ul>";
for (i = 0; i < fLen; i++) {
  ftext += "<li>" + coursesFi[i] + "</li>";
}
ftext += "</ul>";

document.getElementById("fi").innerHTML = ftext;

top.visible_id = 'fi';
toggle_visibility=()=> {

  var fi_e = document.getElementById('fi');
  var en_e = document.getElementById('en');
  if (top.visible_id == 'fi') {
    fi_e.style.display = 'none';
    en_e.style.display = 'block';
    top.visible_id = 'en';
  } else {
    fi_e.style.display = 'block';
    en_e.style.display = 'none';
    top.visible_id = 'fi';
  }
};
sortFunction=()=>{
  coursesFi.sort();

  var fLen = coursesFi.length;
  var ftext= "<ul>";
  for (i = 0; i < fLen; i++) {
    ftext += "<li>" + coursesFi[i] + "</li>";
  }
  ftext += "</ul>";

  document.getElementById("fi").innerHTML = ftext;
};
const random = document.querySelector('.random');
let randomNumber = Math.floor(Math.random() * coursesFi.length);
randomFunction=()=>{
  random.textContent = coursesFi[randomNumber] ;
};

