import React, { useState, useCallback } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppointmentScheduler() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [scheduledTime, setScheduledTime] = useState('');

  // Sử dụng useCallback để bảo đảm rằng hàm `scheduleAppointment` không thay đổi mỗi lần component render
  const scheduleAppointment = useCallback(() => {
    if (selectedDate) {
      setScheduledTime(selectedDate.toLocaleString());
    }
  }, [selectedDate]);

  return (
    <div>
      <h2>Đặt lịch hẹn</h2>
      <div>
        <label>Chọn thời gian hẹn:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
        />
        <button onClick={scheduleAppointment}>Đặt lịch hẹn</button>
      </div>
      <div>
        {scheduledTime && (
          <p>Giờ hẹn đã được đặt lúc: {scheduledTime}</p>
        )}
      </div>
    </div>
  );
}

export default AppointmentScheduler;
