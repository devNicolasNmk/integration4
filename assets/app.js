//this is js file

//recuperation des variable
    
    var search = document.getElementById("nav-search");
    var inputSearch = document.getElementById('input-search');


    var navjs = document.getElementById("nav-js");
    var navToShow = document.getElementById("menuJs");

// adeventlistener
    search.addEventListener("click", openSearch);
    navjs.addEventListener("click", openMenu);


// ------------------ Function ------------------ //

/**
 *  display or hide input search in header
 * 
 */
function openSearch(){
    if ( inputSearch.style.display == 'none' ) {
        inputSearch.style.display='block';
      
    } else {
        inputSearch.style.display='none';
    }  
}

/**
 * 
 * display or hide menu in nav header
 * 
 */
function openMenu(){
    if ( navToShow.style.display == 'none' ){
        navToShow.style.display = 'block' ;
    } else { 
        navToShow.style.display='none';
    }
}

