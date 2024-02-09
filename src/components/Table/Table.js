import React, { useState } from 'react';
import Button from '../Button/Button';
import './Table.css';

function Table(props){
  const [tableVisible, setTableVisible] = useState(false);

  const functionTable = () => {
    setTableVisible(true);
  };

  return (
    <table>
      <thead>
        <tr>
          <Button name="Revenu" onClick={functionTable}/>
          <Button name="Players" onClick={functionTable}/>
          <Button name="Cultures" onClick={functionTable}/>
        </tr>
      </thead>
      <tbody>
        <th>
          <td>{props.rang}</td>
          <td>{props.players}</td>
          <td>{props.culture}</td>
        </th>
      </tbody>
    </table>
  );
}

export default Table;