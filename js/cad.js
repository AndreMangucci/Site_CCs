function cadastroDados() {
var nomex  = document.formulario.nome.value;
var enderx = document.formulario.ender.value;
var mailx  = document.formulario.mail;
var cpfx   = document.formulario.cpf.value;
var senhax = document.formulario.senha.value;
if (nomex=="") {
		alert("invalido");
		nomex.focus();
		return false;

	}if (enderx==""){
		alert("invalido endereco");
		enderx.focus();
		return false;
	}
	if (mailx=="" || mailx.indexOf("@")== -1 || mailx.indexOf(".")== -1){
		alert ("invalido email");
		mailx.focus();
		return false;
	}
	if (cpfx=="" || cpfx.length < 11 ||  cpfx.length > 11 ) {
		alert ("cpf invalido");
		cpfx.focus();
		return false;
	}

	if (senhax != 12) {
		alert ("senha invalida");
		senhax.focus();
		return false;
	}
}
