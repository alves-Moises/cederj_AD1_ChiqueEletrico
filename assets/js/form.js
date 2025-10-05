const formBTN = document.getElementById("submit")
const addBTN = document.getElementById("buy")

const itemBox = document.getElementById("item-list")
const totalValue = document.getElementById("totalValue")
formBTN.addEventListener("click", () => {
    verfify_number_fields()
    
})



addBTN.addEventListener("click", () => {
    const select = document.getElementById("prod_selector")
    const selected = select.options[select.selectedIndex]
    const ID = selected.id
    const value = selected.value
    if(ID=="disabledOPT"){
        alert("Nenhum Produto Selecionado!")
        return
    }
    
    
    totalValue.innerHTML 
    console.log(item_list)
    const {
        name,
        price
    } = item_list[selected.id]
    console.log(ID)
    console.log(value)
    
    itemBox.innerHTML += `${name}\n`
    totalValue.value = price + Number(totalValue.value)


    
})

function verfify_number_fields(){

    function number_filter(data){
        return data.match(/[^\d]+/g)
    }

    const NumbCharErr = (
            type,
            value
        ) => {
        if(!number_filter(value)) return
        alert(`${type} só pode conter dígitos, caractere ${number_filter(value)} inválido`)
    }

    const NumbLenErr = (
            type,
            target,
            value
        ) => {
        if(value.length==target) return 
        alert(`${type} deve conter ${target} dígitos`)
    }

    const tel = document.getElementById("tel").value
    const cel = document.getElementById("cel").value
    
    NumbCharErr("Telefone", tel)
    NumbCharErr("Celular", cel)
    NumbLenErr("Telefone", 8, tel)
    NumbLenErr("Celular", 9, cel)
}





const item_list = {
    //== Stylos ==
    "placa_4x4_stylos": {
        name: "Placa 4x4 stylus",
        price: 4.00
    },
    "tomada_stylos": {
        name: "Tomada stylus",
        price: 6
    },
    "interruptor_stylos": {
        name: "Interruptor stylus",
        price: 6
    },
    //==Slim==
    "placa_4x4_slim": {
        name: "Placa 4x4 slim",
        price: 4
    },
    "tomada_slim": {
        name: "Tomada slim",
        price: 5
    },
    "interruptor_slim": {
        name: "Interruptor slim",
        price: 4
    },

    //== CAbo Flexível
    "sil_preto_2.5": {
        name: "Sil Preto 2,5mm (100m)",
        price: 200
    },
    "cobrecom_azul_2.5": {
        name: "CObrecom Azul 2.5mm (100m)",
        price: 190
    },
    "sil_verde_2.5": {
        name: "Sil Verde 2.5mm (50m)",
        price: 150
    },

    //== Terminais Ilhós
    "2.5_200pc": {
        name: "2.5mm (200 peças)",
        price: 30
    },
    "4_100pc": {
        name: "4mm (100 peças)",
        price: 20
    },

    //== Conduíte
    "Plastilit_1/2": {
        name: "Plastit 1/2\" 25m",
        price: 50,
    },
    "Plastilit_3/4": {
        name: "Plastit 3/4\" 50m",
        price: 10
    },
};
