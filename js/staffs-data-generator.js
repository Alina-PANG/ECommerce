


function tableGenerateViewAllStaffs(updateStaff, deleteStaff) {
  var table = document.getElementById('staff-table');
  for (var i = 0; i < 9; i ++) {
    var tr = document.createElement('tr');
    for(var j = 0; j < 7; j ++) {
      var td = document.createElement('td');
      switch(j) {
        case 0:
          td.innerHTML = i + 1;
        break;
        case 1:
          td.innerHTML = "Tom" + i;
        break;
        case 2:
          td.innerHTML = "Cox" + i; break;
        case 3:
          td.innerHTML = "TomC" + i; break;
        case 4:
          if(i % 4 == 0){td.innerHTML = "MANAGER";}
          else {td.innerHTML = "CASHIER";}
          break;
        case 5:
          var updateBtn = document.createElement('input');
          updateBtn.type = "button";
          updateBtn.value = "Update";
          updateBtn.name = i + 1;
          function updateStaff(event){
            console.log("update "+event.target.name);
          }
          updateBtn.onclick = updateStaff;
          td.appendChild(updateBtn);
          break;
        case 6:
          var deleteBtn = document.createElement('input');
          deleteBtn.type = "button";
          deleteBtn.value = "Delete";
          deleteBtn.name = i + 1;
          function deleteStaff(event){
            console.log("delete "+event.target.name);
          }
          deleteBtn.onclick = deleteStaff;
          td.appendChild(deleteBtn);
          break;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
tableGenerateViewAllStaffs();
$(document).ready(function(){



});
