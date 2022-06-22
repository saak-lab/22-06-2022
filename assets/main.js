document.querySelector("button").addEventListener("click", dont);

function dont() {
  let Name = document.querySelector("input").value;

  document.querySelector(
    "p"
  ).innerText = ` Hello ${Name},Welcome To The Apprentice Cloud`;
}
