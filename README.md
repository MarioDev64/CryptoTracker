# CryptoTracker

CryptoTracker is a web application built using Vite, ReactJS, TypeScript, TailwindCSS, and Flowbite. The app allows users to view daily, weekly, and monthly data for various cryptocurrencies, fetched using the Alpha Vantage API. Users can select different cryptocurrencies and view the data in a paginated table format.

## Features

- **Responsive Design**: The application is fully responsive and works on all device sizes.
- **Cryptocurrency Data**: Fetches data for the top 5 cryptocurrencies.
- **Time Frame Selection**: Users can choose to view daily, weekly, or monthly data.
- **Pagination**: Table pagination is implemented for easier navigation through data.
- **Dropdown Select**: Users can select a cryptocurrency from a dropdown menu to update the data displayed in the table.

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/MarioDev64/CryptoTracker.git
   cd CryptoTracker```

2. **Install the dependencies:**:
  ```bash
  npm install
  # or
  yarn install
  ```

### Set up the environment variables
  ```bash
  VITE_API_KEY=your_alpha_vantage_api_key
  ```

### Running project
  ```bash
  npm run dev
  # or
  yarn dev
  ```
    
Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Contributing
  Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
