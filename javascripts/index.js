function updateTime() {
  // Kenya
  let luandaElement = document.querySelector("#luanda");
  if (luandaElement) {
    let luandaDateElement = luandaElement.querySelector(".date");
    let luandaTimeElement = luandaElement.querySelector(".time");
    let luandaTime = moment().tz("Africa/Luanda");

    luandaDateElement.innerHTML = luandaTime.format("MMMM	Do YYYY");
    luandaTimeElement.innerHTML = luandaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Tanzania
  let tanzaniaElement = document.querySelector("#tanzania");
  if (tanzaniaElement) {
    let tanzaniaDateElement = tanzaniaElement.querySelector(".date");
    let tanzaniaTimeElement = tanzaniaElement.querySelector(".time");
    let tanzaniaTime = moment().tz("Africa/Dar_es_Salaam");

    tanzaniaDateElement.innerHTML = tanzaniaTime.format("MMMM	Do YYYY");
    tanzaniaTimeElement.innerHTML = tanzaniaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Algiers
  let algiersElement = document.querySelector("#algiers");
  if (algiersElement) {
    let algiersDateElement = algiersElement.querySelector(".date");
    let algiersTimeElement = algiersElement.querySelector(".time");
    let algiersTime = moment().tz("Africa/Algiers");

    algiersDateElement.innerHTML = algiersTime.format("MMMM	Do YYYY");
    algiersTimeElement.innerHTML = algiersTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
