# 💪 Conquer - Fitness Exercise App

<div align="center">

![Conquer Logo](src/assets/images/Logo.png)

**A modern fitness application that helps users discover exercises with detailed instructions, video tutorials, and personalized recommendations.**

[![GitHub stars](https://img.shields.io/github/stars/Vivek0000singh/Conquer?style=social)](https://github.com/Vivek0000singh/Conquer/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Vivek0000singh/Conquer?style=social)](https://github.com/Vivek0000singh/Conquer/network)
[![GitHub issues](https://img.shields.io/github/issues/Vivek0000singh/Conquer)](https://github.com/Vivek0000singh/Conquer/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-blue)](https://your-netlify-site.netlify.app)
[![React](https://img.shields.io/badge/React-18.1.0-blue)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.8.3-purple)](https://mui.com/)

</div>

## 🎯 Features

### 🏋️ **Exercise Discovery**
- **1000+ Exercises**: Comprehensive exercise database with detailed information
- **Smart Search**: Find exercises by name, body part, or equipment
- **Category Filtering**: Browse exercises by target muscle groups
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎥 **Video Integration**
- **YouTube Tutorials**: Integrated exercise demonstration videos
- **Real-time Search**: Dynamic video content for each exercise
- **Quality Content**: Curated exercise videos from fitness experts

### 📊 **Smart Recommendations**
- **Similar Exercises**: Find alternative exercises targeting the same muscles
- **Equipment-based Suggestions**: Discover exercises using available equipment
- **Target Muscle Focus**: Get exercises for specific muscle groups

### 🎨 **Modern UI/UX**
- **Material-UI Design**: Clean, professional interface
- **Smooth Animations**: Engaging user interactions
- **Pagination System**: Easy navigation through large exercise collections
- **Loading States**: Smooth user experience during data fetching

## 🛠️ Tech Stack

### Frontend
- **React 18.1.0** - Modern functional components with hooks
- **React Router 6.3.0** - Client-side routing
- **Material-UI 5.8.3** - UI component library
- **React Scripts 5.0.1** - Build tooling

### APIs & Services
- **RapidAPI Exercise Database** - Comprehensive exercise data
- **YouTube Search API** - Exercise video integration
- **Environment Variables** - Secure API key management

### Development Tools
- **Create React App** - Project scaffolding
- **ESLint** - Code quality enforcement
- **Git** - Version control

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn package manager
- RapidAPI account for API keys

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Vivek0000singh/Conquer.git
   cd Conquer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create a .env file in the root directory
   REACT_APP_RAPID_API_KEY=your_rapidapi_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Detail.js       # Exercise detail display
│   ├── Exercises.js    # Exercise listing with pagination
│   ├── ExerciseCard.js # Individual exercise card
│   ├── SearchExercises.js # Search and filter functionality
│   └── ...             # Other UI components
├── pages/              # Route-level components
│   ├── Home.js         # Main dashboard
│   └── ExerciseDetail.js # Exercise detail page
├── utils/              # Utility functions
│   └── fetchData.js    # API integration utilities
└── assets/             # Static assets
    ├── images/         # Images and icons
    └── icons/          # UI icons
```

## 🔧 API Integration

### Exercise Database API
```javascript
// Fetch all exercises
GET https://exercisedb.p.rapidapi.com/exercises?limit=1000

// Fetch by body part
GET https://exercisedb.p.rapidapi.com/exercises/bodyPart/{bodyPart}

// Fetch specific exercise
GET https://exercisedb.p.rapidapi.com/exercises/exercise/{id}
```

### YouTube Search API
```javascript
// Search exercise videos
GET https://youtube-search-and-download.p.rapidapi.com/search?query={exerciseName} exercise
```

## 🎯 Key Features Explained

### Pagination System
- **12 exercises per page** for optimal viewing
- **Smooth scrolling** between pages
- **Responsive pagination** controls

### State Management
- **Local state** with React hooks
- **Prop drilling** for component communication
- **Efficient data fetching** with useEffect

### Performance Optimizations
- **Lazy loading** for images
- **Conditional rendering** for better UX
- **API response caching** considerations

## 🌟 Interview Highlights

### Technical Challenges Solved
1. **API Integration**: Successfully integrated multiple external APIs with different response formats
2. **State Management**: Implemented complex state handling for exercise data, videos, and recommendations
3. **Responsive Design**: Created a mobile-first responsive layout using Material-UI
4. **Performance**: Optimized image loading and API calls for better user experience

### Key Learning Outcomes
- **React Hooks Mastery**: useState, useEffect, and custom hooks
- **API Integration**: Working with RESTful APIs and handling async operations
- **Component Architecture**: Building reusable, maintainable components
- **Modern JavaScript**: ES6+ features and async/await patterns

## 📱 Live Demo

Experience the application live: **[Conquer Fitness App](https://your-netlify-site.netlify.app)**

### Features to Try:
- 🔍 **Search** for specific exercises
- 🏋️ **Filter** by body part
- 🎥 **Watch** exercise demonstration videos
- 📄 **Browse** through multiple pages of exercises
- 📱 **Test** responsive design on different screen sizes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **RapidAPI** for providing the exercise database API
- **Material-UI Team** for the excellent UI component library
- **React Team** for the amazing frontend framework

## 📞 Contact

Created by **Vivek Singh** - [GitHub](https://github.com/Vivek0000singh) | [Portfolio](your-portfolio-link)

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️ for the fitness community

</div>
