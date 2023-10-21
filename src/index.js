let hero = ["goku", 10000]

    if(hero[1] <= 1000){
        console.log("Ferro")
    }else if(hero[1] <= 2000 && hero[1] > 1000){
        console.log("Bronze")
    }else if(hero[1] <= 5000 && hero[1] > 2000){
        console.log("Prata")
    }else if(hero[1] <= 7000 && hero[1] > 5000){
        console.log("Ouro")
    }else if(hero[1] <= 8000 && hero[1] > 7000){
        console.log("Platina")
    }else if(hero[1] <= 9000 && hero[1] > 8000){
        console.log("Ascendente")
    }else if(hero[1] <= 10000 && hero[1] > 9000){
        console.log("Imortal")
    }else{
        console.log("Radiante")
    }
    console.log("O héroi " + hero[0] + " está no nivel de " + hero[1])