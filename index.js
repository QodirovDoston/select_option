const selectBox = document.getElementById("selectBox");
const selectPoragrow =document.getElementById('selectPoragrow')
const list = document.getElementById("list")
const options = document.getElementsByClassName('options')
const icon = document.getElementById('icon')

console.log(icon);


selectBox.addEventListener("click", () => {
  list.classList.toggle("none");
  icon.classList.toggle("rotate");
});

for (op of options) {
    op.onclick = function () {
    selectPoragrow.innerHTML = this.textContent;
    icon.classList.toggle("none");
    list.classList.toggle("rotate");
  };
} 