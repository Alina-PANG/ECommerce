var staffs = []
function tableGenerateViewAllStaffs(updateStaff, deleteStaff) {
  var table = document.getElementById('staff-table');
  if (table != null){
    for (var i = 0; i < 9; i ++) {
      var tr = document.createElement('tr');
      var staff = [];
      for(var j = 0; j < 7; j ++) {
        var td = document.createElement('td');
        switch(j) {
          case 0:
            var link = document.createElement('a');
            link.innerHTML = i + 1;
            link.href="./viewStaffDetails.html";
            link.style.color = "blue";
            td.appendChild(link);
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
            updateBtn.className += "update-btn";
            updateBtn.name = i + 1;
            td.appendChild(updateBtn);
            break;
          case 6:
            var deleteBtn = document.createElement('input');
            deleteBtn.type = "button";
            deleteBtn.className += "delete-btn";
            deleteBtn.value = "Delete";
            deleteBtn.name = i + 1;
            function deleteStaff(event){
              window.confirm("Are you sure you want to delete the staff with id " + event.target.name + "?");
            }
            deleteBtn.onclick = deleteStaff;
            td.appendChild(deleteBtn);
            break;
        }
        staff.push(td.innerHTML);
        tr.appendChild(td);
      }
      staffs.push(staff);
      table.appendChild(tr);
    }
  }
}
function tableFillData(){
  var table = document.getElementById('view-staff-detail');
  if(table != null){
    var td = document.getElementById('staff-id');
    td.innerHTML = 1;
    td = document.getElementById('first-name');
    td.innerHTML = "Tom";
    td = document.getElementById('last-name');
    td.innerHTML = "Brown";
    td = document.getElementById('access-right');
    td.innerHTML = "MANAGER";
    td = document.getElementById('staff-username');
    td.innerHTML = "TomB";
  }
}
tableGenerateViewAllStaffs();
tableFillData();
