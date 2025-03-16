var dataArray = [
    { id: 1, name: "Laptop Dell XPS", price: "$1200", status: "In Stock" },
    { id: 2, name: "iPhone 14 Pro", price: "$999", status: "Out of Stock" },
    { id: 3, name: "Samsung Galaxy S22", price: "$899", status: "In Stock" },
    { id: 4, name: "MacBook Air M2", price: "$1100", status: "In Stock" },
    { id: 5, name: "Sony WH-1000XM5", price: "$399", status: "Out of Stock" },
    { id: 6, name: "Apple Watch Series 8", price: "$429", status: "In Stock" },
    { id: 7, name: "Dell Ultrasharp Monitor", price: "$499", status: "In Stock" },
    { id: 8, name: "HP Pavilion Gaming Laptop", price: "$850", status: "Out of Stock" },
    { id: 9, name: "Logitech MX Master 3", price: "$99", status: "In Stock" },
    { id: 10, name: "Razer BlackWidow Keyboard", price: "$129", status: "In Stock" },
    { id: 11, name: "Bose QuietComfort 45", price: "$329", status: "In Stock" },
    { id: 12, name: "GoPro Hero 11", price: "$499", status: "Out of Stock" },
    { id: 13, name: "Canon EOS R5", price: "$3899", status: "In Stock" },
    { id: 14, name: "Nikon Z9", price: "$5499", status: "Out of Stock" },
    { id: 15, name: "PlayStation 5", price: "$499", status: "In Stock" },
    { id: 16, name: "Xbox Series X", price: "$499", status: "In Stock" },
    { id: 17, name: "Nintendo Switch OLED", price: "$349", status: "Out of Stock" },
    { id: 18, name: "Apple iPad Pro 12.9", price: "$1099", status: "In Stock" },
    { id: 19, name: "Samsung Galaxy Tab S8", price: "$799", status: "In Stock" },
    { id: 20, name: "DJI Mavic 3", price: "$2049", status: "Out of Stock" },
]

function addEventForSearchBar() {
    document.getElementById("input-search").addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            event.preventDefault();
            searchElements();
        }
    });
}

function loadData() {

    let dataString = "";

    for (let i = 0; i < dataArray.length; i++) {
        dataString += `
            <tr>
                <td>${dataArray[i].id}</td>
                <td>${dataArray[i].name}</td>
                <td>${dataArray[i].status}</td>
                <td>
                    <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewstaticBackdrop" onclick="loadView(${i})">
                        <i class="bi bi-eye text-dark"></i>
                    </button>

                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editstaticBackdrop" onclick="loadEdit(${i})">
                        <i class="bi bi-pencil-square"></i>
                    </button>

                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#removestaticBackdrop" onclick="removeButtonAction(${i})">
                        <i class="bi bi-trash3"></i>
                    </button>
                </td>
            </tr>`;

    }

    document.getElementById("productTable").innerHTML = dataString;
}

function loadView(index) {
    document.getElementById("nameProductView").innerHTML = '<strong>Name: </strong>' + dataArray[index].name;
    document.getElementById("priceProductView").innerHTML = '<strong>Price: </strong>' + dataArray[index].price;
    document.getElementById("statusProductView").innerHTML = '<strong>Status: </strong>' + dataArray[index].status;
}

function loadEdit(index) {
    document.getElementById("edit-modal").innerHTML = `<p>Name</p>
                    <input type="text" class="form-control" id="editProductName" value="${dataArray[index].name}">
                    <p>Price</p>
                    <input type="text" class="form-control" id="editProductPrice" value="${dataArray[index].price}">
                    <p>Status</p>
                    <input type="text" class="form-control" id="editProductStatus" value="${dataArray[index].status}">`;
    document.getElementById("edit-modal-save").innerHTML = `<button type="button" class="btn btn-primary"       data-bs-dismiss="modal" onclick="updateArray(${index})">Save</button>`;
}

function updateArray(index) {
    dataArray[index].name = document.getElementById("editProductName").value;
    dataArray[index].price = document.getElementById("editProductPrice").value;
    dataArray[index].status = document.getElementById("editProductStatus").value;
    searchElements();
}

function removeButtonAction(index) {
    document.getElementById("remove-array-modal").innerHTML = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
    <button type="button" class="btn btn-primary btn-danger" data-bs-dismiss="modal" onclick="deleteElement(${index})">Delete</button>`;
}

function deleteElement(index) {
    dataArray.splice(index, 1);
    searchElements();
}

function addEventElement() {
    document.getElementById("add-element-modal").innerHTML = `<p>Name</p>
                    <input type="text" class="form-control" id="addProductName">
                    <p>Price</p>
                    <input type="text" class="form-control" id="addProductPrice">
                    <p>Status</p>
                    <input type="text" class="form-control" id="addProductStatus" value="In Stock">`;
}

function addElement() {
    let name = document.getElementById("addProductName").value.trim();
    let price = document.getElementById("addProductPrice").value.trim();
    let status = document.getElementById("addProductStatus").value.trim();


    if (name == "" || price == "" || status == "") {
        alert("The data of new product is miss! The addition is not complete!");
    } else {
        dataArray.push({ id: dataArray[dataArray.length - 1].id + 1, name: name, price: price, status: status });
        searchElements();
    }
}

function searchElements() {
    let searchString = document.getElementById("input-search").value;

    let dataString = "";

    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].name.toLowerCase().indexOf(searchString.toLowerCase()) != -1) {

            dataString += `
                <tr>
                    <td>${dataArray[i].id}</td>
                    <td>${dataArray[i].name}</td>
                    <td>${dataArray[i].status}</td>
                    <td>
                        <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#viewstaticBackdrop" onclick="loadView(${i})">
                            <i class="bi bi-eye text-dark"></i>
                        </button>

                        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editstaticBackdrop" onclick="loadEdit(${i})">
                            <i class="bi bi-pencil-square"></i>
                        </button>

                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#removestaticBackdrop" onclick="removeButtonAction(${i})">
                            <i class="bi bi-trash3"></i>
                        </button>
                    </td>
                </tr>`;
        }

    }

    document.getElementById("productTable").innerHTML = dataString;
}

