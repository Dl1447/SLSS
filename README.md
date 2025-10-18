# Student Learning Situation Statistics (SLSS)

A lightweight classroom statistics management web application designed for teachers to track student performance, homework submission status, and course evaluations with a modern glassmorphism UI design. This application can run entirely within a browser, supporting offline access and local data persistence.

## Key Features

- **Student Homework Tracking**: Monitor homework submission status for students (1-50 student IDs with configurable ranges)
- **Course Performance Evaluation**: Rate classroom performance using an intuitive 5-star rating system
- **Weekly Schedule Management**: Easily add, edit, and delete courses across all days of the week
- **Classroom Feedback Recording**: Document classroom notes, suggestions, and areas for improvement
- **Excel Export**: Export collected data to Excel format for further analysis and reporting
- **PWA Support**: Progressive Web App capabilities allowing installation to device home screen
- **Offline Functionality**: Fully functional even without internet connection
- **Local Data Persistence**: All data automatically saved to browser's IndexedDB for reliable storage
- **Modern Glassmorphism UI**: Sleek, modern interface with smooth animations and visual effects
- **Responsive Design**: Optimized for various screen sizes from mobile devices to desktop

## Technical Stack

- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript
- **UI Components**: Font Awesome icons for visual elements
- **Data Export**: SheetJS (xlsx.js) for Excel file generation
- **Offline Support**: Service Worker for resource caching and offline access
- **Data Storage**: IndexedDB for local data persistence
- **PWA Features**: Web App Manifest for installation capabilities

## Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation

1. **Direct Usage**:
   - Simply open the `classroom_statistics.html` file in any modern web browser
   - No additional setup required

2. **As Installed PWA** (recommended for offline use):
   - Open the application in a browser that supports PWAs (Chrome, Edge, Safari)
   - Look for the "Install App" prompt or use browser menu options to install
   - The app will be added to your device home screen
   - Launch directly from the home screen for full offline functionality

### Usage Notes
- All data is automatically saved to your browser's IndexedDB storage
- No internet connection required after initial load
- Changes are saved in real-time as you interact with the application
- Export data regularly as a backup (optional)

## Offline Capabilities

This application has been enhanced with offline-first capabilities:

- All resources (HTML, CSS, JavaScript, icons) are cached locally
- Complete functionality available without internet connection
- Data is persisted using IndexedDB
- Automatic synchronization when connection is restored

## License

This project is licensed under the MIT License - see the LICENSE file for details.

The MIT License is a permissive free software license that allows for reuse within proprietary software provided all copies of the licensed software include a copy of the MIT License terms and the copyright notice.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## Acknowledgments

- Built with Tailwind CSS for styling
- Uses Font Awesome for icons
- Leverages SheetJS for Excel export functionality
- Implements modern web standards for offline and installation capabilities