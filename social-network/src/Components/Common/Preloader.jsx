import React from 'react';
import loader from '../../images/loader.svg';
import styles from './Preloader.module.css';

export default (props) =>{
    return <img className={styles} src={loader}/>
}