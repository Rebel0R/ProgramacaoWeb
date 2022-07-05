{
    var textoPesquisa = document.getElementById('campoPesquisa');
    textoPesquisa.style.display = 'none';
    var caixaBusca = document.querySelector('.pesquisa');
    caixaBusca.style.display = 'none';

    function entrar(){
        event.preventDefault();
        var user = document.getElementById('login').value;
        var password = document.getElementById('senha').value;
        //textoPesquisa.style.display = 'block';
        let xmlhtt = new XMLHttpRequest();
            confirmacao = document.querySelector('.confirmacao');

        xmlhtt.open("GET", "https://reqres.in/api/users/", true);
        xmlhtt.onreadystatechange = () => {
            if(xmlhtt.readyState === 4 && xmlhtt.status === 200){
                 //convertendo um JSON em objeto js
                 let objeto = JSON.parse(xmlhtt.responseText);
                 let i, email;
                 for( i = 0; i < 6; i++){
                    email = objeto['data'][i]['email'];
                    if((user === email) && (password === '1234')){
                        //email ex da api rqres: george.bluth@reqres.in
                        confirmacao.innerHTML = 'Login aceito';
                        confirmacao.className = 'confirmacao aceito';   
                        textoPesquisa.style.display = 'block';
                        caixaBusca.style.display = 'flex';
                        break;
                    }else{
                        confirmacao.innerHTML = 'Login recusado';
                        confirmacao.className = 'confirmacao negado';
                    }
                    
                }
                //apenas quando o login é aceito esse campo de pesquisa é exibido
                if((user === email)&&(password === '1234')){
                    let input = document.querySelector('#campoBusca');
                    ul = document.querySelector('.listaResults');
                    mensagem = document.querySelector('.mensagem');
                    xhr = new XMLHttpRequest();
                
                    input.addEventListener('keyup', (ev) =>{
                        if(input.value.length < 3){
                            mensagem.innerHTML = 'Dados inválidos, entrada deve ter mais que 3 dígitos...';
                            mensagem.className = 'mensagem erro';
                            return;
                        }
                        else{
                            mensagem.innerHTML = 'Ok! Dados aceitos, aproveite a api RandomFox...'
                            mensagem.className = 'mensagem aceita'
                        }
                        if(input.value === 'fox' || input.value === 'raposa' || input.value === 'foxes' || input.value === 'raposas'){
                            if(ev.keyCode === 13){
                                xhr.open('GET', 'https://randomfox.ca/floof/', true);
                                xhr.onreadystatechange = () => {
                                    if(xhr.readyState === 4 && xhr.status === 200){
                                        let obj = JSON.parse(xhr.responseText);
                                        let li = document.createElement('li'),
                                        image = obj['image'],
                                        link = obj['link'];
                                        li.innerHTML = `<ul>
                                        <li>${input.value}</li>
                                        <li><img src = "${image}"/></li>
                                        <li>** O link abaixo é um atributo da api RandomFox</li>
                                        <li><a href="${link}">Mais sobre sua busca... </a></li>
                                        </ul>`; 
                                        ul.appendChild(li);
                                        console.log(obj);
                                        input.value = '';
                                        mensagem.innerHTML = '';
                                    };
                                };
                                xhr.send();        
                            }
                        }
                        else{
                            mensagem.innerHTML = 'Campo não identificado! Pesquise por: raposa, raposas, fox ou foxes!'
                            mensagem.className = 'mensagem notFox'
                        }
                    });
                    
                }
                console.log(objeto);     
            }
        };
        xmlhtt.send();
        
    }

        //CÓDIGO PARA A BUSCA DE IMAGENS SEPARADA DO LOGIN

    // let input = document.querySelector('#campoBusca');
	// 	ul = document.querySelector('.listaResults');
    //     mensagem = document.querySelector('.mensagem');
    //     xhr = new XMLHttpRequest();
    
    // input.addEventListener('keyup', (ev) =>{
    //     if(input.value.length < 3){
    //         mensagem.innerHTML = 'Dados inválidos, entrada deve ter mais que 3 dígitos...';
    //         mensagem.className = 'mensagem erro';
    //         return;
    //     }
    //     else{
    //         mensagem.innerHTML = 'Ok! Dados aceitos, aproveite a api RandomFox...'
    //         mensagem.className = 'mensagem aceita'
    //     }
    //     if(input.value === 'fox' || input.value === 'raposa' || input.value === 'foxes' || input.value === 'raposas'){
    //         if(ev.keyCode === 13){
    //             xhr.open('GET', 'https://randomfox.ca/floof/', true);
    //             xhr.onreadystatechange = () => {
    //                 if(xhr.readyState === 4 && xhr.status === 200){
    //                     let obj = JSON.parse(xhr.responseText);
    //                     let li = document.createElement('li'),
    //                     image = obj['image'],
    //                     link = obj['link'];
    //                     li.innerHTML = `<ul>
    //                     <li>${input.value}</li>
    //                     <li><img src = "${image}"/></li>
    //                     <li>** O link abaixo é um atributo da api RandomFox</li>
    //                     <li><a href="${link}">Mais sobre sua busca... </a></li>
    //                     </ul>`; 
    //                     ul.appendChild(li);
    //                     console.log(obj);
    //                     input.value = '';
    //                     mensagem.innerHTML = '';
    //                 };
    //             };
    //             xhr.send();        
    //         }
    //     }
    //     else{
    //         mensagem.innerHTML = 'Campo não identificado! Pesquise por: raposa, fox, raposas ou foxes!'
    //         mensagem.className = 'mensagem notFox'
    //     }
    // });
    
    
};