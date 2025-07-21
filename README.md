MetaAuth - Decentralized Access Control Protocol
MetaAuth is a next-generation authentication solution designed to secure the decentralized web. It replaces traditional, vulnerable login methods with a robust, multi-factor system anchored to a user's blockchain identity via their MetaMask wallet.

Project Description
The protocol uses a user's MetaMask wallet as the primary key, ensuring sovereign control. For each login, it initiates a multi-factor verification process that includes device registration and a time-sensitive, 4-word login phrase sent to the user's registered email. This layered approach guarantees that only the legitimate owner of a wallet, operating from a recognized device, can gain access. With robust recovery flows and a foundation built on decentralized trust, MetaAuth provides a secure, user-friendly, and resilient access control system for dApps and other Web3 platforms.

Key Features
Primary Authentication via MetaMask: Uses cryptographic signatures to confirm wallet ownership, establishing the user's blockchain address as their core identity.

Multi-Factor Verification:

Device Registration: Binds the user's on-chain identity to a specific, trusted device, preventing access from unknown systems.

Dynamic Login Phrases: For every login attempt, a unique, 4-word phrase is generated and sent to the user's registered email, acting as a powerful second factor of authentication.

Real-time Email Notifications: A secure Node.js backend handles the sending of login phrases and OTPs directly to the user's registered email address.

Secure Recovery Protocols: In the event of a login failure, the user is guided through a secure recovery flow using One-Time Passcodes (OTPs) sent via email.

Zero-Trust Architecture: By combining on-chain identity, device integrity, and secure off-chain communication, MetaAuth ensures that every login request is rigorously vetted.

Technology Stack
Backend
Node.js: JavaScript runtime environment.

Express.js: Web server framework for creating API endpoints.

Nodemailer: Module for sending emails from the server.

Dotenv: Module for managing environment variables (.env file).

Frontend
HTML5 & CSS3: For structure and custom styling.

Tailwind CSS: A utility-first CSS framework for rapid UI development.

JavaScript (ES6+): For client-side logic, state management, and API calls.

MetaMask API (window.ethereum): For wallet interaction and identity verification.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (which includes npm)

Git

MetaMask browser extension

Installation & Setup
Follow these steps to get the project running locally:

Clone the repository:

Bash

git clone https://github.com/401Akashalluri/MetaAuth-Project.git
Navigate to the project directory:

Bash

cd MetaAuth-Project
Install backend dependencies:

Bash

npm install
Create and configure your .env file:

Create a file named .env in the root of the project.

Add your email credentials to this file. See the section below for details.

Start the backend server:

Bash

node server.js
Your server should now be running on http://localhost:3000.

Access the application:

Open your web browser and navigate to http://localhost:3000.

Environment Variables (.env Configuration)
For the email functionality to work, you must provide your own email service credentials.

Create a .env file in the project root with the following content:

# Your email service credentials
# For Gmail, use an "App Password"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-16-digit-gmail-app-password"
Note: To get a Gmail "App Password", you must have 2-Step Verification enabled on your Google Account. You can generate one under Security > App passwords.

How It Works
The user connects their MetaMask wallet to the site.

If it's their first time, they register their email address.

For subsequent logins, the backend sends a unique 4-word phrase to their registered email.

The user enters the phrase to verify their identity.

Upon successful verification, they are redirected to their MetaMask Portfolio page.

License
This project is licensed under the MIT License - see the LICENSE.md file for details.

Contact
Akash Alluri - 7892058401
