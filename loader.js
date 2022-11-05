fetch("family.json")
    .then(function (family) {
        return family.json()
    })
    .then(function (familyMembers) {
        let placeHolder = document.querySelector("#data-output");
        let out = '';

        for (let member of familyMembers) {
            out += `
                <tr>
                    <td>${member.firstname} ${member.lastname}</td>
                    <td style = 'display : none;'>${member.lastname}</td>
                    <td class = 'age' >${member.age}</td>
                    <td>${member.address}</td>
                </tr>
               `;
        }
        placeHolder.innerHTML = out;

        const button = document.getElementById('last')
        const tableRow = document.querySelectorAll('tr')
        const tableCell = document.querySelectorAll('td')

        // Just for testing
        // console.log(placeHolder.children[1])
        // console.log(tableRow[1].children[0])

        // //////////////////////////

        button.addEventListener('click', function sortAge() {
            const age = document.querySelectorAll('.age')
            for (let i = 0; i < tableRow.length - 1; i++) {
                if (age[i].innerHTML >= 30) {
                    placeHolder.children[i].style.backgroundColor = 'orange'
                    // placeHolder.children[i].style.color = 'white'
                }
            }
        })

        // Split the full name
        const fullName = tableRow[1].children[0].innerText;
        const [first, last] = fullName.split(' ');
        console.log(last)

        firstBtn = document.querySelector("#first")
        firstBtn.addEventListener('click', function sortTable() {
            let table, rows, switching, e, x, y, shouldSwitch;
            table = document.getElementById("myTable");
            switching = true;
            /*Make a loop that will continue until
            no switching has been done:*/
            while (switching) {
                //start by saying: no switching is done:
                switching = false;
                rows = table.rows;
                /*Loop through all table rows (except the
                first, which contains table headers):*/
                for (e = 1; e < (rows.length - 1); e++) {
                    //start by saying there should be no switching:
                    shouldSwitch = false;
                    /*Get the two elements you want to compare,
                    one from current row and one from the next:*/
                    x = rows[e].getElementsByTagName("td")[1];
                    y = rows[e + 1].getElementsByTagName("td")[1];
                    //check if the two rows should switch place:
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    /*If a switch has been marked, make the switch
                    and mark that a switch has been done:*/
                    rows[e].parentNode.insertBefore(rows[e + 1], rows[e]);
                    switching = true;
                }
            }
        })
        // FORM USER INPUT
        const form = document.getElementById('form')
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let first = document.getElementById('firstNameInput').value;
            let last = document.getElementById('lastNameInput').value;
            let fullName = `${first} ${last}`;
            console.log(fullName);
            let age = document.getElementById('ageInput').value;
            console.log(age);
            let address = document.getElementById('addressInput').value;
            console.log(address)
        })
        let reset = document.querySelectorAll('#submit')
        console.log(reset)
        reset.addEventListener('click', function () {
            console.log('hey')
            // placeHolder.innerHTML = out;
        })
        // KNOW THE POSITION FOR EACH CELL
        // let tableCellPosition = document.querySelector('.tab'), rIndex, cIndex;
        // // LOOP THROUGHT EACH ROW
        // console.log(tableCellPosition.rows.length)

        // for (let r = 0; r < tableCellPosition.rows.length; r++) {
        //     // LOOP THROUGHT CELL IN EACH ROW 
        //     for (let c = 0; c < tableCellPosition.rows[r].cells.length; c++) {
        //         tableCellPosition.rows[r].cells[c].onClick = function () {
        //             rIndex = this.parentElement.rowIndex;
        //             console.log(rIndex);
        //         };
        //     }
        // }
        // var table = document.getElementById("table"), rIndex, cIndex;

        // // table rows
        // for (var i = 1; i < table.rows.length; i++) {
        //     // row cells
        //     for (var j = 0; j < table.rows[i].cells.length; j++) {
        //         table.rows[i].cells[j].onclick = function () {
        //             rIndex = this.parentElement.rowIndex;
        //             cIndex = this.cellIndex + 1;
        //             console.log("Row : " + rIndex + " , Cell : " + cIndex);
        //         };
        //     }
        // }
    })

