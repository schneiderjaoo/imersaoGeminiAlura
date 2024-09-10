//console.log(tiposDeDados[0]);
function pesquisar(){
    let section = document.getElementById("resultadosDaPesquisa")

    let resultados = "";
    
    //para cada dado dentro da lista de dados
    for(let dado of tiposDeDados){
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
        
    section.innerHTML = resultados;
}
/*
let section = document.getElementById("resultadosDaPesquisa")

let resultados = "";

//para cada dado dentro da lista de dados
for(let dado of tiposDeDados){
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
    
section.innerHTML = resultados; */