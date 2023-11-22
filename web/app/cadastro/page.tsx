'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export function Cadastro() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    const [accountType, setAccountType] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
        
        if (text.endsWith('@estudante.sesisenai.org.br')) {
            setAccountType('estudante');
        } else if (text.endsWith('@edu.sesisc.org.br')) {
            setAccountType('professor');
        } else if (text.endsWith('@sc.senai.br')) {
            setAccountType('coordenacao');
        } else {
            setAccountType('');
        }
    };

    const handleCadastro = async () => {
        if (senha !== confirmSenha) {
            alert('As senhas não coincidem.');
            return;
        }

        if (accountType == '') {
            alert('Você não está usando um email institucional');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8090/usuario', {
                nome,    
                email,
                senha,
                accountType
            });

            if (response.status === 200) {
                router.push('/login');
            } else {
                alert('Erro ao criar usuário.');
            }
        } catch (error) {
            console.error('Erro ao criar usuário', error);
        }
    };
  
    return (
        <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-no-repeat bg-cover relative" style={{ backgroundImage: `url("/fundo2.png")`}}>
        <div className='overlay-blue absolute inset-0'></div>
        <div className="relative"> 
        <img src='/senai-branco.png' className="w-72 mb-5 absolute top-0 left-1/2 transform -translate-x-1/2" alt="Image" />
        <div className="flex flex-col items-center justify-center border-2 p-10 border-blue-700 rounded bg-white mt-40"> 
        <h2 className="text-2xl mb-2 text-black">Cadastre-se</h2>
            <input
                placeholder="Nome"
                className="mb-4 p-2 border border-gray-300 rounded border-blue-700 text-black"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />
            <input
                placeholder="Email"
                className="mb-4 p-2 border border-gray-300 rounded border-blue-700 text-black"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
            />
            <input
                placeholder="Senha"
                type="password"
                className="mb-4 p-2 border border-gray-300 rounded border-blue-700 text-black"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            <input
                placeholder="Confirmar Senha"
                type="password"
                className="mb-4 p-2 border border-gray-300 rounded border-blue-700 text-black"
                value={confirmSenha}
                onChange={(e) => setConfirmSenha(e.target.value)}
            />

            <button className="mb-4 p-2 bg-blue-500 text-white rounded" onClick={handleCadastro}>
                Cadastrar
            </button>
            <button className="text-lg text-black" onClick={() => router.back()}>
                Voltar
            </button>
            </div>
        </div>
    </div>
  );
}

export default Cadastro;