import styles from "./ErrorModal.module.css";
import React from "react";
import Card from "../UI/Card";
import styled from './DeleteModal.module.css'

import ReactDom  from 'react-dom';



// const DeleteOverModal = (props)=>{
//   return (
//     // <div className={styles.backdrop}>
//     //   <Card className={styles.modal}>
//     //     <header className={styles.header}>
//     //       <h2>Удаление пользователя</h2>
//     //     </header>
//     //     <div className={styles.content}>Вы действительно хотите удалить?</div>
//     //     <footer className={styles.actions}>
//     //       <button className={styled.button} id={props.id} onClick={props.onDelet}>
//     //         Да
//     //       </button>
//     //       <button className={styled.button} onClick={() => props.closeModal()}>Нет</button>
//     //     </footer>
//     //   </Card>
//     // </div>
//   )
// }


export const DeleteModal = (props) => {
  return (
    <div className={styles.backdrop}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Удаление пользователя</h2>
        </header>
        <div className={styles.content}>Вы действительно хотите удалить?</div>
        <footer className={styles.actions}>
          <button className={styled.button} id={props.id} onClick={props.onDelet}>
            Да
          </button>
          <button className={styled.button} onClick={() => props.closeModal()}>Нет</button>
        </footer>
      </Card>
    </div>
    // <>
    // {ReactDom.createPortal(<DeleteOverModal id={props.id} onClick={props.onDelet} onClose={() => props.closeModal()}/>, document.getElementById('delete-modal'))}
    // </>
  );
};
