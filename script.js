const htmlBtn = document.getElementById('htmlBtn');
const cssBtn = document.getElementById('cssBtn')
const jsBtn = document.getElementById('jsBtn')
const runBtn = document.getElementById('runBtn')
const htmlArea = document.getElementById('htmlArea')
const cssArea = document.getElementById('cssArea')
const jsArea = document.getElementById('jsArea')
const output = document.getElementById('output')
htmlBtn.addEventListener('click', () => {
    htmlBtn.classList.add('active')
    htmlArea.style.display = 'block'
    cssBtn.classList.remove('active')
    cssArea.style.display = 'none'
    jsBtn.classList.remove('active')
    jsArea.style.display = 'none'
    runBtn.classList.remove('active')
    output.style.display = 'none'
})
cssBtn.addEventListener('click', () => {
    cssBtn.classList.add('active')
    cssArea.style.display = 'block'
    htmlBtn.classList.remove('active')
    htmlArea.style.display = 'none'
    jsBtn.classList.remove('active')
    jsArea.style.display = 'none'
    runBtn.classList.remove('active')
    output.style.display = 'none'
})
jsBtn.addEventListener('click', () => {
    jsBtn.classList.add('active')
    jsArea.style.display = 'block'
    htmlBtn.classList.remove('active')
    htmlArea.style.display = 'none'
    cssBtn.classList.remove('active')
    cssArea.style.display = 'none'
    runBtn.classList.remove('active')
    output.style.display = 'none'
})
runBtn.addEventListener('click', () => {
    runBtn.classList.add('active')
    output.style.display = 'block'
    htmlBtn.classList.remove('active')
    htmlArea.style.display = 'none'
    cssBtn.classList.remove('active')
    cssArea.style.display = 'none'
    jsBtn.classList.remove('active')
    jsArea.style.display = 'none'


function getCombinedCode() {
  const htmlCode = htmlArea.value;
  const cssCode = `<style>` + cssArea.value + `</style>`;
  const jsCode = `<script>` + jsArea.value + `</script>`;

  // Wrap everything in a complete HTML structure
  return `<!DOCTYPE html>
<html>
<head>` + cssCode + `</head>
<body>` + htmlCode + jsCode + `</body>
</html>`;
}


function updatePreview() {
  const combinedCode = getCombinedCode();
  output.srcdoc = combinedCode;
}


    htmlArea.addEventListener('keyup', updatePreview);
cssArea.addEventListener('keyup', updatePreview);
jsArea.addEventListener('keyup', updatePreview);

})
