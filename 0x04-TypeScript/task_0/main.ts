interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

// Create studentsList array
const studentsList: Student[] = [student1, student2];

// Render table using Vanilla JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const table: HTMLTableElement = document.createElement("table");
  table.setAttribute("border", "1");

  // Create header row
  const headerRow: HTMLTableRowElement = document.createElement("tr");
  const headers: string[] = ["First Name", "Location"];
  headers.forEach((headerText: string) => {
    const th: HTMLTableCellElement = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Create data rows
  studentsList.forEach((student: Student) => {
    const row: HTMLTableRowElement = document.createElement("tr");
    const firstNameCell: HTMLTableCellElement = document.createElement("td");
    const locationCell: HTMLTableCellElement = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });

  // Append table to document body
  document.body.appendChild(table);
});
