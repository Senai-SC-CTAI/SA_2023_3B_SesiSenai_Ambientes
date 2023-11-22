"use client"
import React, { useState, useEffect } from 'react';
import { Header } from '@/components';

export function Home() {
  const [ambientes, setAmbientes] = useState([]);
  const [ambienteEditando, setAmbienteEditando] = useState(null);
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
      fetch('http://localhost:8090/ambiente')
          .then(response => response.json())
          .then(data => setAmbientes(data));
  }, []);

  const handleEdit = (ambiente) => {
    setNome(ambiente.nome);
    setDescricao(ambiente.descricao);
    setAmbienteEditando(ambiente);
};

const handleSave = async () => {
    const response = await fetch(`http://localhost:8090/ambiente/${ambienteEditando.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            descricao: descricao,
        }),
    });

    if (response.ok) {
        // Atualize a lista de ambientes
        const updatedAmbiente = await response.json();
        setAmbientes(ambientes.map(ambiente => ambiente.id === updatedAmbiente.id ? updatedAmbiente : ambiente));
        setAmbienteEditando(null);
    } else {
        alert('Erro ao salvar ambiente');
    }
};

const handleCancel = () => {
    setNome('');
    setDescricao('');
    setAmbienteEditando(null);
};

return (
<div className='bg-white min-h-screen'>
<Header />
    <div className='flex flex-col items-center justify-center w-screen bg-no-repeat bg-cover relative'>
      <div className="flex mt-16">
          <div className="container mx-auto px-4 flex flex-col items-start">
              {ambientes.length === 0 ? (
                  <div className="flex flex-col items-center justify-center">
                      <p className="text-center text-gray-500">Ainda não há nenhum ambiente</p>
                  </div>
              ) : (
                  ambientes.map((ambiente, index) => (
                      <div key={index} className="flex items-center justify-center bg-gray-100 rounded-lg p-4 mb-4 shadow-md w-96">
                          <div className='p-4 flex flex-col items-center'> 
                              <p className="font-bold text-black text-xl">{ambiente.nome}</p>
                              <p className="text-sm text-gray-500 mb-4 text-center">{ambiente.descricao}</p>
                              <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={() => handleEdit(ambiente)}>Editar</button>
                          </div>
                      </div>
                  ))
              )}
          </div>
          {ambienteEditando && (
              <div className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md w-96 h-48">
                  <input className="border-2 border-black text-black rounded p-2 w-full mb-4" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                  <input className="border-2 border-black text-black rounded p-2 w-full mb-4" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                  <div className="flex justify-between">
                      <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={handleSave}>Salvar</button>
                      <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={handleCancel}>Voltar</button>
                  </div>
              </div>
          )}
      </div>
  </div>
</div>
  );
}

export default Home;
