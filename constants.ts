import { Calendar, CreditCard, Image as ImageIcon, Globe } from "lucide-react";
import { NavItem, Feature, Language } from "./types";

export const APP_NAME = "Jamaa";

export const getNavItems = (lang: Language): NavItem[] => {
  const t = TRANSLATIONS[lang];
  return [
    { label: t.nav.plan, href: "#plan" },
    { label: t.nav.chat, href: "#chat" },
    { label: t.nav.places, href: "#places" },
    { label: t.nav.features, href: "#features" },
  ];
};

export const getFeatures = (lang: Language): Feature[] => {
  const t = TRANSLATIONS[lang];
  return [
    {
      title: t.features.scheduling.title,
      description: t.features.scheduling.desc,
      icon: Calendar,
    },
    {
      title: t.features.qatta.title,
      description: t.features.qatta.desc,
      icon: CreditCard,
    },
    {
      title: t.features.memories.title,
      description: t.features.memories.desc,
      icon: ImageIcon,
    },
    {
      title: t.features.travel.title,
      description: t.features.travel.desc,
      icon: Globe,
    },
  ];
};

export const TRANSLATIONS = {
  en: {
    nav: {
      plan: "Plan",
      chat: "Chat",
      places: "Places",
      features: "Features",
      getApp: "Get App",
      download: "Download Now",
    },
    hero: {
      badge: "The Future of Gatherings",
      sentence: "Your People. Your Plans.",
      highlight: "",
      desc: "From arranging the weekly Esteraha to planning your next trip to Abha. Jamaa handles the logistics, the chat, and the Qatta—all in one smooth experience.",
      download: "Download APK",
      demo: "View Demo",
      available: "Available on iOS & Android",
      free: "Free for everyone",
      location: "Gathering Point",
      locationName: "Bujairi Terrace",
    },
    detailed: {
      plan: {
        title: "Plan Gatherings in Minutes",
        desc: "Whether it's booking the Esteraha, planning a Kashta, or just a family dinner. Jamaa keeps everyone on the same page.",
        bullets: [
          "Create a virtual gathering room instantly",
          "Invite your friends or family instantly",
          "Manage members with one tap",
          "Even schedule repeating gatherings (daily, weekly, monthly)",
        ],
      },
      chat: {
        title: "Chat Together in One Place",
        desc: "KEvery gathering includes its own group chat. clean, organized, and dedicated.",
        bullets: [
          "Send messages instantly",
          "Share photos, videos, and links",
          "Built-in polls for group decisions",
          "Smart AI assistant for suggestions",
        ],
      },
      places: {
        title: "Find the Perfect Spot",
        desc: "From specialized coffee shops to fine dining in the latest zones. Discover places that fit your vibe and budget.",
        bullets: [
          "Search cafés, restaurants, events, and fun spots",
          "Get smart recommendations based on your group’s preferences",
          "Vote on suggested places",
          "Or choose Surprise Mode and let Jamaa pick a spot for you",
        ],
      },
    },
    features: {
      title: "Everything You Need to",
      titleHighlight: "Connect",
      desc: "From the weekly Esteraha to your big summer trip, we have the tools to make it happen.",
      scheduling: {
        title: "Smart Scheduling",
        desc: "Coordinate timings easily. We'll find the perfect slot that works for everyone's schedule.",
      },
      qatta: {
        title: "Split the Qatta",
        desc: "No more awkward math at the Esteraha. Jamaa tracks who paid what and settles the Qatta fairly.",
      },
      memories: {
        title: "Memories Saved",
        desc: "From the Kashta to the Chalet, all your photos and videos are saved automatically in one shared album.",
      },
      travel: {
        title: "Travel Mode",
        desc: "Planning a road trip to AlUla or a flight to London? Manage flights, hotels, and itinerary in one place.",
      },
    },
    cta: {
      title: "Built for the Saudi Social Life",
      desc: "Whether it's a quick coffee after class, a weekend at the Esteraha, or a family trip — Jamaa is designed to make your plans feel effortless.",
      download: "Download App",
    },
    footer: {
      tagline: "Plan better. Decide faster. Enjoy more.",
      product: "Product",
      legal: "Legal",
      links: {
        features: "Features",
        pricing: "Pricing",
        download: "Download",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        cookies: "Cookie Policy",
      },
      rights: "All rights reserved.",
      designed: "Designed for your social life.",
    },
    mockup: {
      home: {
        welcome: "Ya Hala, Faisal! 👋",
        subtitle: "Ready for the weekend?",
        tonight: "TONIGHT",
        padel: "Padel Match 🎾",
        date: "Today, 10:00 PM",
        gatherings: "Your Gatherings",
        kashta: "Kashta ⛺️",
        esteraha: "Thursday Esteraha",
        family: "Family Friday ❤️",
        locDropped: "Location dropped!",
        qattaMsg: "Qatta is 150 SAR each",
        lunchMsg: "Lunch at Grandma's",
      },
      plan: {
        title: "New Gathering",
        name: "Event Name",
        nameVal: "Weekend Esteraha",
        time: "Date & Time",
        timeVal: "Thu, Nov 24",
        timeLabel: "9:00 PM",
        invite: "Invite Friends",
        btn: "Create Event",
        repeat: "Repeat",
        daily: "Daily",
        weekly: "Weekly",
        monthly: "Monthly",
      },
      chat: {
        groupName: "Shabab Al-Khobar 🇸🇦",
        members: "8 members",
        msg1: "Who's bringing the Baloot cards? ♠️",
        msg2: "I got them. Is the coffee secured?",
        poll: "Poll",
        pollQ: "Dinner tonight?",
        pollOpt1: "Mandi 🍖",
        pollOpt2: "Burgers 🍔",
        type: "Type a message...",
      },
      places: {
        search: "Search for lounges, cafes...",
        popular: "Popular Nearby",
        place1: "Najd Village",
        place1Type: "Saudi Cuisine • SAR 85",
        place2: "Half Million",
        place2Type: "Specialty Coffee • SAR 18",
        menu: "Menu",
        vote: "Vote",
      },
    },
  },
  ar: {
    nav: {
      plan: "خطط",
      chat: "دردش",
      places: "أماكن",
      features: "ميزات",
      getApp: "حمل التطبيق",
      download: "حمل الآن",
    },
    hero: {
      badge: "مستقبل الجمعات",
      sentence: "ربعك، أهلك، خططكم… كلّها في تطبيق واحد.",
      highlight: "",
      desc: "مع Jamaa ما عاد فيه صجة التخطيط. أنشئ جمعتك، اختاروا المكان، دردشوا، وانتظموا وكلها بتجربة بسيطة ومرتّبة. طلعات، عزايم، قهوة، مذاكرة… كلها تصير أسهل.",
      download: "حمل التطبيق",
      demo: "جرب التطبيق",
      available: "متوفر على iOS و Android",
      free: "مجاني للجميع",
      location: "نقطة التجمع",
      locationName: "مطل البجيري",
    },
    detailed: {
      plan: {
        title: "خطط لجمعاتك في ثواني",
        desc: "ودّع كثرة الرسائل واللخبطة بين التطبيقات. مع Jamaa تقدر:",
        bullets: [
          "تنشئ جمعة بثواني",
          "تعزم أصحابك أو أهلك بسهولة",
          "تنظّم الحضور والمغادرة بلمسة وحدة",
          "تكرّر جمعتك الأسبوعية أو الشهرية تلقائيًا",
        ],
      },
      chat: {
        title: "شات مرتب… لكل جمعة مساحة خاصة",
        desc: "لكل جمعة شاتها الخاص... نظيف، واضح، ومرتّب. ولا ضياع للمعلومات وسط زحمة الواتساب. تقدّرون فيه:",
        bullets: [
          "تتراسلون مباشرة",
          "تشاركون صور، روابط، مواقع، وفيديوهات",
          "تسوّون تصويتات وألعاب خفيفة",
          "تستفيدون من المساعد الذكي داخل الشات",
        ],
      },
      places: {
        title: "اكتشف المكان المثالي",
        desc: "من قهاوي مختصة لأماكن عشاء راقية في أجدد المناطق. اكتشف أماكن تناسب جوكم وميزانيتكم.",
        bullets: [
          "ابحث عن أفضل الكافيهات والمطاعم",
          "فلتر الفعاليات، المطاعم والكافيهات",
          "نظام تصويت للمجموعة",
          "وضع المفاجأة لطلعات عفوية",
        ],
      },
    },
    features: {
      title: "كل اللي تحتاجه عشان",
      titleHighlight: "تضبط جمعتكم",
      desc: "من استراحة الخميس لسفرة الصيف الكبيرة، عندنا الأدوات اللي تضبط وضعكم.",
      scheduling: {
        title: "تنسيق الوقت",
        desc: "نسقوا المواعيد بسهولة. بنلقى لكم الوقت اللي يناسب جدول الكل.",
      },
      qatta: {
        title: "اقسم القطة",
        desc: "لا تشيل هم الحساب في الاستراحة. جمعة يحسب مين دفع ويسوي القطة بالعدل.",
      },
      memories: {
        title: "ذكريات محفوظة",
        desc: "من الكشتة للشاليه، كل صوركم وفيديوهاتكم تنحفظ تلقائياً في ألبوم مشترك.",
      },
      travel: {
        title: "وضع السفر",
        desc: "تخططون لروحة للعلا أو لندن؟ رتبوا الطيران، الفنادق، والجدول في مكان واحد.",
      },
    },
    cta: {
      title: "مصمم للحياة الاجتماعية السعودية",
      desc: "سواء كانت قهوة سريعة بعد الجامعة، ويكند في الاستراحة، أو سفرة عائلية... جمعة مصمم عشان يخلي خططكم أسهل.",
      download: "حمل التطبيق",
    },
    footer: {
      tagline: "خطط أفضل. قرر أسرع. استمتع أكثر.",
      product: "المنتج",
      legal: "قانوني",
      links: {
        features: "الميزات",
        pricing: "الأسعار",
        download: "التحميل",
        privacy: "سياسة الخصوصية",
        terms: "شروط الخدمة",
        cookies: "سياسة الكوكيز",
      },
      rights: "كل الحقوق محفوظة.",
      designed: "صمم لحياتك الاجتماعية.",
    },
    mockup: {
      home: {
        welcome: "يا هلا فيصل! 👋",
        subtitle: "جاهز للويكند؟",
        tonight: "الليلة",
        padel: "مباراة بادل 🎾",
        date: "اليوم، ١٠:٠٠ م",
        gatherings: "جمعاتك",
        kashta: "كشتة ⛺️",
        esteraha: "استراحة الخميس",
        family: "جمعة العائلة ❤️",
        locDropped: "تم إرسال الموقع!",
        qattaMsg: "القطة ١٥٠ ريال للشخص",
        lunchMsg: "الغداء عند الجدة",
      },
      plan: {
        title: "جمعة جديدة",
        name: "اسم المناسبة",
        nameVal: "استراحة الويكند",
        time: "الوقت والتاريخ",
        timeVal: "الخميس، ٢٤ نوفمبر",
        timeLabel: "٩:٠٠ م",
        invite: "اعزم ربعك",
        btn: "إنشاء المناسبة",
        repeat: "التكرار",
        daily: "يومي",
        weekly: "أسبوعي",
        monthly: "شهري",
      },
      chat: {
        groupName: "شلة الاستراحة 🎲",
        members: "٨ أعضاء",
        msg1: "يا عيال، البلوت مع مين؟ ♠️",
        msg2: "بالموتر عندي. بس لا تنسون الـ V60 ☕️",
        poll: "تصويت",
        pollQ: "العشاء الليلة؟",
        pollOpt1: "مندي 🍖",
        pollOpt2: "البيك 🍗",
        type: "اكتب رسالة...",
      },
      places: {
        search: "ابحث عن لاونج، كوفي...",
        popular: "الرائج حولك",
        place1: "قرية نجد",
        place1Type: "أكل سعودي • ٨٥ ريال",
        place2: "هاف مليون",
        place2Type: "قهوة مختصة • ١٨ ريال",
        menu: "المنيو",
        vote: "صوت",
      },
    },
  },
};
