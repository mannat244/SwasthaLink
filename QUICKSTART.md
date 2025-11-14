# 🚀 Quick Start Guide

## Installation (First Time Only)

Open PowerShell in the project directory and run:

```powershell
npm install
```

⏱️ This takes 2-3 minutes

---

## Running the Project

### Start Development Server

```powershell
npm run dev
```

Then open your browser to: **http://localhost:3000**

---

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check code quality |

---

## Project URLs

After starting the server:

- **Homepage**: http://localhost:3000
- **SwasthPath**: http://localhost:3000/swasthpath
- **ArogyaNet**: http://localhost:3000/arogyanet
- **JeevanSetu**: http://localhost:3000/jeevansetu

---

## File Locations

### Pages
- `app/page.tsx` - Homepage
- `app/swasthpath/page.tsx` - SwasthPath
- `app/arogyanet/page.tsx` - ArogyaNet
- `app/jeevansetu/page.tsx` - JeevanSetu

### Components
- `components/Navbar.tsx` - Navigation
- `components/Footer.tsx` - Footer
- `components/HeroSection.tsx` - Hero
- `components/SegmentCard.tsx` - Cards

### Styles
- `app/globals.css` - Global styles
- `tailwind.config.ts` - Tailwind config

---

## Troubleshooting

### Port Already in Use

```powershell
# Use a different port
$env:PORT=3001; npm run dev
```

### Dependencies Issue

```powershell
# Reinstall dependencies
Remove-Item -Recurse -Force node_modules
npm install
```

### Cache Issues

```powershell
# Clear Next.js cache
Remove-Item -Recurse -Force .next
npm run dev
```

---

## Features to Explore

### Homepage
✅ Animated hero section
✅ Three platform cards
✅ Statistics section
✅ How it works timeline

### SwasthPath
✅ Language selector (22+ languages)
✅ Feature cards with animations
✅ Mobile clinic services
✅ Step-by-step guide

### ArogyaNet
✅ Case distribution pie chart
✅ Disease trend line chart
✅ AI capabilities showcase
✅ Impact metrics

### JeevanSetu
✅ Emergency stats dashboard
✅ Live tracking demo (click "Track Ambulance")
✅ Response timeline
✅ Emergency CTA

---

## Making Changes

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
  }
}
```

### Update Content

Find the section in the respective page file and modify the text, data, or features arrays.

### Add New Page

1. Create `app/newpage/page.tsx`
2. Copy structure from existing page
3. Update Navbar links

---

## Need Help?

📖 Read: `README.md` - Full documentation
📖 Read: `PROJECT_SUMMARY.md` - Detailed breakdown
📖 Read: `SETUP.md` - Setup instructions

---

## Tips

💡 **Hot Reload**: Changes auto-refresh in browser
💡 **Responsive**: Resize browser to see mobile view
💡 **Interactive**: Hover over cards, click buttons
💡 **Animations**: Scroll to trigger animations

---

**Ready? Run `npm run dev` and visit http://localhost:3000**

🎉 Happy exploring SwasthPath!
