function extractText() {
    const items = Array.from(document.querySelectorAll('li'))
    const result = items.map(item => item.textContent.split("\n"))
    
    document.getElementById('result').value = result
}