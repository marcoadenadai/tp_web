let historico=[], pontos=0, q=0, x=0;

function new_question(){
    if(q<10){
        do{
            x = Math.floor(Math.random() * 13);
        }while(historico.includes(x));
        //data[x].resposta
        document.getElementById('qid').innerHTML = (q+1);
        document.getElementById('a').innerHTML = data[x].alt[0];
        document.getElementById('b').innerHTML = data[x].alt[1];
        document.getElementById('c').innerHTML = data[x].alt[2];
        document.getElementById('d').innerHTML = data[x].alt[3];
        //document.getElementById('image_place').src=data[x].img;
        document.getElementById('image_place').innerHTML = 
         '<img src="'+data[x].img+'" class="imgsz"></img>';
        historico.push(x);
        q++;
    }
    else
        alert("FIM DE JOGO, pontuação: "+pontos);
}

function enviaepontos(){
    opcoes = document.getElementsByName("opcoes");
    var escolha=0;
    for(i=0;i<opcoes.length;i++){
        if(opcoes[i].checked == true)
            escolha=i;
    }
    if(data[x].resposta == escolha){
        pontos+=10;
        document.getElementById('pts').innerHTML = pontos;
        alert("Resposta Correta!");
    }
    else{
        alert("Resposta Incorreta.\nA resposta era: "+data[x].alt[data[x].resposta]+".");
    }
    new_question();
}