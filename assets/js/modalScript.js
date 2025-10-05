var item = document.querySelectorAll(".product_li")
var closeBTN = document.getElementById("closeBTN")

closeBTN.addEventListener("click", close_card)
item.forEach(product => {
    console.log(
        Object.keys(product)
    )
    product.addEventListener("click", () => {
        let ID = product.id
        create_card(ID)

    })
    console.log(product)
});

document.addEventListener("keydown", (event) =>{
    event.key == "Enter" || event.key == "Escape" ? close_card() : ""
})

const product_list = {
    // === CAbo Flexível ===
    sil_preto: {
        category: "Cabo Flexível",
        name: "Sil Preto 2,5mm",
        size: "100m",
        img: "SilPreto2p5_150",
        price: "200,00"
    },
    cobrecom_azul: {

        category: "Cabo Flexível",
        name: "Cobrecom Azul 2,5mm ",
        size: "100m",
        img: "CobrecomAzul2p5_150",
        price: "190,00"
    },
    sil_verde: {
        category: "Cabo Flexível",
        name: "Sil Verde 2,5mm ",
        size: "50m",
        img: "SilVerde2p5_150",
        price: "150,00"
    },

    // === Terminais Ilhós
    term_200pc: {
        category: "Terminais Ilhós",
        name: "2,5mm",
        size: "200pc",
        img: "TermIlhos2p5_150",
        price: "30,00"
    },
    term_100pc: {
        category: "Terminais Ilhós",
        name: "4mm",
        size: "100pc",
        img: "TermIlhos4_150",
        price: "20,00"
    },

    // === Conduítes ===
    cond_25m: {
        category: "Conduítes",
        name: "1/2\"",
        size: "25m",
        img: "Plastlit1b2_150",
        price: "50,00"
    },
    cond_50m: {
        category: "Contuítes",
        name: "3/4\"",
        size: "50m",
        img: "Plastlit3b4_150",
        price: "100,00"
    }


}

function  create_card(product){
    const { 
        category,
        name,
        size,
        img,
        price
    } = product_list[product]
    
    // alert(
    //     category+
    //     name+
    //     size+
    //     img
    // )

    let modal = document.getElementById("modal-frame")
    let titleDOM = document.getElementById("card-cat")
    let nameDOM= document.getElementById("card-name")
    let sizeDOM = document.getElementById("card-size")
    let imgProduct = document.getElementById("product_image")
    let priceProduct = document.getElementById("price")

    titleDOM.innerHTML = category
    nameDOM.innerHTML = name
    sizeDOM.innerHTML = size
    imgProduct.src = `../../assets/images/modal-img/${img}.jpg`
    priceProduct.innerHTML = price
    
    
    modal.style.display = "flex"
}

function close_card(){
    let modal = document.getElementById("modal-frame")
    modal.style.display = "none"
}