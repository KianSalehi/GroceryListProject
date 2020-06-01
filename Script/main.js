//Inspired by https://www.w3schools.com/howto/howto_js_tabs.asp

//Function called when tabs are clicked

function tab_info(evt,tab_name){
    // Get all elements with class ="tab_content" and hide them
    let tab_content = document.getElementsByClassName("tab_content");
    for (let i = 0; i < tab_content.length; i++){
        tab_content[i].style.display = "none";
    }

    //Get all elements that include class="tab_links" and remove the "active" class
    let tab_links = document.getElementsByClassName("tab_links");
    for (let i=0;i<tab_links.length;i++){
        tab_links[i].className=tab_links[i].className.replace("active","")
    }
    // Show the current tab. and add an "active" class to the button that opened the tab
    document.getElementById(tab_name).style.display="block";
    evt.currentTarget.className += "active";
}

// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct1, slct2, is_organic) {
    let organic
    var s1 = document.getElementById(slct1);
    var s2 = document.getElementById(slct2);
    var s3 = document.getElementById(is_organic)
    // s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
    if (s3.checked==true){
        organic = true
    }
    else{
        organic = false
    }
    // obtain a reduced list of products based on restrictions
    var optionArray = restrictList(products, s1.value, organic);
    // for each item in the array, create a checkbox element, each containing information such as:
    // <input type="checkbox" name="product" value="Bread">
    // <label for="Bread">Bread/label><br>

    for (i = 0; i < optionArray.length; i++) {

        var productName = optionArray[i];
        // create the checkbox and add in HTML DOM
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "product";
        checkbox.value = productName;
        s2.appendChild(checkbox);

        // create a label for the checkbox, and also add in HTML DOM
        var label = document.createElement('label')
        label.htmlFor = productName;
        label.appendChild(document.createTextNode(productName));
        s2.appendChild(label);

        // create a breakline node and add in HTML DOM
        s2.appendChild(document.createElement("br"));
    }
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph)
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems(){

    var ele = document.getElementsByName("product");
    var chosenProducts = [];

    var c = document.getElementById('displayCart');
    c.innerHTML = "";

    // build list of selected item
    var para = document.createElement("P");
    para.innerHTML = "You selected : ";
    para.appendChild(document.createElement("br"));
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            para.appendChild(document.createTextNode(ele[i].value));
            para.appendChild(document.createElement("br"));
            chosenProducts.push(ele[i].value);
        }
    }

    // add paragraph and total price
    c.appendChild(para);
    c.appendChild(document.createTextNode("Total Price is $" + getTotalPrice(chosenProducts)));

}