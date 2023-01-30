
document.write("<p>Tudo escrito com document.write vai ficar assim</p>");
//window (se refere a toda a tela do navegador)

function login(){
    
    var area2=document.getElementById('area2');
    var texto=prompt('Digite seu nome: ');

    if(texto == '' || texto==null){
        alert('Digite seu nome novamente!');
        area2.innerHTML='Num deu';
    }else{
        area2.innerHTML=texto;//basicamente a mesma coisa mas usando função
    }

}

//loops são beeeeem parecidos com C
/*

while(a==true){

}

for(i=0;i<10;i++){

}
*/

function acao(){
    document.write("Executando...<br/>")
}

//setInterval Executa de tempo em tempo
setInterval(acao,1000);//1000 é 1 seg

setTimeout();//vai esperar, depois executar