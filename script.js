function multiply() {
  const inputValue = document.querySelector('.inputBox').value;
  const array = [];
  for (let i = 1; i <= 10; i++) {
    array.push(`${inputValue} * ${i} = ${inputValue * i}`);
  }
  document.querySelector('.message').textContent = array.join('\r\n');
}
document.querySelector('.searchBtn').addEventListener('click', multiply);
