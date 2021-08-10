function containerComponent() {
    let str = '<div class="container">\n' +
        '    <div class="row" id="menu">\n' +
        '        \n' +
        '    </div>\n' +
        '    <div class="row mt-3" id="main">\n' +
        '\n' +
        '    </div>\n' +
        '</div>'
    document.getElementById('content').innerHTML = str;
}

function menuComponent() {
    let str = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n" +
        "  <div class=\"container-fluid\">\n" +
        "    <img src='http://www.thp.com.vn/wp-content/uploads/2017/01/Logo_THP_Group.png' width='40px' height='40px' class=\"navbar-brand\" href=\"#\">THP Group</img>\n" +
        "    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n" +
        "      <span class=\"navbar-toggler-icon\"></span>\n" +
        "    </button>\n" +
        "    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n" +
        "      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n" +
        "        <li class=\"nav-item\">\n" +
        "          <a class=\"nav-link active\" aria-current=\"page\" href=\"Home.html\">Home</a>\n" +
        "        </li>\n" +
        "        <li class=\"nav-item\">\n" +
        "          <a class=\"nav-link\" href=\"managerUser.html\">UserList</a>\n" +
        "        </li>\n" +
        " <li class=\"nav-item\">\n" +
        "          <a class=\"nav-link\" id='navbarDropdown'></a>\n" +
        "        <li class=\"nav-item dropdown\">\n" +
        "          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
        "            Dropdown\n" +
        "          </a>\n" +
        "          <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n" +
        "            <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\n" +
        "            <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\n" +
        "            <li><hr class=\"dropdown-divider\"></li>\n" +
        "            <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\n" +
        "          </ul>\n" +
        "        </li>\n" +
        "        <li class=\"nav-item\">\n" +
        "          <a class=\"nav-link\" onclick='logout()' style='cursor: pointer'>Log Out</a>\n" +
        "        </li>\n" +
        "      </ul>\n" +
        "      <form class=\"d-flex\">\n" +
        "        <input class=\"form-control me-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n" +
        "        <button class=\"btn btn-outline-success\" type=\"submit\">Search</button>\n" +
        "      </form>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "</nav>"
    document.getElementById('menu').innerHTML = str;
}

function mainHomeComponent() {
    let str = "<div class=\"col-3\" id='category'>Left</div>\n" +
        "<div class=\"col-7\" id='post'>" +
        "</div>\n" +
        "<div class=\"col-2\" id='new'>Right</div>"
    document.getElementById('main').innerHTML = str;
}

function mainProfileComponent() {
    let str = "<div class=\"col-12\">Trang cá nhân</div>"
    document.getElementById('main').innerHTML = str;
}

// function mainHomeComponent() {
//     let str = "<div class=\"col-3\" id='category'>Left</div>\n" +
//         "<div class=\"col-7\" id='post'>Mid</div>\n" +
//         "<div class=\"col-2\" id='new'>Right</div>"
//     document.getElementById('main').innerHTML = str;
// }

// function mainProfileComponent() {
//     let str = "<div class=\"col-12\">Trang cá nhân</div>"
//     document.getElementById('main').innerHTML = str;
// }

function loaddata() {

    document.getElementById("navbarDropdown").innerHTML = "Hello " + localStorage.getItem('name');
}

function logout() {
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('id')
    window.location.href = "User/login.html"
}

function checkToken() {
    if (localStorage.getItem('token') == null) {
        window.location.href = "login.html"
    }
}

function formTable() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/api/",
        // headers: {"Authorization": 'Bearer ' + token},
        success: function (data) {
            let str =
                "<h1 style='margin-left: 30%'>UserList</h1>" +
                "<table class=\"table\">\n" + "<tr>\n" +
                "<th>FirstName</th>\n" +
                "<th>LastName</th>\n" +
                "<th>Image</th>\n" +
                "<th>Username</th>\n" +
                "<th>More</th>\n" +
            "</tr>\n";
            for (let i = 0; i < data.length; i++) {
                str += "<tr><td>" + data[i].firstName;
                str += "</td><td>" + data[i].lastName;
                str += "</td><td>" + "<img width='80px' height='80px' src='Image/" + data[i].image + "'/>";
                str += "</td><td>" + data[i].username;
                str += "</td><td>" +  "<button id='more' onclick='infoUser("+data[i].id+")'>More</button>\n" ;
                console.log(data[i].image)
                str += "</td>"
            }
            str += "</table>\n";
            document.getElementById("post").innerHTML = str;
        }
    })

}

