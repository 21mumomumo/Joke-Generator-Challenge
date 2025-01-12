document.getElementById("jokeButton").addEventListener("click", getJoke);

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("joke").innerHTML = response.value;
      changeBackgroundColor();
      changeButtonColor();
    } else {
      document.getElementById("joke").innerHTML = "Error fetching joke!";
    }
  };

  xhr.onerror = function () {
    document.getElementById("joke").innerHTML = "Request failed!";
  };

  xhr.send();
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function changeButtonColor() {
  var button = document.getElementById("jokeButton");
  button.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
}
