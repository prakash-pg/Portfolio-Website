import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1998-12-11T09:24:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Vellore',
  },
  {
    key: 'location',
    label: 'Current state',
    value: 'Tamilnadu',
  },
  {
    key: 'location',
    label: 'Current country',
    value: 'India',
  },
  {
    key: 'Info',
    label: 'DOB',
    value: '11-12-1998',
  },
  {
    key: 'Info',
    label: 'Symposium',
    value: 'Won First Price for Real Hunter',
  },
  {
    key: 'Info',
    label: 'Hobbies',
    value: 'Playing Cricket , Watching Movies',
  },
  {
    key: 'Info',
    label: 'Blood Group',
    value: 'O+',
  },
];

export default data;
