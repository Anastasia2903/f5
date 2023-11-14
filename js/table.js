document.addEventListener("DOMContentLoaded", function () {
    // Create a 6x6 table
    createTable(6, 6);

    // Color palette for click event
    const colorPalette = ["#ff9999", "#99ff99", "#9999ff", "#ffff99", "#ffcc99", "#cc99ff"];

    // Set up event listeners for each cell
    const cells = document.querySelectorAll("td");
    cells.forEach((cell, index) => {
        cell.addEventListener("mouseover", function () {
            // Change color on hover
            if (index + 1 === 18) {
                this.style.backgroundColor = getRandomColor();
            }
        });

        cell.addEventListener("click", function () {
            // Change color on click using the color picker
            const colorPicker = document.getElementById("colorPicker");
            this.style.backgroundColor = colorPicker.value;
        });

        cell.addEventListener("dblclick", function () {
            // Change color of columns starting from the clicked cell, every second column
            const columnIndex = index % 6;
            const rows = document.querySelectorAll("tr");
            rows.forEach((row, rowIndex) => {
                if (rowIndex % 2 === 0) {
                    const cellInColumn = row.cells[columnIndex];
                    cellInColumn.style.backgroundColor = getRandomColor();
                }
            });
        });
    });

    // Helper function to create a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Helper function to create the table
    function createTable(rows, cols) {
        const table = document.getElementById("colorTable");

        for (let i = 0; i < rows; i++) {
            const row = table.insertRow();
            for (let j = 0; j < cols; j++) {
                const cell = row.insertCell();
                cell.textContent = i * cols + j + 1;
            }
        }
    }
});
