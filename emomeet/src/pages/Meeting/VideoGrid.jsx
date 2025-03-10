import React from 'react';

const VideoGrid = ({ cameraOn, videoRef, participants, participantVideoRefs }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="relative bg-black rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          className="w-full h-full"
        ></video>
        {!cameraOn && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75">
            <p className="text-lg">Camera is off</p>
          </div>
        )}
      </div>
      {participants.map((participant, index) => (
        <div key={index} className="relative bg-black rounded-lg overflow-hidden">
          <video
            ref={(el) => (participantVideoRefs.current[index] = el)}
            autoPlay
            muted
            className="w-full h-full"
          ></video>
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-2">
            <p>{participant}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
