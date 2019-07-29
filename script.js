const formContainer = document.querySelector('#gridInput')
const inputRows = document.querySelector('[name="rows"]')
const inputColumns = document.querySelector('[name="columns"]')

formContainer.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const rowVal = inputRows.value
    const colVal = inputColumns.value
    render(rowVal, colVal)
})

const render = (rowVal, colVal) => {
    const parentGrid = document.querySelector('#gridContainer')
    const cell = document.createElement('div')
    cell.classList.add('cell')

    // render columns
    i = 0
    while (i < colVal) {
        
        i++
    }
}