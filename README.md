# Cricket App README

## Overview

This is a React-based cricket application that provides various functionalities related to cricket data, including ICC player rankings, player statistics, and match results by date.

## Components

### ICCPlayerRanking

This component displays ICC player rankings based on the selected match type (Test, ODI, T20I). It fetches data from the RapidAPI endpoint and renders a table with player rankings.

### PlayerStat

This component allows users to select a player from a predefined list and view their batting or bowling statistics across different formats (Test, ODI, T20I, IPL). It fetches data from the RapidAPI endpoint and displays the statistics in a tabular format.

### ResultsByDate

This component enables users to select a date and view cricket match results for that specific date. It fetches data from the RapidAPI endpoint and presents the results in a table format.

### Navbar

The Navbar component provides navigation links to different sections of the application, including Results by Date, ICC Player Ranking, and Player Stats.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Access the application in your browser at `http://localhost:3000`.

## Dependencies

- React
- React Router DOM
- RapidAPI (for fetching cricket data)
