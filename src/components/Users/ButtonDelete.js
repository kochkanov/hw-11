import { DeleteModal } from "./DeleteModal";
import { useState } from "react";
import styles from "./ButtonDelete.module.css";
// import { Button } from "../UI/Button";

function ButtonDelete(props) {
  const [modalOp, setModalOp] = useState(false);

  return (
    <div>
      {modalOp && (
        <DeleteModal
          closeModal={setModalOp}
          onDelet={props.onDelet}
          id={props.id}
        />
      )}

      <button className={styles.button} onClick={() => setModalOp(true)}>
        Delete
      </button>
    </div>
  );
}
export default ButtonDelete;
