# Edtech

An advanced **EdTech platform** designed to streamline the learning process, offering seamless user experiences with modern web technologies.

---

## Features

- **User Authentication**: Secure login and registration using JWT.
- **Interactive Learning**: Dynamic and intuitive UI for an enhanced learning experience.
- **Responsive Design**: Fully responsive with Tailwind CSS and PostCSS integration.
- **Backend Integration**: Built with Node.js and Express.js for efficient server-side processing.
- **Database Support**: MongoDB for robust data storage and retrieval.

---

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **Package Manager**: npm

---

## Installation

Follow the steps below to set up the project on your local machine.

### 1. Clone the Repository  
Clone the project repository:
```sh
git clone https://github.com/RamSharma06/Study-Notion.git
```

### 2. Install Dependencies  
Navigate to the project directory and install dependencies for both client and server:
```sh
cd Study-Notion
npm install

cd server
npm install
```

### 3. Set Up Environment Variables  
- Create `.env` files in both the root and `/server` directories.  
- Add the required environment variables (e.g., database connection details, JWT secret).  
- Refer to the `.env.example` files for guidance.

### 4. Start the Development Server  
Run the following command to start both the client and server:
```sh
npm run dev
```

### 5. Access the Application  
Open your browser and visit:  
[`http://localhost:3000`](http://localhost:3000)

---

## Scripts

- **`npm start`**: Starts the production server.  
- **`npm run dev`**: Starts the development server.  
- **`npm run build`**: Builds the production version of the app.

---

## Folder Structure

```
Study-Notion/
├── server/
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── controllers/  # Logic for routes
│   ├── config/       # Configuration files
│   ├── .env.example  # Example environment variables
│   └── ...
├── src/
│   ├── components/   # React components
│   ├── pages/        # Application pages
│   ├── assets/       # Static files (images, CSS, etc.)
│   ├── App.js        # Main app entry point
│   └── ...
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch for your feature/bugfix.
3. Commit your changes and submit a pull request.  
   Ensure proper documentation and test cases are included.

---

## Contact

For any questions or suggestions:  
**Ram Sharma** - [GitHub Profile](https://github.com/RamSharma06)

---


