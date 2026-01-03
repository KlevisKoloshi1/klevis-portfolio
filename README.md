# Portfolio Website - Klevis Koloshi

A modern, responsive portfolio website showcasing backend development projects and expertise. Built with React, TypeScript, and shadcn/ui components.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on all devices
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Smooth Animations**: Engaging animations and transitions throughout
- **Contact Form**: Integrated contact form using Web3Forms API
- **Dark Mode Support**: Theme-aware design with dark mode capabilities
- **Project Showcase**: Display of backend projects with detailed descriptions
- **Skills & Experience**: Comprehensive sections highlighting technical skills and professional experience

## 📋 Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal background and expertise
- **Experience**: Professional work experience
- **Skills**: Technical skills and technologies
- **Projects**: Showcase of backend projects with links to repositories
- **Contact**: Contact form and social media links
- **Footer**: Additional information and links

## 🛠️ Tech Stack

### Core Technologies
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Vite 7.3** - Build tool and dev server
- **React Router 6.30** - Client-side routing

### UI & Styling
- **shadcn/ui** - Component library
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **tailwindcss-animate** - Animation utilities

### Additional Libraries
- **TanStack Query 5.83** - Data fetching and state management
- **React Hook Form 7.61** - Form handling
- **Zod 3.25** - Schema validation
- **Web3Forms** - Contact form API

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** or **bun** (package manager)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd klevis-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```
   
   To get a Web3Forms access key:
   - Visit [Web3Forms](https://web3forms.com/)
   - Sign up and get your access key
   - Add it to your `.env` file

## 🚀 Development

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

The application will be available at `http://localhost:8080` (or the port specified in `vite.config.ts`).

The dev server includes:
- Hot Module Replacement (HMR)
- Fast refresh
- TypeScript type checking

## 🏗️ Building for Production

Build the project for production:

```bash
npm run build
# or
yarn build
# or
bun build
```

The production build will be created in the `dist` directory.

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
# or
bun preview
```

## 📁 Project Structure

```
laravel-backend-showcase/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── portfolio/      # Portfolio-specific components
│   │   │   ├── About.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   └── ui/             # shadcn/ui components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── pages/              # Page components
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## 🎨 Customization

### Updating Personal Information

1. **Hero Section**: Edit `src/components/portfolio/Hero.tsx`
2. **About Section**: Edit `src/components/portfolio/About.tsx`
3. **Experience**: Edit `src/components/portfolio/Experience.tsx`
4. **Skills**: Edit `src/components/portfolio/Skills.tsx`
5. **Projects**: Edit the `projects` array in `src/components/portfolio/Projects.tsx`
6. **Contact**: Update email and social links in `src/components/portfolio/Contact.tsx`

### Styling

- **Colors**: Modify CSS variables in `src/index.css`
- **Theme**: Update `tailwind.config.ts` for custom theme settings
- **Components**: shadcn/ui components can be customized in `src/components/ui/`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔒 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms API access key for contact form | Yes |

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

Make sure to set your environment variables in your hosting platform's dashboard.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Klevis Koloshi**

- Email: kleviskoloshi8@gmail.com
- GitHub: [@KlevisKoloshi1](https://github.com/KlevisKoloshi1)
- LinkedIn: [Klevis Koloshi](https://www.linkedin.com/in/klevis-koloshi-91006235a/)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing component library
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Web3Forms](https://web3forms.com/) for the contact form service

---

⭐ If you find this project helpful, please consider giving it a star!
