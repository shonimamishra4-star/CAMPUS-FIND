/**
 * CampusFind - College Lost & Found Portal
 * Complete JavaScript Application Logic with Authentication
 */

// Initial Seed Users for Demo
const DEFAULT_USERS = [
  {
    name: "Rahul Sharma",
    rollNo: "2105128",
    email: "rahul@campus.edu",
    phone: "+91 98765 43210",
    dept: "Computer Science & Engg",
    password: "password123",
    role: "student"
  },
  {
    name: "Priya Sundaram",
    rollNo: "210549",
    email: "priya.s@campus.edu",
    phone: "+91 98111 22334",
    dept: "Electronics & Comm Engg",
    password: "password123",
    role: "student"
  },
  {
    name: "Officer Singh",
    rollNo: "SEC-01",
    email: "security@campus.edu",
    phone: "+91 674 270 5000",
    dept: "Campus Security Desk",
    password: "password123",
    role: "security"
  }
];

// Initial Seed Data for Demo
const DEFAULT_ITEMS = [
  {
    id: "item-101",
    title: "Boat Airdopes 141 (Black Case)",
    type: "found",
    category: "electronics",
    location: "Central Cafeteria",
    specificLocation: "Table 14 near the juice counter",
    dateTime: "2026-11-03T14:30",
    description: "Found a black wireless earbuds charging case. Has a small carbon-fiber texture sticker on the back. Has about 70% charge left.",
    identifyingMarks: "Carbon fiber pattern sticker, minor scratch on hinge",
    custody: "security_desk",
    custodyDetail: "Deposited at Central Security Desk (Desk Ref: #SEC-412)",
    contactName: "Arjun Verma (Student Council)",
    contactPhone: "+91 98765 43210",
    contactEmail: "arjun.v@campus.edu",
    status: "available",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
    reward: ""
  },
  {
    id: "item-102",
    title: "Dell 65W USB-C Laptop Charger",
    type: "lost",
    category: "electronics",
    location: "Central Library",
    specificLocation: "2nd Floor Silent Reading Cubicle #28",
    dateTime: "2026-11-03T11:15",
    description: "Left my black original Dell 65W Type-C adapter plugged in at Cubicle 28 during lunch break. Came back and it was missing.",
    identifyingMarks: "Has a red insulation tape wrapped near the USB-C pin tip",
    custody: "with_finder",
    custodyDetail: "Need it urgently for upcoming lab exam!",
    contactName: "Priya Sundaram (Roll: 210549)",
    contactPhone: "+91 98111 22334",
    contactEmail: "priya.s@campus.edu",
    status: "available",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=600&auto=format&fit=crop&q=80",
    reward: "₹200 Treat at Canteen"
  },
  {
    id: "item-103",
    title: "Student ID Card - Rahul Sharma (CSE)",
    type: "found",
    category: "cards",
    location: "Tech & CS Block",
    specificLocation: "Staircase between 1st and 2nd Floor",
    dateTime: "2026-11-02T16:45",
    description: "Found a laminated university RFID student card. Name: Rahul Sharma, Dept of Computer Science & Engg, Batch 2023-2027.",
    identifyingMarks: "Blue lanyard with college emblem",
    custody: "security_desk",
    custodyDetail: "Kept at CS Department Academic Office (Room 102)",
    contactName: "Prof. S. Dasgupta",
    contactPhone: "+91 94333 11223",
    contactEmail: "cs.office@campus.edu",
    status: "available",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",
    reward: ""
  },
  {
    id: "item-104",
    title: "Casio FX-991CW Scientific Calculator",
    type: "lost",
    category: "stationery",
    location: "Science & Engineering Labs",
    specificLocation: "Physics Lab 3, Workbench #7",
    dateTime: "2026-11-02T13:00",
    description: "Black Casio ClassWiz calculator lost during practical session. Needed for mid-sem exams this Thursday.",
    identifyingMarks: "Small Naruto sticker inside the sliding cover",
    custody: "with_finder",
    custodyDetail: "Kindly return or inform, reward guaranteed",
    contactName: "Ananya Roy",
    contactPhone: "+91 98777 66554",
    contactEmail: "ananya.r@campus.edu",
    status: "available",
    image: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=600&auto=format&fit=crop&q=80",
    reward: "₹300 Cash Reward"
  },
  {
    id: "item-105",
    title: "Set of 3 Keys with Iron Man Keychain",
    type: "found",
    category: "keys",
    location: "Boys Hostels Complex",
    specificLocation: "Basketball court bench near Hostel 3",
    dateTime: "2026-11-01T18:20",
    description: "Two Godrej small cabinet keys and one brass room lock key attached to a metal Iron Man helmet ring.",
    identifyingMarks: "Hostel block room number etched faintly on one key",
    custody: "security_desk",
    custodyDetail: "Handed over to Hostel 3 Warden Office Desk",
    contactName: "Hostel 3 Security Post",
    contactPhone: "+91 91234 56789",
    contactEmail: "hostel3.guard@campus.edu",
    status: "available",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&auto=format&fit=crop&q=80",
    reward: ""
  },
  {
    id: "item-106",
    title: "Wildcraft Grey Water-Resistant Backpack",
    type: "lost",
    category: "bags",
    location: "Main Auditorium",
    specificLocation: "Row G, Seat 14 during Orientation",
    dateTime: "2026-10-31T17:30",
    description: "Contains 3 engineering mathematics spiral notebooks, a black umbrella, and college registration documents.",
    identifyingMarks: "Small tear near right bottle mesh pocket, blue zipper tag",
    custody: "with_finder",
    custodyDetail: "Has very important handwritten notes before exams!",
    contactName: "Karthik Nair",
    contactPhone: "+91 99887 76655",
    contactEmail: "karthik.n@campus.edu",
    status: "claimed",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    reward: "₹500 Reward"
  },
  {
    id: "item-107",
    title: "Noise ColorFit Pulse 2 Smartwatch",
    type: "found",
    category: "accessories",
    location: "Sports Complex & Gym",
    specificLocation: "Badminton Court 2 changing room locker bench",
    dateTime: "2026-11-01T20:00",
    description: "Olive green strap smartwatch with matte black dial. The screen displays low battery warning.",
    identifyingMarks: "Custom wallpaper with anime character, small scuff on crown dial",
    custody: "with_finder",
    custodyDetail: "With Sports Secretary Rohan (call to collect)",
    contactName: "Rohan Patel (Sports Sec)",
    contactPhone: "+91 97654 32109",
    contactEmail: "sports.council@campus.edu",
    status: "available",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    reward: ""
  },
  {
    id: "item-108",
    title: "Milton Thermosteel Silver Flask (750ml)",
    type: "found",
    category: "bottles",
    location: "Central Library",
    specificLocation: "1st Floor Periodicals section shelf 4",
    dateTime: "2026-11-03T10:00",
    description: "Metallic silver insulated bottle with black rubber handle cap.",
    identifyingMarks: "Sticker saying 'Code. Eat. Sleep. Repeat'",
    custody: "security_desk",
    custodyDetail: "Deposited at Library Ground Floor Reception",
    contactName: "Library Helpdesk",
    contactPhone: "+91 674 270 5000",
    contactEmail: "library@campus.edu",
    status: "available",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80",
    reward: ""
  }
];

