# 🪔 சுபமுகூர்த்தத் திருமண அழைப்பிதழ் | Traditional Tamil Wedding Invitation

A digital wedding invitation web application crafted for a traditional **TAMIL WEDDING**. Featuring an auspicious Tamil design language, 3D interactive pathirikai opening animation, real procedural 3D models (Kalasam, lit Kuthuvilakku, Manavarai mandap with banana trees, and rotating Monogram), an interactive scratch-card date reveal game, live countdown, bilingual Tamil-English support, audio synthesis, and RSVP with flower-shower (*Malar Mazhai*).

---

## ✨ Key Features

1. **Auspicious Opening Experience ("Open the Invitation")**
   - Traditional maroon and gold *Kalyana Pathirikai* 3D card tied with turmeric (*manjal*) thread and mango leaves (*maa ilai*).
   - Auspicious Pillaiyar Suzhi (**உ**) and "அன்புடையீர் வணக்கம்" greeting.
   - On tap: temple bell chime rings, thread unties, and 3D double doors swing open revealing a lit brass Kuthuvilakku with flickering flame and golden sparkles.
   - Smooth 2.5s transition and zoom-through into the main page (plus a quick "Skip" option).
   - Session storage remembers when opened so returning visitors go straight to the main page, with a "Replay Invitation" button in the navbar and footer.

2. **Tamil Cultural Design Language**
   - **Colors**: Kumkum Maroon (`#6B0F1A`), Temple Gold (`#D4A017`, `#F5D061`), Turmeric Yellow, Banana-Leaf Green (`#2E6F40`), Ivory (`#FFFDF7`), and Jasmine White.
   - **Motifs**: Symmetrical Kolam/Rangoli borders, Mango leaf *Toranam* garland across sections, traditional tiered Temple Gopuram silhouette, five-wick *Kuthuvilakku* with flickering flame, and live *Vazhaimaram* (banana trees with flowers and bunches).
   - **Typography**: Google Fonts configured with **Noto Serif Tamil** for grand headings, **Mukta Malar** & **Catamaran** for crisp Tamil body text, **Cormorant Garamond** for English titles, and **Inter** for numerals/body.

3. **Real Interactive 3D Models (Three.js + R3F)**
   - **Hero Kalasam**: Rotating golden brass Kalasam pot adorned with sacred coconut (*thengai*), mango leaves (*maa ilai*), sacred thread (*nool*), flanking lit Kuthuvilakku lamps, and drifting marigold & jasmine petals.
   - **Venue Manavarai**: 3D mandap with 4 carved golden pillars, flower festoons, wedding throne (*asanam*), and banana trees with banana bunches. Features interactive drag-to-rotate with auto-rotation and smooth damping.
   - **Footer Monogram**: Rotating 3D gold medallion featuring the couple's monogram initials and auspicious emblems.

4. **Scratch & Reveal Date Game**
   - Gold-foil card with kolam pattern: *"சொரண்டிப் பாருங்கள் / Scratch to reveal our special day"*.
   - HTML5 Canvas overlay supporting both mouse and mobile touch with pointer events (`touch-action: none` to prevent page scrolling while scratching).
   - Real-time scratch sound effect and cleared area tracking.
   - At ~55-60% cleared, auto-reveals the auspicious date with a grand **Malar Mazhai** (flower shower confetti) & celebratory fanfare!
   - 3 teaser tiles (*"குறித்து"*, *"வைத்துக்கொள்ளுங்கள்"*, *"நாளை"*) and "Scratch Again" replay feature.

5. **Complete Ceremonial Schedule & Calendar Integration**
   - Vertical timeline covering *Pandhakkal*, *Nichayathartham & Engagement*, *Subha Muhurtham & Mangalya Dharanam*, *Kalyana Virundhu*, and *Reception*.
   - One-click **"Add to Calendar (.ics)"** export for Apple Calendar, Outlook, and Google Calendar direct link.

6. **Audio Engine**
   - Procedural Web Audio API sound generator providing realistic temple bell (*kovil mani*), soft gold-foil scratch noise, celebratory pentatonic flower shower chimes, and ambient *Mangala Vadyam* (Carnatic tambura drone & nadaswaram melodies in Mohanam raga).
   - Support for custom MP3 background audio tracks.
   - Music toggle button in navbar.

7. **One-Tap Language Toggle (Tamil & English)**
   - All text, labels, blessings, and dates reside in `src/config.js`. Toggle anytime between Tamil (default) and English.

8. **RSVP & Social Sharing**
   - Interactive RSVP form with guest counter and blessing message. Submits with a joyous flower shower.
   - WhatsApp share button with pre-filled auspicious Tamil and English invitations.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **3D Graphics**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Styling**: Tailwind CSS with custom Tamil design tokens & gradients
- **Animations**: Framer Motion
- **Interactive Game**: HTML5 Canvas with pointer events
- **Celebration Effects**: `canvas-confetti`
- **Icons**: `lucide-react`

---

## 📁 Project Structure

