import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input(props){
    return (
        <input placeholder={props.placeholder} value={props.value} type={props.type} className={styles.Input}>{props.name}</input>
    )
}

Input.propTypes = {};
Input.defaultProps = {};
export default Input;