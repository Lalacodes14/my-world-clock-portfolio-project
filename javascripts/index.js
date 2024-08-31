function updateTime() {
  // Los Angeles
  let cairoElement = document.querySelector("#cairo");
  if (cairoElement) {
    let cairoDateElement = cairoElement.querySelector(".date");
    let cairoTimeElement = cairoElement.querySelector(".time");
    let cairoTime = moment().tz("America/Cairo");

    cairoDateElement.innerHTML = cairoTime.format("MMMM	Do YYYY");
    cairoTimeElement.innerHTML = cairoTime.format(
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

  // Paris
  let lusakaElement = document.querySelector("#lusaka");
  if (lusakaElement) {
    let lusakaDateElement = lusakaElement.querySelector(".date");
    let lusakaTimeElement = lusakaElement.querySelector(".time");
    let lusakaTime = moment().tz("Africa/Lusaka");

    lusakaDateElement.innerHTML = lusakaTime.format("MMMM	Do YYYY");
    lusakaTimeElement.innerHTML = lusakaTime.format(
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
