const googleSearchButton = document.querySelector("#btn-google-search");

console.log(googleSearchButton);

const errorMessage = () => {
    return `
        <span class="error">Type in something please!</span>
    `
};

const deleteMessage = () => {
    const error = document.querySelector('.error');
    error.parentNode.removeChild(error);
};

googleSearchButton.addEventListener('click', function (event) {
    event.preventDefault();

    const form = document.querySelector("#form-googleSearch");
    const searchTerm = form.querySelector("input[name='q']").value;

    if (searchTerm === '') {
        form.insertAdjacentHTML('afterend', errorMessage());

        setTimeout(deleteMessage, 3000);
    } else {
        form.submit();
    };
});