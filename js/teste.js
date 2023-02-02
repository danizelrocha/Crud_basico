console.log('Ola mundo! - teste');
console.log('#ConstruindoCRUDS');

/* Base de dados*/
const miniRedeSocial = {
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
    readPosts() {
        miniRedeSocial.posts.forEach(({owner, content})=>{
        miniRedeSocial.criaPost({ owner: owner, content: content}, true); 
        })
    },
    criaPost(dados, htmlOnly = false) {
        if(!htmlOnly){
            /*Cria Post na Memória (Array / Objeto)*/
            miniRedeSocial.posts.push({
              id: miniRedeSocial.posts.length + 1,
              owner: dados.owner,
             content: dados.content
            });
        }
        /*Cria Post no Html */
        const $ListaDePosts = document.querySelector('.ListaDePosts');
        $ListaDePosts.insertAdjacentHTML('afterbegin',`
            <li>
              <button>Delete</button>
              ${dados.content}
            </li>
        `);
    }
};
/* còdigo de Front End: web */
const $meuForm = document.querySelector('form');
console.log($meuForm);

/*CRUD:[READ] */
    miniRedeSocial.readPosts();

/*CRUD: [CREATE] */
$meuForm.addEventListener('submit', function criaPostController(infosDoEvento) {
    infosDoEvento.preventDefault();
    console.log('estamos criando um post novo!')
    const $campoCriaPost = document.querySelector('input[name="CampoCriaPost"]');
    miniRedeSocial.criaPost({ owner: 'odanielrocha', content: $campoCriaPost.value}); 
    $campoCriaPost.value ='';
})

/* CRUD: DELETE*/
document.querySelector('.ListaDePosts').addEventListener('click', function (infosDoEvento){
      console.log('Houve um click', infosDoEvento.target);
    })
