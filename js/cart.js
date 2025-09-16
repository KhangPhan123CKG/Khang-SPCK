let cart = JSON.parse(localStorage.getItem("cart")) || []

let listItem = document.getElementById("list-item")

showCart()

function showCart() {
    for (let index = 0; index < cart.length; i++) {
        const item = cart[index];

        let cartItem = document.createElement("div")
        cartItem.classList.add("cartItem", "row", "align-items-start")

        // Hiển thị image
        let cardItem_img = document.createElement("div")
        cardItem_img.classList.add("col-3", "mb-2")

        let img = document.createElement("img")
        img.setAttribute("src", item.image)
        img.classList.add("w-100")
        cardItem_img.appendChild(img)
        cartItem.appendChild(cardItem_img)

        // Hiển thị name
        let cardItem_name = document.createElement("div")
        cardItem_name.classList.add("col-5", "mb-2")

        let h6 = document.createElement("h6")
        h6.innerHTML = item.name
        cardItem_name.appendChild(h6)
        cartItem.appendChild(cardItem_name)

        // Hiển thị số lượng sản phẩm
        let cardItem_quantities = document.createElement("div")
        cardItem_quantities.classList.add("col-2")

        let p_quantities = document.createElement("p")
        p_quantities.classList.add("cartItemQuantity")
        p_quantities.classList.add("text-center")
        p_quantities.classList.add("p-1")
        p_quantities.innerHTML = item.quantities
        cardItem_quantities.appendChild(p_quantities)
        cartItem.appendChild(cardItem_quantities)

        // Hiển thị giá tiền
        let cardItem_price = document.createElement("div")
        cardItem_price.classList.add("col-2")

        let p_price = document.createElement("p")
        p_price.id = "cartItem1Price"
        p_price.innerHTML = item.price * item.quantities + "đ"
        cardItem_price.appendChild(p_price)
        cartItem.appendChild(cardItem_price)

        let hr = document.createElement("hr")

        listItem.appendChild(cartItem)
        listItem.appendChild(hr)
    }
}
