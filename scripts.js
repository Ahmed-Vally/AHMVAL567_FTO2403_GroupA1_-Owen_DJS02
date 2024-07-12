const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validation: check for missing values
  if (!dividend || !divider) {
    result.innerHTML = '<div class="error-message">Division not performed. Both values are required in inputs. Try again.</div>';
    return;
  }

  // Validation: check for non-numeric values
  if (isNaN(dividend) || isNaN(divider)) {
    document.body.innerHTML = '<div class="critical-error">Something critical went wrong. Please reload the page.</div>';
    console.error("Critical error: non-numeric input received");
    return;
  }

  // Validation: check for division by zero
  if (divider == 0) {
    result.innerHTML = '<div class="error-message">Division not performed. Invalid number provided. Try again.</div>';
    console.error("Division by zero error", new Error().stack);
    return;
  }

  // Perform division and show result
  result.innerText = Math.floor(dividend / divider);
});
