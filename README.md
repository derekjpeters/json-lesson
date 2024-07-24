# JSON Lesson 1

This project demonstrates how to work with JSON data in JavaScript and create an interactive web page. The example includes fetching product data from a JSON file and displaying it with a search functionality to filter products dynamically.

## Project Structure
json-lesson/
├── index.html
├── styles.css
├── scripts.js
└── products.json

### Files

- **index.html:** The HTML structure of the web page.
- **styles.css:** The CSS styles for the web page.
- **scripts.js:** The JavaScript file that fetches and displays the JSON data and implements the search functionality.
- **products.json:** The JSON file containing the product data.

## Getting Started

To run this project locally, follow these steps:

### Prerequisites

- Python 3 installed on your system (for running a local server).

### Running the Project

1. Clone the repository or download the project files.

2. Navigate to the project directory.

3. Start a local server:

   ```bash
   python3 -m http.server 5500

# JSON Lesson 2: Profiles and Languages

This project demonstrates how to create profile cards for learners with their favorite programming languages using separate JSON files for learners and languages. It also includes functionality to display language details when the user clicks on a language name.

## Project Structure

Json-lesson-2/
├── index.html
├── styles.css
├── script.js
├── learners.json
├── languages.json


## Prerequisites

- Git
- A modern web browser
- A code editor like VS Code
- A local server setup (optional, but recommended for serving JSON files)

## Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/derekjpeters/json-lesson.git
    cd json-lesson-2
    ```

2. **Add Remote Origin**:
    ```bash
    git remote add origin https://github.com/derekjpeters/json-lesson.git
    ```

3. **Install a Local Server** (optional but recommended):
    - Using `http-server` (Node.js):
      ```bash
      npm install -g http-server
      http-server
      ```
    - Using Python (for Python 3.x):
      ```bash
      python -m http.server
      ```