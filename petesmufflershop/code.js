function item(id, name, price) 
{
    this.id = id;
    this.name = name;
    this.price = price;
}

//create an array of items
var items = [];

items [0] = new item(1, "Wheel Balance", 19.99);
items [1] = new item(2, "Oil Change Labor", 24.99);
items [2] = new item(3, "Wheel Allignment", 49.99);

items [3] = new item(4, "Flats", 14.99);
items [4] = new item(5, "Welding", 44.99);
items [5] = new item(6, "Inspections", 7.00);

items [6] = new item(7, "Tires", 44.99);
items [7] = new item(8, "Wipers", 12.99);
items [8] = new item(9, "Oil Filters", 49.99);

items [9] = new item(10, "Air Filters", 49.99);
items [10] = new item(11, "Radiators", 99.99);
items [11] = new item(12, "Mufflers", 149.99);

//function to update number of items in shopping cart

function updateCheckout()
{
    document.getElementById("cart-link").innerHTML = "Checkout(" + sessionStorage.length + ")";
}

//function to get id for item

function getID(arg)
{
    var counter = 0;
    while(items[counter].name != arg)
    {
        counter++;
    }

    return items[counter].id;
}

    //function to add items to shopping cart
    function add(arg)
    {
        sessionStorage.setItem(items[arg].name, items[arg].price);
        updateCheckout();
    }


//fucntion to remove items
function remove(arg)
{
    sessionStorage.removeItem(arg);
    displayCart();//display remaining items in cart
    updateCheckout(); //update number of items in the cart
    
}

//function to display cart
function displayCart()
{
    var total = 0;
    var output = "<table class='table table-hover'>";


    //check to see if cart is empty
    if(sessionStorage.length == 0)
    {
        document.getElementById("cart").innerHTML = "<h3>Cart is Empty</h3>";
        document.getElementById("total").innerHTML = '';
    }
    else
    {
        output += "<tr><th>Image</th><th>Name</th><th>Price</th><th>Delete</th></tr>";

        for(var x = 0; x < sessionStorage.length; x++)
            {
                var key = sessionStorage.key(x);//get key
                output += "<tr><td><img src='images/image" + getID(key) +".jpg' width='50px' height='50px'></td>";//image of item
                output += "<td>" + key + "</td><td>" + sessionStorage.getItem(key) + "</td>";//get the name and price of item
                output += "<td><input type='button' class='btn btn-light btn-lg' value='Delete' onclick='remove(\"" + key + "\")'></td></tr>";//delete button and configure argument for remove function
                total += parseFloat(sessionStorage.getItem(key));
            }
            document.getElementById("cart").innerHTML = output;
            document.getElementById("total").innerHTML = "<h3>Total: " + total.toFixed(2) + "</h3>";
    }
}
