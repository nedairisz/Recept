function Receptek({ nev, leiras, kep_eleresi_ut, kategoria }) {
  return (
    <tr>
      <td>{nev}</td>
      <td>{leiras}</td>
      <td><img src={kep_eleresi_ut} alt={nev} style={{ width: '100px' }} /></td>
      <td>{kategoria}</td>
    </tr>
  );
}

export default Receptek;