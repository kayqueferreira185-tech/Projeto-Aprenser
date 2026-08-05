import dados from "../data/cursos.js";
import { renderizarCursos } from "../render/render.js";


const cursos = JSON.parse(dados);

function criaCurso(curso){
    return{
        id: curso.id,
        imagem: curso.imagem,
        titulo: curso.titulo,
        descricao: curso.descricao

    };

}
const entidadesCurso = cursos.map(criaCurso);

renderizarCursos(entidadesCurso);