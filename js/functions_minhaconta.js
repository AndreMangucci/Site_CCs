function showItem(x){
    if(x == 1){
        document.getElementById("dados").style.visibility = "visible";
        document.getElementById("pedidos").style.visibility = "hidden";
        document.getElementById("desejos").style.visibility = "hidden";
        document.getElementById("enderecos").style.visibility = "hidden";
    }
    else if(x == 2){
        document.getElementById("dados").style.visibility = "hidden";
        document.getElementById("pedidos").style.visibility = "visible";
        document.getElementById("desejos").style.visibility = "hidden";
        document.getElementById("enderecos").style.visibility = "hidden";
    }
    else if(x == 3){
        document.getElementById("dados").style.visibility = "hidden";
        document.getElementById("pedidos").style.visibility = "hidden";
        document.getElementById("desejos").style.visibility = "visible";
        document.getElementById("enderecos").style.visibility = "hidden";
    }
    else if(x == 4){
        document.getElementById("dados").style.visibility = "hidden";
        document.getElementById("pedidos").style.visibility = "hidden";
        document.getElementById("desejos").style.visibility = "hidden";
        document.getElementById("enderecos").style.visibility = "visible";
    }
    else {
        alert("Não foi possivel reconhecer o botao")
    }
}