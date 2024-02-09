import Button from '../Button/Button';
import Input from '../Input/Input';
import './Filter.css';

function Filter(props) {

  return (
    <>
      <div className="Filtre">
        <div className="FiltreTitre">
          <p>bar raccourci</p>
        </div>
        <div className="FiltreRecherche">
          <p><Input placeholder="Recherche" type="text" name={props.Input}></Input></p> 
        </div>
        <div className="FiltreBoutton">
          <Button name="Rechercher"></Button>
        </div>
      </div>
    </>
  );
}
    
export default Filter;