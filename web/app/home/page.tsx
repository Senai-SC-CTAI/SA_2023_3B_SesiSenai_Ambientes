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

  return (
      <div className='bg-white h-screen'>
          <Header />
          <div className='flex flex-col items-center justify-center w-screen bg-no-repeat bg-cover relative'>
              <div className="flex justify-center mt-16">
                  <div className="container mx-auto px-4 flex flex-col items-start">
                      {ambientes.length === 0 ? (
                          <div className="flex flex-col items-center justify-center">
                              <p className="text-center text-gray-500">Ainda não há nenhum ambiente</p>
                          </div>
                      ) : (
                          ambientes.map((ambiente, index) => (
                              <div key={index} className="flex items-center">
                                  <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                      {ambiente.nome.substring(0, 2).toUpperCase()}
                                  </div>
                                  <div className='p-4'> 
                                      <p className="font-bold text-black">{ambiente.nome}</p>
                                      <p className="text-sm text-gray-500">{ambiente.descricao}</p>
                                      <button className="text-black" onClick={() => handleEdit(ambiente)}>Editar</button>
                                  </div>
                              </div>
                          ))
                      )}
                      {ambienteEditando && (
                          <div>
                              <input className="border-2 border-black text-black" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                              <input className="border-2 border-black text-black" type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                              <button className="text-black" onClick={handleSave}>Salvar</button>
                          </div>
                      )}
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Home;
