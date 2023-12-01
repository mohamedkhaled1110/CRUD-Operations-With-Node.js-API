async function product(){

    let data = await fetch('http://localhost:3000/getproduct');
    let result =await data.json();
    console.log(result);
}

product();