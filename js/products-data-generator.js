

function tableGenerateViewAllProducts() {
  var table = document.getElementById('product-table');
  for (var i = 0; i < 9; i ++) {
    var tr = document.createElement('tr');
    for(var j = 0; j < 9; j ++) {
      var td = document.createElement('td');
      switch(j) {
        case 0:
          td.innerHTML = i + 1;
        break;
        case 1:
          td.innerHTML = "PROD00" + (i + 1);
        break;
        case 2:
        case 3:
        case 8:
          var ch;
          switch((i)/3){
            case 0:
              ch = "A";
              break;
            case 1:
              ch = "B";
              break;
            case 2:
              ch = "C";
              break;
          }
          if (j == 7){
            td.innerHTML = "Category " + ch;
            break;
          }
          td.innerHTML = "Product " + ch + i%3;
          break;
        case 4:
          td.innerHTML = 8;
          break;
        case 5:
          td.innerHTML = 10;
          break;
        case 6: // Reorder
          td.innerHTML = 5
          break;
        case 7: // Unit Price
          td.innerHTML = "$10.00"
        break;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
tableGenerateViewAllProducts();
