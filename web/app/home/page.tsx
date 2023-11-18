'use client'
import React, { useState } from 'react'
import { Header } from '../../components/index';
import '../globals.css'

interface Reserva {
    id: number;
    usuario_id: number;
    ambiente_id: number;
    motivo: string;
    data: Date;
    hora: string;
  }

const Home: React.FC = () => {
  const [reserva, setReserva] = useState<Reserva>({
    id: 0,
    usuario_id: 0,
    ambiente_id: 0,
    motivo: '',
    data: new Date(),
    hora: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReserva({ ...reserva, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    console.log(reserva);
  };

  return (
    <div className='w-screen h-screen bg-no-repeat bg-cover bg-white flex flex-col'>
      <Header />
      <div className="flex-1 flex items-center justify-center">
        <form onSubmit={handleSubmit} className=" space-y-4 w-1/4 mb-32">
          <div>
            <label htmlFor="ambiente_id" className=" text-sm font-medium text-gray-700">
              Ambiente
            </label>
            <input
              type="number"
              name="ambiente_id"
              id="ambiente_id"
              className="mt-1 text-black  w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={reserva.ambiente_id}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="data" className=" text-sm font-medium text-gray-700">
              Data
            </label>
            <input
              type="date"
              name="data"
              id="data"
              className="mt-1 text-black  w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={reserva.data}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="hora" className="block text-sm font-medium text-gray-700">
              Hora
            </label>
            <input
              type="time"
              name="hora"
              id="hora"
              className="mt-1 text-black block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={reserva.hora}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="motivo" className="block text-sm font-medium text-gray-700">
              Motivo
            </label>
            <input
              type="text"
              name="motivo"
              id="motivo"
              className="mt-1 text-black block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={reserva.motivo}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Solicitar Reserva
          </button>
        </form>
      </div>
    </div>
  );
};


export default Home