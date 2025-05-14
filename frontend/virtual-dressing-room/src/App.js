// App.js
import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import ClothingUploader from "./components/ClothingUploader";

import TryOnPreview from "./components/TryOnPreview";
import Header from "./components/Header";
import CameraCapture from "./components/CameraCapture";


function App() {
  const [userImage, setUserImage] = useState(null);
  const [mode, setMode] = useState("link"); // "link" or "scan"
  const [clothingImage, setClothingImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-4 max-w-3xl mx-auto">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setMode("link")}
            className={`px-4 py-2 rounded ${mode === "link" ? "bg-blue-600 text-white" : "bg-white border"}`}
          >
            Link-Based Try-On
          </button>
          <button
            onClick={() => setMode("scan")}
            className={`px-4 py-2 rounded ${mode === "scan" ? "bg-blue-600 text-white" : "bg-white border"}`}
          >
            RFID/QR Scan Try-On
          </button>
        </div>

        <ImageUploader onImageSelect={setUserImage} />
        <ClothingUploader mode={mode} setClothingImage={setClothingImage} />

        <TryOnPreview image={userImage} clothing={clothingImage} />
      </main>
    </div>
  );
}

export default App;
