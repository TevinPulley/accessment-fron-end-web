console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form has been successfully submited");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

let pic = document.querySelector("#pic");
pic.addEventListener("mouseover", () => {
  alert("The duck says you have nice shoes!");
});
