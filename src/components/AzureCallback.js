import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function AzureCallback() {
  const [status, setStatus] = useState("processing");
  const [params, setParams] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Parse URL parameters
    const searchParams = new URLSearchParams(location.search);
    const hashParams = new URLSearchParams(location.hash.substring(1));

    const allParams = {};

    // Get query parameters
    searchParams.forEach((value, key) => {
      allParams[key] = value;
    });

    // Get hash parameters (for implicit flow)
    hashParams.forEach((value, key) => {
      allParams[key] = value;
    });

    setParams(allParams);

    // Check for authorization code or access token
    if (allParams.code) {
      setStatus("success");
      console.log("Authorization code received:", allParams.code);

      // Here you would typically exchange the code for tokens
      // For now, we'll just log it
    } else if (allParams.access_token) {
      setStatus("success");
      console.log("Access token received:", allParams.access_token);
    } else if (allParams.error) {
      setStatus("error");
      console.error(
        "Error from Azure:",
        allParams.error,
        allParams.error_description
      );
    } else {
      setStatus("no-data");
    }
  }, [location]);

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Azure Callback Handler</h1>

      {status === "processing" && (
        <div className="info-box">
          <p>Processing authentication response...</p>
        </div>
      )}

      {status === "success" && (
        <div className="success">
          <h2>✓ Authentication Successful</h2>
          <p>The callback has been received successfully.</p>
        </div>
      )}

      {status === "error" && (
        <div className="error">
          <h2>✗ Authentication Error</h2>
          <p>
            <strong>Error:</strong> {params.error}
          </p>
          {params.error_description && (
            <p>
              <strong>Description:</strong> {params.error_description}
            </p>
          )}
        </div>
      )}

      {status === "no-data" && (
        <div className="info-box">
          <p>No authentication data received in callback.</p>
        </div>
      )}

      <div className="info-box" style={{ marginTop: "1rem" }}>
        <h3>Received Parameters:</h3>
        {Object.keys(params).length > 0 ? (
          <pre style={{ overflow: "auto", maxHeight: "300px" }}>
            {JSON.stringify(params, null, 2)}
          </pre>
        ) : (
          <p>No parameters received</p>
        )}
      </div>

      <button
        onClick={handleGoHome}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0078d4",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Go to Home
      </button>
    </div>
  );
}

export default AzureCallback;
