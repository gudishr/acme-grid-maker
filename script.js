// Generate data
const generateNxN = (n, m) => {
    const rows = [];
    for (let i = 0; i < n; i++) {
      const row = [];
      for (let j = 0; j < m; j++) {
        row.push('');
      }
      rows.push(row);
    }
    return rows;    
}

// Generate HTML for rows and cols
const generateHTML = (rows)=> {
    return rows.map(row =>
    `<div class='row'>
    ${ row.map(cell => `<div class ='cell'>${ cell }</div>`).join('')}
    </div>`).join('');
}

const grid = document.querySelector('#gridContainer')

// Render the grid
const render = (rowVal, colVal) => {
    const data = generateNxN(rowVal, colVal);
    const html = generateHTML(data);
    grid.innerHTML = html;
}

const formContainer = document.querySelector('#gridInput')
const inputRows = document.querySelector('[name="rows"]')
const inputColumns = document.querySelector('[name="columns"]')

// Submit event
formContainer.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const rowVal = inputRows.value
    const colVal = inputColumns.value
    //Reseting text display of seleted row and col ids in the UI
    const rowIdxEl = document.querySelector('#rowIdx')
    const colIdxEl = document.querySelector('#colIdx')
    rowIdxEl.innerText = ''
    colIdxEl.innerText = ''
    render(rowVal, colVal)
})

// Displaying row and column index on cell hover
grid.addEventListener('click', (ev) => {
    const cell = ev.target
    if (cell.className.includes("cell")) {
        console.log("in click")
        const row = cell.parentNode
        const cdx = [...row.children].indexOf(cell)
        const rdx = [...row.parentNode.children].indexOf(row)
        const rowIdxEl = document.querySelector('#rowIdx')
        const colIdxEl = document.querySelector('#colIdx')
        ev.preventDefault()
        rowIdxEl.innerText = "Row: " + rdx
        colIdxEl.innerText = "Col: " + cdx
    }
})

// Validation for rows input field
inputRows.addEventListener('keyup', (ev) => {
    ev.preventDefault()
    const value = ev.target.value
    const rowError = document.querySelector('#rowError')
    if (!Number(value) || (value<0) || (value>50)) {
        rowError.innerText = "row must only contain a number between 0 to 50"   
    }
    if (value === '' || ((value >= 0) && (value <=50))) {
        rowError.innerText = ''
    }
})

// Validation for columns input field
inputColumns.addEventListener('keyup', (ev) => {
    ev.preventDefault()
    const value = ev.target.value
    const ColError = document.querySelector('#colError')
    if (!Number(value) || (value<0) || (value>50)) {
        ColError.innerText = "column must only contain a number between 0 to 50"   
    }
    if (value === '' || ((value >= 0) && (value <=50))) {
        ColError.innerText = ''
    }
})



