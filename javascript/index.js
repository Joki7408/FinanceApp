const xValues = []; //Categories
const yValues = []; //Values of the Categories
const barColors = [];

const tableArray = [];  //Array for all the values of the table vtl mehrdimensional

window.onload = function() {
}

function addCostBtn(element) {
    const row = document.createElement("tr");
    const tdata1 = document.createElement("td");
    const tdata2 = document.createElement("td");
    const tdata3 = document.createElement("td");
    const input1 = document.createElement("input");
    const input2 = document.createElement("input");
    const addButton = document.createElement("button");

    input2.type = "number";
    addButton.text = "add";
    addButton.id

    tdata1.appendChild(input1);
    tdata2.appendChild(input2);
    tdata3.appendChild(addButton);
    row.appendChild(tdata1);
    row.appendChild(tdata2);
    row.appendChild(tdata3);
    
    const fixCostTbl = document.getElementById(element);
    fixCostTbl.appendChild(row);

}

function calculateChart() {
    new Chart("financeChart", {
        type: "doughnut",
        data: {
            labels: xValues,
            datasets: [{
            backgroundColor: barColors,
            data: yValues
            }]
        },
        options: {
            title: {
            display: true,
            text: "Finance Chart"
            }
        }
        });
}