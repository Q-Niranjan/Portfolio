# Niranjan Kumar - Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and Framer Motion, showcasing my projects and skills as a full-stack developer.

## 🌟 Features

- **Interactive 3D Elements**: Utilizes Three.js for engaging 3D visualizations
- **Smooth Animations**: Implements Framer Motion for fluid transitions and animations
- **Responsive Design**: Fully responsive layout using Tailwind CSS
- **Contact Form**: Integrated EmailJS for direct communication
- **Dynamic Content**: Showcases projects, skills, and experience in an engaging way
- **Modern UI/UX**: Clean and professional design with smooth scrolling and interactive elements

## 🛠️ Technologies Used

### Frontend

- React.js
- Three.js
- Framer Motion
- Tailwind CSS
- SCSS
- EmailJS

### Development Tools

- Vite
- PostCSS
- Autoprefixer

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your [EmailJS](https://www.emailjs.com/) credentials:

   ```env
   VITE_EMAILJS_SERVICE_KEY=your_service_key
   VITE_EMAILJS_TEMPLATE_KEY=your_template_key
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > Get your API keys by signing up at [EmailJS.com](https://www.emailjs.com/)

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/         # Images and static assets
│   ├── components/     # React components
│   ├── constants/      # Configuration and constant data
│   ├── hoc/           # Higher-order components
│   ├── scss/          # SCSS styles
│   ├── utils/         # Utility functions
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Public assets
└── vite.config.js     # Vite configuration
```

## 🎨 Features and Sections

- **Interactive Home Page**: Dynamic text animation and 3D elements
- **About Section**: Professional introduction and service cards
- **Skills**: Comprehensive display of technical skills
- **Experience**: Timeline of professional experience
- **Projects**: Showcase of key projects with descriptions
- **Resume Viewer**: Interactive PDF resume viewer with download option
- **Contact**: EmailJS-powered contact form with validation
- **Footer**: Social media links and contact information

## 🌐 Deployment

The site is configured for deployment on platforms like Vercel or Netlify. The build command is set up in `package.json`:

```json
{
  "scripts": {
    "build": "vite build"
  }
}
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contact

Niranjan Kumar

- Email: nirajan882684@gmail.com
- LinkedIn: [Niranjan Kumar](https://www.linkedin.com/in/niranjan-kumar-144243223)
- GitHub: [Q-Niranjan](https://github.com/Q-Niranjan)
