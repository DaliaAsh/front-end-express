const fetchProducts = () => {
    const url = `http://localhost:4000/product`;
    fetch(url, {
        method: 'GET'
    }).then((res) => {
        return res.json();
    }).then((responseJson) => {
        let productsHtml = ``;
        responseJson.products.map((product) => {
            productsHtml += `<div class = 'product'>
    <div>
    <span class='field'>ID:</span><span>${product.id}</span>
    </div>
    <div>
    <span class='field'>Name:</span><span>${product.name}</span>
    </div>
    <div>
    <span class='field'>Raw Price:</span><span>${product.rawPrice}</span>
    </div>
    <div>
    <span class='field'>Price:</span><span>${product.price}</span>
    </div>
    <div>
    <span class='field'>Code:</span><span>${product.code}</span>
    </div>
    <div>
    <span class='field'>Color:</span><span>${product.color}</span>
    </div>
    <div>
    <span class='field'>Category ID:</span><span>${product.category}</span>
    </div>
    <div>
    <span class='field'>Description:</span><span>${product.description}</span>
    </div>
    <div>
    <span class='field'>Stock Count:</span><span>${product.stockCount}</span>
    </div>
    <div>
    <span class='field'>Expiration Date:</span><span>${product.expirationDate}</span>
    </div>
    </div>`;
        });
        document.getElementById('products').innerHTML =
            `<div class = 'products'>
    ${productsHtml}
    </div>
    `;
    });
};
const showFormProduct = (action) => {
    let htmlForm = "";
    switch (action) {
        case 'create':
            htmlForm = `
            <div class="products-content products-container-form ${action === 'create' ? 'create-form' : ''}" id="products-container">
            <input class="products-input" placeholder="Product Name" id="product-name"> 
            <input class="products-input" placeholder="Product ID" id="product-id">
            <input class="products-input" placeholder="Raw Price" id="product-raw-price"> 
            <input class="products-input" placeholder="Price" id="product-price">
            <input class="products-input" placeholder="Code" id="product-code">
            <input class="products-input" placeholder="Color" id="product-color">
            <input class="products-input" placeholder="Category ID" id="product-category-id">
            <input class="products-input" placeholder="Description" id="product-description">
            <input class="products-input" placeholder="Stock Count" id="product-stock-count">
            <input class="products-input" placeholder="Expiration Date" id="product-expiration-date">
            <button class="products-create-button" onclick='createProduct()'>Create Product</button>
            </div>`;
            break;
        case 'get':
            htmlForm = `<div class="products-content products-container-box" id="products-container">
            <input class="products-input" placeholder="Product ID" id="product-id">
            <button class="products-create-button" onclick='getProduct()'>Get Product</button>
            </div>`;
            break;
        case 'delete':
            htmlForm = ` <div class="products-content products-container-box" id="products-container">
            <input class="products-input" placeholder="Product ID" id="product-id">
            <button class="products-create-button" onclick='deleteProduct()'>Delete Product</button>
            </div>`;
            break;
        case 'update':
            htmlForm = ` <div class="products-content products-container-box" id="products-container">
            <input class="products-input" placeholder="Product ID" id="product-id">
            <input class="products-input" placeholder="Property Name" id="property-name">
            <input class="products-input" placeholder="Property Value" id="property-value">
            <button class="products-create-button" onclick='updateProduct()'>Update Product</button>
            </div>`;
            break;
    }
    document.getElementById('products-result').innerHTML = htmlForm;
};
const createProduct = () => {
    let idInput = document.getElementById('product-id');
    let nameInput = document.getElementById('product-name');
    let rawPriceInput = document.getElementById('product-raw-price');
    let priceInput = document.getElementById('product-price');
    let codeInput = document.getElementById('product-code');
    let colorInput = document.getElementById('product-color');
    let categoryIdInput = document.getElementById('product-category-id');
    let descriptionInput = document.getElementById('product-description');
    let stockCountInput = document.getElementById('product-stock-count');
    let expirationDateInput = document.getElementById('product-expiration-date');
    const url = `http://localhost:4000/product`;
    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            id: idInput.value,
            name: nameInput.value,
            rawPrice: rawPriceInput.value,
            price: priceInput.value,
            code: codeInput.value,
            category: categoryIdInput.value,
            color: colorInput.value,
            description: descriptionInput.value,
            stockCount: stockCountInput.value,
            expirationDate: expirationDateInput.value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        return res.json();
    }).then(() => {
        fetchProducts();
    });
};
const getProduct = () => {
    const productIdElement = document.getElementById('product-id');
    const productId = productIdElement.value;
    const url = `http://localhost:4000/product/${productId}`;
    fetch(url, {
        method: 'GET'
    }).then((res) => {
        return res.json();
    }).then((responseJson) => {
        let productHtml = ``;
        productHtml = `<div class = 'product'>
    <div>
    <span class='field'>ID:</span><span>${responseJson.product[0].id}</span>
    </div>
    <div>
    <span class='field'>Name:</span><span>${responseJson.product[0].name}</span>
    </div>
    <div>
    <span class='field'>Raw Price:</span><span>${responseJson.product[0].rawPrice}</span>
    </div>
    <div>
    <span class='field'>Price:</span><span>${responseJson.product[0].price}</span>
    </div>
    <div>
    <span class='field'>Code:</span><span>${responseJson.product[0].code}</span>
    </div>
    <div>
    <span class='field'>Color:</span><span>${responseJson.product[0].color}</span>
    </div>
    <div>
    <span class='field'>Category ID:</span><span>${responseJson.product[0].categoryId}</span>
    </div>
    <div>
    <span class='field'>Description:</span><span>${responseJson.product[0].description}</span>
    </div>
    <div>
    <span class='field'>Stock Count:</span><span>${responseJson.product[0].stockCount}</span>
    </div>
    <div>
    <span class='field'>Expiration Date:</span><span>${responseJson.product[0].expirationDate}</span>
    </div>
    </div>`;
        document.getElementById('products').innerHTML =
            `<div class = 'products'>
    ${productHtml}
    </div>
    `;
    });
};
const deleteProduct = () => {
    const productIdElement = document.getElementById('product-id');
    const productId = productIdElement.value;
    const url = `http://localhost:4000/product/${productId}`;
    fetch(url, {
        method: 'DELETE'
    }).then((res) => {
        return res.json();
    }).then(() => {
        fetchProducts();
    });
};
const updateProduct = () => {
    const productIdElement = document.getElementById('product-id');
    const propertyNameElement = document.getElementById('property-name');
    const propertyValueElement = document.getElementById('property-value');
    const productId = productIdElement.value;
    const propertyName = propertyNameElement.value;
    const propertyValue = propertyValueElement.value;
    const url = `http://localhost:4000/product/${productId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{
                propName: propertyName,
                value: propertyValue
            }])
    }).then((res) => {
        return res.json();
    }).then(() => {
        fetchProducts();
    });
};
//# sourceMappingURL=productsActions.js.map