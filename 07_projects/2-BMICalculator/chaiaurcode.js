const form = document.querySelector("form");

// this usecase will give you empty
// const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const resultes = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    resultes.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    resultes.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    // show the result
    // resultes.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      resultes.innerHTML = `<span>${bmi} Under Weight</span>`;
    } else if (bmi < 24.9) {
      resultes.innerHTML = `<span>${bmi} Normal Range</span>`;
    } else {
      resultes.innerHTML = `<span>${bmi} Over Weight</span>`;
    }
  }
});
