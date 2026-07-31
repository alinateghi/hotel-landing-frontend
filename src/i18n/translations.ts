export type Language = 'en' | 'fa'

export const translations = {
  en: {
    nav: {
      links: [
        { label: 'About', href: '#about' },
        { label: 'Rooms', href: '#rooms' },
        { label: 'Restaurant', href: '#restaurant' },
        { label: 'Spa', href: '#spa' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Reviews', href: '#reviews' },
      ],
      reserve: 'Reserve',
    },
    hero: {
      eyebrow: 'Aurelia Hotel & Residences',
      headline: ['A Quiet', 'Kind of', 'Luxury.'],
      description:
        'Nestled between old cedar and quiet water, Aurelia is an invitation to slow down — where every room, every meal, every hour is composed with care.',
      cta: 'Reserve Your Stay',
      secondaryCta: 'Discover the Hotel',
      scroll: 'SCROLL',
    },
    about: {
      eyebrow: 'The Philosophy',
      title: 'Designed for those who notice the details.',
      p1: 'Aurelia was conceived as a slow architectural gesture — sculpted timber ceilings that ripple like water, hand-finished plaster walls lit from within, and a palette of deep emerald and warm gold drawn from the forest just beyond our windows.',
      p2: 'Every space was designed as part of a single, continuous journey — one that begins the moment you step through our doors, and lingers long after you leave.',
      stats: [
        { value: '48', label: 'Suites & Residences' },
        { value: '1', label: 'Michelin-noted Table' },
        { value: '120', label: 'Years of Craft' },
      ],
      imageBadge: 'Est. 1904 · Reimagined 2024',
    },
    lobby: {
      eyebrow: 'Step Inside',
      title: 'The Lobby',
      waypoints: [
        { caption: 'Sculpted timber overhead, like walking beneath a canopy of light.' },
        { caption: 'Emerald velvet and warm brass invite you to sit a while longer.' },
        { caption: 'A living room for the city — quiet, generous, unhurried.' },
      ],
      arrival: 'You have arrived.',
    },
    rooms: {
      eyebrow: 'Luxury Rooms & Suites',
      title: 'Rest, exactly as you imagined it.',
      cta: 'View Availability',
      items: [
        {
          name: 'Garden Room',
          size: '38 m²',
          view: 'Cedar Garden View',
          desc: 'Warm oak floors and a private reading nook overlooking the old cedar garden.',
        },
        {
          name: 'Aurelia Suite',
          size: '64 m²',
          view: 'Panoramic City & Forest View',
          desc: 'A sculptural freestanding tub, private terrace, and dressing room in warm champagne tones.',
        },
        {
          name: 'The Penthouse',
          size: '128 m²',
          view: 'Rooftop Terrace & Skyline',
          desc: 'Our signature residence — a private rooftop terrace, fireplace lounge, and butler service.',
        },
      ],
    },
    restaurant: {
      eyebrow: 'Restaurant & Bar',
      title: 'Ember & Oak',
      description:
        'An open hearth kitchen serving quiet, seasonal dishes drawn from the surrounding forest and coast — paired with a cellar of small, thoughtful producers.',
      dishes: [
        { name: 'Cedar-Smoked Trout', note: 'foraged herbs, brown butter' },
        { name: 'Aged Duck Breast', note: 'burnt honey, forest mushroom' },
        { name: 'Garden Tomato Tart', note: 'whipped goat curd, basil oil' },
      ],
    },
    spa: {
      eyebrow: 'Spa & Wellness',
      title: 'Stillness, drawn from the forest.',
      description:
        "Beneath the lobby's timber canopy, our spa unfolds across candlelit thermal pools, a private hammam, and treatment rooms scented with cedar and wild fig — a quiet counterpoint to the world outside.",
      rituals: [
        { name: 'Forest Bathing Massage', time: '75 min' },
        { name: 'Thermal Water Ritual', time: '90 min' },
        { name: 'Botanical Facial', time: '60 min' },
      ],
    },
    pool: {
      eyebrow: 'Swimming Pool',
      title: 'Float, beneath open sky.',
      description:
        'A 25-metre infinity pool traces the tree line, warmed year-round, with a submerged lounge deck and private cabanas for slow afternoons.',
      cta: 'Explore Facilities',
    },
    amenities: {
      eyebrow: 'Hotel Facilities',
      title: 'Every comfort, quietly arranged.',
      items: [
        { title: 'Private Fitness Studio', desc: 'Open 24 hours, with in-room training available.' },
        { title: 'Rooftop Bar', desc: 'Seasonal cocktails above the treeline at dusk.' },
        { title: '24-Hour In-Room Dining', desc: 'A quiet knock, any hour of the night.' },
        { title: 'Private Chauffeur', desc: 'Airport transfers in a fleet of electric vehicles.' },
        { title: 'Seamless Connectivity', desc: 'Fibre-speed Wi-Fi throughout the residence.' },
        { title: 'Welcoming to Companions', desc: 'A bed, bowl, and treat await your travel companion.' },
      ],
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'A closer look inside.',
      view: 'View',
      alts: [
        'Lobby lounge beneath the sculpted timber ceiling',
        'Reception desk with backlit sculptural panels',
        'Lobby seating nook, vertical view',
        'Emerald velvet lounge seating',
        'Reception hall, wide view',
      ],
    },
    testimonials: {
      eyebrow: 'Guest Reviews',
      title: 'Told, in their own words.',
      reviews: [
        {
          quote:
            'The kind of hotel you remember years later — not because it tried hard, but because it never had to.',
          name: 'Isabelle M.',
          trip: 'Anniversary Stay',
        },
        {
          quote:
            'From the lobby ceiling to the last cup of coffee, every detail felt considered. Genuinely restorative.',
          name: 'Daniel K.',
          trip: 'Solo Retreat',
        },
        {
          quote: 'Quiet luxury, done properly. The spa alone is worth the trip back.',
          name: 'Amara T.',
          trip: 'Wellness Weekend',
        },
      ],
    },
    booking: {
      eyebrow: 'Your Stay Awaits',
      title: 'Begin your journey at Aurelia.',
      description:
        'Complimentary breakfast, early check-in, and a welcome ritual await every direct reservation — available exclusively through our own front desk.',
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      guestLabel: 'Guest',
      guestLabelPlural: 'Guests',
      submit: 'Check Availability',
    },
    footer: {
      description: '12 Cedar Hollow Road, Willowmere. A quiet luxury retreat, open year-round.',
      exploreHeading: 'EXPLORE',
      hotelHeading: 'HOTEL',
      hotelLinks: ['Gallery', 'Reviews', 'Careers', 'Press'],
      connectedHeading: 'STAY CONNECTED',
      email: 'reservations@aurelia-hotel.com',
      phone: '+1 (555) 019 4821',
      rights: 'All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
    },
  },
  fa: {
    nav: {
      links: [
        { label: 'درباره ما', href: '#about' },
        { label: 'اتاق‌ها', href: '#rooms' },
        { label: 'رستوران', href: '#restaurant' },
        { label: 'اسپا', href: '#spa' },
        { label: 'گالری', href: '#gallery' },
        { label: 'نظرات', href: '#reviews' },
      ],
      reserve: 'رزرو',
    },
    hero: {
      eyebrow: 'هتل و اقامتگاه آورلیا',
      headline: ['سکوتی', 'به وسعتِ', 'تجمل.'],
      description:
        'میان درختان کهن سرو و آبی آرام، آورلیا دعوتی‌ست به آرام‌گرفتن؛ جایی که هر اتاق، هر وعده غذا و هر ساعت با دقتی خاص ساخته شده است.',
      cta: 'رزرو اقامت',
      secondaryCta: 'آشنایی با هتل',
      scroll: 'اسکرول کنید',
    },
    about: {
      eyebrow: 'فلسفه ما',
      title: 'طراحی‌شده برای آنان که جزئیات را می‌بینند.',
      p1: 'آورلیا با حرکتی معماری و آرام شکل گرفته است؛ سقف‌های چوبیِ موج‌دار همچون آب، دیوارهای گچی دست‌ساز که از درون نورپردازی شده‌اند، و پالتی از سبز عمیق و طلایی گرم، الهام‌گرفته از جنگل پشت پنجره‌های ما.',
      p2: 'هر فضا بخشی از یک سفر پیوسته است؛ سفری که از لحظه‌ی ورود شما آغاز می‌شود و مدت‌ها پس از خروج، در خاطر می‌ماند.',
      stats: [
        { value: '۴۸', label: 'سوئیت و اقامتگاه' },
        { value: '۱', label: 'رستوران میشلن' },
        { value: '۱۲۰', label: 'سال تجربه' },
      ],
      imageBadge: 'تأسیس ۱۹۰۴ · بازطراحی ۲۰۲۴',
    },
    lobby: {
      eyebrow: 'به داخل بیایید',
      title: 'لابی هتل',
      waypoints: [
        { caption: 'سقفی از چوب تراش‌خورده، گویی زیر سایه‌بانی از نور قدم می‌زنید.' },
        { caption: 'مخمل زمردی و برنج گرم، دعوتی‌ست برای ماندنی طولانی‌تر.' },
        { caption: 'اتاق نشیمنی برای شهر — آرام، سخاوتمند و بی‌عجله.' },
      ],
      arrival: 'به مقصد رسیدید.',
    },
    rooms: {
      eyebrow: 'اتاق‌ها و سوئیت‌های لوکس',
      title: 'آرامشی، درست همان‌طور که تصور کرده بودید.',
      cta: 'مشاهده موجودی',
      items: [
        {
          name: 'اتاق باغ',
          size: '۳۸ متر مربع',
          view: 'منظره باغ سرو',
          desc: 'کف‌پوش گرم چوب بلوط و گوشه‌ای خصوصی برای مطالعه، رو به باغ کهن سرو.',
        },
        {
          name: 'سوئیت آورلیا',
          size: '۶۴ متر مربع',
          view: 'منظره پانوراما شهر و جنگل',
          desc: 'وان مجسمه‌وارِ مستقل، تراس اختصاصی و اتاق لباس با رنگ‌های گرم شامپاینی.',
        },
        {
          name: 'پنت‌هاوس',
          size: '۱۲۸ متر مربع',
          view: 'تراس پشت‌بام و افق شهر',
          desc: 'اقامتگاه امضای ما — تراس اختصاصی پشت‌بام، نشیمن با شومینه و خدمات باتلر.',
        },
      ],
    },
    restaurant: {
      eyebrow: 'رستوران و بار',
      title: 'اِمبر اند اوک',
      description:
        'آشپزخانه‌ای با اجاق باز که غذاهایی آرام و فصلی از جنگل و ساحل اطراف سرو می‌کند — همراه با سلولی از تولیدکنندگان کوچک و دقیق.',
      dishes: [
        { name: 'قزل‌آلای دودی با چوب سرو', note: 'گیاهان معطر، کره قهوه‌ای' },
        { name: 'سینه اردک کهنه', note: 'عسل کاراملی، قارچ جنگلی' },
        { name: 'تارت گوجه باغی', note: 'پنیر بز فرم‌گرفته، روغن ریحان' },
      ],
    },
    spa: {
      eyebrow: 'اسپا و سلامتی',
      title: 'آرامشی، برگرفته از جنگل.',
      description:
        'زیر سایه‌بان چوبی لابی، اسپای ما در میان استخرهای حرارتی شمع‌دار، حمام ترکی اختصاصی و اتاق‌های درمانی معطر به سرو و انجیر وحشی گسترده شده — نقطه مقابلی آرام برای دنیای بیرون.',
      rituals: [
        { name: 'ماساژ جنگل‌درمانی', time: '۷۵ دقیقه' },
        { name: 'آیین آب حرارتی', time: '۹۰ دقیقه' },
        { name: 'فیشیال گیاهی', time: '۶۰ دقیقه' },
      ],
    },
    pool: {
      eyebrow: 'استخر شنا',
      title: 'زیر آسمان باز، شناور بمانید.',
      description:
        'استخر بی‌کران ۲۵ متری در امتداد خط درختان، تمام سال گرم نگه داشته می‌شود؛ همراه با سکوی نشیمن زیرآبی و کابانای اختصاصی برای بعدازظهرهای آرام.',
      cta: 'مشاهده امکانات',
    },
    amenities: {
      eyebrow: 'امکانات هتل',
      title: 'هر آسایشی، با آرامش چیده شده.',
      items: [
        { title: 'استودیوی بدنسازی اختصاصی', desc: 'باز به مدت ۲۴ ساعت، با امکان تمرین در اتاق.' },
        { title: 'بار پشت‌بام', desc: 'کوکتل‌های فصلی بالای خط درختان در غروب.' },
        { title: 'پذیرایی ۲۴ ساعته در اتاق', desc: 'ضربه‌ای آرام بر در، در هر ساعت از شب.' },
        { title: 'راننده اختصاصی', desc: 'ترانسفر فرودگاهی با ناوگانی از خودروهای برقی.' },
        { title: 'اتصال بی‌وقفه', desc: 'اینترنت پرسرعت فیبر در سراسر اقامتگاه.' },
        { title: 'پذیرای همراهان', desc: 'تخت، ظرف و جایزه‌ای منتظر همراه سفر شماست.' },
      ],
    },
    gallery: {
      eyebrow: 'گالری',
      title: 'نگاهی نزدیک‌تر به داخل.',
      view: 'مشاهده',
      alts: [
        'نشیمن لابی زیر سقف چوبی تراش‌خورده',
        'میز پذیرش با پانل‌های مجسمه‌ای نورپردازی‌شده',
        'گوشه نشیمن لابی، نمای عمودی',
        'نشیمن مخملی زمردی',
        'سالن پذیرش، نمای باز',
      ],
    },
    testimonials: {
      eyebrow: 'نظرات مهمانان',
      title: 'به روایت خودشان.',
      reviews: [
        {
          quote: 'هتلی که سال‌ها بعد هم به یاد می‌آورید — نه به این خاطر که تلاش زیادی کرده، بلکه چون هرگز نیازی به آن نداشته.',
          name: 'ایزابل م.',
          trip: 'اقامت سالگرد',
        },
        {
          quote: 'از سقف لابی تا آخرین فنجان قهوه، هر جزئیاتی با دقت انتخاب شده بود. واقعاً آرامش‌بخش.',
          name: 'دانیال ک.',
          trip: 'سفر انفرادی',
        },
        {
          quote: 'تجملی آرام، به‌درستی اجرا شده. فقط اسپا ارزش بازگشت را دارد.',
          name: 'آمارا ت.',
          trip: 'آخر هفته سلامتی',
        },
      ],
    },
    booking: {
      eyebrow: 'اقامت شما در انتظار است',
      title: 'سفر خود را در آورلیا آغاز کنید.',
      description:
        'صبحانه رایگان، ورود زودهنگام و آیین خوش‌آمدگویی، در انتظار هر رزرو مستقیم است — تنها از طریق پذیرش خودمان.',
      checkIn: 'ورود',
      checkOut: 'خروج',
      guests: 'مهمانان',
      guestLabel: 'مهمان',
      guestLabelPlural: 'مهمان',
      submit: 'بررسی موجودی',
    },
    footer: {
      description: 'خیابان سدار هالو ۱۲، ویلومر. اقامتگاهی آرام و لوکس، در تمام طول سال باز است.',
      exploreHeading: 'کاوش',
      hotelHeading: 'هتل',
      hotelLinks: ['گالری', 'نظرات', 'فرصت‌های شغلی', 'مطبوعات'],
      connectedHeading: 'در ارتباط باشید',
      email: 'reservations@aurelia-hotel.com',
      phone: '+1 (555) 019 4821',
      rights: 'تمامی حقوق محفوظ است.',
      privacy: 'حریم خصوصی',
      terms: 'قوانین',
    },
  },
} satisfies Record<Language, Record<string, unknown>>

export default translations
