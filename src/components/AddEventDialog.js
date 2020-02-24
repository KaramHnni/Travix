import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


const AddEventDialog = () => {


		const [open, setOpen] = React.useState(false);

	function closeModal(){
    	setOpen(false);  
  		}

		return ( 

		<div>
		<Dialog open={open} onClose={closeModal} aria-labelledby="simple-dialog-title">
            <DialogTitle id="simple-dialog-title">Add new title</DialogTitle>
      </Dialog>
      </div>

			)

}

export default AddEventDialog