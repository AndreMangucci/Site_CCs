function showItem(x){
    if(x == 1){
        document.getElementById("dados").style.display = "block";
        document.getElementById("pedidos").style.display = "none";
        document.getElementById("desejos").style.display = "none";
        document.getElementById("enderecos").style.display = "none";
    }
    else if(x == 2){
        document.getElementById("dados").style.display = "none";
        document.getElementById("pedidos").style.display = "block";
        document.getElementById("desejos").style.display = "none";
        document.getElementById("enderecos").style.display = "none";
    }
    else if(x == 3){
        document.getElementById("dados").style.display = "none";
        document.getElementById("pedidos").style.display = "none";
        document.getElementById("desejos").style.display = "block";
        document.getElementById("enderecos").style.display = "none";
    }
    else if(x == 4){
        document.getElementById("dados").style.display = "none";
        document.getElementById("pedidos").style.display = "none";
        document.getElementById("desejos").style.display = "none";
        document.getElementById("enderecos").style.display = "block";
    }
    else {
        alert("Não foi possivel reconhecer o botao");
    }
}
