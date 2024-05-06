import Image from "next/image";
import React, { useState } from "react";

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Initialize as null

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <h1>Image Uploader</h1>
      <input type='file' accept='image/*' onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h2>Selected Image:</h2>
          <Image
            src={selectedImage}
            alt='Selected'
            style={{ maxWidth: "100%" }}
          />
        </div>
      )}
    </div>
  );
}
