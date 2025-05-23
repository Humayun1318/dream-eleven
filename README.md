# DREAM 11

**DREAM 11** is a React-based application that allows users to build and manage their cricket team by selecting players within a predefined coin limit. This project delivers a user-friendly experience, incorporating validation, responsive design, and smooth interactivity, all while adhering to a professional Figma design.

---

## Live Project

- **Live Demo**: [DREAM 11](https://dream11-humayun1318.netlify.app/)  
- **Repository**: [GitHub Repository](https://github.com/programming-hero-web-course1/b10a7-dream-11-Humayun1318.git)

---

## Key Features

### 1. **Player Management**
- **Available Players**: Displayed in a 3-column responsive grid layout.
- **Selected Players**: Displayed in a single-column layout with real-time player count.
- Validation for:
  - Duplicate player selection.
  - Coin sufficiency for purchases.
  - Maximum team size of 6 players.
- React-Toastify used for intuitive notifications (success and error).

### 2. **Dynamic Coin System**
- Coins start at **0** and increase upon clicking the banner button.
- Purchases automatically deduct coins based on player bidding prices.

### 3. **Interactive UI**
- Fully responsive **Navbar**, **Banner**, and **Footer** designed as per Figma.
- Toggle between "Available Players" and "Selected Players" with real-time updates.

### 4. **Advanced Features**
- **Player Removal**: Remove selected players to free up space for new selections.
- **Add More Players**: A dedicated button to revisit the available players section for additional team changes.
- Perfect validation to ensure a smooth user experience during team creation.

---

## Technologies Used

- **React.js**: Framework for building dynamic and interactive UIs.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React-Toastify**: Enhanced user notifications.
- **React Icons**: Free and customizable icons.
- **Google Fonts**: For clean and modern typography.
- **Figma**: Design inspiration and UI adherence.
- **JSON**: Player data structure for dynamic rendering.

---

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/programming-hero-web-course1/b10a7-dream-11-Humayun1318.git
   cd b10a7-dream-11-Humayun1318
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open in your browser:
   ```
   http://localhost:5173
   ```

---

## Project Highlights

### Intuitive Notifications
All error and success alerts are handled using **React-Toastify**, replacing traditional `alert()` for a better user experience.

### Validation
Comprehensive validations include:
- Preventing duplicate player selection.
- Ensuring sufficient coins for purchases.
- Restricting selection to a maximum of 6 players.

### Fully Responsive Design
Each section (Navbar, Banner, Main, Footer) is designed to work seamlessly on devices of all sizes.

---

---

## Contributions

Contributions and suggestions are welcome!  
Feel free to open issues or feature requests in the [GitHub Issues](https://github.com/programming-hero-web-course1/b10a7-dream-11-Humayun1318/issues).

---

## Acknowledgments

- **React Icons**: Free and customizable icons.
- **Google Fonts**: Clean and modern typography.
- **Tailwind CSS**: Streamlined styling framework.
- **Figma**: UI design reference.
- **React-Toastify**: Smooth notification integration.

---



Build your dream cricket team today with **DREAM 11**!
