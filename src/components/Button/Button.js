import styles from './Button.css';

function Button(props) {
  return (
    <>
      <button className={styles.Button} onClick={props.onClick}>{props.name}</button>
    </>
  );
}
  
export default Button;
  