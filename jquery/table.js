

// jquery
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function () {   // phần search là từ phần tbody trở xuống 
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $('#example').DataTable({   // example là gọi phần table của cái modal
    dom: 'Bfrtip',
    buttons: [
      'copy', 'csv', 'excel', 'pdf', 'print'
    ]
  });

  // checkbox
  // Select/Deselect checkboxes
  var checkbox = $('table tbody input[type="checkbox"]');
  $("#selectAll").click(function () {
    if (this.checked) {
      checkbox.each(function () {
        this.checked = true;
      });
    }
    else {
      checkbox.each(function () {
        this.checked = false;
      });
    }
  });
  checkbox.click(function () {
    if (!this.checked) {
      $("#selectAll").prop("checked", false);
    }
  });


  
});

// hàm bình thường 
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("simpleTable1");
  switching = true;
  dir = "asc";

  while (switching) {
    switching = false;
    rows = table.rows;
    // lấy số bắt đầu từ số 1 , vì dòng đầu tiên là tên các thuộc tính
    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;// nên thay đổi , mục đích là khi nhận thấy có 2 phần tử sắp xếp ko theo thứ tự mong muốn thì là dấu hiệu để câu lệnh if phía sau vòng lặp chuyển lại

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    // nếu có dấu hiệu là nên thay đổi thì đổi lại thứ tự 
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {  // click đầu là table được sắp xếp tăng dần , mỗi lần lần chuyển đổi là biến "switchcount" tăng lên # 0 ; tới lần click thứ 2 thì do bảng đã sắp xếp tăng dần rùi cho nên ko có lần shouldswitch nào , do đó biến "switchcount"=0 , thực hiện else và chuyển đổi lại sắp xếp giảm dần
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}




