import React, { useEffect, useState} from 'react';
import { firebase } from './firebase';


function App() {

  const [emprendimiento, setEmprendimiento] = useState([]);

  useEffect(() => {
    const getData = async() => {
      try {
        const db = firebase.firestore();
        const data = await db.collection('emprendimientos').get();
        console.log(data.docs);
        const arrayData = data.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        console.log(arrayData);
        setEmprendimiento(arrayData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <div className="container mt-3">
      <h2>Emprendimientos</h2>
      <div className="container mt-5">
        {
          emprendimiento.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="" className="rounded"/>
            <h2>{item.nameEmpre}</h2>
            <p>{item.description}</p>
            <button className="btn btn-outline-info">Contactame</button>
          </div>
          ))
        }

      </div>

    </div>
  );
}

export default App;