function infoUser(id) {
    $.ajax({

        type: "GET",
        url: "http://localhost:8080/api/" + id,

        success: function (data) {
            let firstname = data.firstName;
            let lastname = data.lastName;
            let email = data.email;
            let phoneNumber = data.phoneNumber;
            let image = data.image;
            let address = data.address;
            let username = data.username;
            let password = data.password;
            let str = `<div class="form" id="form-1">
        <h3 class="heading">Tài Khoản ${username}</h3>


        <div class="spacer"></div>
edit
        <div class="form-group">
            <label for="fullname" class="form-label">FistName:</label>
            <input id="firstnameedit" name="firstname" type="text" class="form-control" value="${firstname}">
            <span class="form-message"></span>
        </div>
        <div class="form-group">
            <label for="fullname" class="form-label">LastName:</label>
            <input id="lastnameedit" name="lastname" type="text"  class="form-control" value="${lastname}">
            <span class="form-message"></span>
        </div>

        <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input id="emailedit" name="email" type="text" placeholder="VD: email@domain.com" class="form-control" value="${email}">
            <span class="form-message"></span>
        </div>
        <div class="form-group">
            <label  class="form-label">Image</label>
            <input id="imageedit" name="imageedit" type="text"  class="form-control" value="${image}">
            <span class="form-message"></span>
        </div>
        <div class="form-group">
            <label for="fullname" class="form-label">PhoneNumber</label>
            <input id="phonenumberedit" name="phoneNumber" type="text"  class="form-control"  value=" ${phoneNumber}">
            <span class="form-message"></span>
        </div>
        <div class="form-group">
            <label for="fullname" class="form-label">Address:</label>
            <input id="addressedit" name="address" type="text" placeholder="VD: Sơn Đặng" class="form-control" value=" ${address}">
            <span class="form-message"></span>
        </div>
        <div class="form-group">
            <label for="fullname" class="form-label">UserName:</label>
            <input id="usernameedit" name="username" type="text" placeholder="VD:ltyn" class="form-control" value="${username}" disabled>
            <span class="form-message"></span>
        </div>

        <div class="form-group">
            <label for="password" class="form-label">Mật khẩu</label>
            <input id="passwordedit" name="password" type="password" placeholder="Nhập mật khẩu" class="form-control" ">
            <span class="form-message"></span>
        </div>

        <div class="form-group">
            <label for="password_confirmation" class="form-label">Nhập lại mật khẩu</label>
            <input id="password_confirmation" name="password_confirmation" placeholder="Nhập lại mật khẩu" type="password" class="form-control" ">
            <span class="form-message"></span>
        </div>

        <button class="form-submit" onclick="editUser(${id})">Thay Đổi</button>
        <button class="form-submit" onclick="deleteUser(${id})">Xóa Tài Khoản </button>
    </div>\``
            document.getElementById("post").innerHTML = str;
        }
    })
}
function editUser(id){
    let fistName = document.getElementById("firstnameedit").value;
    let lastName =document.getElementById("lastnameedit").value;
    let email = document.getElementById("emailedit").value;
    let image = document.getElementById("imageedit").value;
    let phoneNumber = document.getElementById("phonenumberedit").value;
    let address = document.getElementById("addressedit").value;
    let username = document.getElementById("usernameedit").value;
    let password = document.getElementById("passwordedit").value;
    let user = {

        "fistName" :fistName,
        "lastName":lastName,
        "email":email,
        "phoneNumber":phoneNumber,
        "image":image,
        "address" : address,
        "username" :username,
        "password":password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        type: "PUT",
        data: JSON.stringify(user),
        url: "http://localhost:8080/api/edit/" +id,
        success: function () {
            alert("bạn đã cập nhật thành công")
            window.location.href = "../../index.html"
        },
        error : console.log("abc")
    })
    event.preventDefault();
}

function deleteUser(id){

    let txt
    let  r = confirm("Bạn muốn xóa hay không");
    if (r == true) {
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            type: "DELETE",
            url: "http://localhost:8080/api/delete/" +id,
            success: function (){
                txt = "Bạn đã xóa thành công";
                alert(txt)
                logout();
            }
        })
    } else {
        txt = "Bạn chưa xóa gì cả";
        alert(txt)
        formTable()
    }


}
