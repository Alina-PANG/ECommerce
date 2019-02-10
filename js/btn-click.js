$(document).ready(function() {
  $(".update-btn").click(function() {
      var name = $(this).attr('name');
      if (name != undefined && name != null) {
          window.location = './createNewStaff.html#update?name=' + name + "#";
      }
    });
  $("#select-tags").click(function(){
    $(".multiSelect").slideToggle('fast');
  })
});
