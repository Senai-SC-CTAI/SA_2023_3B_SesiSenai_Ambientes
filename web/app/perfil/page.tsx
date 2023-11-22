"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '../../components/index';


export default function Perfil() {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState('');
    const [editedEmail, setEditedEmail] = useState('');
    const [editedSenha, setEditedSenha] = useState('');
    let user = null;

    const handleEdit = () => {
        setIsEditing(true);
    };

    useEffect(() => {
        if (user) {
            setEditedNome(userNome);
            setEditedEmail(userEmail);
            setEditedSenha(userSenha);
        }
    }, [user]);
    
    const handleSave = async () => {
        const response = await fetch(`http://localhost:8090/usuario/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: editedNome,
                email: editedEmail,
                senha: editedSenha,
            }),
        });
    
        if (response.ok) {
            const updatedUser = await response.json();
            localStorage.setItem('user', JSON.stringify(updatedUser));
            setIsEditing(false);
        } else {
            alert('Erro ao salvar usuário');
        }
    };    

    if (typeof window !== 'undefined') {
        user = JSON.parse(localStorage.getItem('user'));
    }

    const { userEmail, userNome, userType, userSenha, userId } = user || {};

    const handleLogout = () => {
        router.push('/login');
    };

    const handleDelete = () => {
        if (window.confirm("Tem certeza de que deseja deletar sua conta?")) {
            fetch('http://localhost:8090/usuario/delete?email=' + userEmail, {
                method: 'DELETE',
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                handleLogout();
            })
            .catch((error) => {
                console.error('Error:', error);
                handleLogout();
            });
        }
    };

    return (
        <div className="w-screen h-screen bg-no-repeat bg-cover bg-gray-100 flex flex-col">
            <Header />
            <div className="flex-grow flex items-start mt-20 justify-center">
                <div className='flex flex-col items-center justify-center border-2 w-96 border-blue-700 rounded bg-white'>
                    <div className="flex items-center justify-center bg-blue-500 w-full p-4">
                        <div className="flex items-center justify-center bg-blue-700 w-12 h-12 rounded-full">
                            <p className="text-white text-lg">{userNome.slice(0,2).toUpperCase()}</p>
                        </div>
                        <div className="ml-4">
                            <p className="text-white text-xl font-bold">{userNome}</p>
                            <p className="text-gray-200 text-lg">{userType}</p>
                            <p className="text-blue-200 text-sm">{userEmail}</p>
                        </div>
                    </div>
                    {isEditing ? (
            <div className="flex flex-col items-center mb-5 justify-center mt-8 space-y-4">
            <input className="border-2 border-black text-black rounded p-2 w-full mb-4" type="text" value={editedNome} onChange={e => setEditedNome(e.target.value)} />
            <input className="border-2 border-black text-black rounded p-2 w-full mb-4" type="text" value={editedEmail} onChange={e => setEditedEmail(e.target.value)} />
            <input className="border-2 border-black text-black rounded p-2 w-full mb-4" type="password" value={editedSenha} onChange={e => setEditedSenha(e.target.value)} />
            <button className="bg-blue-500 text-white text-lg w-40 font-medium px-4 py-2 rounded-md" onClick={handleSave}>Salvar</button>
            </div>
) : (
        <div className="flex flex-col items-center mb-5 justify-center mt-8 space-y-4">
        <button className="bg-blue-500 text-white text-lg w-40 font-medium px-4 py-2 rounded-md" onClick={handleEdit}>Editar Perfil</button>
        <button onClick={handleLogout} className="bg-blue-500 w-40 text-white text-lg font-medium px-4 py-2 rounded-md">Deslogar</button>
        <button onClick={handleDelete} className="bg-red-500 text-white text-lg w-40 font-medium px-4 py-2 rounded-md">Excluir Perfil</button>
        </div>
)}
                </div>
            </div>
        </div>
    );      
}
