// HERE WE FITCH THE DATA FILE IN JAVASCRIPT
fetch("family.json")
    .then(function (family) {
        return family.json()
    })
    // HERE WE USE TO APPEND EVERY SINGLE DATA REPETLY INTO A TABLE ROWS
    .then(function (familyMembers) {
        let placeHolder = document.querySelector("#data-output");
        let out = '';

        for (let member of familyMembers) {
            out += `
                <tr>
                    <td>${member.firstname} ${member.lastname}</td>
                    <td style = 'display : none;'>${member.lastname}</td>
                    <td class = 'age' >${member.age ?? ''}</td>
                    <td>${member.address}</td>
                </tr>
               `;
        }

        placeHolder.innerHTML = out;
        highlight()


        // SORT BY LAST NAME
        let sortBtn = document.querySelector("#sort")
        sortBtn.addEventListener('click', function sortTable() {
            // placeHolder.innerHTML = out;
            let table, rows, switching, currentRow, nextRow, shouldSwitch;
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
                for (let r = 1; r < (rows.length - 1); r++) {
                    //start by saying there should be no switching:
                    shouldSwitch = false;
                    /*Get the two elements you want to compare,
                    one from current row and one from the next:*/
                    currentRow = rows[r].getElementsByTagName("td")[1];
                    nextRow = rows[r + 1].getElementsByTagName("td")[1];
                    //check if the two rows should switch place:
                    if (currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()) {
                        //if so, mark as a switch and break the loop:
                        shouldSwitch = true;
                        break;
                    }
                }
                if (shouldSwitch) {
                    /*If a switch has been marked, make the switch
                    and mark that a switch has been done:*/
                    rows[r].parentNode.insertBefore(rows[r + 1], rows[r]);
                    switching = true;
                }
            }
        })
        // RESETTING TO THE DEFAULT TABLE
        let reset = document.querySelector('#reset')
        reset.addEventListener('click', function () {
            placeHolder.innerHTML = out;
        })

        // create a form under the table. It has firstname, lastname, age, address. When I submit it, It adds to the table
        // I need appen the form input to a new row

        // FORM USER INPUT


        submitBtn = document.getElementById('submit');
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
            let managedTable = document.getElementById('myTable');
            let newRow = managedTable.insertRow(managedTable.length);
            let cell1 = newRow.insertCell(0);
            let cell2 = newRow.insertCell(1);
            let cell3 = newRow.insertCell(2);

            let sortBtn = document.querySelector("#sort")

            cell1.innerHTML = fullName;
            cell2.innerHTML = age;
            cell2.classList.add('age');
            cell3.innerHTML = address;

            highlight()
        })
    })

function highlight() {
    const placeHolder = document.querySelector("#data-output");
    const highlightBtn = document.querySelector('#highlight')
    const tableRow = document.querySelectorAll('tr')
    const tableCell = document.querySelectorAll('td')



    // HIGHLIGHT THE FAMILY MEMBER THAT OVER 3O YEARS OLD
    highlightBtn.addEventListener('click', function sortAge() {
        const age = document.querySelectorAll('.age')
        console.log(age)
        for (let i = 1; i < tableRow.length - 1; i++) {
            console.log(age[i] ?? i)
            if (age[i].innerHTML > 30) {
                placeHolder.children[i].style.backgroundColor = '#FFA500'
            }
        }
    })
}

// function addTableRow() {
//     let managedTable = document.getElementById('myTable');
//     let newRow = managedTable.insertRow(managedTable.rows.length);
//     let cell1 = newRow.insertCell(0),
//         cell2 = newRow.insertCell(1),
//         cell3 = newRow.insertCell(2),
//         firstName = document.getElementById('firstNameInput').value,
//         lastName = document.getElementById('lastNameInput').value,
//         fullName = `${firstName} ${lastName}`,
//         age = document.getElementById('age').value,
//         address = document.getElementById('address').value;
//     cell1.innerHTML = fullName;
//     console.log(fullName)
//     cell2.innerHTML = age;
//     cell3.innerHTML = address;
// }