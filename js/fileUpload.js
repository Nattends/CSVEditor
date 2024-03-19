function change_file() {
    var fileInput = document.getElementById('file-input');


    fileInput.addEventListener('change', function() {
        var file = fileInput.files[0];
        if (!file) {
            console.log('No file selected');
            return ;
        }

        showSpinner();

        setTimeout(() => {
            if (isValidFile(file)) {
                hideSpinner();
            } else {
                resetFileInput(fileInput);
                hideSpinner();
            }
        }, 0);
    })
}

function upload_click() {
    var fileInput = document.getElementById('file-input');
    var calculateButton = document.getElementById('upload-button');

    calculateButton.addEventListener('click', function () {
        console.log(fileInput.files)
        var file = fileInput.files[0];
        if (!file) {
            console.log("No file selected!");
            return;
        }

        showSpinner();
        setTimeout(() => {
            if (isValidFile(file)) {
                processFile(file);

            } else {
                resetFileInput(fileInput);
                hideSpinner();
            }
        }, 0);
    });

}

function isValidFile({ type, name}) {
    var fileType = type;
    var fileName = name;
    return fileType === 'text/csv' || fileName.endsWith('.csv');
}

function resetFileInput(fileInput) {
    fileInput.value = '';
}

function showSpinner() {
    $('#loadingSpinner').show();
}

function hideSpinner() {
   document.getElementById('loadingSpinner').style.display = 'none'
}