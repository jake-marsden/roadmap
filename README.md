# AI Roadmap Website

This project is a static front-end website created to showcase the AI Roadmap. It is built with HTML, CSS, and vanilla JavaScript.

## Getting Started

To run this project locally, you will need to have [Node.js](https://nodejs.org/) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    This project uses `live-server` to provide live-reloading functionality. There are no other dependencies to install.

### Running the Application

To start the local development server, run the following command from the root of the project directory:

```bash
npx browser-sync start --server --files "**/*" --port 8000 --no-notify
```

This will start a local server, typically at `http://localhost:8000`, and will automatically open the page in your default web browser. The server will watch for file changes and automatically reload the page whenever you save a file.

## Project Structure

The project is organized into the following directories:

-   `components/`: Contains reusable HTML components like the header and footer.
-   `css/`: Contains the modular CSS stylesheets.
    -   `style.css`: The main stylesheet that imports the others.
    -   `header.css`: Styles for the header component.
    -   `footer.css`: Styles for the footer component.
    -   `main.css`: Styles for the main content sections of the page.
-   `js/`: Contains the JavaScript files.
    -   `script.js`: Handles dynamic loading of HTML components.
-   `media/`: Contains all static assets like images and GIFs.
-   `index.html`: The main entry point of the application.
-   `README.md`: This file. 