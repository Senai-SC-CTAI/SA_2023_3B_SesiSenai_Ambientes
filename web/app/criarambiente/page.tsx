"use client"
import React, { useState } from 'react';
import { Header } from '@/components';

function CriarAmbiente() {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('http://localhost:8090/ambiente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: nome,
                descricao: descricao,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(`Ambiente ${data.nome} criado com sucesso!`);
        } else {
            alert(`Erro ao criar ambiente: ${data.error}`);
        }
    };

    return (
        <div className='bg-gray-100 min-h-screen'>
        <Header />
        <h2 className='text-black text-center text-3xl mt-16 mb-8'>Criar um novo Ambiente</h2>
        <div className='flex-1 flex items-center justify-center h-96'>
            <form className="text-center bg-white rounded-lg p-6 mb-6 shadow-lg w-full md:w-96" onSubmit={handleSubmit}>
                <label className="block mb-4">
                    <span className="text-gray-700 text-lg">Nome</span>
                    <input className="mt-1 block w-full text-black border-gray-300 border-2 rounded p-2" type="text" value={nome} onChange={e => setNome(e.target.value)} /> 
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700 text-lg">Descrição</span>
                    <input className="mt-1 block w-full text-black border-gray-300 border-2 rounded p-2" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} /> 
                </label>
                <input className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" type="submit" value="Criar Ambiente" /> 
            </form>
        </div>
    </div>
);
}

export default CriarAmbiente;