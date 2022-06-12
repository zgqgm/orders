document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.button'),
        loader = document.querySelector('.loader'),
        check = document.querySelector('.check');

    btn.addEventListener('click', function () {
        loader.classList.add('active');
    });

    loader.addEventListener('animationend', function() {
        check.classList.add('active');
    });
});
function upload() {
    //var data = new FormData(document.getElementById("form"))
    let name = $("#nameI").val();
    let price = $("#priceI").val();
    let time = $("#timeI").val();
    let sta = $(".select-box__input:checked").val();
    $.ajax({
        url: "/upOrders/add",
        type: "get",
        data: {"name":name,"price":price,"time":time,"sta":sta},
        success: function (resp) {
            if (resp.success==="true"){
                location.href="http://localhost:8080/ordersLists/orders";
            }
        }
    });

}
