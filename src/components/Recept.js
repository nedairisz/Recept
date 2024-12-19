import React from 'react';
import { Card } from 'react-bootstrap';
import { useTablazatContext } from './TablazatContext'; 

function Recept() {
  const { selectedRecept } = useTablazatContext();  

  if (!selectedRecept) {
    return <div>Kattints egy receptre a részletek megtekintéséhez.</div>;
  }

  return (
    <div className="Recept">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={selectedRecept.kep_eleresi_ut} alt={selectedRecept.nev} />
        <Card.Body>
          <Card.Title>{selectedRecept.nev}</Card.Title>
          <Card.Text>{selectedRecept.leiras}</Card.Text>
          <Card.Text>Kategória: {selectedRecept.kategoriak?.nev || 'Nincs megadva'}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Recept;