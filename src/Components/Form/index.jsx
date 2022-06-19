import { TextField } from "@material-ui/core"

const Form = ({name, inputs})=>{
    
    return(
        <>
           <TextField label="Name" type="text" />
           <TextField label="DAte" type="date" />
            
        </>
    )
}

export default Form