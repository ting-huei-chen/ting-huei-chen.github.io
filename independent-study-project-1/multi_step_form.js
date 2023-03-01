initMultiStepForm();

function initMultiStepForm() {
    const slidePage = document.querySelector(".slide-page");
    const submitBtn = document.querySelector(".submit");
    const progressText = document.querySelectorAll(".step p");
    const progressCheck = document.querySelectorAll(".step .check");
    const bullet = document.querySelectorAll(".step .bullet");
    const pages = document.querySelectorAll(".page");
    const nextButtons = document.querySelectorAll(".next");
    const prevButtons = document.querySelectorAll(".prev");
    const stepsNumber = pages.length;

 

    document.documentElement.style.setProperty("--stepNumber", stepsNumber);

    let current = 1;

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener("click", function (event) {
            event.preventDefault();

            inputsValid = validateInputs(this);

            if (inputsValid) {
                slidePage.style.marginLeft = `-${
                    (100 / stepsNumber) * current
                }%`;
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
            }
        });
    }

    for (let i = 0; i < prevButtons.length; i++) {
        prevButtons[i].addEventListener("click", function (event) {
            event.preventDefault();
            slidePage.style.marginLeft = `-${
                (100 / stepsNumber) * (current - 2)
            }%`;
            bullet[current - 2].classList.remove("active");
            progressCheck[current - 2].classList.remove("active");
            progressText[current - 2].classList.remove("active");
            current -= 1;
        });
    }
    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        slidePage.style.marginLeft = `-${
            (100 / stepsNumber) * current
        }%`;
        bullet[current - 1].classList.add("active");
        progressCheck[current - 1].classList.add("active");
        progressText[current - 1].classList.add("active");
        current += 1;
        
    });

   /**
 * Validates the input elements within the given form element.
 * Returns true if all input elements are valid; otherwise false.
 */
function validateInputs(form) {
  // Initialize the inputsValid flag to true.
  const inputsValid = true;

  // Get an array of all input elements within the form.
  const inputs = [...form.querySelectorAll("input")];

  // Iterate over each input element and validate its value.
  for (const input of inputs) {
    // Get the name attribute of the input element.
    const name = input.getAttribute("name");

    // Check if the input element is valid.
    const isValid = input.checkValidity();

    // If the input element is one of the special inputs (diet, allergies, preference),
    // check if at least one option has been checked.
    if (name === "diet" || name === "allergies" || name === "preference") {
      const isChecked = form.querySelector(`input[name="${name}"]:checked`) !== null;
      inputsValid = inputsValid && isChecked;
    }

    // Toggle the 'invalid-input' class on the input element based on its validity.
    input.classList.toggle("invalid-input", !isValid);
  }

  // Return the final value of the inputsValid flag.
  return inputsValid;
}
}