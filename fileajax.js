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
                <h3>${apartment.postTitle}</h3>
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
                <h5 class="card-title">${data.postTitle}</h5>
                <p class="card-text">Số lượng phòng: ${data.quantityRoom}</p>
                <p class="card-text">Số tầng: ${data.floor}</p>
                <p class="card-text">Mô tả: ${data.description}</p>
                <p class="card-text">Địa chỉ: ${data.address}, ${data.ward}, ${data.district}</p>
                <p class="card-text">Giá: ${data.price} USD</p>
                <button class="btn btn-primary" onclick="showFormRent(${id})">Order</button>
            </div>
        </div>`;
        }
    })
}

function showFormRent(id) {
    console.log(localStorage.getItem('user'));
    document.getElementById('main').innerHTML = `<div class="col-12">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="images/page1-img3.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="images/page1-img2.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="images/page1-img1.jpg" class="d-block w-100" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-6">
                <form>
                    <div class="mb-3">
                        <label class="form-label">Your Info</label>
                        <hr>
                    </div>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name: </label>
                        <input type="text" disabled class="form-control" id="firstName" value="">
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name: </label>
                        <input type="text" disabled class="form-control" id="lastName" value="">
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label">Phone: </label>
                        <input type="text" disabled class="form-control" id="phone" value="">
                    </div>
                    <div class="mb-3">
                        <label for="address" class="form-label">Address: </label>
                        <input type="text" disabled class="form-control" id="address" value="">
                    </div>
                </form>
            </div>
            <div class="col-6">
                <form>
                    <div class="mb-3">
                        <label class="form-label text-center">Owner's Info</label>
                        <hr>
                    </div>
                    <div class="mb-3">
                        <label for="firstName1" class="form-label">Owner's First Name: </label>
                        <input type="text" disabled class="form-control" id="firstName1" value="">
                    </div>
                    <div class="mb-3">
                        <label for="lastName1" class="form-label">Owner's Last Name: </label>
                        <input type="text" disabled class="form-control" id="lastName1" value="">
                    </div>
                    <div class="mb-3">
                        <label for="phone1" class="form-label">Owner's Phone: </label>
                        <input type="text" disabled class="form-control" id="phone1" value="">
                    </div>
                    <div class="mb-3">
                        <label for="address1" class="form-label">Owner's Address: </label>
                        <input type="text" disabled class="form-control" id="address1" value="">
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="mb-3">
                    <label class="form-label">Apartment Info</label>
                    <hr>
                </div>
                <div class="mb-3">
                    <label for="address2" class="form-label">Apartment address: </label>
                    <input type="text" disabled class="form-control" id="address2" value="">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label">Apartment Price: </label>
                    <input type="text" disabled class="form-control" id="price" value="">
                </div>
                <div class="mb-3">
                    <label for="startDate" class="form-label">Start Date: </label>
                    <input type="date" class="form-control" id="startDate" value="">
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-3">Submit</button>
            <button type="button" class="btn btn-danger mt-3">Cancel</button>
        </div>`
}

function rentApartment(id) {
    let userId = localStorage.getItem('id');
    let rent = {
        user: {
            id: userId
        },
        apartment: {
            id: id
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/api/" + userId + "/rents",
        data: JSON.stringify(rent),
        success: function () {
            document.getElementById('main').innerHTML = `<p>Bạn đã đặt chỗ thành công, vui lòng chờ phản hồi của chủ nhà!!!</p>`;
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

function searchByPrice() {
    let low = document.getElementById('low').value;
    let high = document.getElementById('high').value;
    if (low >= high) {
        document.getElementById('price').innerHTML = `<div class="alert alert-danger" role="alert">
  Giá thấp phải thấp hơn giá cao
</div>`;
    } else {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/api/apartments/findByPrice/" + low + "-" + high,
            success: function (data) {
                let content = "";
                for (let i = 0; i < data.length; i++) {
                    content += getApartment(data[i]);
                }
                document.getElementById('main').innerHTML = content;
            }
        })
    }
}

function searchApartment() {
    if (document.getElementById('ward').value != 0) {
        searchByWard();
    }
    if (document.getElementById('district').value != 0) {
        searchByDistrict();
    }
    if (document.getElementById('quantity').value != 0) {
        searchByRoomQuantity();
    }
    if (document.getElementById('floor').value != 0) {
        searchByFloor();
    }
}