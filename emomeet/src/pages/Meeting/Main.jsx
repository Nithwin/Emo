import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { FiMic, FiMicOff, FiVideo, FiVideoOff } from "react-icons/fi";
import { MdOutlineScreenShare, MdOutlineStopScreenShare, MdOutlineCommentsDisabled, MdOutlineInsertComment } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

const Main = () => {
  const [isMicOn, setIsMicOn] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isCommentOn, setIsCommentOn] = useState(false);
  const [emotion, setEmotion] = useState("Detecting...");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const screenStreamRef = useRef(null);

  // Dummy data for duplicate videos
  const duplicateVideos = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    name: `Participant ${index + 1}`,
  }));

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
      faceapi.nets.faceExpressionNet.loadFromUri("/models"),
    ]);
  };

  const toggleVideo = async () => {
    if (isVideoOn) {
      stopVideoStream();
    } else {
      startVideo();
    }
    setIsVideoOn(!isVideoOn);
  };

  const toggleMic = () => {
    if (mediaStreamRef.current) {
      const audioTrack = mediaStreamRef.current.getAudioTracks()[0];
      if (audioTrack) audioTrack.enabled = !audioTrack.enabled;
    }
    setIsMicOn(!isMicOn);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        mediaStreamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setTimeout(detectEmotions, 2000);
      })
      .catch((err) => console.error("Error accessing camera:", err));
  };

  const stopVideoStream = () => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
      mediaStreamRef.current = null;
      if (videoRef.current) videoRef.current.srcObject = null;
    }
  };

  const toggleScreenShare = async () => {
    if (isScreenSharing) {
      stopScreenSharing();
    } else {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        screenStreamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream; // Set video to screen share
        }

        stream.getVideoTracks()[0].onended = () => stopScreenSharing(); // Stop when user stops sharing

        setIsScreenSharing(true); // Update state after setting the stream
      } catch (error) {
        console.error("Error starting screen share:", error);
      }
    }
  };

  const stopScreenSharing = () => {
    if (screenStreamRef.current) {
      screenStreamRef.current.getTracks().forEach((track) => track.stop());
      screenStreamRef.current = null;
    }

    if (mediaStreamRef.current) {
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStreamRef.current; // Restore camera video after stopping share
      }
    }
    setIsScreenSharing(false);
  };

  const emotionToEmoji = {
    happy: "😊",
    sad: "😢",
    angry: "😠",
    surprised: "😮",
    fearful: "😨",
    disgusted: "🤢",
    neutral: "😐",
  };

  const detectEmotions = async () => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    try {
      const detections = await faceapi
        .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections.length > 0) {
        const expressions = detections[0].expressions;
        const maxEmotion = Object.keys(expressions).reduce((a, b) =>
          expressions[a] > expressions[b] ? a : b
        );
        setEmotion(emotionToEmoji[maxEmotion] || "🤔"); // Use emoji or default to "🤔"
      } else {
        setEmotion("❓"); // No face detected
      }
    } catch (error) {
      console.error("Error detecting emotions:", error);
    }
    requestAnimationFrame(detectEmotions);
  };

  return (
    <div className=''>
      <div className='grid grid-cols-12 grid-rows-12 gap-4 min-h-[90vh] p-2'>
        {/* Video Section */}
        <div className='col-span-9 row-span-10 relative'>
          <div className='grid grid-cols-7 grid-rows-5 h-full w-full gap-2 relative max-h-[70vh]'>
            {/* Main Video + Detection */}
            <div className='col-span-5 border border-gray-500 rounded-2xl row-span-5 relative overflow-hidden flex items-center justify-center'>
              {isVideoOn || isScreenSharing ? (
                <video ref={videoRef} autoPlay muted className="w-full h-full object-cover rounded-2xl"></video>
              ) : (
                <div className="w-full h-full bg-black flex items-center justify-center rounded-2xl">
                  <p className="text-white text-lg font-semibold">Video Off</p>
                </div>
              )}
              <canvas ref={canvasRef} className="absolute top-0 left-0" />
              {isVideoOn && (
                <div className="absolute bottom-3 left-3 bg-gray-900 bg-opacity-60 text-white p-2 rounded-md">
                  <p>Emotion: <span className="font-bold">{emotion}</span></p>
                </div>
              )}
            </div>

            {/* Subgrid Videos */}
            <div className='col-span-2 border border-gray-500 rounded-2xl row-span-5 overflow-y-auto '>
              <div className="flex flex-col gap-2 p-2 overflow-y-auto">
                {duplicateVideos.map((video) => (
                  <div key={video.id}>
                    {isVideoOn || isScreenSharing ? (
                      <div className="relative border border-gray-300 rounded-lg overflow-hidden min-h-[10rem]">
                        <video
                          autoPlay
                          muted
                          className="w-full h-24 object-cover"
                          src={mediaStreamRef.current ? mediaStreamRef.current : undefined} // Use the main stream or a placeholder
                        />
                        <p className="absolute bottom-1 left-1 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded-full">
                          {video.name}
                        </p>
                      </div>
                    ) : (
                      <div className="w-full h-full bg-black flex items-center justify-center rounded-2xl min-h-[10rem] relative">
                        <p className="absolute bottom-1 left-1 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded-full">
                          {video.name}
                        </p>
                        <p className="text-white text-lg font-semibold">Video Off</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Chat/Sidebar Section */}
        {isCommentOn && (
          <div className='col-span-3 border border-gray-500 rounded-2xl row-span-12 p-4'>
            <div className="flex flex-col h-full">
              {/* Chat Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Chat</h2>
                <button onClick={() => setIsCommentOn(false)} className="text-gray-500 hover:text-gray-700">
                  ✕
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto mb-4">
                <div className="space-y-2">
                  {/* Example Chat Messages */}
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <p className="text-sm"><strong>Participant 1:</strong> Hello everyone!</p>
                  </div>
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <p className="text-sm"><strong>You:</strong> Hi there!</p>
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                />
                <button className="bg-blue-500 text-white p-2 rounded-lg">Send</button>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className='col-span-9 bg-white border border-gray-500 rounded-2xl row-span-2'>
          <div className='flex-1 flex justify-center items-center gap-7 h-full'>
            {/* Toggle Mic */}
            <button onClick={toggleMic} className='bg-lightblue rounded-full p-4'>
              {isMicOn ? <FiMic className='size-10 text-white' /> : <FiMicOff className='size-8 text-white' />}
            </button>

            {/* Toggle Video */}
            <button onClick={toggleVideo} className='bg-lightblue rounded-full p-4'>
              {isVideoOn ? <FiVideo className='size-10 text-white' /> : <FiVideoOff className='size-8 text-white' />}
            </button>

            {/* Toggle Screen Share */}
            <button onClick={toggleScreenShare} className='bg-darkblue rounded-full p-4'>
              {isScreenSharing ? <MdOutlineScreenShare className='size-8 text-white' /> : <MdOutlineStopScreenShare className='size-10 text-white' />}
            </button>

            {/* Toggle Comments */}
            <button onClick={() => setIsCommentOn(!isCommentOn)} className='bg-lightblue rounded-full p-4'>
              {isCommentOn ? <MdOutlineInsertComment className='size-10 text-white' /> : <MdOutlineCommentsDisabled className='size-8 text-white' />}
            </button>

            {/* Exit Button */}
            <button className='bg-red-600 rounded-full p-4'>
              <IoExitOutline className='size-8 text-white' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;