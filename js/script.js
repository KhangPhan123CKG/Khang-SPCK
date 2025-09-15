data = [
    {
        id: 1,
        name: "Nike Kyrie 8 Special FX",
        price: 3829000,
        image: "https://i.ebayimg.com/00/s/MTAyNFgxMDI0/z/IqMAAOSwiy5jAmkz/$_12.JPG?set_id=880000500F"
    },

    {
        id: 2,
        name: "Nike Ja 1 Scratch",
        price: 3519000,
        image: "https://www.basketballemotion.com/imagesarticulos/233013/grandes/zapatillas-nike-ja-1-reverse-scratch-white-black-turbo-green-university-red-0.webp"
    },

    {
        id: 3,
        name: "Nike KD 17 Aunt Pearl",
        price: 5450000,
        image: "https://www.nicekicks.com/files/2024/11/Nike-KD-17-Aunt-Pearl-FZ1518-600-02.jpg"
    },
    
    {
        id: 4,
        name: "Lining All City 12 Sunshine State",
        price: 2180000,
        image: "https://throwbackstore.com.au/cdn/shop/files/WOW_All_City_12_Sunshine_State_ABAU015-3_hover.jpg?crop=center&height=1600&v=1706493544&width=1600"
    },

    {
        id: 5,
        name: "Adidas Trae Young 1 Christmas",
        price: 4900000,
        image: "https://i.ebayimg.com/images/g/Dh8AAOSwmTVjECUR/s-l1200.jpg"
    },

    {
        id: 6,
        name: "Under Armour Curry 11 Future Curry",
        price: 3900000,
        image: "https://limitededt.com/cdn/shop/files/4_7ca6eaab-a369-4328-ba1b-125b0a1ea30a_1200x.jpg?v=1722409717"
    },

    {
        id: 7,
        name: "Anta Kai 1 Kai-Leidoscope",
        price: 2889150,
        image: "https://images.stockx.com/images/Anta-Kai-1-Kaleidoscope-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1738193358"
    },

    {
        id: 8,
        name: "Anta Kai 2 Muse",
        price: 3500000,
        image: "https://shopnicekicks.com/cdn/shop/files/bf0a70c4c1de3593c2ea5a86aa1b8f73_cd693c49-f2ba-4910-8d59-7f4f96e480a2.jpg?v=1742225350"
    },

    {
        id: 9,
        name: "Puma MB.03 Spark Safety Yellow",
        price: 3000000,
        image: "https://bizweb.dktcdn.net/100/425/004/products/457256300-480598438076444-817963911803784341-n.jpg?v=1724904335653"
    },
]

let elementProduct = document.getElementById("products")

for (let index = 0; index < data.length; index++) {
    const product = data[index];

    let card = document.createElement("div")
    card.classList.add("card")

    let image_container = document.createElement("div")
    image_container.classList.add("image-container")
    card.appendChild(image_container)


    let img = document.createElement("img")
    img.setAttribute("src", product.image)
    image_container.appendChild(img)

    let container = document.createElement("div")
    container.classList.add("container")
    card.appendChild(container)

    let h5 = document.createElement("h5")
    h5.classList.add("product-name")
    h5.innerHTML = product.name
    container.appendChild(h5)

    let h6 = document.createElement("h6")
    let b = document.createElement("b")
    b.innerHTML = "Price: "
    h6.appendChild(b)
    h6.innerHTML = product.price + "đ"
    container.appendChild(h6)

    let button = document.createElement("button")
    button.onclick = () => {
        addToCart(product)
    }
    button.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(button)

    elementProduct.appendChild(card)
}   

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    
    let i = 0
    let check = false
    while (i < cart.length && check == false) {
        let item = cart[i]
        if (item.id == product.id) check = true
        i++
    }

    if (check == true) {

    } else {
        product.quantities = 1
        cart.push(product)

        localStorage.setItem("cart", JSON.stringify(cart))
    }


}