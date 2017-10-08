var input = document.querySelector('input');
var preview = document.querySelector('.preview');

input.style.opacity = 0;
input.addEventListener('change', updateText);

function updateText() {
    var curFiles = input.files;
    if (curFiles.length > 0 && validFileType(curFiles[0])) {
        console.log(2);

    } else {
        console.log(22);
    }
}
var fileTypes = [
    'image/jpeg',
    'image/pjpeg',
    'image/png'
]

function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
            return true;
        }
    }
    return false;
}

function returnFileSize(number) {
    if (number < 1024) {
        return number + 'bytes';
    } else if (number > 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
    } else if (number > 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
    }
}