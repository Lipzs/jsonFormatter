const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const btnFormat = document.querySelector(".controls__button--format");
const btnMinify = document.querySelector(".controls__button--minify");
const btnCopy = document.querySelector(".copy-button");

btnFormat.addEventListener("click", () => {
  try {
    const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 2);

    outputArea.value = formatted;
  } catch (error) {
    window.alert('JSON inválido: ' + error);
  }
});

btnMinify.addEventListener("click", () => {
  try {
    const minified = JSON.stringify(JSON.parse(inputArea.value));

  outputArea.value = minified;
  } catch (error) {
    window.alert('JSON inválido: ' + error);
  }
});

btnCopy.addEventListener("click", () => {
  outputArea.select();
  navigator.clipboard.writeText(outputArea.value);
});