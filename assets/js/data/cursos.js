const cursos = [
    {id:1,
     imagem:'./assets/imagens/curso-design.png',
     titulo:'Design para web',
     descricao:"O curso Design para Web é perfeito para aqueles que desejam aprender a criar designs atraentes e funcionais para sites e aplicativos móveis."
    },
    {id:2, 
     imagem:'./assets/imagens/curso-design-1.png',
     titulo:'Front-End Developer',
     descricao:'Aprenda HTML, CSS e Javascript e crie interfaces ricas e semânticas para páginas web, aplicativos on-line ou até mesmo aplicações para aparelhos celulares'
    },
    {id:3,
     imagem:'./assets/imagens/curso-design-2.png',
     titulo:'Back-End Developer',
     descricao:'Com este curso você vai dominar uma linguagem back-end a sua escolha, um sistema de banco de dados e aprenderá como funciona o protocolo HTTP na prática.'
    }
];

const json = JSON.stringify(cursos);

export {json as default};