import { useState } from "react";
import QrReader from "react-qr-reader";

const QRReader = () => {
  const [data, setData] = useState("No result");
  const handleErrorWebCam = (error) => {
    console.log(error);
  };
  const handleScanWebCam = (result) => {
    if (result) {
      setData(result);
    }
  };
  return (
    <div className="w-[30rem] relative">
      <QrReader
        delay={300}
        style={{ width: "100%" }}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
        constraints={{
          facingMode: "environment",
        }}
      />
      <p>{data}</p>
    </div>
  );
};

export default QRReader;
