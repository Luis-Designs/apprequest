import { TextField } from "@material-ui/core"
import { DatePicker } from "@material-ui/pickers"
const Form = ({name, inputs})=>{
    
    return(
        <>
           <TextField label="Name" type="text" />
           <DatePicker />
            
        </>
    )
}

export default Form