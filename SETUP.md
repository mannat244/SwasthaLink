# SwasthPath - Setup Instructions

## Quick Start Guide

### 1. Install Dependencies

Open PowerShell in the project directory and run:

```powershell
npm install
```

This will install all required packages:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- Recharts (data visualization)

### 2. Start Development Server

```powershell
npm run dev
```

The application will start at `http://localhost:3000`

### 3. Build for Production

```powershell
npm run build
npm start
```

## Project Overview

### Pages
- **/** - Homepage with overview of all three platforms
- **/swasthpath** - Patient access and health record management
- **/arogyanet** - AI-powered intelligence and analytics
- **/jeevansetu** - Emergency response and ambulance network

### Components
- **Navbar** - Navigation bar with responsive menu
- **Footer** - Footer with links and contact information
- **HeroSection** - Animated hero section for homepage
- **SegmentCard** - Reusable card component for platform features

### Styling
- Custom Tailwind CSS configuration with healthcare-themed colors
- Responsive design (mobile-first)
- Smooth animations with Framer Motion

## Customization

### Change Colors
Edit `tailwind.config.ts` to modify the color palette

### Update Content
Each page is a separate file in the `app/` directory:
- `app/page.tsx` - Homepage
- `app/swasthpath/page.tsx` - SwasthPath platform
- `app/arogyanet/page.tsx` - ArogyaNet platform
- `app/jeevansetu/page.tsx` - JeevanSetu platform

### Add New Pages
Create a new folder in `app/` with a `page.tsx` file

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:
```powershell
$env:PORT=3001; npm run dev
```

### Module Not Found
If you see module errors, delete `node_modules` and reinstall:
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

### TypeScript Errors
The errors shown during file creation are expected until dependencies are installed. They will resolve after running `npm install`.

## Features

✅ Fully responsive design
✅ Interactive animations
✅ Data visualizations (charts)
✅ Multilingual support display
✅ Emergency tracking simulation
✅ Modern UI/UX

## Technologies

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Recharts** - Chart library

## Support

For issues or questions, refer to the main README.md file.

---

**Happy coding! 🚀**
