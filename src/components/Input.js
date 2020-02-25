import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';



const Input = ({handleInputChange}) => {


return(
			<TextField onChange={e => handleInputChange(e)} id="basicInput" label="Input" variant="outlined" color="primary" />

	)

}
export default Input