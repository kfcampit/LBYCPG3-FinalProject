function thesisYear(year) {
    var element = document.getElementById("tableID");

    // Remove all child nodes from the element
    removeAllChildNodes(element);

    // Create a header row
    var header_row = document.createElement("tr");

    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");

    var content1 = document.createTextNode("ID");
    var content2 = document.createTextNode("TITLE");
    var content3 = document.createTextNode("CORRESPONDENCE");

    col1.setAttribute("id", "table-header");
    col2.setAttribute("id", "table-header");
    col3.setAttribute("id", "table-header");

    col1.setAttribute("class", "SO-id");
    col2.setAttribute("class", "SO-id");
    col3.setAttribute("class", "SO-id");

    col1.appendChild(content1);
    col2.appendChild(content2);
    col3.appendChild(content3);

    header_row.appendChild(col1);
    header_row.appendChild(col2);
    header_row.appendChild(col3);

    // Append the header row to the element
    element.appendChild(header_row);

    var array = data[year]["documents"];

    for (let index = 0; index < array.length; index++) {
        addRow(year, index, element);
    }
}

function addRow(year, index, element) {
    var row = document.createElement("tr");

    var col1 = document.createElement("td");
    var col2 = document.createElement("td");
    var col3 = document.createElement("td");

    var link = document.createElement("a");

    var content1 = document.createTextNode(data[year]["documents"][index]["id"]);
    var content2 = document.createTextNode(data[year]["documents"][index]["title"]);
    var content3 = document.createTextNode(data[year]["documents"][index]["corr"]);

    link.appendChild(content2);
    link.setAttribute("href", data[year]["documents"][index]["link"]);
    link.setAttribute("class", "link");

    col1.appendChild(content1);
    col2.appendChild(link);
    col3.appendChild(content3);

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);

    element.appendChild(row);
}

function removeAllChildNodes(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}