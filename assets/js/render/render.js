const listaCursos = document.querySelector('.lista-cursos');

export function renderizarCursos(cursos){
     console.log('renderizou');
    cursos.forEach(curso => {
        const article = document.createElement('article');
        article.classList.add('produto-curso');
        const imagemCurso = document.createElement('img');
        imagemCurso.setAttribute('alt', 'Imagem do curso');
        imagemCurso.classList.add('img.curso');
        imagemCurso.src = curso.imagem;
        const tituloCurso = document.createElement('h3');
        tituloCurso.textContent = curso.titulo
        const descricaoCurso = document.createElement('p');
        descricaoCurso.textContent = curso.descricao;

        article.appendChild(imagemCurso);
        article.appendChild(tituloCurso);
        article.appendChild(descricaoCurso);
        listaCursos.appendChild(article);

    });
}