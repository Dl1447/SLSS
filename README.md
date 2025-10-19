# Student Learning Situation Statistics System (SLSS) 
A powerful and lightweight browser-based classroom management application, specifically designed for educators, can efficiently track student performance, homework submissions, and course evaluations. It features a modern user interface and offline functionality. 
## 📋 Overview
SLSS offers teachers a comprehensive solution for managing classroom data without any server setup or internet connection. The application runs entirely in modern web browsers and provides powerful data persistence and export capabilities. 
✨ Main Functions 
- **Student Management**: Configure class lists, support customizing student ID ranges and exclusion options
- **Grade-Subject Association**: Automatically configure subjects based on the selected grade (Grades 1 to 9)
- **Homework Tracking**: Monitor and record the submission status of each student's homework
- **Performance Evaluation**: Use an intuitive five-star rating system to evaluate classroom participation
- **Weekly Course Schedule Management**: Create and manage the course schedule for all working days
- **Classroom Notes**: Record observation results, feedback, and areas for improvement
- **Data Export**: Save the records in Excel format for external analysis and reporting
- **Custom Logo**: Support uploading and setting a custom class logo
- **Visitor Mode**: Provide a temporary access function without an account, with an option to log out
- **Account Management**: Support creating, logging in, and clearing accounts to protect user data privacy
- **Enhanced Loading Experience**: Provide visual indicators during data processing and initialization
- **Improved Error Handling**: Ensure stability even when there are issues with database access
- **Offline Functionality**: Run completely without an internet connection
- **Local Data Persistence**: Use IndexedDB for secure data storage
- **PWA Support**: Can be installed on devices and provides a similar native application experience
- **Modern UI**: Glass-like design with smooth animations and visual effects
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices 
## 🖼️ Image Resources 
- **Application Icon**: `bjbz.png` (Used for both 192x192 and 512x512 resolutions, supporting standard and maskable icons) 
## 🛠️ Technology Stack 
- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript
- **UI Components**: Font Awesome icons
- **Data Export**: SheetJS (xlsx.js) is used for generating Excel files
- **Offline Support**: Service Worker is used for resource caching
- **Data Storage**: IndexedDB is used for local data persistence
- **PWA Features**: Web App Manifest is used for installation functionality 
?? Start Using 
### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - Runs entirely within the browser 
### Installation 
Option 1: Use directly ```
1. Clone or download the repository
2. Open the `classroom_statistics.html` file in any modern web browser
3. Start using immediately - no additional settings required ```

Option 2: PWA Installation (Recommended) ```
1. Open the app in a browser that supports PWA (Chrome, Edge, Safari)
2. Look for the "Install App" prompt or use the browser menu option to install
3. The app will be added to the device home screen
4. Start directly to enjoy full offline functionality ```

### Usage Instructions
- All data is automatically saved in the IndexedDB storage of the browser.
- No internet connection is required during the initial loading.
- Changes made during interaction are saved in real time.
- It is recommended to export data regularly as a backup.
- Data is not permanently saved in guest mode.
- The account and all associated data can be cleared through the configuration panel. 
## 🔒 User Data Management 
- **Account System**: A lightweight authentication system based on localStorage
- **Data Isolation**: Achieves user data isolation using the 'by-user' index of IndexedDB
- **Account Deletion**: Offers a complete account deletion feature, including all associated data
- **Visitor Mode**: Provides a temporary access option without saving data 
## 🌐 Offline Function 
SLSS is constructed based on the offline priority principle: 
- All resources are cached locally and can be accessed immediately.
- The full functionality can be used without an internet connection.
- Data is securely and persistently stored using IndexedDB.
- The state can be automatically managed even when database access is restricted. 
## 📊 Key Functions 
### Students and Class Management
- Configure class information through customizable settings
- Set the grade and automatically associate the corresponding subjects
- Define the range of student numbers and support exclusion options 
### Academic Tracking
- Record the status of homework submissions
- Assess classroom performance
- Record observation results and feedback
- Generate weekly course schedules 
### Data Management
- Export all records in Excel format
- Local data persistence with automatic saving
- Robust error handling to ensure stable operation
- Account management and data privacy protection 
## 🎯 Latest Update 
- Add the function of custom logo, which supports uploading and displaying the class logo
- Add the logout button for the guest mode
- Implement the account deletion function, allowing users to delete their accounts and all associated data
- Fix the issue of duplicate button display in the guest mode 
## 📄 License 
This project is licensed under the MIT license - for details, please refer to the LICENSE file. 
?? Contribution 
Welcome to contribute! Please feel free to raise questions or submit pull requests to help improve this project. 
## 🔍 Acknowledgements 
- Implement modern styles using Tailwind CSS
- Provide icon support using Font Awesome
- Implement Excel data export using SheetJS