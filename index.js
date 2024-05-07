function createPassword() {
  function arrayGen(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqwxyz0123456789".split(
      ""
    ),
    result = "";
  for (let i = 0; i < 12; i++) {
    result += arrayGen(characters);
  }

  let inputSpace = document.querySelector("input");
  inputSpace.value = "";

  inputSpace.value = result;

  let imageButton = document.getElementById("imgBtn");

  async function copyContent() {
    try {
      await navigator.clipboard.writeText(inputSpace.value);
      successMessage = "Text copied to clipboard";
      alert("Text copied to clipboard");
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  }

  imageButton.addEventListener("click", copyContent);
}