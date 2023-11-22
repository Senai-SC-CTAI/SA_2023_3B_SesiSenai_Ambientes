"use client"
import React, { useState, useEffect } from 'react';
import { Header } from '@/components';

export function Usuarios() {
    const [pessoas, setPessoas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8090/usuario')
            .then(response => response.json())
            .then(data => setPessoas(data));
    }, []);

    return (
        <div className='bg-gray-100 min-h-screen'>
        <Header />
        <h2 className='text-black text-center text-3xl mt-16 mb-8'>Usuários cadastrados</h2>
        <div className='flex flex-col items-center justify-center w-screen bg-no-repeat bg-cover relative'>
            <div className="flex justify-center mt-16">
                <div className="container mx-auto px-4 flex flex-col items-start">
                    {pessoas.length === 0 ? (
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-center text-gray-500 text-lg">Ainda não há nenhuma pessoa registrada</p>
                        </div>
                    ) : (
                        pessoas.map((pessoa, index) => (
                            <div key={index} className="flex bg-white items-center border-2 border-gray-300 p-6 mb-6 rounded w-full md:w-96 rounded-lg p-6 mb-6 shadow-lg w-full md:w-96"> 
                                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg">
                                    {pessoa.nome.substring(0, 2).toUpperCase()}
                                </div>
                                <div className='p-4'> 
                                    <p className="font-bold text-black text-2xl">{pessoa.nome}</p>
                                    <p className="text-md text-gray-600">{pessoa.email}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    </div>
    );
}

export default Usuarios;
