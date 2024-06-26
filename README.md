# ToDo App

A simple and efficient ToDo application built with React, Firebase, and TypeScript.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Firebase Auth)
- Create, Read, Update, Delete (CRUD) ToDos
- Real-time synchronization with Firebase Firestore
- Responsive design
- Type-safe code with TypeScript

## Installation

### Prerequisites

- Node.js (>= 16)
- npm or yarn

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/miken719/Todo-typescript.git
    ```

2. Navigate to the project directory:
    ```bash
    cd todo-app
    ```

3. Install the dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

## Configuration

1. Create a Firebase project and setup Firestore and Authentication.

2. Create a `.env` file in the root of the project and add your Firebase configuration:

    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

## Usage

### Running the App

To start the development server, run:

```bash
npm start
# or
yarn start
