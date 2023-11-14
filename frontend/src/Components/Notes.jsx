import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ToastUi from "../ui/ToastUi";


const Notes = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [value, onChange] = useState(new Date());

  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const scheduleEmail = () => {
    if (!selectedDate || !selectedTime) {
      setToastMessage("set date and time");
      setShowToast(true);
      return;
    }

    const dateTime = new Date(selectedDate);
    const timeArr = selectedTime.split(':');
    dateTime.setHours(Number(timeArr[0]));
    dateTime.setMinutes(Number(timeArr[1]));

    axios
      .post('https://vaultbackend.onrender.com/api/scheduleEmail', {
        title,
        email,
        message,
        dateTime,
      })
      .then(response => {
        console.log(response.data);
        setToastMessage("email scheduled successfully");
        setShowToast(true);
      })
      .catch(error => {
        console.log(error);
        setToastMessage("there seems to be an error. try again later");
        setShowToast(true);
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '32px' }}>
          <Calendar onChange={onChange} value={value} />
        </div>
        <div style={{ background: '#F5F7FA', borderRadius: '8px', boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)', padding: '32px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Schedule Email</h1>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="datepicker">Date</label>
            <DatePicker
              id="datepicker"
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="timepicker">Time</label>
            <input
              type="time"
              id="timepicker"
              value={selectedTime}
              onChange={e => setSelectedTime(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              style={{ width: '100%', minHeight: '80px' }}
            />
          </div>
          <button
            style={{
              background: '#4CAF50',
              color: '#FFFFFF',
              borderRadius: '4px',
              padding: '8px 16px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              width: '100%',
            }}
            onClick={scheduleEmail}
          >
            Schedule Email
          </button>
        </div>
      </div>
      {showToast && <ToastUi message={toastMessage} setShowToast={setShowToast} />}

    </div>
  );
};

export default Notes;
