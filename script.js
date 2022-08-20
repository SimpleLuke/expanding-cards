const panels = document.querySelectorAll(".panel");

const removeActiveHandler = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveHandler();
    panel.classList.add("active");
  });
});
