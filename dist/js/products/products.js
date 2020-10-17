const IPP = `192.168.31.212`;
let optionsProduct = Array.from(document.getElementsByClassName("products-option"));
optionsProduct.map((option) => {
    option.addEventListener("click", (event) => {
        callActionProduct(option.id);
    });
});
const callActionProduct = (optionId) => {
    switch (optionId) {
        case 'products-option1':
            fetchProducts();
            break;
        case 'products-option2':
            showFormProduct('create');
            break;
        case 'products-option3':
            showFormProduct('get');
            break;
        case 'products-option4':
            showFormProduct('delete');
            break;
        case 'products-option5':
            showFormProduct('update');
            break;
    }
};
//# sourceMappingURL=products.js.map