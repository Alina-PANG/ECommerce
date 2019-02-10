

function tableGenerateViewAllProducts() {
  var tags = ["Electronics", "Books", "Clothes", "Furnature", "Pets", "Child"];
  var table = document.getElementById('product-table');
  for (var i = 0; i < 9; i ++) {
    var tr = document.createElement('tr');
    for(var j = 0; j < 10; j ++) {
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
        case 9:
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
        case 8:
          string_tag = ""
          for(t = 0; t < 2; t ++){
            string_tag += tags[Math.floor(Math.random()*tags.length)];
            if(t!= 1){string_tag += ", ";}
          }
          td.innerHTML = string_tag;
          break;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
tableGenerateViewAllProducts();
