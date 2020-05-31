//Inspired by https://www.w3schools.com/howto/howto_js_tabs.asp

//Function called when tabs are clicked

function tab_info(event,tab_name){
    // Get all elements with class ="tabcontent" and hide them
    let tab_content = document.getElementsByClassName("tab_content");
    for (i = 0; i < tab_content.length; i++){
        tab_content[i].style.display = "none";
    }

    //Get all elements that include class="tablinks" and remove the "active" class
    let tab_links = document.getElementsByClassName("tab_links");
    for (i=0;i<tab_links.length;i++){
        tab_links[i].className=tab_links[i].className.replace(" active","")
    }
    // Show the current tab. and add an "active" class to the button that opened the tab
    document.getElementById(tab_name).style.display="block";
    event.currentTarget.className += " active";
}

function populate_list_product_choices(s1,s2){
    var sl1 = document.getElementById(s1);
    var sl2 = document.getElementById(s2);

    s2.innerHTML = "";


}