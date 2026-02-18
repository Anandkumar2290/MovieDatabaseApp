# Movie Database Application

A React-based movie database web application that provides an extensive database of available content with multiple pages and global navigation.

## Features

### Navigation
- **Global Navbar**: Persistent navigation with movieDB branding
- **Search Bar**: Search movies across the entire database
- **Navigation Links**: Popular, Top Rated, and Upcoming movies

### Pages

#### 🏠 Popular Movies (Home)
- Grid layout displaying popular movies
- Each movie shows: poster, title, rating, and "View Details" button
- Pagination support for browsing through results

#### ⭐ Top Rated Movies
- Grid layout displaying top-rated movies
- Same card layout with poster, title, rating, and details button
- Pagination support

#### 🎬 Upcoming Movies
- Grid layout displaying upcoming releases
- Consistent card layout with movie information
- Pagination support

#### 📽️ Movie Details
- **Movie Information**: Title, poster, ratings, duration, genre, release date, and overview
- **Cast Details**: Grid of cast members with photos, names, and character names
- Accessed by clicking "View Details" on any movie card

#### 🔍 Search Results
- Displays search results in grid layout
- Shows movies matching the search query
- Same card layout with navigation to details

## How It Works

1. **Browse Movies**: Navigate between Popular, Top Rated, and Upcoming movies using the navbar
2. **Search**: Use the search bar to find specific movies
3. **View Details**: Click "View Details" on any movie to see comprehensive information
4. **Pagination**: Navigate through multiple pages of movie results
5. **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **Frontend**: React.js, React Router
- **API**: The Movie Database (TMDB) API
- **Styling**: CSS3 with responsive design
- **Build Tools**: Create React App, Webpack

## Installation & Running

```bash
# Install dependencies
npm install

# Start development server
NODE_OPTIONS="--openssl-legacy-provider" npm start

# Build for production
NODE_OPTIONS="--openssl-legacy-provider" npm run build
```

## API Integration

Uses TMDB API endpoints for:
- Popular movies
- Top rated movies  
- Upcoming movies
- Movie details
- Cast information
- Search functionality

## Live Demo

[Deploy your application and add the live URL here]

---

**Built with React.js **
