class Login {
  constructor(formSelector) {
    this.form = document.body.querySelector(formSelector);

    this.bindEvents();
  }

  bindEvents() {
    const inputs = Array.from(this.form.querySelectorAll(".j-input"));

    inputs.forEach(input => input.addEventListener("input", this.validation));
  }

  validation({ target }) {
    const { value } = target;
    const { validation } = target.dataset;
    const mainRules = validation.split("|");
    const rules = mainRules.map(rule => rule.split(":"));
    const error = target.closest(".j-wrapper").querySelector(".j-error");

    error.innerText = "";

    /* First var */

    // rules.forEach(rule => {
    //   if (rule.includes(rule[0]) && !value) {
    //     error.innerText = "поле обязательно для заполнения";
    //   }

    //   if (rule.includes("min_length") && value.length < rule[1] && value) {
    //     error.innerText = `поле должно быть длинее ${rule[1]} символов`;
    //   }

    //   if (rule.includes("max_length") && value.length >= rule[1]) {
    //     error.innerText = `поле должно быть меньше ${rule[1]} символов`;
    //   }
    // });

    /* Second var */

    // rules.forEach(rule => {
    //   switch (rule[0]) {
    //     case "required":
    //       if (!value) {
    //         error.innerText = "поле обязательно для заполнения";
    //       }
    //       break;
    //     case "min_length":
    //       if (value.length < rule[1] && value) {
    //         error.innerText = `поле должно быть длинее ${rule[1]} символов`;
    //       }
    //       break;
    //     case "max_length":
    //       if (value.length >= rule[1]) {
    //         error.innerText = `поле должно быть меньше ${rule[1]} символов`;
    //       }
    //       break;
    //     default:
    //       break;
    //   }
    // });
  }
}

new Login(".j-registration");
