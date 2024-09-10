//console.log(tiposDeDados[0]);
function pesquisar(){
    let section = document.getElementById("resultadosDaPesquisa")

    let resultados = "";
    let nome = "";
    let descricao = "";
    
    let campoPesquisa = document.getElementById("campoPesquisa").value;
    console.log(campoPesquisa);
    if(campoPesquisa == ""){
        section.innerHTML = "A barra de pesquisa está vazia!";
        return;
    }

    //para cada dado dentro da lista de dados
    for(let dado of tiposDeDados){
        nome = campoPesquisa.toLowerCase();
        descricao = campoPesquisa.toLowerCase();
        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += ` 
                <div class="item-resulado">
                    <h2>
                        <a href="${dado.link}" target="_blank">
                            ${dado.nome}!
                        </a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}"
                    </p>
                </div>`;
            }
        }   
        
    section.innerHTML = resultados;
}