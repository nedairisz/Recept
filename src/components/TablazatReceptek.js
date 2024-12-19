import React, { useEffect, useState } from 'react';
import { useTablazatContext } from './TablazatContext';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const TablazatReceptek = () => {
  const [receptek, setReceptek] = useState([]);
  const { setSelectedRecept } = useTablazatContext();

  useEffect(() => {
    axios.get('/api/receptek')  
      .then(response => setReceptek(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Recept Neve</th>
            <th>Leírás</th>
            <th>Kép</th>
          </tr>
        </thead>
        <tbody>
          {receptek.map((recept) => (
            <tr key={recept.id} onClick={() => setSelectedRecept(recept)}>
              <td>{recept.nev}</td>
              <td>{recept.leiras}</td>
              <td><img src={recept.kep_eleresi_ut} alt={recept.nev} style={{ width: '100px' }} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablazatReceptek;