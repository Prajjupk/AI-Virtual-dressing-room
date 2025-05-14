import React from "react";

function ImageUploader({ onImageSelect }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageSelect(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <input type="file" accept="image/*" onChange={handleImageUpload} />
    </div>
  );
}

export default ImageUploader;