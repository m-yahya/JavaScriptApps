function result (inputText) {
  document.getElementById('output').innerHTML = 'Length is ' + inputText;
};

document.getElementById('button').onclick = function (event) {
  result(document.getElementById('string').value.length);
}
document.getElementById('string').value = '';

document.getElementById('clear').onclick = function () {
  document.getElementById('string').value = '';
  document.getElementById('output').innerHTML = '';
};
