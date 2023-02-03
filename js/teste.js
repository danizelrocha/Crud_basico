console.log("Ola mundo! - teste");
console.log("#ConstruindoCRUDS");

/* Base de dados*/
const miniRedeSocial = {
  usuarios: [
    {
      username: "odanielrocha",
    },
  ],
  posts: [
    {
      id: Date.now(),
      owner: "odanielrocha",
      content: "Meu primeiro tweet",
    },
  ],
  readPosts() {
    miniRedeSocial.posts.forEach(({ id, owner, content }) => {
      miniRedeSocial.criaPost({ id, owner: owner, content: content }, true);
    });
  },
  criaPost(dados, htmlOnly = false) {
    const idInternoAqui = Date.now();
    if (!htmlOnly) {
      /*Cria Post na Memória (Array / Objeto)*/
      miniRedeSocial.posts.push({
        id: dados.id || idInternoAqui,
        owner: dados.owner,
        content: dados.content,
      });
    }
    /*Cria Post no Html */
    const $ListaDePosts = document.querySelector(".ListaDePosts");
    $ListaDePosts.insertAdjacentHTML(
      "afterbegin",
      `
            <li data-id="${idInternoAqui}">
              <button class='btn-delete'>Delete</button>
              <span contenteditable>
                 ${dados.content}
              </span>
            </li>
        `
    );
  },
  apagaPost(id) {
    const listaDePostsAtualizada = miniRedeSocial.posts.filter((postAtual) => {
      return postAtual.id !== Number(id);
    });
    console.log(listaDePostsAtualizada);
    miniRedeSocial.posts = listaDePostsAtualizada;
  },
  atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = miniRedeSocial.posts.find((post) => {
      return post.id === Number(id);
    });
    console.log(postQueVaiSerAtualizado);
    postQueVaiSerAtualizado.content = novoConteudo;
  },
};
/* còdigo de Front End: web */
const $meuForm = document.querySelector("form");
console.log($meuForm);

/*CRUD:[READ] */
miniRedeSocial.readPosts();

/*CRUD: [CREATE] */
$meuForm.addEventListener("submit", function criaPostController(infosDoEvento) {
  infosDoEvento.preventDefault();
  console.log("estamos criando um post novo!");
  const $campoCriaPost = document.querySelector('input[name="CampoCriaPost"]');
  miniRedeSocial.criaPost({
    owner: "odanielrocha",
    content: $campoCriaPost.value,
  });
  $campoCriaPost.value = "";
});

/* CRUD: [DELETE]*/
document
  .querySelector(".ListaDePosts").addEventListener("click", function (infosDoEvento) {
    console.log("Houve um click");
    const elementoAtual = infosDoEvento.target;
    const isBtnDeleteClick = infosDoEvento.target.classList.contains("btn-delete");  
    if (isBtnDeleteClick) {
      console.log("Clicou no botão apagar",);
      const id = elementoAtual.parentNode.getAttribute("data-id");

      /*MANIPULA O LADO DO - ServeceSide /Banco de dados / Arquivos / Fonte! */
      miniRedeSocial.apagaPost(id);

      /* MANIPULA A - View / Ouput / ...*/
      elementoAtual.parentNode.remove();

      console.log(miniRedeSocial.posts);
    }
  })

/* CRUD: [UPDATE]*/
document.querySelector(".ListaDePosts").addEventListener("input", function (infosDoEvento) {
    console.log("Houve uma digitação");
    const elementoAtual = infosDoEvento.target;
    const id = elementoAtual.parentNode.getAttribute("data-id");

    miniRedeSocial.atualizaContentDoPost(id, elementoAtual.innerText)
});
