interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string,
}

const student1: Student = {firstName: 'Reem', lastName: 'Osama', age: 24, location: 'UAE'}
const student2: Student = {firstName: 'Sara', lastName: 'Khalil', age: 24, location: 'Sudan'}

const studentsList: Student[] = [student1, student2]

function createTable(students: Student[]): HTMLTableElement {
    const table = document.createElement('table');

    const headerRow = document.createElement('tr');
    const headers = ['First Name', 'Location'];
    headers.forEach(headerText => {
        const header = document.createElement('th');
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    students.forEach(student => {
        const row = document.createElement('tr');
		const firstNameCell = document.createElement('td');
		firstNameCell.textContent = student.firstName;
		row.appendChild(firstNameCell);
		const locationCell = document.createElement('td');
		locationCell.textContent = student.location;
		row.appendChild(locationCell);

        table.appendChild(row);
    });

    return table;
}

function createDocument() {
    const docType = document.implementation.createDocumentType('html', '', '');
    const doc = document.implementation.createDocument('', 'html', docType);

    const html = doc.documentElement;
    const head = doc.createElement('head');
    const body = doc.createElement('body');

    const tableContainer = doc.createElement('div');
    tableContainer.id = 'table-container';

    body.appendChild(tableContainer);
    html.appendChild(head);
    html.appendChild(body);

    return doc;
}

document.addEventListener('DOMContentLoaded', () => {
    const doc = createDocument();
    const tableContainer = doc.getElementById('table-container');
    if (tableContainer) {
        const table = createTable(studentsList);
        tableContainer.appendChild(table);
    }
    document.replaceChild(doc.documentElement, document.documentElement);
});
