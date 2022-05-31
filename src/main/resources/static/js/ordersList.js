//筛选
document.querySelector(".jsFilter").addEventListener("click", function () {
    document.querySelector(".filter-menu").classList.toggle("active");
});
//列表展示选择
document.querySelector(".grid").addEventListener("click", function () {
        document.querySelector(".list").classList.remove("active");
        document.querySelector(".grid").classList.add("active");
        let liAdd1 = document.querySelectorAll(".products-area-wrapper");
        for (let i = 0;i < liAdd1.length; i++){
            liAdd1[i].classList.add("gridView");
        }
        let liRem1 = document.querySelectorAll(".products-area-wrapper");
        for (let i = 0;i < liRem1.length; i++){
            liRem1[i].classList.remove("tableView");
        }
    });

//列表展示选择
document.querySelector(".list").addEventListener("click", function () {
        document.querySelector(".list").classList.add("active");
        document.querySelector(".grid").classList.remove("active");
        let liRem2 = document.querySelectorAll(".products-area-wrapper");
        for (let i = 0;i < liRem2.length; i++){
            liRem2[i].classList.remove("gridView");
        }
        let liAdd2 = document.querySelectorAll(".products-area-wrapper");
        for (let i = 0;i < liAdd2.length; i++){
            liAdd2[i].classList.add("tableView");
        }
    });

//灯光
var modeSwitch = document.querySelector(".mode-switch");
modeSwitch.addEventListener("click", function () {
    document.documentElement.classList.toggle("light");
    modeSwitch.classList.toggle("active");
});

