import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { FaceMesh } from "@mediapipe/face_mesh";

const App = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [emotion, setEmotion] = useState("Detecting...");
  const [eyeDirection, setEyeDirection] = useState("Center");

  useEffect(() => {
    const loadModels = async () => {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceExpressionNet.loadFromUri("/models"),
      ]);
      startVideo();
    };
    loadModels();
    setupMediaPipe();
  }, []);

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setTimeout(detectEmotions, 2000);
      })
      .catch((err) => console.error("Error accessing camera:", err));
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
        setEmotion(maxEmotion);
      } else {
        setEmotion("No face detected");
      }
    } catch (error) {
      console.error("Error detecting emotions:", error);
    }
    requestAnimationFrame(detectEmotions);
  };

  const setupMediaPipe = () => {
    const faceMesh = new FaceMesh({ locateFile: (file) => `/mediapipe/${file}` });
    faceMesh.setOptions({ maxNumFaces: 1, refineLandmarks: true });
    faceMesh.onResults(onResults);
    
    const video = videoRef.current;
    const processFrame = async () => {
      if (video) {
        await faceMesh.send({ image: video });
      }
      requestAnimationFrame(processFrame);
    };
    processFrame();
  };

  const onResults = (results) => {
    if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
      const landmarks = results.multiFaceLandmarks[0];

      // Key points for eyes
      const leftPupil = landmarks[468];  // Pupil of the left eye
      const rightPupil = landmarks[473]; // Pupil of the right eye
      const leftEye = landmarks[130];    // Inner left eye
      const rightEye = landmarks[359];   // Inner right eye
      const nose = landmarks[1];         // Nose tip

      // Vertical movement (Up/Down)
      const topEyelid = landmarks[159].y;
      const bottomEyelid = landmarks[145].y;
      const eyeVerticalCenter = (topEyelid + bottomEyelid) / 2;

      // Horizontal movement (Left/Right)
      const eyeHorizontalCenter = (leftEye.x + rightEye.x) / 2;

      let direction = "Center";

      if (leftPupil.x < eyeHorizontalCenter - 0.02) {
        direction = "Looking Left";
      } else if (rightPupil.x > eyeHorizontalCenter + 0.02) {
        direction = "Looking Right";
      } else if (leftPupil.y < eyeVerticalCenter - 0.02) {
        direction = "Looking Up";
      } else if (leftPupil.y > eyeVerticalCenter + 0.02) {
        direction = "Looking Down";
      }

      setEyeDirection(direction);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Meeting App with Emotion & Eye Tracking</h1>
      <div className="relative">
        <video ref={videoRef} autoPlay muted className="w-full h-auto rounded-lg"></video>
        <canvas ref={canvasRef} className="absolute top-0 left-0" />
      </div>
      <p className="mt-2">Emotion: <span className="font-bold">{emotion}</span></p>
      <p className="mt-2">Eye Direction: <span className="font-bold">{eyeDirection}</span></p>
    </div>
  );
};

export default App;
