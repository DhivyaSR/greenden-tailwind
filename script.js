var menuicon = document.getElementById('menuicon');
var sidemenu_bar = document.getElementById('sidemenu_bar');
var close_icon = document.getElementById('close-icon');

menuicon.addEventListener("click",function(){
    sidemenu_bar.style.right=0;
});

close_icon.addEventListener("click",function(){
    sidemenu_bar.style.right = "-50%";
});

//Autocomplete Product Search

var search = document.getElementById('search');
var product_container = document.getElementById('product-container');
var product_list = product_container.querySelectorAll('div');
console.log(product_list);

search.addEventListener("keyup",function(){
    var entered_name = this.value.toUpperCase();
    for(count=0;count<product_list.length;count++){
        var product_name = product_list[count].querySelector('h1').textContent.toUpperCase();
        if(product_name.indexOf(entered_name) == -1){
            product_list[count].style.display = "none";
        }else{
            product_list[count].style.display = "block";
        }
    }
});