import styles from "./UsersList.module.css";
import Card from "../UI/Card";
import Button from "./ButtonDelete";
// import { Button } from './../UI/Button';


export const UsersList = (props) => {
 
function Delet(e){
   
  props.onDelet(
    props.users.filter((el) => {
      if(el.id !== e.target.id){
        return[el]
      }
    })
  )

}
  
  return (
   
    <Card className={styles.users}>

      <ul>
        {props.users.map((user) => (
          <li key={user.id}  >
            {user.name}:{user.age} years old
            {/* <Button  onClick={()=>{setModalOp(true)}} >Delete</Button> */}
            <Button Delet id={user.id} onDelet={Delet} />
            
          </li>
        ))}
      </ul>
    </Card>
  
  );
};
