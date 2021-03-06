function topComponent() {
    document.getElementById('top').innerHTML = `<div class="col-3 text-center">Logo</div>
        <div class="col-9 text-center">Banner</div>`;
}

function menuComponent() {
    document.getElementById('menu').innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onclick="loadData()">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ${localStorage.getItem('name')}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><button class="dropdown-item" onclick="infoUser(${localStorage.getItem('id')})">My information</button></li>
            <li><button class="dropdown-item" onclick="">My Orders</button></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <button class="nav-link btn btn-warnings" onclick="logout()" href="#" tabindex="-1" aria-disabled="true">Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>`
}

function mainComponent() {
    document.getElementById('content').innerHTML = `<div class="col-2" id="left">Left</div>
        <div class="col-7">
        <div class="row" id="post"></div>
        </div>
        <div class="col-3" id="search"></div>`;
}

function searchComponent() {
    document.getElementById('search').innerHTML = `<form>
      <div class="mb-3">
        <label for="quantity" class="form-label">S??? l?????ng ph??ng</label>
        <input type="number" class="form-control" id="quantity" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="floor" class="form-label">S??? t???ng</label>
        <input type="number" class="form-control" id="floor">
      </div>
      <div class="mb-3">
        <label class="form-label" id="price">Kho???ng gi??</label>
        <hr>
        <label class="form-label">Gi?? th???p</label>
        <input type="number" class="form-control" id="low">
        <label class="form-label">Gi?? cao</label>
        <input type="number" class="form-control" id="high">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Qu???n</label>
        <select class="form-control" name="district" id="district" onchange="getAllWards()"></select>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Ph?????ng</label>
        <select class="form-control" name="ward" id="ward"></select>
      </div>
      <button type="button" class="btn btn-outline-success" onclick="searchByPrice()">Search</button>
    </form>`;
}

