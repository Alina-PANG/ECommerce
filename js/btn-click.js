$(document).ready(function() {
  $(".update-btn").click(function() {
      console.log("clicked");
      var name = $(this).attr('name');
      if (name != undefined && name != null) {
          window.location = './createNewStaff.html#update?name=' + name + "#";
      }
    });
});
