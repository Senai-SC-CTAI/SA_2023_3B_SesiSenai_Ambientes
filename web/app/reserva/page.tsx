"use client"
import React, { useState, useEffect } from 'react';
import { Header } from '@/components';

export function Reserva() {
  const [reservas, setReservas] = useState([]);
  const [reservaEditando, setReservaEditando] = useState(null);
  const [userNome, setUserNome] = useState('');
  const [motivo, setMotivo] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
      fetch('http://localhost:8090/reserva')
          .then(response => response.json())
          .then(data => setReservas(data));
  }, []);

  const handleEdit = (reserva) => {
      setUserNome(reserva.userNome);
      setMotivo(reserva.motivo);
      setData(reserva.data);
      setHora(reserva.hora);
      setReservaEditando(reserva);
  };

  const handleSave = async () => {
      const response = await fetch(`http://localhost:8090/reserva/${reservaEditando.id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              userNome: userNome,
              motivo: motivo,
              data: data,
              hora: hora,
          }),
      });

      if (response.ok) {
          // Atualize a lista de reservas
          const updatedReserva = await response.json();
          setReservas(reservas.map(reserva => reserva.id === updatedReserva.id ? updatedReserva : reserva));
          setReservaEditando(null);
      } else {
          alert('Erro ao salvar reserva');
      }
  };

  const handleCancel = () => {
    setUserNome('');
    setMotivo('');
    setData('');
    setHora('');
    setReservaEditando(null);
};
  

  return (
      <div className='bg-white min-h-screen'>
          <Header />
          <div className='flex flex-col items-center justify-center w-screen bg-no-repeat bg-cover relative'>
        <div className="flex mt-16">
            <div className="container mx-auto px-4 flex flex-col items-start">
                {reservas.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-center text-gray-500">Ainda não há nenhuma reserva</p>
                    </div>
                ) : (
                    reservas.map((reserva, index) => (
                        <div key={index} className="flex items-center justify-center bg-gray-100 rounded-lg p-4 mb-4 shadow-md w-96">
                            <div className='p-4 flex flex-col items-center'> 
                                <p className="text-sm text-gray-500 mb-4 text-center">{reserva.userNome}</p>
                                <p className="text-sm text-gray-500 mb-4 text-center">{reserva.motivo}</p>
                                <p className="text-sm text-gray-500 mb-4 text-center">{reserva.data}</p>
                                <p className="text-sm text-gray-500 mb-4 text-center">{reserva.hora}</p>
                                <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={() => handleEdit(reserva)}>Editar</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {reservaEditando && (
                <div className="bg-gray-100 rounded-lg p-4 mb-4 shadow-md w-96 h-48">
                    <input className="border-2 border-black text-black rounded p-2 w-full mb-4" type="text" value={data} onChange={e => setData(e.target.value)} />
                    <input className="border-2 border-black text-black rounded p-2 w-full mb-4" type="text" value={hora} onChange={e => setHora(e.target.value)} />
                    <div className="flex justify-between">
                        <button className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={handleSave}>Salvar</button>
                        <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={handleCancel}>Cancelar</button>
                    </div>
                </div>
            )}
        </div>
    </div>
</div>
  );
}

export default Reserva;