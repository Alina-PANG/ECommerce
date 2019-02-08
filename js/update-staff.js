function parseURLParams(url) {
  if(url.indexOf("update") == -1){return null;}
  var query = url.substring(url.indexOf("update") + 7, url.length - 1);
  var staffId = query.substring(query.indexOf("=") + 1, query.length);
  return staffId
}

$(document).ready(function() {
  var staffId = parseURLParams(window.location.href);
  if (staffId != null){
    $("#POS-title").html("Point of Sale System (v5.0) :: Update Staff");
    $("#POS-title-h3").html("Update Staff");
    $("#create-staff-btn").attr('value', 'Update');
    let form = $("#create-staff-form");
    let inputs = form.find("input");
    inputs[0].value = "1";
    inputs[1].value = "Tom0";
    inputs[2].value = "Cox0";
    inputs[3].value = "TomC";
    inputs[4].value = "********";
  }
});