```
├── index.html                 # Google fonts, OpenGraph meta tags, Tamil title & favicon
├── package.json
├── tailwind.config.js         # Tamil color palette (kumkum, gold, turmeric, banana green)
├── vite.config.js
└── src/
    ├── config.js              # 🌟 ALL COUPLE DETAILS & TEXT IN TAMIL & ENGLISH
    ├── main.jsx
    ├── App.jsx                # Main page coordinator & session state
    ├── index.css              # Custom scrollbars, animations, kolam patterns
    ├── utils/
    │   ├── audio.js           # Web Audio API synthesizer (temple bell, scratch, drone)
    │   └── calendar.js        # .ics calendar generator & Google Calendar integration
    └── components/
        ├── OpeningScreen.jsx  # 3D invitation card opening screen
        ├── Navbar.jsx         # Sticky header with audio & language toggles
        ├── Hero.jsx           # 3D Kalasam scene, couple names & date preview
        ├── InvitationWording.jsx # Traditional family blessings & parents' details
        ├── OurStory.jsx       # 3 milestones sliding in on scroll
        ├── ScratchCardDate.jsx# HTML5 canvas scratch game to reveal date
        ├── EventsTimeline.jsx # Rituals timeline with .ics calendar download
        ├── VenueSection.jsx   # 3D rotating Manavarai + Google Maps embed
        ├── CountdownTimer.jsx # Live countdown with Tamil units
        ├── Gallery.jsx        # 3D tilt hover photo carousel
        ├── RsvpSection.jsx    # RSVP form with malar mazhai flower shower
        ├── Footer.jsx         # "வாழ்க வளமுடன்", rotating monogram & WhatsApp share
        ├── common/
        │   └── Motifs.jsx     # Pillaiyar Suzhi, Kolam dividers, Toranam, Kuthuvilakku
        └── 3d/
            ├── InvitationCard3D.jsx # 3D opening card with hinges & turmeric thread
            ├── KalasamScene.jsx     # 3D gold Kalasam, coconut, lamps & petals
            ├── ManavaraiScene.jsx   # 3D Mandapam with banana trees & orbit controls
            └── Monogram3D.jsx       # 3D rotating gold medallion
```

---

## ⚙️ How to Customize (`src/config.js`)

All details are centralized in `src/config.js`. Open that file to update:

### 1. Couple Names & Family Details
```javascript
couple: {
  groom: {
    name: { ta: 'கவின் கார்த்திகேயன்', en: 'Kavin Karthikeyan' },
    degree: { ta: 'B.Tech., M.S.', en: 'B.Tech., M.S.' },
    relation: {
      ta: 'திரு. R. கார்த்திகேயன் - திருமதி. K. மீனாட்சி தம்பதியரின் புதல்வர்',
      en: 'Son of Mr. R. Karthikeyan & Mrs. K. Meenakshi',
    },
  },
  bride: {
    name: { ta: 'அனன்யா சுந்தர்', en: 'Ananya Sundar' },
    degree: { ta: 'M.B.B.S., M.D.', en: 'M.B.B.S., M.D.' },
    relation: {
      ta: 'திரு. S. சுந்தரேசன் - திருமதி. S. பத்மாவதி தம்பதியரின் புதல்வி',
      en: 'Daughter of Mr. S. Sundaresan & Mrs. S. Padmavathi',
    },
  },
  monogram: 'K & A',
}
```

### 2. Dates & Muhurtham
```javascript
weddingIsoDate: '2027-09-12T09:30:00+05:30',
date: {
  dateDisplay: { ta: '12 செப்டம்பர் 2027', en: '12 September 2027' },
  tamilDate: { ta: 'பிலவ வருடம், ஆவணி 27', en: 'Aavani 27, Pilava Year' },
  day: { ta: 'ஞாயிற்றுக்கிழமை', en: 'Sunday' },
  muhurthamTime: { ta: 'காலை 9:00 மணி முதல் 10:30 மணி வரை', en: '9:00 AM to 10:30 AM' },
  nallaNeram: {
    ta: 'காலை 9:15 - 10:15 மணி (துலாம் லக்னம், ரோகிணி நட்சத்திரம்)',
    en: '9:15 AM - 10:15 AM (Thula Lagnam, Rohini Nakshatram)',
  },
}
```

### 3. Venue & Google Maps
```javascript
venue: {
  name: { ta: 'ஸ்ரீ பாலாஜி மகால்', en: 'Sri Balaji Mahal' },
  address: { ta: 'எண் 42, மகாத்மா காந்தி சாலை, நுங்கம்பாக்கம், சென்னை - 600034', en: 'No. 42, Mahatma Gandhi Road, Nungambakkam, Chennai - 600034' },
  googleMapsUrl: 'https://maps.google.com/?q=Nungambakkam+Chennai',
  googleMapsEmbedUrl: '...',
}
```

### 4. Background Audio Track
To play your own recorded Nadaswaram or Mangala Vadyam track:
```javascript
audio: {
  backgroundTrackUrl: '/audio/nadaswaram.mp3', // place mp3 inside public/audio/
}
```
*If left blank, the application automatically synthesizes ambient Carnatic tambura drone & melodies using the Web Audio API.*

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🌐 Deployment Steps

### Option A: Deploy to Netlify
1. Create a production build:
   ```bash
   npm run build
   ```
2. In Netlify Dashboard, click **Add new site** → **Deploy manually**, and drag & drop the `dist/` folder.
3. Or connect your Git repository:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Option B: Deploy to Vercel
1. Install Vercel CLI or import project directly from GitHub on [vercel.com](https://vercel.com).
2. Framework Preset: **Vite**
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Click **Deploy**.

---

## 📱 Mobile & WhatsApp Sharing

When shared on WhatsApp, the custom Open Graph preview shows the title, description, and preview image. Recipients can tap once to experience the opening card, scratch to reveal the date, and save the Muhurtham directly to their phone's calendar!

