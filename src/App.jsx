import React, { useEffect, useState } from 'react';
import {firebase} from './firebase';


function App() {

  const [emprendimiento, setEmprendimiento] = useState([]);

  useEffect(() => {
    const getData = async() => {
      try {
        const db = firebase.firestore();
        const data = await db.collection('emprendimientos').get();
        console.log(data.docs);
        // const arrayData = data.map(() => {
          
        // })

      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h2>banana</h2>
    </div>
  );
}

export default App;
