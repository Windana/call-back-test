# Azure Callback React App

A simple React application with an Azure AD callback route.

## Setup

1. Install dependencies:

```
npm install
```

2. Start the development server:

```
npm start
```

The app will run on `http://localhost:3000`

## Azure AD Configuration

Configure the following redirect URI in your Azure AD app registration:

- `http://localhost:3000/callback` (for development)
- `https://your-domain.com/callback` (for production)

## Routes

- `/` - Home page
- `/callback` - Azure AD callback handler

The callback route will automatically parse and display:

- Authorization codes (authorization code flow)
- Access tokens (implicit flow)
- Error messages
- All URL parameters received from Azure
