async function api() {
    try {
        let res = await fetch('https://fakestoreapi.com/products')
        let data = await res.json();


        let output = ""
        data.forEach(val => {
            let { id, title, price, description, category, image } = val
            output +=
             `
              <div class = "inner">
                    <p class = "id">id : ${id} </p>
                    <h2>title : ${title}</h2>
                    <p class = "price">price : ${price}</p>
                    <p class= "des">description:${description}</p>
                    <p class = "cat">category:${category}</p>
                    <img src="${image}" width="100"/>
                </div>
             `  
        });

        document.getElementById('main').innerHTML = output
    }
    catch {
        console.error("Fetching Not Successful");

    }
}
api()













