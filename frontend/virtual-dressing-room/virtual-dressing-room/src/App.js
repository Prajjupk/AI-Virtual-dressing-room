import { useState } from "react";
import CameraCapture from "./components/CameraCapture";
import TryOnPreview from "./components/TryOnPreview";
import Header from "./components/Header";

function App() {
  const [step, setStep] = useState(1);
  const [userImage, setUserImage] = useState(null);
  const [clothingImage, setClothingImage] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="p-6 flex flex-col items-center space-y-6">
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold text-gray-700">Step 1: Take Your Photo</h2>
            <CameraCapture
              onCapture={(img) => {
                setUserImage(img);
                setStep(2);
              }}
            />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold text-gray-700">Step 2: Upload Clothing Image</h2>
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setClothingImage(URL.createObjectURL(e.target.files[0]))
              }
              className="mb-4"
            />
            <TryOnPreview image={userImage} clothing={clothingImage} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
