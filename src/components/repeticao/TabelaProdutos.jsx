import React from 'react'
import produtos from '../../data/produtos';

export const TabelaProdutos = (props) => {

    const rows = produtos.map((produto) => {
        return (
            <tr key={produto.id}>
                <th scope="row">{produto.id}</th>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
      );
    })

    return (
        <div>
            <h2>Tabela Produtos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Preço</th>
                    </tr>
                </thead>
                <tbody>
                   {rows}
                </tbody>
            </table>
        </div>
    )
}
