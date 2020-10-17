let options = Array.from(document.getElementsByClassName("option"));
options.map((option) => {
    option.addEventListener("click", (event) => {
        callAction(option.id);
    });
});

const callAction = (optionId: string) => {
    switch (optionId) {
        case 'option1':
          fetchCategories();
            break;
        case 'option2':
           showForm('create');
            break;
        case 'option3':
            showForm('get');
            break;
        case 'option4':
            showForm('delete');
            break;
        case 'option5':
            showForm('update');
            break;

    }
}

