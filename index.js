const html = document.querySelector("html");

let currentTabInPortfolio = document.querySelector(".portfolio__content");

document
  .querySelector(".theme-toggle")
  .addEventListener("click", () => changeTheme());

document.querySelectorAll("input[type='radio']").forEach((input) => {
  input.addEventListener("change", () => {
    changeTabInPortfolio();
  });
});

function changeTheme() {
  html.setAttribute(
    "color-scheme",
    html.getAttribute("color-scheme") === "light" ? "dark" : "light"
  );
}

function changeTabInPortfolio() {
  currentTabInPortfolio.classList.add("hidden");

  const currentClasssName = document.querySelector(
    "input[type='radio']:checked"
  ).value;

  currentTabInPortfolio = document.querySelector(`.${currentClasssName}`);
  currentTabInPortfolio.classList.remove("hidden");
}
