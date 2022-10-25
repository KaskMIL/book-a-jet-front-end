import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import postReservation from '../../../redux/reservation/reservationAPI';
import 'react-datepicker/dist/react-datepicker.css';

function ReservationForm() {
  // Simulates jets state:
  const jets = [
    {
      jet_id: 1,
      jet_name: 'Jet-1',
    },
    {
      jet_id: 2,
      jet_name: 'Jet-2',
    },
    {
      jet_id: 3,
      jet_name: 'Jet-3',
    },
    {
      jet_id: 4,
      jet_name: 'Jet-4',
    },
  ];

  const [jetState, setJet] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [finishDate, setFinishDate] = useState('');
  const [cityOrigin, setCity] = useState({ city: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleJet = (jet) => {
    setJet(parseInt(jet.target.value, 10));
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (jetState === '' || finishDate === '' || cityOrigin === '') {
      setMessage('Fill all  the parameters!');
    } else {
      const reservation = {
        jet_id: jetState,
        starting_day: startDate.toDateString(),
        finish_day: finishDate.toDateString(),
        city: cityOrigin.city,
      };
      await postReservation(reservation);
      navigate('/');
    }
  };

  const handleStartDate = (date) => {
    setStartDate(date);
    setFinishDate(date);
  };

  const handleFinishDate = (date) => {
    setFinishDate(date);
  };

  const handleCity = (e) => {
    setCity({ ...cityOrigin, city: e.target.value });
  };

  return (
    <>
      <h2>Reservation Form</h2>
      {message ? (
        <div>{message}</div>
      ) : null}
      <form onSubmit={handleForm}>
        {/* jet input */}
        <label htmlFor="jet-select">
          Select a jet
          <select id="jet-select" value={jetState} onChange={(e) => handleJet(e)}>
            {jets.map((jet) => <option key={`jet-${jet.jet_id}`} value={jet.jet_id}>{jet.jet_name}</option>)}
          </select>
        </label>
        {/* starting date */}
        <div>
          Select a starting date
          <DatePicker
            id="startDate"
            selected={startDate}
            onChange={(date) => handleStartDate(date)}
          />
        </div>
        {/* finish date */}
        <div>
          Select finish date
          <DatePicker
            id="finishDate"
            selected={finishDate}
            onChange={(date) => handleFinishDate(date)}
          />
        </div>
        <div>
          <label htmlFor="city">
            Add city:
            <input
              id="city"
              type="text"
              value={cityOrigin.city}
              onChange={(e) => handleCity(e)}
            />
          </label>
        </div>

        <button type="submit">Reserve</button>
      </form>
    </>
  );
}

export default ReservationForm;