import { useState } from "react";
import QRCode from "qrcode";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const [qrCode, setQRCode] = useState("");

  const generateQRCode = async () => {
    try {
      const qrCodeData = await QRCode.toDataURL(text);
      setQRCode(qrCodeData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
      <input
        type="text"
        className="border border-gray-300 p-2 mb-4"
        placeholder="Enter text"
        value={text}
        onChange={handleTextChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={generateQRCode}
      >
        Generate QR Code
      </button>
      <div className="mt-4">{qrCode && <img src={qrCode} alt="QR Code" />}</div>
    </div>
  );
};

export default QRGenerator;
