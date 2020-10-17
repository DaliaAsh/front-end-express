const cards = Array.from(document.getElementsByClassName("card"));
cards.map((card) => {
    card.addEventListener("click", (event) => {
        showPage(card.id);
    });
});
const showPage = (pageName) => {
    window.location.pathname = `/public/${pageName}.html`;
};
//# sourceMappingURL=ShowPages.js.map