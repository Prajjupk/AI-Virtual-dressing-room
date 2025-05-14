// components/TryOnPreview.js
function TryOnPreview({ image, clothing }) {
  return (
    <div className="mt-6">
      {image ? (
        <div className="relative border bg-white shadow p-4 w-fit">
          <img src={image} alt="User" className="w-64 rounded" />
          {clothing && (
            <img
              src={clothing}
              alt="Clothing"
              className="absolute top-1/4 left-1/2 w-32 -translate-x-1/2"
              style={{ opacity: 0.9 }}
            />
          )}
        </div>
      ) : (
        <p className="text-gray-600">Upload a user photo to try on clothes</p>
      )}
    </div>
  );
}

export default TryOnPreview;
