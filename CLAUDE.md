# St. Bernard Coffee - Claude Code Project

## Project Overview
St. Bernard Coffee is a React website for a specialty coffee company with two locations in Bali, Indonesia. The site showcases their brand story, locations, menu, and contact information.

## Tech Stack
- **Framework**: React with Vite
- **Styling**: CSS (custom styling)
- **Routing**: React Router
- **Animations**: Custom scroll animations
- **Deployment**: Vercel
- **Repository**: GitHub

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Project Structure
```
src/
├── components/
│   ├── Header/          # Navigation with logo and menu
│   ├── Footer/          # Site footer with contact info
│   └── ScrollAnimations # Custom scroll animation utilities
├── pages/
│   ├── Home/           # Landing page with hero slider
│   ├── About/          # Company story and timeline
│   ├── Menu/           # Menu links to location-specific menus
│   ├── Contact/        # Contact form and information
│   └── Store/          # Individual store pages (Seminyak, Amed)
└── assets/             # Images and static assets
```

## Key Brand Information

### Contact Information
- **Main Email**: office@stbernardcoffee.com
- **Seminyak**: +62 823-2880-1099
- **Amed**: +62 821-4414-4967

### Store Hours
- **Both Locations**: 7:00 AM - 5:00 PM (Daily)

### Locations
1. **Seminyak** (Flagship - Opened March 2023)
   - Address: Jl. Dewi Saraswati 3, lingkungan Jl. Raya Basangkasa, Seminyak, Bali
   - Menu: https://drive.google.com/file/d/1Jj72puui6Rf1MEZXPmwTO-8dYCZRhOGN/view

2. **Amed** (Opened March 2024)
   - Address: Jl. I Ketut Natih, Purwakerti, Kec. Abang, Kabupaten Karangasem, Bali 80852
   - Menu: https://drive.google.com/drive/folders/13NZIVXqsmkgHdcGC74UencAVr9RkNWfG

3. **Sanur** (In Progress - 2025)
   - Third location currently under development

### Social Media
- **Instagram**: https://www.instagram.com/st.bernardcoffee/?hl=en
- **WhatsApp**: https://api.whatsapp.com/send/?phone=6282328801099&text&type=phone_number&app_absent=0

## Recent Updates (Latest Commit: bc90ba6)

### Major Changes Made:
1. **Header Updates**
   - Replaced text logo with image logo (`stbernardlogo.PNG`)
   - Updated WhatsApp link to use API format with Seminyak number

2. **Store Information**
   - Changed hours from varied times to consistent 7AM-5PM for both locations
   - Updated contact numbers to correct ones
   - Removed hero subtitle text ("Flagship Location", "Coastal Paradise")

3. **Content Reorganization**
   - Moved "Experience St. Bernard Coffee" CTA from About page to Home page
   - Moved "Connect With Us" section from Home page to About page
   - Removed Leadership Team section from About page

4. **Timeline Updates**
   - Updated About page timeline with accurate dates (2023 Seminyak, 2024 Amed, 2025 Sanur)
   - Changed from "Mar 2023/Mar 2024" to just "2023/2024" format
   - Updated location names to proper case (St Bernard instead of ST BERNARD)

5. **Contact Page**
   - Updated to use single office email (office@stbernardcoffee.com)
   - Improved layout with location contact numbers
   - Removed catering FAQ item

6. **Footer**
   - Replaced newsletter subscription with contact information
   - Added office email and both location phone numbers
   - Updated WhatsApp link

7. **Browser Tab**
   - Changed title from "Vite + React" to "ST Bernard Coffee"
   - Added custom favicon with bold "B" letter in Playfair Display font

### Files Modified:
- `src/components/Header/Header.jsx` & `.css`
- `src/components/Footer/Footer.jsx`
- `src/pages/Home/Home.jsx`
- `src/pages/About/About.jsx`
- `src/pages/Contact/Contact.jsx`
- `src/pages/Menu/Menu.jsx`
- `src/pages/Store/Seminyak.jsx`
- `src/pages/Store/Amed.jsx`
- `index.html`
- `public/favicon.svg` (new)
- `public/assets/stbernardlogo.PNG` (new)

## Known Issues/TODOs
- Contact form currently only shows alert - no actual email sending (intentionally left for later)
- Form submission doesn't send to any backend service

## Development Notes
- Development server runs on port 5179 (or next available)
- Site uses custom scroll animations
- Responsive design implemented
- All images stored in `public/assets/`

## Deployment
- **Platform**: Vercel
- **Auto-deploy**: Enabled on main branch pushes
- **Repository**: https://github.com/suneater-dev/st-bernard-coffee.git

## Brand Story
Inspired by St. Bernard rescue dogs known for their gentle nature, loyalty, and warmth. The brand focuses on creating warm, welcoming spaces for both locals and travelers to connect over specialty coffee. Started in Seminyak's vibrant tourism scene, expanded to Amed's tranquil coastal setting, with plans for Sanur location.

---
**Last Updated**: August 22, 2025
**Current Version**: bc90ba6