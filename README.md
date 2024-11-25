# VS Code Project

## Description

This project helps users write code in VS Code and use it inside Webflow. It bundles the code files from the `src` directory using Webpack and serves them using `npx serve`.

Simply copy the line <script src="http://localhost:3000/global.js"></script> to your page settings and publish your page.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```sh
    cd vs-code
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Usage

To bundle the code files from the `src` directory and serve them, run the following command:
```sh
npm run dev