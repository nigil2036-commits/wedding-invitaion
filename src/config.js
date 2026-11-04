/**
 * Tamil Wedding Invitation Configuration
 * All couple details, events, texts, and translations are managed here.
 * Switch seamlessly between Tamil ('ta') and English ('en').
 */

export const weddingConfig = {
  // General details
  defaultLanguage: 'en',
  weddingIsoDate: '2026-11-22T08:30:00+05:30', // Used for live countdown & calendar invites
  
  // Audio configuration
  audio: {
    enabledByDefault: false,
    backgroundTrackUrl: '', // Optional external mp3; built-in ambient Carnatic synthesis runs when empty!
    enableSyntheticAudio: true, // Realistic temple bell, nadaswaram drone & scratch FX
  },

  // Couple Details
  couple: {
    groom: {
      name: {
        ta: 'யோகேஷ்குமார்',
        en: 'Yogeshkumar',
      },
      degree: {
        ta: 'MSc.,(DM)',
        en: 'MSc.,(DM)',
      },
      relation: {
        ta: 'திரு. N. பாலுசாமி - திருமதி. P. ராணி தம்பதியரின் புதல்வர்',
        en: 'Son of Mr. N. Balusamy & Mrs. P. Rani',
      },
      initials: 'Y',
      instagram: '@yogesh_k',
      photo: '/images/groom.jpg',
      role: {
        ta: 'மணமகன்',
        en: 'The Groom',
      },
      quote: {
        ta: 'அன்பும் பண்பும் நிறைந்த இல்லறப் பயணத்தில் என்னவளோடு இணைவதில் பெருமகிழ்ச்சி கொள்கிறேன்.',
        en: 'With a heart full of love and gratitude, stepping into a lifetime of togetherness with my beloved.',
      },
    },
    bride: {
      name: {
        ta: 'கமலி',
        en: 'Kamali',
      },
      degree: {
        ta: 'M.B.A.,',
        en: 'M.B.A.,',
      },
      relation: {
        ta: 'திரு. R. சரவணன் - திருமதி. S. செல்வமணி தம்பதியரின் புதல்வி',
        en: 'Daughter of Mr. R. Saravanan & Mrs. S. Selvamani',
      },
      initials: 'K',
      instagram: '@kamali_k',
      photo: '/images/bride.jpg',
      role: {
        ta: 'மணமகள்',
        en: 'The Bride',
      },
      quote: {
        ta: 'பெரியோர்களின் ஆசியோடும், இறைவனின் திருவருளோடும் எங்கள் புதிய வாழ்வு இனிதே துவங்குகிறது.',
        en: 'Blessed by our loving elders and divine grace, beginning the most beautiful chapter of our lives.',
      },
    },
    monogram: 'Y & K',
  },

  // Auspicious Date & Muhurtham Time
  date: {
    dateDisplay: {
      ta: '22 நவம்பர் 2026',
      en: '22 November 2026',
    },
    tamilDate: {
      ta: 'கார்த்திகை 06',
      en: 'Karthigai 06',
    },
    day: {
      ta: 'ஞாயிற்றுக்கிழமை',
      en: 'Sunday',
    },
    muhurthamTime: {
      ta: 'அதிகாலை (Early Morning)',
      en: 'Early Morning',
    },
    nallaNeram: {
      ta: 'முகூர்த்தம்: கொடுமுடி ஈஸ்வரன் கோவில் • வரவேற்பு: சிந்து மஹால் (8:30 - 10:30)',
      en: 'Muhurtham: Kodumudi Eswaran Temple • Reception: Sindhu Mahal (8:30 - 10:30)',
    },
    subhaMuhurthamTitle: {
      ta: 'சுப முகூர்த்தம்',
      en: 'Subha Muhurtham',
    },
  },

  // Venue Details
  venue: {
    name: {
      ta: 'சிந்து மஹால் (சிந்து ரெஸ்டாரன்ட் & மஹால்)',
      en: 'Sindhu Mahal (Sindhu Restaurant & Mahal)',
    },
    address: {
      ta: 'சிந்து மஹால், பரமத்தி வேலூர், வேலூர்',
      en: 'Sindhu Mahal, Paramathi Velur, Velur',
    },
    landmark: {
      ta: 'பரமத்தி வேலூர்',
      en: 'Paramathi Velur',
    },
    googleMapsUrl: 'https://maps.app.goo.gl/rB65yG1GdJ8Utp119?g_st=aw',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Sindhu+Mahal+Paramathi+Velur&t=&z=15&ie=UTF8&iwloc=&output=embed',
    contactPhone: '+91 98400 12345 / +91 94440 67890',
  },

  // Events Schedule - ONLY TWO CEREMONIES
  events: [
    {
      id: 'muhurtham',
      title: {
        ta: 'முகூர்த்த நேரம் (சுப முகூர்த்தம்)',
        en: 'Subha Muhurtham',
      },
      subtitle: {
        ta: 'திருமாங்கல்ய தாரண பெருவிழா',
        en: 'Sacred Nuptials & Thali Tying',
      },
      date: {
        ta: '22 நவம்பர் 2026, ஞாயிற்றுக்கிழமை',
        en: 'Sunday, 22 November 2026',
      },
      time: {
        ta: 'அதிகாலை (Early Morning)',
        en: 'Early Morning',
      },
      venue: {
        ta: 'கொடுமுடி ஈஸ்வரன் கோவில் (KODUMUDI ESWARAN TEMPLE)',
        en: 'Kodumudi Eswaran Temple, Kodumudi',
      },
      description: {
        ta: 'கொடுமுடி ஈஸ்வரன் திருக்கோவிலில் இறைவனின் திருவருளோடும் பெரியோர்களின் ஆசிகளோடும் நடைபெறும் புனிதமான திருமண வைபவம்.',
        en: 'Sacred wedding ceremony blessed by the Almighty and elders at the historic Kodumudi Eswaran Temple.',
      },
      icon: 'heart',
      isPrimary: true,
    },
    {
      id: 'reception',
      title: {
        ta: 'திருமண வரவேற்பு',
        en: 'Wedding Reception',
      },
      subtitle: {
        ta: 'மங்களகரமான வரவேற்பு & விருந்து',
        en: 'Grand Reception & Festive Feast',
      },
      date: {
        ta: '22 நவம்பர் 2026, ஞாயிற்றுக்கிழமை',
        en: 'Sunday, 22 November 2026',
      },
      time: {
        ta: 'காலை 8:30 - 10:30 மணி',
        en: '8:30 AM - 10:30 AM',
      },
      venue: {
        ta: 'சிந்து மஹால் (SINDHU MAHAL), பரமத்தி வேலூர்',
        en: 'Sindhu Mahal, Paramathi Velur, Velur',
      },
      description: {
        ta: 'மணமக்களை வாழ்த்தி மகிழும் மங்கள வரவேற்பு வைபவம் மற்றும் கல்யாண விருந்து உபசரிப்பு.',
        en: 'Congratulate the newlyweds followed by a grand traditional wedding feast.',
      },
      icon: 'sparkles',
      isPrimary: false,
    },
  ],

  // Traditional Invitation Wording & Families
  wording: {
    pillaiyarSuzhi: 'உ',
    om: 'ஓம்',
    salutation: {
      ta: 'அன்புடையீர் வணக்கம்',
      en: 'Warm Greetings and Auspicious Blessings',
    },
    invitationPreamble: {
      ta: 'எல்லாம் வல்ல விநாயகப் பெருமான் மற்றும் குலதெய்வத்தின் திருவருளாலும், பெரியோர்களின் ஆசிகளுடனும்...',
      en: 'With the divine blessings of Lord Vinayaka, our family deities, and our revered elders...',
    },
    mainInvitationText: {
      ta: 'நடைபெறும் எங்கள் இல்லத் திருமண விழாவிற்கு தாங்களும் தங்கள் குடும்பத்தாரும் சுற்றமும் நட்பும் சூழ வருகை தந்து, மணமக்களை வாழ்த்தி அருள அன்புடன் அழைக்கின்றோம்.',
      en: 'We cordially invite you and your family to grace the auspicious wedding ceremony and shower your heartfelt blessings upon the young couple as they begin their sacred journey together.',
    },
    blessingClosing: {
      ta: 'வாழ்க வளமுடன்! தங்களின் வருகையே எங்களின் பெரும் பாக்கியம்.',
      en: 'May you live in boundless bliss and prosperity. Your presence is our most cherished blessing.',
    },
    hosts: {
      ta: 'அழைப்பின் மகிழ்வில்:',
      en: 'Joyfully Invited By:',
    },
    groomParents: {
      title: {
        ta: 'மணமகன் பெற்றோர்:',
        en: "Groom's Parents:",
      },
      names: {
        ta: 'திரு. N. பாலுசாமி & திருமதி. P. ராணி',
        en: 'Mr. N. Balusamy & Mrs. P. Rani',
      },
      familyLine: {
        ta: 'மற்றும் பாலுசாமி குடும்பத்தினர், பரமத்தி வேலூர்',
        en: '& Family, Paramathi Velur',
      },
    },
    brideParents: {
      title: {
        ta: 'மணமகள் பெற்றோர்:',
        en: "Bride's Parents:",
      },
      names: {
        ta: 'திரு. R. சரவணன் & திருமதி. S. செல்வமணி',
        en: 'Mr. R. Saravanan & Mrs. S. Selvamani',
      },
      familyLine: {
        ta: 'மற்றும் சரவணன் குடும்பத்தினர்',
        en: '& Family',
      },
    },
  },

  // Our Story Cards
  story: [
    {
      title: {
        ta: 'முதல் சந்திப்பு',
        en: 'The Serendipity',
      },
      period: {
        ta: 'டிசம்பர் 2024, மார்கழி கச்சேரி',
        en: 'December 2024, Margazhi Season',
      },
      content: {
        ta: 'சென்னையின் மார்கழி இசை விழாவில், சுகமான நாதஸ்வர இன்னிசையின் பின்னணியில் தற்செயலாகத் தொடங்கிய உரையாடல்... வாழ்நாள் பந்தமாய் மலர்ந்த தருணம்.',
        en: 'A fleeting conversation amidst the divine melodies of the Margazhi Music Academy in Chennai blossomed into endless conversations and quiet laughter.',
      },
      icon: 'sparkles',
    },
    {
      title: {
        ta: 'மனம் இணைந்த தருணம்',
        en: 'Two Souls, One Heart',
      },
      period: {
        ta: 'சித்திரை 2025, கடற்கரை தென்றல்',
        en: 'April 2025, Bay of Bengal Sunset',
      },
      content: {
        ta: 'பாரம்பரியமும் நவீனமும் இணைந்த வாழ்க்கைக் கனவுகளைப் பகிர்ந்துகொண்டபோது, இருவரின் உள்ளங்களும் ஒன்றுக்கொன்று நிழலாய் நிலைத்திருக்க முடிவு செய்தன.',
        en: 'Sharing shared dreams, values rooted in heritage, and a love for filter coffee, we realized that our journeys were forever intertwined.',
      },
      icon: 'heart',
    },
    {
      title: {
        ta: 'இருவீட்டார் ஆசி',
        en: 'Families Become One',
      },
      period: {
        ta: 'தை 2026, சுப தொடக்கம்',
        en: 'January 2026, Pongal Blessings',
      },
      content: {
        ta: 'இரு குடும்பங்களின் பெரியோர்களும் கூடி, பூவும் பொன்னும் வைத்து, சந்தோஷக் கண்ணீருடன் நம் பந்தத்திற்கு மனமுவந்து ஒப்புதல் தந்து ஆசீர்வதித்தனர்.',
        en: 'With traditional sweets, silk sarees, and the joyous blessings of our parents and elders, two loving families embraced each other as one.',
      },
      icon: 'users',
    },
  ],

  // Scratch Card Date Teasers
  scratchCard: {
    title: {
      ta: 'சுப திருமண தேதியை அறிய சொரண்டவும்',
      en: 'Scratch to Reveal Our Sacred Date',
    },
    hint: {
      ta: 'விரலால் அல்லது மவுஸால் சொரண்டிப் பாருங்கள் ✨',
      en: 'Rub gently with your finger or mouse ✨',
    },
    teasers: [
      { ta: 'குறித்து', en: 'Mark' },
      { ta: 'வைத்துக்கொள்ளுங்கள்', en: 'The Auspicious' },
      { ta: 'நாளை', en: 'Date' }
    ],
    revealedMessage: {
      ta: 'எங்கள் பெருநாளில் உங்கள் வருகையை ஆவலுடன் எதிர்நோக்குகிறோம்!',
      en: 'We eagerly anticipate celebrating our most sacred day with you!',
    },
    scratchAgainBtn: {
      ta: 'மீண்டும் சொரண்டுக',
      en: 'Scratch Again',
    },
  },

  // Countdown Units
  countdown: {
    days: { ta: 'நாட்கள்', en: 'Days' },
    hours: { ta: 'மணி', en: 'Hours' },
    minutes: { ta: 'நிமிடங்கள்', en: 'Mins' },
    seconds: { ta: 'நொடிகள்', en: 'Secs' },
    subTitle: {
      ta: 'மங்கள முகூர்த்தத்திற்கான புனித நேரம் நெருங்குகிறது',
      en: 'Counting down the auspicious moments until the sacred vows',
    },
  },

  // Gallery Images (High-quality themed pre-wedding visuals)
  gallery: [
    {
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
      caption: {
        ta: 'பாரம்பரிய காஞ்சிபுரம் பட்டு & மல்லிகை மலர்கள்',
        en: 'Traditional Kanchipuram Silk & Fragrant Jasmine',
      },
    },
    {
      url: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80',
      caption: {
        ta: 'கோவில் வாசலில் கைகோர்த்த தருணம்',
        en: 'Walking Hand-in-Hand at the Temple Gateway',
      },
    },
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
      caption: {
        ta: 'பொன் சிரிப்பும் புன்னகையும்',
        en: 'Joyous Smiles & Golden Hopes',
      },
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
      caption: {
        ta: 'அமைதியான மாலைப் பொழுதில் ஒரு நினைவலை',
        en: 'Quiet Moments in the Sunset Glow',
      },
    },
    {
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80',
      caption: {
        ta: 'வாழ்நாள் பந்தத்தின் இனிய ஆரம்பம்',
        en: 'The Beautiful Prelude to Forever',
      },
    },
  ],

  // RSVP Form Configuration
  rsvp: {
    title: {
      ta: 'நிகழ்வில் பங்கேற்பை உறுதிசெய்க (RSVP)',
      en: 'Confirm Your Gracious Presence (RSVP)',
    },
    description: {
      ta: 'தங்கள் வரவினை முன்கூட்டியே தெரிவிப்பது விருந்து மற்றும் உபசரிப்பு ஏற்பாடுகளை சிறப்பாக செய்ய உதவும்.',
      en: 'Kindly let us know if you will be able to join us in our celebrations.',
    },
    nameLabel: { ta: 'உங்கள் பெயர் / Your Name', en: 'Full Name' },
    phoneLabel: { ta: 'தொலைபேசி எண் / Phone Number', en: 'Phone Number' },
    attendingLabel: { ta: 'வருகை உறுதி / Will You Attend?', en: 'Will you attend?' },
    options: {
      yes: { ta: 'ஆம், மகிழ்ச்சியுடன் வருகை தருகிறேன்', en: 'Joyfully Yes, I / We will attend' },
      no: { ta: 'மன்னிக்கவும், வர இயலவில்லை (வாழ்த்துகள்)', en: 'Regretfully No, sending blessings' },
    },
    guestsLabel: { ta: 'வருபவர்களின் எண்ணிக்கை / Number of Guests', en: 'Number of Guests' },
    messageLabel: { ta: 'மணமக்களுக்கான தங்களின் வாழ்த்துச் செய்தி / Blessings or Message', en: 'Blessings & Message for the Couple' },
    submitBtn: { ta: 'வாழ்த்துடன் சமர்ப்பிக்கவும் ✨', en: 'Send RSVP & Blessings ✨' },
    successMessage: {
      ta: 'மிக்க நன்றி! தங்களின் வாழ்த்தும் வரவும் பதிவு செய்யப்பட்டது. மலர்மழை பொழிகிறது! 🌸',
      en: 'Thank you heartily! Your RSVP and blessings have been recorded. Shower of flowers upon you! 🌸',
    },
    // Optional integration endpoints
    googleFormUrl: '', 
    formspreeEndpoint: '',
  },

  // WhatsApp Share Message
  whatsapp: {
    buttonText: {
      ta: 'வாட்ஸ்அப்பில் பகிர்க',
      en: 'Share on WhatsApp',
    },
    shareMessage: (lang = 'ta') => {
      if (lang === 'ta') {
        return encodeURIComponent(
          `🙏 அன்புடையீர் வணக்கம்!\n\n` +
          `கமலி & யோகேஷ்குமார் இருவீட்டார் மனமுவந்து நடத்தும் மங்களகரமான சுபமுகூர்த்த திருமண அழைப்பிதழ்:\n\n` +
          `📅 தேதி: 22 நவம்பர் 2026 (கார்த்திகை 06, ஞாயிற்றுக்கிழமை)\n` +
          `⏰ முகூர்த்தம்: அதிகாலை (Early Morning) - கொடுமுடி ஈஸ்வரன் கோவில்\n` +
          `🎉 வரவேற்பு: காலை 8:30 - 10:30 மணி - சிந்து மஹால், பரமத்தி வேலூர்\n\n` +
          `அழைப்பிதழைத் திறந்து பார்க்கவும்: ${window.location.href}\n\n` +
          `தாங்களும் தங்கள் குடும்பத்தாரும் வருகை தந்து மணமக்களை வாழ்த்த அன்புடன் அழைக்கின்றோம்!`
        );
      }
      return encodeURIComponent(
        `🙏 Warm Greetings!\n\n` +
        `You are cordially invited to the wedding celebration of Kamali & Yogeshkumar:\n\n` +
        `📅 Date: 22 November 2026 (Sunday, Karthigai 06)\n` +
        `⏰ Muhurtham: Early Morning - Kodumudi Eswaran Temple\n` +
        `🎉 Reception: 8:30 AM - 10:30 AM - Sindhu Mahal, Paramathi Velur\n\n` +
        `Open the interactive invitation: ${window.location.href}\n\n` +
        `Please grace the occasion and shower your blessings on the couple!`
      );
    },
  },

  // Opening screen copy
  opening: {
    welcome: {
      ta: 'அன்புடையீர் வணக்கம்',
      en: 'Vanakkam & Welcome',
    },
    subWelcome: {
      ta: 'மங்களகரமான சுபமுகூர்த்த திருமண அழைப்பிதழ்',
      en: 'Sacred Subha Muhurtham Wedding Invitation',
    },
    openCardBtn: {
      ta: 'அழைப்பிதழைத் திறக்க / Tap to Open',
      en: 'Open the Invitation / அழைப்பிதழைத் திறக்க',
    },
    skipBtn: {
      ta: 'நேரடியாக உள்ளே செல்ல (Skip) →',
      en: 'Enter Directly (Skip) →',
    },
    loadingText: {
      ta: 'மங்கள விளக்கு ஏற்றப்படுகிறது...',
      en: 'Lighting the sacred lamp...',
    },
  },

  // UI labels & helpers
  labels: {
    replayOpening: {
      ta: 'அழைப்பிதழை மீண்டும் காண்க',
      en: 'Replay Invitation Opening',
    },
    musicOn: {
      ta: 'இன்னிசை ஒலிக்கிறது',
      en: 'Music Playing',
    },
    musicOff: {
      ta: 'இன்னிசையை இயக்க',
      en: 'Play Music',
    },
    addToCalendar: {
      ta: 'நாட்காட்டியில் சேர்க்க (.ics)',
      en: 'Add to Calendar (.ics)',
    },
    getDirections: {
      ta: 'வழிகாட்டி வரைபடம் (Get Directions)',
      en: 'Get Directions (Google Maps)',
    },
    valgaValamudan: {
      ta: 'வாழ்க வளமுடன்',
      en: 'May You Prosper With Divine Grace',
    },
    footerLine: {
      ta: 'அன்போடு அழைக்கும் இரு குடும்பத்தினர்',
      en: 'Warmly Welcomed by Both Families',
    },
  },
};

