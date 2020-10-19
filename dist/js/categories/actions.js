const fetchCategories = () => {
    let categoriesHtml = "";
    const url = `http://localhost:4000/category`;
    fetch(url, { method: 'get' })
        .then(res => res.json())
        .then((responseJson) => {
        responseJson.categories.map((category) => {
            categoriesHtml += `<div class="category-content category-container " id="${category.id}">
                <div>
   ${category.name}
   <i class='fa fa-trash fa-1x trash-icon' aria-hidden='true' onclick='deleteCategoryById(this.parentElement.id)'></i>
   </div>
   <div>
   <img src="http://localhost:4000/${category.categoryImage}" width="200" height="150">
   </div>
   </div>`;
        });
    }).then(() => {
        document.getElementById('categories').innerHTML = categoriesHtml;
        console.log(categoriesHtml);
    });
};
const showForm = (action) => {
    let htmlForm = "";
    let buttonString = "";
    let inputString = "";
    let nameString = "";
    let imageString = "";
    switch (action) {
        case 'create':
            inputString = ``;
            nameString = ` <input class="input" placeholder="Category Name" id="category-input">`;
            nameString = ` <input class="input" placeholder="Category Name" id="category-input">`;
            imageString = ` <input class="input-image" type = "file" id="category-image" accept='image/*'>`;
            buttonString = `<button class="create-button" onclick='createCategory()'>Create Category</button>`;
            break;
        case 'get':
            buttonString = `<button class="create-button" onclick='getCategory()'>Get Category</button>`;
            break;
        case 'delete':
            buttonString = `<button class="create-button" onclick='deleteCategory()'>Delete Category</button>`;
            break;
        case 'update':
            inputString = `<input class="input" placeholder="Updated Name" id="category-input-updated">`;
            buttonString = `<button class="create-button" onclick='updateCategory()'>Update Category</button>`;
            break;
    }
    htmlForm = ` <div class="content container-form" id="container">
    <input class="input" placeholder="Category ID" id="category-id">
    ${nameString}
    ${inputString}
    ${imageString}
    ${buttonString}
</div>`;
    let container = document.getElementById('result');
    container.innerHTML = htmlForm;
};
const createCategory = () => {
    let inputNameElement = document.getElementById('category-input');
    let categoryName = inputNameElement.value;
    let inputIdElement = document.getElementById('category-id');
    let categoryId = inputIdElement.value;
    let imageIdElement = document.getElementById('category-image');
    let categoryImage = imageIdElement.value;
    const packet = new FormData();
    packet.append("name", categoryName);
    packet.append("id", categoryId);
    packet.append("categoryImage", imageIdElement.files[0]);
    fetch(`http://localhost:4000/category`, {
        method: 'post',
        body: packet
    }).then(() => {
        fetchCategories();
    });
};
const getCategory = () => {
    let idElement = document.getElementById('category-id');
    let id = idElement.value;
    let url = `http://localhost:4000/category/${id}`;
    console.log(url);
    fetch(url, { method: 'GET' }).
        then((res) => {
        return res.json();
    }).then((responseJson) => {
        if (responseJson.category.length === 0) {
            return;
        }
        let categoryHtml = "";
        categoryHtml = `<div class="category-content category-container " id="${responseJson.category[0].id}">
                <div>
   ${responseJson.category[0].name}
   <i class='fa fa-trash fa-1x trash-icon' aria-hidden='true' onclick='deleteCategoryById(this.parentElement.id)'></i>
   </div>
   <div>
   <img src="http://localhost:4000/${responseJson.category[0].categoryImage}" width="200" height="150">
   </div>
   </div>`;
        ;
        document.getElementById('categories').innerHTML = categoryHtml;
    }).
        catch((err) => {
        console.log(err);
    });
};
const deleteCategory = () => {
    let inputElement = document.getElementById('category-id');
    let categoryId = inputElement.value;
    const url = `http://localhost:4000/category/${categoryId}`;
    fetch(url, { method: 'DELETE' }).then(() => {
        fetchCategories();
    });
};
const updateCategory = () => {
    let inputElement = document.getElementById('category-id');
    let categoryId = inputElement.value;
    let inputElementUpdated = document.getElementById('category-input-updated');
    let categoryNameUpdated = inputElementUpdated.value;
    const url = `http://localhost:4000/category/${categoryId}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([{
                propName: "name",
                value: `${categoryNameUpdated}`
            }])
    }).then(() => {
        fetchCategories();
    });
};
const deleteCategoryById = (id) => {
    const url = `http://localhost:4000/category/${id}`;
    fetch(url, { method: 'DELETE' }).then(() => {
        fetchCategories();
    });
};
//# sourceMappingURL=actions.js.map