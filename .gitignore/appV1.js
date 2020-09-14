let n = 0;
/**
 * 
 * @param {number} n - convert number to string and add 3 zero at the begining of the string
 */
function numberFormat(n) {
    return n.toString().padStart(3, '0');
}

/**
 * render the DOM
 *
 * see the key prop. for the items identification & sorting & better performance
 */
function render() {
    const arrItems = [
        'task 1',
        'task 2',
        'task 3'
    ];
    const content = <React.Fragment>
        <h1 className="title">
            Hello Mario <span>{numberFormat(n)}</span>
        </h1>
        <ul>
            {arrItems.map((item, k) => <li key={k}>{item}</li>)}
        </ul>
    </React.Fragment>
  
    ReactDOM.render(content, document.querySelector('#root'));
}

render();

// window.setInterval(() => {
//     n++
//     render();
// }, 1000);

