# 🍽️ Savory Spoon - Restaurant Menu App

A modern, responsive restaurant menu application built with React, TypeScript, Vite, and Tailwind CSS. Features an interactive menu with categories, dietary icons, and a full order builder system.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite)

## ✨ Features

### 📋 Menu Display
- **Category Navigation** - Easy-to-use tabs for browsing menu sections
- **Beautiful Item Cards** - High-quality images with detailed descriptions
- **Popular Items Badge** - Highlights best-selling dishes
- **Responsive Grid Layout** - Adapts to any screen size

### 🏷️ Dietary Information
Visual icons for dietary preferences:
| Icon | Meaning |
|------|---------|
| 🥬 | Vegetarian |
| 🌱 | Vegan |
| 🌾 | Gluten-Free |
| 🌶️ | Spicy |
| 🥛 | Dairy-Free |
| 🥜 | Nut-Free |

### 🛒 Order Builder
- Add/remove items from order
- Adjust quantities with +/- controls
- Real-time subtotal calculation
- Automatic tax calculation (8%)
- Clear order functionality
- Mobile-friendly slide-out cart

### 📱 Responsive Design
- Desktop: Side-by-side menu and cart
- Mobile: Floating cart button with slide-out panel
- Sticky category navigation
- Touch-friendly interface

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/restaurant-menu.git
   cd restaurant-menu
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
restaurant-menu/
├── public/
├── src/
│   ├── components/
│   │   ├── DietaryIcon.tsx    # Dietary tag icons
│   │   ├── MenuItemCard.tsx   # Individual menu item cards
│   │   └── OrderBuilder.tsx   # Shopping cart/order panel
│   ├── data/
│   │   └── menuData.ts        # Sample menu items & types
│   ├── App.tsx                # Main application component
│   ├── main.tsx               # React entry point
│   └── index.css              # Tailwind CSS imports
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Adding Menu Items

Edit `src/data/menuData.ts` to add or modify menu items:

```typescript
{
  id: 'unique-id',
  name: 'Item Name',
  description: 'Item description',
  price: 12.99,
  category: 'appetizers', // appetizers | mains | pizza | desserts | beverages
  image: 'https://image-url.com/image.jpg',
  dietaryTags: ['vegetarian', 'gluten-free'],
  popular: true // optional
}
```

### Modifying Categories

Update the `categories` array in `src/App.tsx`:

```typescript
const categories = [
  { id: 'your-category', name: 'Category Name', icon: '🍴' },
  // ...
];
```

### Changing Colors

The app uses Tailwind CSS. Main accent colors are orange/red gradients. Modify classes in components to change the color scheme.

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS 4** - Utility-first styling
- **Lucide React** - Icon library

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/YOUR_USERNAME/restaurant-menu](https://github.com/YOUR_USERNAME/restaurant-menu)

---

⭐ If you found this project helpful, please give it a star!