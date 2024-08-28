// components/Greeting.tsx
import React from 'react';

const Greeting: React.FC = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning ';
    if (hour < 18) return 'Good Afternoon ';
    return 'Good Evening ';
  };

  return (
    <div className="flex justify-center items-center m-3">
      <h1 className="text-4xl font-semibold text-[#1e1e1f]">{getGreeting()}</h1>
    </div>
  );
};

export default Greeting;
