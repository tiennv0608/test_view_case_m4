function loadData() {
    topComponent();
    menuComponent();
    mainComponent();
    searchComponent();
    getAllDistricts();
    getAllWards();
    showList();
}

function getApartment(apartment) {
    return `<div class="col-4 mt-2"><img src="images/page1-img1.jpg" alt="" className="img-border">
                <h3>${apartment.titleName}</h3>
                <p>${apartment.description}</p>
                <a href="#" class="btn btn-primary" onclick="showDetail(${apartment.id})">More</a></div>`;
}

function showList() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments",
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += getApartment(data[i]);
            }
            document.getElementById('main').innerHTML = content;
        }
    })
}

function showDetail(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments/" + id + "/detail",
        success: function (data) {
            // console.log(data)
            document.getElementById('main').innerHTML = `<div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${data.titleName}</h5>
                <p class="card-text">Số lượng phòng: ${data.quantityRoom}</p>
                <p class="card-text">Số tầng: ${data.floor}</p>
                <p class="card-text">Mô tả: ${data.description}</p>
                <p class="card-text">Địa chỉ: ${data.address}, ${data.ward}, ${data.district}</p>
                <p class="card-text">Giá: ${data.price} USD</p>
                <button class="btn btn-primary">Order</button>
            </div>
        </div>`;
        }
    })
}

function getAllDistricts() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/districts",
        success: function (data) {
            let content = `<option value="0">--District--</option>`;
            for (let i = 0; i < data.length; i++) {
                content += `<option value="${data[i].id}">${data[i].dicName}</option>`;
            }
            document.getElementById('district').innerHTML = content;

        }
    })
}

function getAllWards() {
    let districtId = document.getElementById('district').value;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/districts/" + districtId,
        success: function (data) {
            let content = `<option value="0">--Ward--</option>`;
            for (let i = 0; i < data.length; i++) {
                content += `<option value="${data[i].id}">${data[i].wardName}</option>`;
            }
            document.getElementById('ward').innerHTML = content;
        }
    })
}

function searchByWard() {
    let wardId = document.getElementById('ward').value;
    let wardName = ""
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/wards/" + wardId,
        success: function (data) {
            wardName = data.wardName;
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/apartments/findByWard/" + wardName,
                success: function (data) {
                    let content = "";
                    for (let i = 0; i < data.length; i++) {
                        content += getApartment(data[i]);
                    }
                    document.getElementById('main').innerHTML = content;
                }
            })
        }
    })
}

function searchByDistrict() {
    let districtId = document.getElementById('district').value;
    let dicName = ""
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/districts/" + districtId,
        success: function (data) {
            dicName = data[0].district.dicName;
            $.ajax({
                type: "GET",
                url: "http://localhost:8080/api/apartments/findByDistrict/" + dicName,
                success: function (data) {
                    let content = "";
                    for (let i = 0; i < data.length; i++) {
                        content += getApartment(data[i]);
                    }
                    document.getElementById('main').innerHTML = content;
                }
            })
        }
    })
}

function searchByRoomQuantity() {
    let quantity = document.getElementById('quantity').value;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments/findByRoom/" + quantity,
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += getApartment(data[i]);
            }
            document.getElementById('main').innerHTML = content;
        }
    })
}

function searchByFloor() {
    let floor = document.getElementById('floor').value;
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/apartments/findByFloor/" + floor,
        success: function (data) {
            let content = "";
            for (let i = 0; i < data.length; i++) {
                content += getApartment(data[i]);
            }
            document.getElementById('main').innerHTML = content;
        }
    })
}

function searchApartment(){
    if (document.getElementById('ward').value != 0) {
        searchByWard();
    } else if (document.getElementById('district').value !=0 ){
        searchByDistrict();
    } else if (document.getElementById('quantity').value != 0) {
        searchByRoomQuantity();
    } else if (document.getElementById('floor').value != 0){
        searchByFloor();
    }
}