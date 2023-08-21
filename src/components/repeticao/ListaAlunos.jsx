import React from 'react';
import alunos from '../../data/alunos';

export const ListaAlunos = (props) => {

    const li2 = alunos.map((aluno) => {
        return (
            <li key={aluno.id}> {aluno.id}) {aluno.nome} - {aluno.nota} </li>
        );
    })

    return (
        <div>
            <ul>
                {li2}
            </ul>
        </div>
    )
}
