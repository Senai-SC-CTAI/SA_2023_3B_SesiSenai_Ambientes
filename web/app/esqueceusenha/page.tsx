'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export function EsqueceuSenha () {
    const router = useRouter();
    const [email, setEmail] = useState('');


    const handleLogin = () => {
        router.push('/login');
    };


    return (
<div className="flex flex-col items-center justify-center w-screen min-h-screen bg-no-repeat bg-cover relative" style={{ backgroundImage: `url("/fundo2.png")`}}>
    <div className='overlay-blue absolute inset-0'></div>
    <img src='/senai-branco.png' className="w-72 mb-5 absolute top-20" alt="Image" />
        <div className='flex flex-col items-center justify-center border-2 p-10 border-blue-700 rounded bg-white absolute'>
        <h2 className="text-2xl mb-5 text-black">Insira seu email para trocar a senha</h2>

        <input
            type="email"
            placeholder="Email"
            className="p-2 mb-5 border border-gray-300 rounded border-sky-600 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />


        <button className="p-2 text-white bg-blue-500 w-32 mb-5 rounded">
            Enviar Email
        </button>

        <button onClick={handleLogin} className="text-black mb-2">
            Voltar
        </button>

        </div>
    </div>
  );
};

export default EsqueceuSenha;