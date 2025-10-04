const product_desc = {
    // === Stylus ===
    placa4x4: {
        name: "Placa 4x4",
        img: "Stylus2tomadas_150",
        price: "4,00",
        manufacter: "Stylus"
    },
    tomada: {
        name: "Tomada",
        img: "stylusTomada_150",
        price: "6,00",
        manufacter: "Stylus"
    },
    interruptor: {
        name: "Interruptor",
        img: "StylusInterruptor_150",
        price: "6,00",
        manufacter: "Stylus"
    },

    // === Slin ===
    placa4x2: {
        name: "Placa 4x2", 
        img: "SlimPlaca4x2_150",
        price: "4,00",
        manufacter: "Slin",
    },
    mod_tomada: {
        name: "Módulo Tomada",
        img: "SlimModuloTomada_150",
        price: "5,00",
        manufacter: "Slin"
    },
    mod_interruptor: {
        name: "Módulo Interruptor",
        img:"SlimModuloInterruptor_150", 
        price: "4,00",
        manufacter: "Slin"
    }
}

const  itemName = document.querySelectorAll(".itemLink")

itemName.forEach(item => {
    item.addEventListener("click", () =>{
        let ID = item.id
        showItem(ID)
    }
    )
})


function showItem(id){
    const {
        name,
        img,
        price,
        manufacter
    } = product_desc[id]

    const manufDOM = document.getElementById("manufactorCell")
    const nameDOM = document.getElementById("prod_name")
    const imgProduct = document.getElementById("prod_img")
    const priceDOM = document.getElementById("prod_price")
    const priceWord = document.getElementById("priceWord")

    manufDOM.innerHTML = `Ilumi/${manufacter}`
    nameDOM.innerHTML = name
    imgProduct.src = `../../assets/images/${img}.png`
    imgProduct.style.display = "flex"
    priceDOM.innerHTML = price
    priceWord.innerHTML = "Preço: "
    

}
