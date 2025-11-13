import React from "react";

function Home() {
  return (
    <div className="container">
      <h1>Azure Callback App</h1>
      <p>This is a simple React app with an Azure AD callback route.</p>
      <div className="info-box">
        <p>
          <strong>Callback URL:</strong> {window.location.origin}/callback
        </p>
        <p>
          Configure this URL in your Azure AD app registration as the redirect
          URI.
        </p>
      </div>
    </div>
  );
}

export default Home;
