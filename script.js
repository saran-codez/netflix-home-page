const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content-item");

tabItems.forEach((item) => item.addEventListener("click", selectItem));

function selectItem(e) {
  removeShow();
  removeBorder();
  this.classList.add("tab-border");
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}

function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
}

function removeShow() {
  tabContents.forEach((item) => item.classList.remove("show"));
}
