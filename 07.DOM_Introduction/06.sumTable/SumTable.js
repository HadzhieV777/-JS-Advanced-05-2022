function sumTable() {
    let rows = Array.from(document.querySelectorAll('tr')).slice(1, -1)
    let result = 0
    for (let row of rows) {
        result += Number(row.lastElementChild.innerText)
    }
    document.getElementById('sum').textContent = result
}