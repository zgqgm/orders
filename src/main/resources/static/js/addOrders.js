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
    let name = document.getElementById("nameI").valueOf();
    let price = document.getElementById("priceI").valueOf();
    let time = document.getElementById("timeI").valueOf();
    let sta = document.querySelector('.check');
    $.ajax({
        url: "/addOrders/add",
        type: "post",
        data: {"name":name,"price":price,"time":time,"sta":sta},
        success: function (resp) {
            if (resp.success==="true"){
                location.href="orders";
            }
        }
    })
}
