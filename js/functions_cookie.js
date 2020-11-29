function cadastroDados() {
var nomex  = document.forms["form_cadastro"]["nome_cad"].value;
var enderx = document.forms["form_cadastro"]["ender"].value;
var mailx  = document.forms["form_cadastro"]["email_cad"].value;
var cpfx   = document.forms["form_cadastro"]["cpf"].value;
var senhax = document.forms["form_cadastro"]["senha_cad"].value;
var nomesCookieArray = new Array("email","name","cpf","pass","ender");
var formValores = new Array(mailx, nomex, cpfx, senhax, enderx);
	
	for(var i = 0; i < nomesCookieArray.length; i++){
		if(checkCookie(nomesCookieArray[i], formValores[i]) == false){
			break;
		}
	}

}

function logar(){
    var email  = document.forms["form_login"]["email_login"].value;
    var pass = document.forms["form_login"]["senha_login"].value;
    var page = window.location.href;
    var newpage = page.slice(0,page.lastIndexOf("login.html"));

    if(getCookie("email") == email && getCookie("pass") == pass) {
        window.open(newpage + "minhaconta.html", "_blank");
        window.close(page);
    }
    else{
        alert("Email ou senha incorretos!");
    }
}

function getDados(){
    var nome = getCookie("name");
    var email = getCookie("email");
    var cpf = getCookie("cpf");
    for(var i = 0; i < cpf.length; i++){
        if(i == 3 || i == 7){
            cpf = cpf.slice(0, i) + "." + cpf.slice(i, cpf.length);
        }
        else if(i == 11){
            cpf = cpf.slice(0, i) + "-" + cpf.slice(i, cpf.length);
        }
    }
    document.getElementById("nome").innerHTML = "Nome: " + nome;
    document.getElementById("email").innerHTML = "E-mail: " + email;
    document.getElementById("cpf").innerHTML = "CPF: " + cpf;
}

function setCookie(nomeCookie,valorCookie,tempoCookie) {
    var data = new Date();
    //dia*horas*minutos*segundos*milisegundos
    data.setTime(data.getTime() + (1*1*tempoCookie*60*1000));
    var validadeCookie = "expires=" + data.toGMTString();
	document.cookie = nomeCookie + "=" + valorCookie + "; " + validadeCookie;
}

function getCookie(nomeCookie){
    var nome = nomeCookie + "=";
    var cookieValor = document.cookie.split(";");
    
    for(var i = 0; i < cookieValor.length; i++){
        var cookie = cookieValor[i];
        while (cookie.charAt(0) == ' '){cookie = cookie.substring(1);}
        if(cookie.indexOf(nome) == 0) {
            return cookie.substring(nome.length, cookie.length);
        }
    }
    return "";
}

function checkCookie(nomeCookie, valorCookie){
    var usuario=getCookie(nomeCookie);
    if(usuario != "" && nomeCookie == "email") {
		alert("Usuario ja criado, o mesmo dura somente 3 minutos");
		return false;
    }
    else {
        if(valorCookie != "") {
            setCookie(nomeCookie, valorCookie, 10);
        }
    }
}