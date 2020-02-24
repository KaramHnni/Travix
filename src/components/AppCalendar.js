import React ,{useState, useReducer} from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Button from '@material-ui/core/Button';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from './Input'
const localizer = momentLocalizer(moment)

function AppCalendar(){

  const [inputValue, setInputValue] = React.useReducer(

    (state , newState) => ({...state, ...newState}),{
      title: "",
    }
  );

  const handleInputTitles = event => {

    const newTitle = event.target.value;

    setInputValue({ title : newTitle})

  }

  const [slotDate , setSlotDate] = React.useState({
    startSlot : "" , 
    endSlot : ""
  })


    
  const handleSlotDate = (start , end) => {

      console.log(start)
      setSlotDate({startSlot : start , endSlot: end})
  }
    
 
  const [events , setEvent] = React.useState([{
    id: 20,
    title: 'Create new tls appointment',
    start: new Date(2020, 0, 19, 17, 0, 0),
    end: new Date(2020, 0, 19, 18, 30, 0),
      }]);

  const [open, setOpen] = React.useState(false);


  function openModal() {

    setOpen(true);  
  }

  function closeModal(){
    setOpen(false);  

  }


  function createNewEvent(){
    const Title = inputValue.title;
    const startDate = slotDate.start
    const endDate = slotDate.end;
    console.log(`Title : ${Title} , start : ${startDate} , end: ${endDate}`)
    if(Title){
            setEvent([...events ,{Title,startDate,endDate}]);
            setOpen(false)
            setInputValue({title : ""});
    }
  }
    function handleSelect({start ,end}){
      openModal(true); 
      handleSlotDate(start,end)
      createNewEvent(inputValue.title) 
      
      }

   

      return (
      <div className="calendar-wrapper">
      <Dialog open={open} onClose={closeModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a new alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add a new event to the calendar
          </DialogContentText>
          <Input handleInputChange={handleInputTitles}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSelect} color="primary">
            Add event
          </Button>
        </DialogActions>
      </Dialog>
        <Calendar
         selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelect}
          onSelectSlot={handleSelect}
          style={{height: 500}}
        />
      </div>
    );
    }

export default AppCalendar;