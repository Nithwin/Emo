import React from 'react';

const Participants = ({ participants }) => {
  return (
    <div className="w-1/3 bg-gray-700 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2">Participants</h2>
      <ul>
        {participants.map((participant, index) => (
          <li key={index} className="mb-2">
            {participant}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Participants;
