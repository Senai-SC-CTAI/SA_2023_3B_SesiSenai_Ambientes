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
        <div className='w-screen h-screen bg-no-repeat bg-cover bg-white flex flex-col'>
        <Header />
        <div className='flex-1 flex items-center justify-center'>
        <form onSubmit={handleSubmit}>
            <label className="block">
                <span className="text-gray-700">Nome</span>
                <input className="mt-1 block w-full text-black border-black border-2" type="text" value={nome} onChange={e => setNome(e.target.value)} />
            </label>
            <label className="block">
                <span className="text-gray-700">Descrição</span>
                <input className="mt-1 block w-full text-black border-black border-2" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
            </label>
            <input className="text-black" type="submit" value="Criar Ambiente" />
        </form>
        </div>
        </div>
    );
}

export default CriarAmbiente;