const DEFAULT_CLAIMS = [
  {
    id: "claim-1",
    itemId: "item-106",
    itemTitle: "Wildcraft Grey Water-Resistant Backpack",
    claimantName: "Karthik Nair",
    claimantId: "2103401",
    claimantPhone: "+91 99887 76655",
    proofDetails: "The notebooks inside have 'Karthik Nair, Dept of Mech' written on page 1. Umbrella inside is dark navy blue with a wooden handle.",
    status: "approved",
    submittedAt: "2026-11-01T09:30"
  },
  {
    id: "claim-2",
    itemId: "item-101",
    itemTitle: "Boat Airdopes 141 (Black Case)",
    claimantName: "Sneha Mukherjee",
    claimantId: "2205112",
    claimantPhone: "+91 97112 33445",
    proofDetails: "Left earbud has a tiny blue marker dot on inner rim. Bluetooth paired name in my phone is 'Sneha's Beats'.",
    status: "pending",
    submittedAt: "2026-11-03T16:15"
  }
];

const CAMPUS_LOCATIONS = [
  { id: "all", name: "All Locations", count: 0 },
  { id: "Central Library", name: "Central Library", zone: "Zone A", count: 0 },
  { id: "Tech & CS Block", name: "Tech & CS Block", zone: "Zone B", count: 0 },
  { id: "Science & Engineering Labs", name: "Science & Engg Labs", zone: "Zone C", count: 0 },
  { id: "Central Cafeteria", name: "Central Cafeteria & Canteen", zone: "Zone D", count: 0 },
  { id: "Sports Complex & Gym", name: "Sports Complex & Gym", zone: "Zone E", count: 0 },
  { id: "Main Auditorium", name: "Main Auditorium & SAC", zone: "Zone F", count: 0 },
  { id: "Boys Hostels Complex", name: "Boys Hostels Complex", zone: "Zone G", count: 0 },
  { id: "Girls Hostels Complex", name: "Girls Hostels Complex", zone: "Zone H", count: 0 },
  { id: "Campus Main Gate", name: "Main Gate & Bus Stop", zone: "Zone I", count: 0 }
];

// Application State
class CampusFindApp {
  constructor() {
    this.items = this.loadFromStorage('campus_items', DEFAULT_ITEMS);
    this.claims = this.loadFromStorage('campus_claims', DEFAULT_CLAIMS);
    this.users = this.loadFromStorage('campus_users', DEFAULT_USERS);
    this.currentUser = this.loadFromStorage('campus_current_user', null);
    this.currentTheme = localStorage.getItem('campus_theme') || 'light';
    this.activeTab = 'browse';
    this.activeTypeFilter = 'all'; // all | lost | found
    this.activeCategory = 'all';
    this.activeLocation = 'all';
    this.searchQuery = '';
    this.sortBy = 'newest';
    this.selectedItemForModal = null;
    this.selectedItemForPoster = null;
    this.pendingAction = null; // Stored action before login redirect

    this.init();
  }

  loadFromStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.warn(`Failed to read ${key} from localStorage, using fallback:`, e);
      return fallback;
    }
  }

  saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(`Failed to save ${key} to localStorage:`, e);
    }
  }

  init() {
    this.applyTheme(this.currentTheme);
    this.renderAuthUI();
    this.setupEventListeners();
    this.updateStats();
    this.renderItems();
    this.renderMapLocations();
    this.renderClaimsTable();
    this.renderPosterDropdown();
    this.checkSmartMatches();
    this.handleDeepLinks();
  }

  /* ==========================================================================
     AUTHENTICATION SYSTEM
     ========================================================================== */

  renderAuthUI() {
    const navAuthContainer = document.getElementById('nav-auth-container');
    if (!navAuthContainer) return;

    if (!this.currentUser) {
      navAuthContainer.innerHTML = `
        <button id="btn-nav-login" class="btn btn-primary btn-sm" onclick="app.openAuthModal('signin')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          <span>Log In</span>
        </button>
      `;
    } else {
      const initials = this.currentUser.name
        .split(' ')
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

      navAuthContainer.innerHTML = `
        <div class="user-profile-nav" title="Logged in as ${this.currentUser.name} (${this.currentUser.rollNo})">
          <div class="user-avatar">${initials}</div>
          <div class="user-info-text">
            <span class="user-name-display">${this.currentUser.name}</span>
            <span class="user-role-badge">Roll: ${this.currentUser.rollNo}</span>
          </div>
          <button class="btn-logout" title="Log Out" onclick="app.logout()">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
          </button>
        </div>
      `;
    }
  }

  // Intercept report actions to require login
  requestReportItem(type = 'lost') {
    if (!this.currentUser) {
      this.pendingAction = { action: 'report', type: type };
      this.openAuthModal('signin', `Please log in with your college credentials to report a ${type.toUpperCase()} item.`);
    } else {
      this.openReportModal(type);
    }
  }

  openAuthModal(tab = 'signin', calloutMessage = '') {
    const calloutEl = document.getElementById('auth-callout-msg');
    const calloutText = document.getElementById('auth-callout-text');

    if (calloutEl && calloutText) {
      if (calloutMessage) {
        calloutText.innerHTML = calloutMessage;
        calloutEl.style.display = 'flex';
      } else {
        calloutEl.style.display = 'none';
      }
    }

    this.switchAuthTab(tab);
    this.openModal('auth-modal');
  }

  switchAuthTab(tab) {
    const btnSignin = document.getElementById('tab-auth-signin');
    const btnSignup = document.getElementById('tab-auth-signup');
    const btnDemo = document.getElementById('tab-auth-demo');

    const formSignin = document.getElementById('auth-signin-form');
    const formSignup = document.getElementById('auth-signup-form');
    const viewDemo = document.getElementById('auth-demo-view');

    if (btnSignin) btnSignin.classList.toggle('active', tab === 'signin');
    if (btnSignup) btnSignup.classList.toggle('active', tab === 'signup');
    if (btnDemo) btnDemo.classList.toggle('active', tab === 'demo');

    if (formSignin) formSignin.style.display = (tab === 'signin') ? 'block' : 'none';
    if (formSignup) formSignup.style.display = (tab === 'signup') ? 'block' : 'none';
    if (viewDemo) viewDemo.style.display = (tab === 'demo') ? 'block' : 'none';
  }

  handleSignIn(event) {
    event.preventDefault();
    const emailOrRoll = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value;

    // Look up in existing users list
    let user = this.users.find(u =>
      u.email.toLowerCase() === emailOrRoll.toLowerCase() ||
      u.rollNo.toLowerCase() === emailOrRoll.toLowerCase()
    );

    // If user not found, create a temporary student account from credentials
    if (!user) {
      user = {
        name: emailOrRoll.includes('@') ? emailOrRoll.split('@')[0] : `Student (${emailOrRoll})`,
        rollNo: emailOrRoll.includes('@') ? '2105999' : emailOrRoll,
        email: emailOrRoll.includes('@') ? emailOrRoll : `${emailOrRoll}@campus.edu`,
        phone: "+91 98765 00000",
        dept: "General Student",
        password: password || "password123",
        role: "student"
      };
      this.users.push(user);
      this.saveToStorage('campus_users', this.users);
    }

    this.currentUser = user;
    this.saveToStorage('campus_current_user', this.currentUser);

    this.renderAuthUI();
    this.closeModal('auth-modal');
    this.showToast(`Logged in successfully as ${user.name}!`, 'success');

    // Execute pending action if user was redirected from clicking lost/found
    if (this.pendingAction) {
      if (this.pendingAction.action === 'report') {
        const typeToOpen = this.pendingAction.type;
        this.pendingAction = null;
        setTimeout(() => this.openReportModal(typeToOpen), 200);
      } else {
        this.pendingAction = null;
      }
    }
  }

  handleSignUp(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value.trim();
    const rollNo = document.getElementById('signup-roll').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const phone = document.getElementById('signup-phone').value.trim();
    const password = document.getElementById('signup-password').value;

    const newUser = {
      name,
      rollNo,
      email,
      phone,
      dept: "Student",
      password,
      role: "student"
    };

    this.users.push(newUser);
    this.saveToStorage('campus_users', this.users);

    this.currentUser = newUser;
    this.saveToStorage('campus_current_user', this.currentUser);

    this.renderAuthUI();
    this.closeModal('auth-modal');
    this.showToast(`Welcome to CampusFind, ${name}! Account created.`, 'success');

    if (this.pendingAction) {
      if (this.pendingAction.action === 'report') {
        const typeToOpen = this.pendingAction.type;
        this.pendingAction = null;
        setTimeout(() => this.openReportModal(typeToOpen), 200);
      } else {
        this.pendingAction = null;
      }
    }
  }

  loginAsDemo(profileKey) {
    let demoUser;
    if (profileKey === 'rahul') {
      demoUser = this.users.find(u => u.rollNo === '2105128') || DEFAULT_USERS[0];
    } else if (profileKey === 'priya') {
      demoUser = this.users.find(u => u.rollNo === '210549') || DEFAULT_USERS[1];
    } else if (profileKey === 'security') {
      demoUser = this.users.find(u => u.rollNo === 'SEC-01') || DEFAULT_USERS[2];
    }

    if (demoUser) {
      this.currentUser = demoUser;
      this.saveToStorage('campus_current_user', this.currentUser);
      this.renderAuthUI();
      this.closeModal('auth-modal');
      this.showToast(`Authenticated as ${demoUser.name} (${demoUser.role})`, 'success');

      if (this.pendingAction) {
        if (this.pendingAction.action === 'report') {
          const typeToOpen = this.pendingAction.type;
          this.pendingAction = null;
          setTimeout(() => this.openReportModal(typeToOpen), 200);
        } else {
          this.pendingAction = null;
        }
      }
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('campus_current_user');
    this.renderAuthUI();
    this.showToast('You have logged out of CampusFind.', 'info');
  }

  /* ==========================================================================
     SHARING & DEEP LINKING
     ========================================================================== */

  handleDeepLinks() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemIdFromParam = urlParams.get('item');
    const hash = window.location.hash ? window.location.hash.replace('#', '') : '';
    const targetId = itemIdFromParam || (hash.startsWith('item-') ? hash : null);

    if (targetId) {
      const item = this.items.find(i => i.id === targetId);
      if (item) {
        setTimeout(() => {
          this.switchTab('browse');
          this.showItemDetailModal(item.id);
          this.showToast(`Opened shared item: "${item.title}"`, 'info');
        }, 350);
      }
    }
  }

  getSharableUrl(itemId = null) {
    let base = window.location.href.split('?')[0].split('#')[0];
    if (base.endsWith('#')) base = base.slice(0, -1);
    return itemId ? `${base}?item=${itemId}` : base;
  }

  openSharePortalModal(customUrl = null, title = 'Share CampusFind Portal') {
    const url = customUrl || this.getSharableUrl();
    const input = document.getElementById('share-link-input');
    const qrImg = document.getElementById('share-qr-image');
    const titleEl = document.getElementById('share-modal-title');

    if (input) input.value = url;
    if (titleEl) titleEl.innerText = title;
    if (qrImg) {
      qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(url)}`;
    }

    this.currentShareUrl = url;
    this.openModal('share-modal');
  }

  shareItemLink(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    const url = this.getSharableUrl(item.id);
    const title = `[${item.type.toUpperCase()}] ${item.title} - Campus Lost & Found`;
    const text = `Help reunite this campus item: "${item.title}" (${item.location}). Open report:`;

    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: url
      }).catch(() => {
        this.openSharePortalModal(url, `Share: ${item.title}`);
      });
    } else {
      this.openSharePortalModal(url, `Share: ${item.title}`);
    }
  }

  copyShareLink() {
    const input = document.getElementById('share-link-input');
    if (input) {
      const textToCopy = input.value;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          this.showToast('Sharable link copied to clipboard!', 'success');
        }).catch(() => {
          input.select();
          document.execCommand('copy');
          this.showToast('Sharable link copied to clipboard!', 'success');
        });
      } else {
        input.select();
        document.execCommand('copy');
        this.showToast('Sharable link copied to clipboard!', 'success');
      }
    }
  }

  shareToChannel(channel) {
    const url = this.currentShareUrl || this.getSharableUrl();
    const text = "Check out the Campus Lost & Found portal to find or report lost belongings:";

    if (channel === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
    } else if (channel === 'telegram') {
      window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    } else if (channel === 'native') {
      if (navigator.share) {
        navigator.share({
          title: "Campus Lost & Found Portal",
          text: text,
          url: url
        }).catch(() => {});
      } else {
        this.copyShareLink();
      }
    }
  }

  /* ==========================================================================
     CORE THEME & EVENTS
     ========================================================================== */

  applyTheme(theme) {
    this.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('campus_theme', theme);
    const themeIcon = document.getElementById('theme-toggle-icon');
    if (themeIcon) {
      themeIcon.innerHTML = theme === 'dark'
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42M1 12h2M21 12h2"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
    this.showToast(`Switched to ${newTheme} mode`, 'info');
  }

  setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById('btn-theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Navigation Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = e.currentTarget.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Nav-link shortcuts
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = e.currentTarget.getAttribute('data-tab');
        if (tab) this.switchTab(tab);
      });
    });

    // Search input
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderItems();
      });
    }

    // Type filter pills (All / Lost / Found)
    const typePills = document.querySelectorAll('.type-filter-btn');
    typePills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        typePills.forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeTypeFilter = e.currentTarget.getAttribute('data-type');
        this.renderItems();
      });
    });

    // Category chips
    const categoryChips = document.querySelectorAll('.chip-btn');
    categoryChips.forEach(chip => {
      chip.addEventListener('click', (e) => {
        categoryChips.forEach(c => c.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeCategory = e.currentTarget.getAttribute('data-category');
        this.renderItems();
      });
    });

    // Location selector dropdown
    const locationSelect = document.getElementById('location-filter');
    if (locationSelect) {
      locationSelect.addEventListener('change', (e) => {
        this.activeLocation = e.target.value;
        this.renderItems();
      });
    }

    // Sort selector
    const sortSelect = document.getElementById('sort-filter');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.renderItems();
      });
    }

    // Report Form Submission
    const reportForm = document.getElementById('report-item-form');
    if (reportForm) {
      reportForm.addEventListener('submit', (e) => this.handleReportSubmit(e));
    }

    // Claim Form Submission
    const claimForm = document.getElementById('claim-form');
    if (claimForm) {
      claimForm.addEventListener('submit', (e) => this.handleClaimSubmit(e));
    }

    // Poster Item Select
    const posterSelect = document.getElementById('poster-item-select');
    if (posterSelect) {
      posterSelect.addEventListener('change', (e) => {
        const item = this.items.find(i => i.id === e.target.value);
        if (item) this.renderPosterPreview(item);
      });
    }

    // Print Poster Button
    const printPosterBtn = document.getElementById('btn-print-poster');
    if (printPosterBtn) {
      printPosterBtn.addEventListener('click', () => window.print());
    }

    // Image Upload previews
    const imageInput = document.getElementById('report-image-input');
    if (imageInput) {
      imageInput.addEventListener('change', (e) => this.handleImagePreview(e));
    }

    // Reset Demo Data button
    const btnResetDemo = document.getElementById('btn-reset-demo');
    if (btnResetDemo) {
      btnResetDemo.addEventListener('click', () => this.resetDemoData());
    }
  }

  switchTab(tabId) {
    this.activeTab = tabId;

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.tab-pane').forEach(pane => {
      pane.style.display = (pane.id === `tab-${tabId}`) ? 'block' : 'none';
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (tabId === 'map') {
      this.renderMapLocations();
    } else if (tabId === 'poster') {
      this.renderPosterDropdown();
    } else if (tabId === 'admin') {
      this.renderClaimsTable();
    }
  }

  updateStats() {
    const totalItems = this.items.length;
    const lostItems = this.items.filter(i => i.type === 'lost' && i.status === 'available').length;
    const foundItems = this.items.filter(i => i.type === 'found' && i.status === 'available').length;
    const claimedItems = this.items.filter(i => i.status === 'claimed').length;
    const totalResolved = this.claims.filter(c => c.status === 'approved').length + claimedItems;

    const rate = totalItems > 0 ? Math.round((totalResolved / (totalItems + totalResolved)) * 100) : 85;

    const elTotal = document.getElementById('stat-total-items');
    const elLost = document.getElementById('stat-lost-items');
    const elFound = document.getElementById('stat-found-items');
    const elRate = document.getElementById('stat-recovery-rate');

    if (elTotal) elTotal.innerText = totalItems;
    if (elLost) elLost.innerText = lostItems;
    if (elFound) elFound.innerText = foundItems;
    if (elRate) elRate.innerText = `${Math.max(rate, 82)}%`;

    const badgeBrowse = document.getElementById('browse-count-badge');
    if (badgeBrowse) badgeBrowse.innerText = totalItems;
    const badgeClaims = document.getElementById('admin-claims-badge');
    if (badgeClaims) badgeClaims.innerText = this.claims.filter(c => c.status === 'pending').length;
  }

  getFilteredItems() {
    return this.items.filter(item => {
      if (this.activeTypeFilter !== 'all' && item.type !== this.activeTypeFilter) {
        return false;
      }
      if (this.activeCategory !== 'all' && item.category !== this.activeCategory) {
        return false;
      }
      if (this.activeLocation !== 'all' && item.location !== this.activeLocation) {
        return false;
      }
      if (this.searchQuery) {
        const fullText = `${item.title} ${item.description} ${item.location} ${item.specificLocation} ${item.identifyingMarks} ${item.category}`.toLowerCase();
        if (!fullText.includes(this.searchQuery)) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (this.sortBy === 'newest') {
        return new Date(b.dateTime) - new Date(a.dateTime);
      } else if (this.sortBy === 'oldest') {
        return new Date(a.dateTime) - new Date(b.dateTime);
      } else if (this.sortBy === 'reward') {
        const rewardA = a.reward ? 1 : 0;
        const rewardB = b.reward ? 1 : 0;
        return rewardB - rewardA;
      }
      return 0;
    });
  }

  renderItems() {
    const grid = document.getElementById('items-grid');
    if (!grid) return;

    const filtered = this.getFilteredItems();

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No matching items found</h3>
          <p>We couldn't find any lost or found items matching your current filters or search term.</p>
          <div style="display: flex; gap: 0.75rem; justify-content: center;">
            <button class="btn btn-secondary btn-sm" onclick="app.resetFilters()">Clear Filters</button>
            <button class="btn btn-primary btn-sm" onclick="app.requestReportItem('lost')">Report Missing Item</button>
          </div>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const isLost = item.type === 'lost';
      const isClaimed = item.status === 'claimed';
      const badgeClass = isClaimed ? 'badge-claimed' : (isLost ? 'badge-lost' : 'badge-found');
      const badgeText = isClaimed ? '✓ Claimed / Reunited' : (isLost ? '● Lost Item' : '● Found Item');

      const dateFormatted = new Date(item.dateTime).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      return `
        <div class="item-card" data-id="${item.id}">
          <div class="item-card-image">
            <img src="${item.image || 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80'}" alt="${item.title}" loading="lazy" />
            <div class="item-card-badge ${badgeClass}">${badgeText}</div>
            <div class="item-card-date">${dateFormatted}</div>
          </div>
          <div class="item-card-body">
            <div class="item-card-category">${item.category}</div>
            <h3 class="item-card-title">${item.title}</h3>
            <p class="item-card-desc">${item.description}</p>
            <div class="item-card-meta">
              <div class="meta-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span><strong>${item.location}</strong> (${item.specificLocation})</span>
              </div>
              <div class="meta-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <span>Reported by: <strong>${item.contactName}</strong></span>
              </div>
            </div>
          </div>
          <div class="item-card-footer">
            ${item.reward ? `<span class="item-reward-tag">🎁 ${item.reward}</span>` : `<span></span>`}
            <div style="display: flex; gap: 0.4rem; align-items: center;">
              <button class="btn-icon" style="width: 32px; height: 32px;" title="Share link to this item" onclick="app.shareItemLink('${item.id}')">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
              </button>
              <button class="btn btn-secondary btn-sm" onclick="app.showItemDetailModal('${item.id}')">View Details</button>
              ${!isClaimed && item.type === 'found' ? `
                <button class="btn btn-primary btn-sm" onclick="app.openClaimModal('${item.id}')">Claim</button>
              ` : ''}
              ${!isClaimed && item.type === 'lost' ? `
                <button class="btn btn-found btn-sm" onclick="app.openFoundMatchModal('${item.id}')">Found This?</button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  resetFilters() {
    this.searchQuery = '';
    this.activeTypeFilter = 'all';
    this.activeCategory = 'all';
    this.activeLocation = 'all';
    this.sortBy = 'newest';

    const searchInput = document.getElementById('search-input');
    if (searchInput) searchInput.value = '';

    const locationSelect = document.getElementById('location-filter');
    if (locationSelect) locationSelect.value = 'all';

    const sortSelect = document.getElementById('sort-filter');
    if (sortSelect) sortSelect.value = 'newest';

    document.querySelectorAll('.type-filter-btn').forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-type') === 'all');
    });

    document.querySelectorAll('.chip-btn').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-category') === 'all');
    });

    this.renderItems();
  }

  renderMapLocations() {
    const counts = {};
    CAMPUS_LOCATIONS.forEach(loc => counts[loc.id] = 0);

    this.items.forEach(item => {
      if (item.status === 'available') {
        counts[item.location] = (counts[item.location] || 0) + 1;
      }
    });

    const listEl = document.getElementById('map-locations-list');
    if (listEl) {
      listEl.innerHTML = CAMPUS_LOCATIONS.filter(l => l.id !== 'all').map(loc => {
        const count = counts[loc.id] || 0;
        const isActive = this.activeLocation === loc.id;
        return `
          <div class="map-loc-item ${isActive ? 'active' : ''}" onclick="app.filterByMapLocation('${loc.id}')">
            <div>
              <strong>${loc.name}</strong>
              <div style="font-size: 0.72rem; color: var(--text-muted);">${loc.zone}</div>
            </div>
            <span class="badge">${count} active items</span>
          </div>
        `;
      }).join('');
    }

    document.querySelectorAll('.map-zone').forEach(zone => {
      const locId = zone.getAttribute('data-location');
      const badge = zone.querySelector('.map-badge-text');
      if (badge && locId) {
        badge.textContent = `${counts[locId] || 0} items`;
      }
      zone.classList.toggle('selected', locId === this.activeLocation);
    });
  }

  filterByMapLocation(locationId) {
    this.activeLocation = locationId;
    const locationSelect = document.getElementById('location-filter');
    if (locationSelect) locationSelect.value = locationId;

    this.renderMapLocations();
    this.renderItems();
    this.switchTab('browse');
    this.showToast(`Filtered by ${locationId}`, 'info');
  }

  showItemDetailModal(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    this.selectedItemForModal = item;
    const modalContent = document.getElementById('item-detail-modal-content');
    if (!modalContent) return;

    const isLost = item.type === 'lost';
    const isClaimed = item.status === 'claimed';
    const dateFormatted = new Date(item.dateTime).toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    modalContent.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="badge ${isClaimed ? 'badge-claimed' : (isLost ? 'badge-lost' : 'badge-found')}">
          ${isClaimed ? '✓ Claimed / Reunited' : (isLost ? '● LOST ITEM REPORT' : '● FOUND ITEM REPORT')}
        </span>
        <h2 style="font-size: 1.45rem; font-weight: 800; margin-top: 0.5rem; line-height: 1.25;">${item.title}</h2>
      </div>

      <div style="width: 100%; height: 260px; border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 1.5rem; background: var(--bg-tertiary);">
        <img src="${item.image || 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80'}" style="width: 100%; height: 100%; object-fit: cover;" alt="${item.title}" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md);">
        <div>
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Location Last Seen</div>
          <div style="font-weight: 700; color: var(--text-primary);">${item.location}</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary);">${item.specificLocation}</div>
        </div>
        <div>
          <div style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-muted); font-weight: 700;">Date & Time</div>
          <div style="font-weight: 700; color: var(--text-primary);">${dateFormatted}</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary);">Category: ${item.category}</div>
        </div>
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem;">Description</h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.5;">${item.description}</p>
      </div>

      ${item.identifyingMarks ? `
        <div style="margin-bottom: 1.25rem; background: var(--primary-light); padding: 0.75rem 1rem; border-radius: var(--radius-md); border-left: 3px solid var(--primary);">
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--primary);">Key Distinguishing Features</div>
          <div style="font-size: 0.88rem; color: var(--text-primary);">${item.identifyingMarks}</div>
        </div>
      ` : ''}

      ${item.reward ? `
        <div style="margin-bottom: 1.25rem; background: #fef3c7; border: 1px solid #fde68a; padding: 0.75rem 1rem; border-radius: var(--radius-md); display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 1.2rem;">🎁</span>
          <div>
            <div style="font-size: 0.78rem; font-weight: 700; color: #b45309; text-transform: uppercase;">Promised Finder's Reward</div>
            <div style="font-weight: 800; color: #92400e;">${item.reward}</div>
          </div>
        </div>
      ` : ''}

      <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; margin-top: 1rem;">
        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem;">Current Custody & Contact</h4>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${item.custodyDetail || 'Contact the reporter below:'}</p>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; font-size: 0.88rem;">
          <span style="background: var(--bg-tertiary); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm);">👤 ${item.contactName}</span>
          <a href="tel:${item.contactPhone}" style="color: var(--primary); font-weight: 600; text-decoration: none; background: var(--primary-light); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm);">📞 ${item.contactPhone}</a>
          <a href="mailto:${item.contactEmail}" style="color: var(--primary); font-weight: 600; text-decoration: none; background: var(--primary-light); padding: 0.35rem 0.75rem; border-radius: var(--radius-sm);">✉️ ${item.contactEmail}</a>
        </div>
      </div>
    `;

    const footer = document.getElementById('item-detail-footer');
    if (footer) {
      footer.innerHTML = `
        <button class="btn btn-outline btn-sm" onclick="app.closeModal('item-detail-modal')">Close</button>
        <button class="btn btn-outline btn-sm" onclick="app.shareItemLink('${item.id}')">🔗 Share Link</button>
        <button class="btn btn-secondary btn-sm" onclick="app.openPosterFromItem('${item.id}')">📄 Print Campus Notice</button>
        ${!isClaimed && item.type === 'found' ? `
          <button class="btn btn-primary btn-sm" onclick="app.closeModal('item-detail-modal'); app.openClaimModal('${item.id}')">Claim This Item</button>
        ` : ''}
        ${!isClaimed && item.type === 'lost' ? `
          <button class="btn btn-found btn-sm" onclick="app.closeModal('item-detail-modal'); app.openFoundMatchModal('${item.id}')">I Found This!</button>
        ` : ''}
      `;
    }

    this.openModal('item-detail-modal');
  }

  openReportModal(type = 'lost') {
    // Enforce login
    if (!this.currentUser) {
      this.requestReportItem(type);
      return;
    }

    const modal = document.getElementById('report-item-modal');
    if (!modal) return;

    const titleEl = document.getElementById('report-modal-title');
    const typeInput = document.getElementById('report-type');
    const rewardGroup = document.getElementById('report-reward-group');

    if (type === 'lost') {
      titleEl.innerHTML = `📢 Report a <strong>Lost</strong> Item`;
      typeInput.value = 'lost';
      if (rewardGroup) rewardGroup.style.display = 'block';
    } else {
      titleEl.innerHTML = `🤝 Report a <strong>Found</strong> Item`;
      typeInput.value = 'found';
      if (rewardGroup) rewardGroup.style.display = 'none';
    }

    // Pre-fill verified user information
    const userBadgeName = document.getElementById('report-user-name');
    const userBadgeRoll = document.getElementById('report-user-roll');
    const inputName = document.getElementById('reporter-name');
    const inputPhone = document.getElementById('reporter-phone');
    const inputEmail = document.getElementById('reporter-email');

    if (userBadgeName) userBadgeName.textContent = this.currentUser.name;
    if (userBadgeRoll) userBadgeRoll.textContent = `(${this.currentUser.rollNo})`;
    if (inputName) inputName.value = this.currentUser.name;
    if (inputPhone) inputPhone.value = this.currentUser.phone || '';
    if (inputEmail) inputEmail.value = this.currentUser.email || '';

    // Reset preview
    const previewContainer = document.getElementById('dropzone-preview-container');
    if (previewContainer) previewContainer.innerHTML = '';

    // Auto set current time
    const dateTimeInput = document.getElementById('report-datetime');
    if (dateTimeInput) {
      const now = new Date();
      dateTimeInput.value = now.toISOString().slice(0, 16);
    }

    this.openModal('report-item-modal');
  }

  handleImagePreview(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      this.showToast('Please upload an image smaller than 2MB', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const previewContainer = document.getElementById('dropzone-preview-container');
      if (previewContainer) {
        previewContainer.innerHTML = `
          <div class="dropzone-preview">
            <img src="${e.target.result}" id="uploaded-image-preview-element" alt="Uploaded Preview" />
          </div>
        `;
      }
    };
    reader.readAsDataURL(file);
  }

  handleReportSubmit(event) {
    event.preventDefault();
    if (!this.currentUser) {
      this.showToast('Please log in before submitting report', 'error');
      this.openAuthModal('signin');
      return;
    }

    const form = event.target;

    const title = form['item-title'].value.trim();
    const type = form['report-type'].value;
    const category = form['item-category'].value;
    const location = form['item-location'].value;
    const specificLocation = form['item-specific-location'].value.trim();
    const dateTime = form['item-datetime'].value;
    const description = form['item-description'].value.trim();
    const marks = form['item-marks'].value.trim();
    const contactName = form['reporter-name'].value.trim() || this.currentUser.name;
    const contactPhone = form['reporter-phone'].value.trim() || this.currentUser.phone;
    const contactEmail = form['reporter-email'].value.trim() || this.currentUser.email;
    const reward = form['item-reward'] ? form['item-reward'].value.trim() : '';

    let imageSrc = '';
    const previewImg = document.getElementById('uploaded-image-preview-element');
    if (previewImg) {
      imageSrc = previewImg.src;
    } else {
      const categoryFallbacks = {
        electronics: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&auto=format&fit=crop&q=80",
        cards: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80",
        keys: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&auto=format&fit=crop&q=80",
        stationery: "https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=600&auto=format&fit=crop&q=80",
        bags: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
        accessories: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
        bottles: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80",
        other: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80"
      };
      imageSrc = categoryFallbacks[category] || categoryFallbacks.other;
    }

    const newItem = {
      id: `item-${Date.now()}`,
      title,
      type,
      category,
      location,
      specificLocation,
      dateTime,
      description,
      identifyingMarks: marks,
      custody: type === 'found' ? 'with_finder' : 'lost',
      custodyDetail: type === 'found' ? `In custody of ${contactName} (${contactPhone})` : '',
      contactName,
      contactPhone,
      contactEmail,
      reporterRoll: this.currentUser.rollNo,
      status: 'available',
      image: imageSrc,
      reward
    };

    this.items.unshift(newItem);
    this.saveToStorage('campus_items', this.items);

    this.updateStats();
    this.renderItems();
    this.renderMapLocations();
    this.renderPosterDropdown();
    this.closeModal('report-item-modal');
    form.reset();

    this.showToast(`Successfully reported ${type === 'lost' ? 'Lost' : 'Found'} item!`, 'success');
    this.checkSmartMatches(newItem);
  }

  openClaimModal(itemId) {
    if (!this.currentUser) {
      this.pendingAction = null;
      this.openAuthModal('signin', 'Please log in with your student credentials to submit an ownership claim.');
      return;
    }

    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    const modal = document.getElementById('claim-modal');
    if (!modal) return;

    document.getElementById('claim-item-id').value = item.id;
    document.getElementById('claim-item-title-display').innerText = item.title;
    document.getElementById('claim-item-loc-display').innerText = `${item.location} (${item.specificLocation})`;

    // Prefill authenticated claimant info
    document.getElementById('claimant-name').value = this.currentUser.name;
    document.getElementById('claimant-id').value = this.currentUser.rollNo;
    document.getElementById('claimant-phone').value = this.currentUser.phone || '';

    this.openModal('claim-modal');
  }

  handleClaimSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const itemId = form['claim-item-id'].value;
    const claimantName = form['claimant-name'].value.trim();
    const claimantId = form['claimant-id'].value.trim();
    const claimantPhone = form['claimant-phone'].value.trim();
    const proofDetails = form['claim-proof'].value.trim();

    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    const newClaim = {
      id: `claim-${Date.now()}`,
      itemId,
      itemTitle: item.title,
      claimantName,
      claimantId,
      claimantPhone,
      proofDetails,
      status: 'pending',
      submittedAt: new Date().toISOString()
    };

    this.claims.unshift(newClaim);
    this.saveToStorage('campus_claims', this.claims);

    this.closeModal('claim-modal');
    form.reset();

    this.updateStats();
    this.renderClaimsTable();

    this.showToast('Claim submitted! Campus security will review ownership details.', 'success');
  }

  openFoundMatchModal(lostItemId) {
    const lostItem = this.items.find(i => i.id === lostItemId);
    if (!lostItem) return;

    const confirmResult = confirm(`Do you have "${lostItem.title}" or know its whereabouts?\n\nClick OK to view contact details or drop it off at Campus Security Desk.`);
    if (confirmResult) {
      alert(`Contact details for ${lostItem.contactName}:\nPhone: ${lostItem.contactPhone}\nEmail: ${lostItem.contactEmail}\n\nOr drop off at ${lostItem.location} Security Desk.`);
    }
  }

  checkSmartMatches(newlyAddedItem = null) {
    const matches = [];

    const lostItems = this.items.filter(i => i.type === 'lost' && i.status === 'available');
    const foundItems = this.items.filter(i => i.type === 'found' && i.status === 'available');

    lostItems.forEach(lost => {
      foundItems.forEach(found => {
        let score = 0;
        if (lost.category === found.category) score += 40;
        if (lost.location === found.location) score += 30;

        const lostWords = lost.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
        const foundWords = found.title.toLowerCase().split(/\s+/).filter(w => w.length > 3);
        const commonWords = lostWords.filter(w => foundWords.includes(w));
        score += commonWords.length * 25;

        if (score >= 60) {
          matches.push({
            lost,
            found,
            score: Math.min(score, 98)
          });
        }
      });
    });

    const banner = document.getElementById('smart-match-alert');
    if (!banner) return;

    if (matches.length > 0) {
      const topMatch = matches[0];
      banner.style.display = 'flex';
      banner.innerHTML = `
        <div class="smart-match-info">
          <div class="match-icon-pulse">✨</div>
          <div>
            <div style="font-weight: 800; font-size: 0.95rem; color: var(--primary);">
              Potential Match Detected! (${topMatch.score}% confidence)
            </div>
            <div style="font-size: 0.85rem; color: var(--text-secondary);">
              Lost "<strong>${topMatch.lost.title}</strong>" may match Found "<strong>${topMatch.found.title}</strong>" near ${topMatch.found.location}.
            </div>
          </div>
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <button class="btn btn-primary btn-sm" onclick="app.showItemDetailModal('${topMatch.found.id}')">Inspect Found Item</button>
          <button class="btn btn-outline btn-sm" onclick="document.getElementById('smart-match-alert').style.display='none'">Dismiss</button>
        </div>
      `;
    } else {
      banner.style.display = 'none';
    }
  }

  renderClaimsTable() {
    const tbody = document.getElementById('claims-table-body');
    if (!tbody) return;

    if (this.claims.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 2rem;">No claims submitted yet.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.claims.map(claim => {
      const isPending = claim.status === 'pending';
      const statusBadge = isPending
        ? `<span class="badge" style="background:#fef3c7; color:#b45309;">⏳ Under Review</span>`
        : `<span class="badge" style="background:#d1fae5; color:#065f46;">✓ Verified & Handed</span>`;

      return `
        <tr>
          <td><strong>${claim.id}</strong></td>
          <td><strong>${claim.itemTitle}</strong></td>
          <td>${claim.claimantName} <br/><span style="font-size:0.75rem; color:var(--text-muted);">Roll: ${claim.claimantId}</span></td>
          <td style="max-width: 250px;"><div style="font-size:0.82rem; color:var(--text-secondary);">${claim.proofDetails}</div></td>
          <td>${statusBadge}</td>
          <td>
            ${isPending ? `
              <div style="display: flex; gap: 0.4rem;">
                <button class="btn btn-found btn-sm" onclick="app.approveClaim('${claim.id}')">Approve & Release</button>
                <button class="btn btn-outline btn-sm" onclick="app.rejectClaim('${claim.id}')">Decline</button>
              </div>
            ` : `
              <span style="font-size:0.8rem; color:var(--text-muted);">Handed over</span>
            `}
          </td>
        </tr>
      `;
    }).join('');
  }

  approveClaim(claimId) {
    const claim = this.claims.find(c => c.id === claimId);
    if (!claim) return;

    claim.status = 'approved';
    const item = this.items.find(i => i.id === claim.itemId);
    if (item) {
      item.status = 'claimed';
    }

    this.saveToStorage('campus_claims', this.claims);
    this.saveToStorage('campus_items', this.items);

    this.updateStats();
    this.renderItems();
    this.renderClaimsTable();
    this.showToast(`Claim for "${claim.itemTitle}" approved! Item marked as Reunited.`, 'success');
  }

  rejectClaim(claimId) {
    const reason = prompt("Enter brief reason for declining claim (e.g., Proof details did not match):");
    if (!reason) return;

    this.claims = this.claims.filter(c => c.id !== claimId);
    this.saveToStorage('campus_claims', this.claims);

    this.updateStats();
    this.renderClaimsTable();
    this.showToast('Claim was declined and removed from review queue.', 'info');
  }

  renderPosterDropdown() {
    const select = document.getElementById('poster-item-select');
    if (!select) return;

    select.innerHTML = `<option value="">-- Choose an Item to Generate Notice Poster --</option>` +
      this.items.map(item => `
        <option value="${item.id}" ${this.selectedItemForPoster && this.selectedItemForPoster.id === item.id ? 'selected' : ''}>
          [${item.type.toUpperCase()}] ${item.title} (${item.location})
        </option>
      `).join('');

    if (this.items.length > 0 && !this.selectedItemForPoster) {
      this.selectedItemForPoster = this.items[0];
      select.value = this.items[0].id;
      this.renderPosterPreview(this.items[0]);
    } else if (this.selectedItemForPoster) {
      select.value = this.selectedItemForPoster.id;
      this.renderPosterPreview(this.selectedItemForPoster);
    }
  }

  openPosterFromItem(itemId) {
    const item = this.items.find(i => i.id === itemId);
    if (!item) return;

    this.selectedItemForPoster = item;
    this.closeModal('item-detail-modal');
    this.switchTab('poster');
    this.renderPosterDropdown();
    this.renderPosterPreview(item);
  }

  renderPosterPreview(item) {
    const previewContainer = document.getElementById('poster-preview-card');
    if (!previewContainer) return;

    const isLost = item.type === 'lost';
    const headerClass = isLost ? 'poster-header-lost' : 'poster-header-found';
    const headerText = isLost ? 'LOST ITEM NOTICE' : 'FOUND ITEM NOTICE';
    const dateFormatted = new Date(item.dateTime).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    previewContainer.innerHTML = `
      <div class="poster-header-stripe ${headerClass}">
        ${headerText}
      </div>

      <div style="text-align: center; margin-bottom: 1.25rem;">
        <h2 style="font-size: 1.6rem; font-weight: 900; color: #0f172a; line-height: 1.2;">${item.title}</h2>
        <div style="font-size: 0.85rem; font-weight: 700; color: #64748b; text-transform: uppercase; margin-top: 0.25rem;">
          Campus Lost & Found Registry Bulletin
        </div>
      </div>

      <div class="poster-image-box">
        <img src="${item.image || 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600&auto=format&fit=crop&q=80'}" alt="${item.title}" />
      </div>

      <div class="poster-details">
        <div><strong>Location:</strong> ${item.location} (${item.specificLocation})</div>
        <div><strong>Date Reported:</strong> ${dateFormatted}</div>
        <div><strong>Category:</strong> ${item.category}</div>
        <div><strong>Description:</strong> ${item.description}</div>
        ${item.identifyingMarks ? `<div><strong>Marks / Unique Traits:</strong> ${item.identifyingMarks}</div>` : ''}
        ${item.reward ? `<div style="background: #fef3c7; padding: 0.5rem; border-radius: 4px; font-weight: 800; color: #b45309; text-align: center; font-size: 1.1rem;">🎁 REWARD: ${item.reward}</div>` : ''}
      </div>

      <div style="text-align: center; margin-bottom: 1.5rem; padding: 0.75rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
        <div style="font-weight: 800; font-size: 1.1rem; color: #0f172a;">Contact: ${item.contactName}</div>
        <div style="font-size: 1rem; color: #4338ca; font-weight: 700;">📞 ${item.contactPhone} | ✉️ ${item.contactEmail}</div>
      </div>

      <div class="poster-tear-strips">
        <div class="tear-strip">${item.title.substring(0, 18)}<br/>${item.contactPhone}</div>
        <div class="tear-strip">${item.title.substring(0, 18)}<br/>${item.contactPhone}</div>
        <div class="tear-strip">${item.title.substring(0, 18)}<br/>${item.contactPhone}</div>
        <div class="tear-strip">${item.title.substring(0, 18)}<br/>${item.contactPhone}</div>
      </div>
    `;
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = type === 'success' ? '✓' : (type === 'error' ? '✕' : 'ℹ');
    toast.innerHTML = `<span style="font-weight: bold;">${icon}</span><span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  resetDemoData() {
    if (confirm("Reset all portal items, claims, and users back to initial demo data?")) {
      this.items = [...DEFAULT_ITEMS];
      this.claims = [...DEFAULT_CLAIMS];
      this.users = [...DEFAULT_USERS];
      this.currentUser = null;
      localStorage.removeItem('campus_current_user');
      this.saveToStorage('campus_items', this.items);
      this.saveToStorage('campus_claims', this.claims);
      this.saveToStorage('campus_users', this.users);
      this.init();
      this.showToast('Reset to demo campus data successfully!', 'success');
    }
  }
}

// Initialize Application when DOM is ready
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new CampusFindApp();
});
