import { useEffect, useState } from "react";

function ShowFlash({ flashData }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {

    if (flashData?.message) {
      setVisible(true);
    }

  }, [flashData?.id]);

  if (!visible) return null;

  return (
    <>
      {flashData.type === "error" ? (
        <div className="container mt-4">
          <div className="row">
            <div
              className={`alert alert-danger col-6 offset-3 d-flex justify-content-between align-items-center`}
              role="alert"
            >
              <p className="mb-0">{flashData.message}</p>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setVisible(false)}
              ></button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container mt-4">
          <div className="row">
            <div
              className={`alert alert-success col-6 offset-3 d-flex justify-content-between align-items-center`}
              role="alert"
            >
              <p className="mb-0">{flashData.message}</p>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setVisible(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowFlash;
