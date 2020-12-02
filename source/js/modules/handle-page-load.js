const handlePageLoad = () => {
  window.addEventListener(`load`, () => {
    setTimeout(() => document.body.classList.add(`active`), 500);
  });
};

export default handlePageLoad;
