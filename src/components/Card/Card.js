import Button from '../Button/Button';
import Table from '../Table/Table';
import './Card.css';
import {useState} from "react";

function Card(props) {
    const [tableVisible, setTableVisible] = useState(false);

    const functionShowTable = () => {
      setTableVisible(true);
    };

    const data = [
      { colonne1: 'Donnée 1A', colonne2: 'Donnée 1B' },
      { colonne1: 'Donnée 2A', colonne2: 'Donnée 2B' },
    ];

    return (
      <>
        <div className="CardContainer">
            <div className="CardContenu">
                <div className="CardContenuImg">
                    <div className="CardContenuImgOne">
                        <img src={props.imageSource}/>
                    </div>
                </div>
                <div className="CardContenuButton">
                    <Button name="Voir Détail" onClick={functionShowTable}></Button>
                </div>
            </div>
            {tableVisible && <Table data={data} />}
        </div>
      </>
    );
  }
    
export default Card;