'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';


const App = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login');
  }, []);

 const [name, setName] = useState();

  return null; 
};

export default App;