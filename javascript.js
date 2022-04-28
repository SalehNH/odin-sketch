function chooseGridSize() {

    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    container.style.display = 'grid';
    let columnsNumbers = 'auto';
    let columnsN;
    let choice = prompt("Please enter the grid size (from 4 to 100):", "32");
    while (choice < 4 || choice > 100) {
        alert("wrong number was entered!");
        choice = prompt("Please enter the grid size (from 4 to 100):", "32");
    }
    columnsN = choice;

    for (let i = 0; i < columnsN - 1; i++) {
        columnsNumbers += ' auto';
    }
    container.style['grid-template-columns'] = columnsNumbers;


    for (let i = 0; i < columnsN; i++) {
        for (let j = 0; j < columnsN; j++) {
            const div = document.createElement('div');
            div.addEventListener("mouseenter", function (event) {
                // highlight the mouseenter target
                event.target.style.backgroundColor = "purple";
            });

            div.classList.add('grid-item');
            //div.style.height = '20px';
            //div.style.width = '20px';
            // if (j % 2 == 0) {
            //     if (i % 2 == 0) {
            //         div.style.backgroundColor = 'black';
            //     } else {
            //         div.style.backgroundColor = 'lightBlue';
            //     }
            // } else {
            //     if (i % 2 == 0) {
            //         div.style.backgroundColor = 'lightBlue';
            //     } else {
            //         div.style.backgroundColor = 'black';
            //     }
            // }
            container.appendChild(div);
        }
    }
}