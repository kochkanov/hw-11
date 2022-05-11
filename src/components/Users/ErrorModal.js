import { Button } from '../UI/Button'
import styles from './ErrorModal.module.css'
import Card from '../UI/Card'
import { React } from 'react';
import  ReactDom  from 'react-dom';

const Overlay = (props)=>{
    return <div className={styles.backdrop} onClick={props.onConfirm}/>
}

const ModalOverlay = (props)=>{ 
    return (
        <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>

        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick = {props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    )
}

export const ErrorModal = (props) => {
  return (
      <>
      {ReactDom.createPortal( <Overlay onClick={props.onConfirm}/>, document.getElementById('overlay'))}
    
      { ReactDom.createPortal(<ModalOverlay title = {props.title} message={props.message} onConfirm={props.onConfirm}/>, document.getElementById('modal-overlay'))}
   </>

  )
}
