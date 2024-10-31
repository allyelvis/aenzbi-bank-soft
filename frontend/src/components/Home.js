import React, { useEffect, useState } from 'react';
import API from '../api';

function Home() {
   const [message, setMessage] = useState('');

   useEffect(() => {
      API.get('/')
         .then((response) => setMessage(response.data))
         .catch((error) => console.error(error));
   }, []);

   return <h1>{message}</h1>;
}

export default Home;
