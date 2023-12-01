
    "use strict";
    let productname = document.getElementById('productName');
    let pricename = document.getElementById('productPrice');
    let descriptions = document.getElementById('productDesc');



    let product = [];
function getdatafromApi(){

    fetch('http://localhost:3000/getproduct')
      .then(response => response.json())
      .then(json => {
        product = json.product;
        showdata()
        console.log(product);
      })
     showdata()

    console.log(product);

}
getdatafromApi()

    function showdata() {
        let str = ``;
        for (let i = 0; i < product.length; i++) {
            str += `
                <tr>
                    <td>${product[i].id}</td>
                    <td>${product[i].name}</td>
                    <td>${product[i].price}</td>
                    <td>${product[i].description}</td>
                    <td>
                        <button onclick='deleteproduct(${product[i].id})' class="btn btn-danger">Delete</button>
                        <button onclick='updateproduct(${i},${product[i].id})' class="btn btn-success">Update</button>
                    </td>
                </tr>
            `;
        }
        

        document.getElementById('tbody').innerHTML = str;
    }
    showdata()

    function inputdata(){

            let data = {
                name:productname.value,
                price:pricename.value,
                description:descriptions.value
            }
            crudproduct('addproduct','POST',data)
            console.log(data);
        }

        function crudproduct(endpoint,method,data){

        fetch(`http://localhost:3000/${endpoint}`, {
            
        method: method,

        body: JSON.stringify(data),

        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
        })

        .then(response => response.json())

        .then(obj => {

            if(obj.message == 'sucsess'){
                getdatafromApi();
                console.log(obj)
            }

        });


}


function deleteproduct(id){
   
   
    alert(`Do You Delete product ${id}?`);
    crudproduct('delete','DELETE',{id})
    alert(`Product is Deleted`);
}
let productid
function updateproduct(i,id){
    productid = id;
    productname.value = product[i].name;
    pricename.value = product[i].price;
    descriptions.value = product[i].description;
    document.getElementById('update').style.display = 'block';
    document.getElementById('add').style.display = 'none';

}

function sendupdate(){

    let data = {
        id:productid,
        name:productname.value,
        price:pricename.value,
        description:descriptions.value
    }

    crudproduct('update','PUT',data)
    document.getElementById('update').style.display = 'none';
    document.getElementById('add').style.display = 'block';

}