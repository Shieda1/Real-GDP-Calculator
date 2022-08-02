// https://calculator.swiftutors.com/real-gdp-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const realGDPRadio = document.getElementById('realGDPRadio');
const GDPDeflatorRadio = document.getElementById('GDPDeflatorRadio');
const nominalGDPRadio = document.getElementById('nominalGDPRadio');

let realGDP;
let GDPDeflator = v1;
let nominalGDP = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

realGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'GDP Deflator';
  variable2.textContent = 'Nominal GDP';
  GDPDeflator = v1;
  nominalGDP = v2;
  result.textContent = '';
});

GDPDeflatorRadio.addEventListener('click', function() {
  variable1.textContent = 'Real GDP';
  variable2.textContent = 'Nominal GDP';
  realGDP = v1;
  nominalGDP = v2;
  result.textContent = '';
});

nominalGDPRadio.addEventListener('click', function() {
  variable1.textContent = 'Real GDP';
  variable2.textContent = 'GDP Deflator';
  realGDP = v1;
  GDPDeflator = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(realGDPRadio.checked)
    result.textContent = `Real GDP = ${computeRealGDP().toFixed(2)}`;

  else if(GDPDeflatorRadio.checked)
    result.textContent = `GDP Deflator = ${computeGDPDeflator().toFixed(2)}`;

  else if(nominalGDPRadio.checked)
    result.textContent = `Nominal GDP = ${computeNominalGDP().toFixed(2)}`;
})

// calculation

function computeRealGDP() {
  return Number(GDPDeflator.value) * Number(nominalGDP.value);
}

function computeGDPDeflator() {
  return Number(realGDP.value) / Number(nominalGDP.value);
}

function computeNominalGDP() {
  return Number(realGDP.value) / Number(GDPDeflator.value);
}