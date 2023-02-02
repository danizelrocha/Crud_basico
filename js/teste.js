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
    criaPost(dados) {
        miniRedeSocial.posts.push({
            id: miniRedeSocial.posts.length + 1,
            owner: dados.owner,
            content: dados.content
        });
    }
};


/* còdigo de Front End: web */
const $meuForm = document.querySelector('form');
console.log($meuForm);

$meuForm.addEventListener('submit', function criaPostController(infosDoEvento) {
    infosDoEvento.preventDefault();
    console.log('estamos criando um post novo!')
    const $campoCriaPost = document.querySelector('input[name="CampoCriaPost"]');
    const $ListaDePosts = document.querySelector('.ListaDePosts');

    console.log();
    $ListaDePosts.insertAdjacentHTML('afterbegin',`<li>${$campoCriaPost.value}</li>`);
    $campoCriaPost.value ='';
});