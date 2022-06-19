import { makeStyles, TextField } from "@material-ui/core"
import { KeyboardDatePicker } from "@material-ui/pickers"
import { useState } from "react"

const useStyles  = makeStyles( theme =>({
    customInput:{
        background: theme.palette.grey[500],
        borderRadius: theme.shape.borderRadius,
        margin: theme.spacing(2)
    }
}))

const Form = ({inputs})=>{
    const classes = useStyles()
    
    const [name, setName] = useState()
    const [date, setDate] = useState()
    
    const _handleChangeName = (event)=>{
        console.log(name)
        setName(event.target.value)
    }

    return(
        <>
           <TextField 
            className={classes.customInput} 
            label="Name" 
            type="text" 
            data-input='testTony' 
            onChange={_handleChangeName}
            value={name}
            />
           <KeyboardDatePicker
            className={classes.customInput} 
            InputProps={{
                inputProps: {
                  inputMode: 'numeric',
                },
              }}
            onChange={setDate}
            value={date}
            />
            
        </>
    )
}

export default Form