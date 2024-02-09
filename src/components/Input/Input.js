import React from 'react';
import styles from './Input.module.css';

function Input(props){
    return (
        <input placeholder={props.placeholder} value={props.value} type={props.type} className={styles.Input}>{props.name}</input>
    )
}

Input.propTypes = {};
Input.defaultProps = {};
export default Input;