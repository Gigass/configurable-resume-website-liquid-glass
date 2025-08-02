# My Responsive Portfolio Website

This is a modern, fully responsive portfolio website built with Vue 3, Vite, and TypeScript. It features a unique "liquid glass" UI effect and is designed to provide an excellent viewing experience on both desktop and mobile devices.

## Core Features

- **Fully Responsive**: Adapts seamlessly to various screen sizes, from large desktop monitors to mobile phones.
- **Liquid Glass UI**: A unique and visually appealing user interface with a frosted glass effect.
- **Dynamic Content**: Site data is loaded from a `sitedata.json` file, making it easy to update project information, skills, and contact details.
- **Interactive Experience**: Features smooth page transitions, animated carousels, and interactive project cards.
- **Modern Tech Stack**: Built with the latest web technologies including Vue 3 (Composition API), Vite, and TypeScript.

## Project Structure

The project is organized logically to separate concerns:

- `src/views`: Contains the main page components (`HomeView`, `PortfolioView`, etc.).
- `src/components`: For reusable smaller components.
- `src/stores`: Manages global state, such as site data, using a simple `ref`-based store.
- `src/assets`: Holds all static assets like CSS, images, and fonts.
- `public/data`: Contains the `sitedata.json` file for easy content management.

## Screenshots

Here are some previews of the desktop version:

| Home Page | Open Source Projects |
| :---: | :---: |
| ![Home Page Screenshot 1](public/screenshots/SCR-home.png) | ![Open Source Projects Screenshot](public/screenshots/SCR-opensource.png) |

| Project Showcase | Full-Screen Carousel |
| :---: | :---: |
| ![Project Showcase Screenshot](public/screenshots/SCR-project.png) | ![Home Page Screenshot 2](public/screenshots/SCR-home2.png) |


## Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/mywebsite.git
   ```
2. Navigate to the project directory:
   ```sh
   cd mywebsite
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Development Server

To run the development server with hot-reloading:
```sh
npm run dev
```
The application will be available at `http://localhost:5173`.

### Build for Production

To compile and minify the application for production:
```sh
npm run build
```
The output files will be in the `dist/` directory.

### Linting

To lint and format the code:
```sh
npm run lint
```
