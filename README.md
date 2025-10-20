# Student Learning Situation Statistics (SLSS)

A comprehensive browser-based classroom management application designed for educators to efficiently track student performance, manage course schedules, and document classroom observations with a modern, responsive interface.

## 📋 Overview
SLSS is a powerful yet lightweight web application that runs entirely in the browser without requiring server setup or internet connectivity once loaded. It provides teachers with tools to manage classroom data, track student progress, and generate reports while ensuring data persistence through local storage mechanisms.

## ✨ Key Features

### Classroom Management
- **Class Configuration**: Customize class name, grade level, and class motto
- **Student Roster Management**: Define student ID ranges with exclusion options
- **Grade-Specific Subject Management**: Automatic subject configuration based on selected grade (Junior 1-3)

### Academic Performance Tracking
- **Weekly Schedule Management**: Create and manage courses across all days of the week
- **Performance Evaluation**: Rate classroom engagement using a 5-star system
- **Poor Student Identification**: Track and manage students with below-par performance
- **Quick Reason Selection**: Pre-defined reasons for classroom notes and performance issues
- **Class Notes Management**: Document observations and improvement suggestions

### Data Management
- **Excel Export**: Generate comprehensive reports including course performance and homework submission data
- **Complete Data Export**: Save entire application state for backup purposes
- **Local Data Persistence**: Automatic saving to IndexedDB for offline availability
- **PWA Support**: Installable to devices for native-like experience

### User Experience
- **Modern UI**: Glassmorphism design with smooth animations and transitions
- **Responsive Design**: Optimized for use across mobile, tablet, and desktop devices
- **Offline Functionality**: Full operation capabilities without internet connection
- **Real-time Updates**: Instant UI feedback with automatic data persistence

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS with custom theme configurations
- **Icons**: Font Awesome for visual elements
- **Data Export**: SheetJS (xlsx.js) for Excel file generation
- **Data Storage**: IndexedDB for local data persistence
- **Offline Support**: Service Worker for resource caching
- **Progressive Web App**: Web App Manifest for installation capabilities

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server or internet connection required after initial load

### Installation

#### Direct Usage
```
1. Download or clone the repository
2. Open the `classroom_statistics.html` file in your web browser
3. Begin configuring your class and tracking student performance
```

#### PWA Installation (Recommended)
```
1. Open the application in a browser that supports PWAs (Chrome, Edge, Safari)
2. Use the browser's install functionality (look for the install icon in the address bar)
3. The application will be added to your device's home screen
4. Launch directly from your home screen for offline access
```

## 🔧 Core Functionality Guide

### Class Configuration
- Set up basic class information including name, grade, and class motto
- Configure student ID ranges with options to exclude specific IDs
- Select grade level to automatically populate appropriate subjects

### Schedule Management
- Create and organize courses for each day of the week
- Set course subjects, ratings, and notes
- Add special handling for layered subjects (Math and English)

### Student Performance Tracking
- Identify and record students with poor performance for each course
- Use quick selection buttons to efficiently manage student lists
- Document specific reasons for performance issues

### Data Export
- Generate Excel reports containing all course data
- Export includes course details, ratings, notes, and poor student information
- Backup all application data for safekeeping

## 🌐 Offline Capabilities

The application is designed with offline-first principles:
- All resources are cached locally after initial load
- Full functionality available without internet connection
- Data is automatically saved to IndexedDB for persistence
- Robust error handling ensures stability even in challenging browser environments

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to help improve this application.

## 🔍 Acknowledgments

- Built with Tailwind CSS for modern, responsive design
- Utilizes Font Awesome for intuitive visual elements
- SheetJS for powerful Excel export capabilities
- Service Worker API for offline functionality