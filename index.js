
//side navbar open and close
var sidenavbar = document.querySelector(".side-navbar")

function showSidenavbar(){
    sidenavbar.style.left ="0"
}

function closeSidenavbar(){
    sidenavbar.style.left ="-60%"
}


// collections search 
var productsContainer = document.getElementById('products');
var search = document.getElementById('search');
var productlist = productsContainer.querySelectorAll('div')

search.addEventListener('keyup', function(){
    var enteredValue = event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count=count+1){

        var productName = productlist[count].querySelector('p').textContent
     
        if(productName.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display = 'none'
        }
        else{
            productlist[count].style.display = 'block'
        }

    }
})