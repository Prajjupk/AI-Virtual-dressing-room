import { useRef, useState } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 400,
  height: 480,
  facingMode: "user", // front camera
};

function CameraCapture({ onCapture }) {
  const webcamRef = useRef(null);
  const [captured, setCaptured] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCaptured(imageSrc);
    onCapture(imageSrc); // Pass to parent
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {!captured && (
        <>
          <Webcam
            audio={false}
            height={480}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
            videoConstraints={videoConstraints}
            className="rounded shadow"
          />
          <button onClick={capture} className="bg-green-600 text-white px-4 py-2 rounded">
            📸 Take Photo
          </button>
        </>
      )}

      {captured && (
        <>
          <img src={captured} alt="Captured" className="w-64 rounded shadow" />
          <button onClick={() => setCaptured(null)} className="text-blue-600 underline">
            Retake Photo
          </button>
        </>
      )}
    </div>
  );
}

export default CameraCapture;
