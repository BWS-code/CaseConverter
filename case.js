function myFirstLetterUpper(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].trim()
        let element = arr[i];
        let firstLetter = element.substr(0, 1);
        let restLetters = element.substr(1, element.length - 1);
        arr[i] = firstLetter.toUpperCase() + restLetters;
    }
}

function myUpper() {
    document.getElementById('textAreaID').value = document.getElementById('textAreaID').value.toUpperCase();
}

function myLower() {
    document.getElementById('textAreaID').value = document.getElementById('textAreaID').value.toLowerCase();
}

function myProper() {
    myLower()
    let words = document.getElementById('textAreaID').value.split(' ')
    myFirstLetterUpper(words)
    document.getElementById('textAreaID').value = words.join(" ");
}

function mySentence() {
    myLower()
    let sentences = document.getElementById('textAreaID').value.match( /[^.!?]+[.!?]+/g )
    myFirstLetterUpper(sentences)
    document.getElementById('textAreaID').value = sentences.join(" ");
}

function mySave() {
    let filename = 'text.txt'
    let text = document.getElementById('textAreaID').value
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
