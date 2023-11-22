'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const logar = async (email: string, senha: string) => {
    try {
      const response = await axios.post('http://localhost:8090/api/login', {
        email: email,
        senha: senha,
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao autenticar usuário', error);
    }
};

export const Login: React.FC = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');    

    const handleLogin = async () => {
        const response = await logar(email, senha); 
        if (response) {
            const userEmail = response.email;
            const userNome = response.nome;
            const userType = response.accountType; 
            const userSenha = response.senha; 
            const userId = response.id; 
    
            localStorage.setItem('user', JSON.stringify({ userEmail, userNome, userType, userSenha, userId }));
    
            router.push('/home');
        } else {
            alert('Erro ao autenticar usuário.');
        }
    };

    const handleCadastro = () => {
        router.push('/cadastro');
    };

    const handleEsqueceuSenha = () => {
        router.push('/esqueceusenha');
    };

    return (
<div className="flex flex-col items-center justify-center w-screen min-h-screen bg-no-repeat bg-cover relative" style={{ backgroundImage: `url("/fundo2.png")`}}>
    <div className='overlay-blue absolute inset-0'></div>
    <div className="relative"> 
        <img src='/senai-branco.png' className="w-72 absolute top-0 left-1/2 transform -translate-x-1/2" alt="Image" />
        <div className='flex flex-col items-center justify-center border-2 p-10 border-blue-700 rounded bg-white mt-48'> {/* Adicione mt-20 para criar espaço entre a imagem e o container de login */}
            <h2 className="text-2xl mb-5 text-black">Faça seu Login</h2>

        <input
            type="email"
            placeholder="Email"
            className="p-2 mb-2 border border-gray-300 rounded border-sky-600 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />

        <input
            type="password"
            placeholder="Senha"
            className="p-2 mb-2 border border-gray-300 rounded border-sky-600 text-black"
            value={senha}
            onChange={(e) => setSenha(e.target.value)} 
        />

        <button onClick={handleEsqueceuSenha} className="text-blue-500 mb-2">
            Esqueceu a Senha?
        </button>

        <button onClick={handleLogin} className="p-2 mb-2 w-32 text-white bg-blue-500 rounded">
            Login
        </button>

        <p className="mb-2 text-black">Ainda não tem uma conta?</p>

        <button onClick={handleCadastro} className="p-2 text-white bg-blue-500 w-32 rounded">
            Criar Conta
        </button>
           </div>
        </div>
    </div>
  );
};

export default Login;