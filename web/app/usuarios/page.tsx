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
        <div className='bg-white min-h-screen'>
        <Header />
        <div className='flex flex-col items-center justify-center w-screen bg-no-repeat bg-cover relative'>
            <div className="flex justify-center mt-16">
                <div className="container mx-auto px-4 flex flex-col items-start">
                    {pessoas.length === 0 ? (
                        <div className="flex flex-col items-center justify-center">
                            <p className="text-center text-gray-500">Ainda não há nenhuma pessoa registrada</p>
                        </div>
                    ) : (
                        pessoas.map((pessoa, index) => (
                            <div key={index} className="flex bg-white items-center border-2 border-black p-4 mb-4 rounded w-96 rounded-lg p-4 mb-4 shadow-md w-96"> 
                                <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                    {pessoa.nome.substring(0, 2).toUpperCase()}
                                </div>
                                <div className='p-4'> 
                                    <p className="font-bold text-black">{pessoa.nome}</p>
                                    <p className="text-sm text-gray-500">{pessoa.email}</p>
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
