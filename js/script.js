/* 
---------O que é um CRUD--------
C-reate
R-ead
U-pdate
D-elete

Linguagem pura:
- Criar variáveis
- Sincronizar o conteúdo das variáveis com o HTML
- Atualizar variáveis
 
Too the List

*/

console.log('Olá mundo!');
console.log('#ConstruindoCRUDS');

/* [CRUD] JavaScript BÁSICO */ 
const miniTwitter = {
    usuarios: [
        {
            username: 'odanielrocha',
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'odanielrocha',
            content: 'Meu primeiro tweet'
        }
    ],
};
/* CREATE*/
function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    });
}
criaPost({ owner: 'odanielrocha', content: 'Segundo tweet' }); 
criaPost({ owner: 'odanielrocha', content: 'Terceiro tweet' }); 
/*console.log(miniTwitter.posts)*/

/* READ*/
function pegaPosts() {
    return miniTwitter.posts;
}
console.log(pegaPosts())

/* UPDATE*/
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}
atualizaContentDoPost(1, 'Novo conteúdo do post')
console.log(pegaPosts())

/* DELETE*/
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    miniTwitter.posts = listaDePostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts());