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
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
<!--      <form class="d-flex">-->
<!--        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">-->
<!--        <button class="btn btn-outline-success" type="submit">Search</button>-->
<!--      </form>-->
    </div>
  </div>
</nav>`
}

function mainComponent() {
    document.getElementById('content').innerHTML = `<div class="col-2" id="left">Left</div>
        <div class="col-7">
        <div class="row" id="main"></div>
        </div>
        <div class="col-3" id="search"></div>`;
}

function searchComponent() {
    document.getElementById('search').innerHTML = `<form>
      <div class="mb-3">
        <label for="quantity" class="form-label">Số lượng phòng</label>
        <input type="number" class="form-control" id="quantity" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="floor" class="form-label">Số tầng</label>
        <input type="number" class="form-control" id="floor">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Quận</label>
        <select class="form-control" name="district" id="district" onchange="getAllWards()"></select>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Phường</label>
        <select class="form-control" name="ward" id="ward"></select>
      </div>
      <button type="button" class="btn btn-outline-success" onclick="searchApartment()">Search</button>
    </form>`;
}
