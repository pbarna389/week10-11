const googleSearchButton = document.querySelector("#btn-google-search");

console.log(googleSearchButton);

const errorMessage = () => {
    return `
        <span class="error">Type in something please!</span>
    `
};

setInterval(save, 3000);

function save() {
    const textarea = document.querySelector('#doc-text');
    const docText = textarea.value;

    const saveText = document.querySelector('#save-in-progress-text');

    saveText.classList.remove('hidden');

    fetch('http://127.0.0.1:9000', {
        method: 'POST',
        body: docText
    }).then(function () {
        saveText.classList.add('hidden')
    });

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