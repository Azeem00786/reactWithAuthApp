import { List , ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {db} from '../firebase.js';
import { doc, deleteDoc } from "firebase/firestore";
import classes from './todo.module.css'
const Todo=(props)=>{
    
    
    const deleteTodoHandler=()=>{
        deleteDoc(doc(db,'todos',props.arr.id))
        
    }
return (
<List className={classes.todo__list}>
<ListItem>
<ListItemAvatar />
<ListItemText primary={props.arr.item.todo} secondary={props.arr.item.todo} />
</ListItem>
<DeleteIcon fontSize="large" style={{"opacity": "0,7", "cursor": "pointer"}} onClick={deleteTodoHandler} />

</List>
)
};
export default Todo;