function bttnLimpar() {
    var mbox = confirm("Tem certeza que quer todos os dados inseridos até agora?");
    if (mbox)
        cadastro.reset();
}

function bttnEnviar() {
    //a.
    if(cadastro.nome.value.length < 4){
        cadastro.nome.value = "";
        alert("Insira um nome válido!");
        return;
    }//b.
    else{
        cadastro.nome.value = cadastro.nome.value.toUpperCase();
    }
    //c.
    if (cadastro.estado_civil.value == ""){
        document.getElementById('errorState').innerHTML = "Selecione um estado civil válido!";
        document.getElementById('errorState').style.color = "red";
        document.getElementById('errorState').style.fontWeight = "bold";
        return;
    }
    else
        document.getElementById('errorState').innerHTML = "";
    //d.
    if(cadastro.objetivo.value != "")
        cadastro.objetivo.value = cadastro.objetivo.value.toLowerCase();
    //e.
    if(cadastro.tel.value == "" && cadastro.email.value == ""){
        alert("É preciso inserir um Telefone OU E-mail válido(s).")
        return;
    }
    //f.
    if (cadastro.ingles.value == "" || cadastro.espanhol.value == ""){
        alert("Você precisa inserir um nível de Idioma válido..");
        return;
    }
    //g.
    var linguagens = document.getElementsByName('conhecimento');
    var total = 0;
    for(let i=0; i<cadastro.conhecimento.length;i++){
        if(linguagens[i].checked == true)
            total++;
    }
    if(total <= 0){
        mbox = confirm("Você não selecionou nenhuma linguagem de programação, tem certeza que deseja continuar?");
        if(mbox == false)
            return;
    }
    cadastro.submit();

}