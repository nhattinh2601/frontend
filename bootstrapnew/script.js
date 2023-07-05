function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch,dir;      
    dir = "asc"; // khai báo thêm biến dir để chuyển hướng sắp xếp thuận hay nghịch , lúc đầu là thuận
    table = document.getElementById("myTable");   // gán table bằng thuộc tính id gán trong table
    switching = true;   // gán cho chuyển đối là đúng
    /*chuyến quả chuyển lại đến khi nào ko chuyển nữa thì thui   */
    while (switching) {
      //start by saying: no switching is done:    , gán cho chuyển đổi bằng sai
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the  , duyệt từng hàng
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }