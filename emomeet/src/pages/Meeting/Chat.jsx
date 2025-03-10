import React from 'react';

const Chat = ({ messages, newMessage, setNewMessage, handleSendMessage }) => {
  return (
    <div className="w-2/3 bg-gray-700 rounded-lg p-4 mr-4">
      <h2 className="text-xl font-bold mb-2">Chat</h2>
      <div className="h-64 overflow-y-scroll mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <p>{msg}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 p-2 rounded-l-lg bg-gray-600 text-white"
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-blue-500 rounded-r-lg hover:bg-blue-600 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
