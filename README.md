# Minichef

Minichef is a project that integrates with ChatGPT to function as a cookbook. Users can send a message, and Minichef will respond with five recipes. Additionally, the project includes functionality to store this data in an SQLite database.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [ChatGPT Integration](#chatgpt-integration)
  - [SQLite Database](#sqlite-database)
- [Contributing](#contributing)
- [License](#license)

## Overview

Minichef is designed to provide users with quick and diverse recipe suggestions based on their input. Leveraging the power of ChatGPT, users can send a message, and Minichef will generate and return five recipes.

## Features

- **ChatGPT Integration**: Seamless integration with ChatGPT for recipe suggestions.
- **Recipe Storage**: Capability to store recipe data in an SQLite database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following prerequisites installed:

- Node.js
- npm (Node Package Manager)
- yarn
- SQLite

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/minichef.git
   cd minichef
   ```

2. Install dependencies:

   ```bash
   yarn add
   ```

3. Install dependencies:

    - Obtain a ChatGPT API key from OpenAI.
    - Set up your environment variables:

        ```bash
        export OPENAI_API_KEY=your-api-key
        ```

4. Start the Minichef server:

    ```bash
    npm start
    ```

### SQLite Database

To enable SQLite database storage, ensure you have SQLite installed. Minichef will automatically create a database file (minichef.db) on startup.

To customize the database configuration, modify the config.js file.

### License

This project is licensed under the MIT License.
