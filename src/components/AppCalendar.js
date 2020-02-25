import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Button from "@material-ui/core/Button";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "./Input";
import { TextField } from "@material-ui/core";
const localizer = momentLocalizer(moment);

function AppCalendar() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      title: ""
    }
  );

  const handleInputTitles = event => {
    const newTitle = event.target.value;

    setInputValue({ title: newTitle });
  };

  const [startSlot, setStartSlot] = React.useState();
  const [endSlot, setEndSlot] = React.useState();

  const [events, setEvent] = React.useState([
    {
      id: 20,
      title: "Create new tls appointment",
      start: new Date(2020, 0, 19, 17, 0, 0),
      end: new Date(2020, 0, 19, 18, 30, 0)
    }
  ]);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function createNewEvent() {
    const Title = inputValue.title;
    const startDate = startSlot;
    const endDate = endSlot;
    console.log(`Title : ${Title}`);
    console.log(`start : ${startSlot}`);
    console.log(`end: ${endSlot}`);
    if (Title) {
      setEvent([...events, { Title, startDate, endDate }]);
      setOpen(false);
      setInputValue({ title: "" });
    }
  }
  function handleSelect({ start, end }) {
    setStartSlot(start.toString());
    setEndSlot(end.toString());
    openModal(true);
  }

  return (
    <div className="calendar-wrapper">
      <Dialog
        open={open}
        onClose={closeModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new alert</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please add a new event to the calendar
          </DialogContentText>
          <TextField
            id="basicInput"
            label="Input"
            variant="outlined"
            color="primary"
            onChange={handleInputTitles}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            Cancel
          </Button>
          <Button onClick={createNewEvent} color="primary">
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
        style={{ height: 500 }}
      />
    </div>
  );
}

export default AppCalendar;
