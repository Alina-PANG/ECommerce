$(document).ready(function() {
  html = $.parseHTML(`
    <h1>Point of Sale System (v5.0) :: `+$(document).find("title").text()+`</h1>
    <div>
      <form>
        <label for="username">Username</label>
        <input type="text" id="username">
        <label for="password">Password</label>
        <input type="text">
        <input type="button" value="Clear">
        <input type="button" value="Login">
      </form>
    </div>`
  );
  $(".header").append(html);
  html = $.parseHTML(`
    <h6>@2019 IS3106. All rights reserved.</h6>`
  );
  $(".footer").append(html);
  html = $.parseHTML(`
    <h3>Advertisement</h3>
    <img src="../images/300x300.png" alt="300">
    <p>Advertisement 1</p>
    <img src="../images/300x300.png" alt="300">
    <p>Advertisement 2</p>
    <img src="../images/300x300.png" alt="300">
    <p>Advertisement 3</p>
    `
  );
  $(".right").append(html);
  html = $.parseHTML(`
    <h3>Main Menu</h3>
    <br><br>
    <a href="">Home</a>
    <br><br>
    <a href="">Logout</a>
    <br><br>
    <section>
      <h4>Cashier Operation</h4>
      <ul>
        <li><a href="">Checkout</a></li>
        <li><a href="">Void/Refund</a></li>
        <li><a style="text-decoration-line: underline;" href="">View My Sale Transaction</a></li>
      </ul>
    </section>
    <section>
      <h4>System Administration</h4>
      <h5>Staff</h5>
      <ul>
        <li><a href="../systemAdministration/createNewStaff.html">Create New Staff</a></li>
        <li><a href="../systemAdministration/viewStaffDetails.html">View Staff Details</a></li>
        <li><a href="../systemAdministration/viewAllStaffs.html">View All Staffs</a></li>
      </ul>
      <h5>Product</h5>
      <ul>
        <li><a href="../systemAdministration/createNewProduct.html">Create New Product</a></li>
        <li><a href="../systemAdministration/viewProductDetails.html">View Product Details</a></li>
        <li><a href="../systemAdministration/viewAllProducts.html">View All Products</a></li>
      </ul>
      <h5>Category</h5>
      <ul>
        <li><a href="../systemAdministration/createNewCategory.html">Create New Category</a></li>
      </ul>
    </section>
    `
  );
  $(".left").append(html);
});
