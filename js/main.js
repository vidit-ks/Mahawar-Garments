/**
 * MAHAWAR GARMENTS — DIGITAL SHOWROOM ENGINE
 * Multi-Screen Router, Showroom Catalog Rendering, Filter Handlers & Modals.
 * Strictly Men's Wear & Kids' Wear.
 */

// Men's Showroom Product Catalog
const MEN_PRODUCTS = [
  {
    id: 'prod-1',
    name: 'Bespoke Floral Embroidered Tuxedo',
    categoryTag: "Men's Formal & Party",
    category: 'suits',
    price: '₹38,500',
    tag: 'Signature Couture',
    image: 'assets/images/hero_model_elegance.png',
    description: 'Precision-tailored black formal tuxedo featuring intricate metallic botanical embroidery, structured shawl lapels, contrast waistcoat, crisp dress shirt with silk bow tie, and flat-front trousers.',
    fabric: 'Italian Wool Blend & Pure Silk Satin',
    timeline: '7-10 Days Master Tailoring',
    includes: 'Blazer, Waistcoat, Shirt, Bow Tie & Trousers'
  },
  {
    id: 'prod-2',
    name: 'Royal Blue Patterned Indo-Western Set',
    categoryTag: "Men's Indo-Western",
    category: 'indo-western',
    price: '₹32,000',
    tag: 'Bespoke Heritage',
    image: 'assets/images/mens_model_seated.png',
    description: 'Mastercrafted navy and slate blue woven jacquard bandhgala jacket with Mandarin collar and bespoke brass brooch. Paired with tailored slim-fit trousers in deep midnight blue.',
    fabric: 'Silk Brocade Jacquard & Tropical Wool',
    timeline: '8-10 Days Master Tailoring',
    includes: 'Indo-Western Jacket, Brooch & Tapered Trouser'
  },
  {
    id: 'prod-3',
    name: 'Imperial Velvet Royal Sherwani',
    categoryTag: "Men's Wedding Couture",
    category: 'sherwanis',
    price: '₹48,500',
    tag: 'Bridal & Groom',
    image: 'assets/images/hero_editorial.jpg',
    description: 'Mastercrafted in deep burgundy Italian micro-velvet, embellished with exquisite hand-worked antique gold zardozi along the collar, cuffs, and hemline. Paired with a tailored pure silk churidar.',
    fabric: 'Pure Silk Velvet & Raw Silk Churidar',
    timeline: '12-15 Days Tailoring Time',
    includes: 'Sherwani, Churidar, Handcrafted Stole & Safa'
  },
  {
    id: 'prod-4',
    name: 'Ornate Ivory & Gold Nehru Jacket Set',
    categoryTag: "Men's Festive & Kurta",
    category: 'kurtas',
    price: '₹18,500',
    tag: 'Festive Classic',
    image: 'assets/images/nehru_editorial.jpg',
    description: 'Rich metallic gold jaal embroidery on raw silk bandi, layered gracefully over a deep burgundy satin silk cowl kurta and tailored tapered trousers.',
    fabric: 'Banarasi Raw Silk & Satin Silk',
    timeline: '6-8 Days Tailoring Time',
    includes: 'Nehru Jacket, Kurta & Tapered Trouser'
  },
  {
    id: 'prod-5',
    name: 'Italian Charcoal Three-Piece Formal Suit',
    categoryTag: "Men's Sartorial Formal",
    category: 'suits',
    price: '₹28,900',
    tag: 'Italian Cut',
    image: 'assets/images/suit_editorial.jpg',
    description: 'Savile Row inspired precision cut suit crafted from Super 140s Australian Merino wool. Features half-canvas chest structure, matching tailored waistcoat, and trousers.',
    fabric: 'Super 140s Pure Merino Wool',
    timeline: '7-9 Days Master Tailoring',
    includes: 'Structured Jacket, Vest & Formal Trousers'
  },
  {
    id: 'prod-6',
    name: 'Contemporary Maroon Indo-Western Achkan',
    categoryTag: "Men's Indo-Western",
    category: 'indo-western',
    price: '₹34,500',
    tag: 'Royal Reception',
    image: 'assets/images/mens_editorial.jpg',
    description: 'Asymmetrical silhouette featuring tonal embroidery, covered buttons, and a structured modern hemline. Ideal for wedding sangeet and reception celebrations.',
    fabric: 'Raw Silk Blend & Cotton Silk Lining',
    timeline: '8-11 Days Master Tailoring',
    includes: 'Achkan Jacket, Kurta & Churidar'
  },
  {
    id: 'prod-7',
    name: 'Banarasi Brocade Heritage Sherwani',
    categoryTag: "Men's Wedding Couture",
    category: 'sherwanis',
    price: '₹44,000',
    tag: 'Heritage Weave',
    image: 'assets/images/brand_story.jpg',
    description: 'Woven on traditional pit looms in Varanasi with antique gold zari warp. Finished with pearl buttons and tailored churidar pants.',
    fabric: 'Handwoven Banarasi Katan Silk',
    timeline: '12-14 Days Master Tailoring',
    includes: 'Brocade Sherwani, Churidar & Pocket Square'
  },
  {
    id: 'prod-8',
    name: 'Silk Embroidered Kurta & Bandi Set',
    categoryTag: "Men's Festive & Kurta",
    category: 'kurtas',
    price: '₹15,800',
    tag: 'Occasion Festive',
    image: 'assets/images/craftsmanship_detail.jpg',
    description: 'Handworked aari and thread embroidery on rich textured silk bandi with matching relaxed silk churidar and kurta.',
    fabric: 'Pure Mulberry Silk',
    timeline: '5-7 Days Master Tailoring',
    includes: 'Embroidered Bandi, Silk Kurta & Pajama'
  }
];

// Kids' Showroom Product Catalog
const KIDS_PRODUCTS = [
  {
    id: 'kid-1',
    name: 'Kids Royal Ivory & Maroon Festive Ensemble',
    categoryTag: "Kids' Festive & Occasion",
    category: 'festive',
    price: '₹12,500',
    tag: 'Junior Couture',
    image: 'assets/images/kids_editorial.jpg',
    description: 'Handcrafted festive Indo-Western sherwani for boys and ornate festive sets for girls. Tailored with lightweight silk blends and gentle breathable cotton linings for royal comfort.',
    fabric: 'Raw Silk Blend & Soft Cotton Lining',
    timeline: '4-6 Days Delivery',
    includes: 'Jacket/Sherwani, Kurta & Churidar Set'
  },
  {
    id: 'kid-2',
    name: 'Junior Bespoke Three-Piece Coat Suit',
    categoryTag: "Kids' Party & Formal",
    category: 'coat-suits',
    price: '₹14,900',
    tag: 'Junior Gent',
    image: 'assets/images/suit_editorial.jpg',
    description: 'Miniature precision tailoring for young boys. Structured jacket with contrast waistcoat, crisp formal shirt, and comfortable stretch-wool formal pants.',
    fabric: 'Fine Wool Blend & Breathable Silk Lining',
    timeline: '5-7 Days Master Tailoring',
    includes: 'Suit Jacket, Vest, Shirt, Tie & Trouser'
  },
  {
    id: 'kid-3',
    name: 'Junior Silk Embroidered Sherwani',
    categoryTag: "Kids' Wedding & Festive",
    category: 'sherwanis',
    price: '₹13,500',
    tag: 'Celebration Set',
    image: 'assets/images/nehru_editorial.jpg',
    description: 'Regal gold zari embroidery on soft raw silk, customized for family weddings, festivals, and celebratory milestones.',
    fabric: 'Soft Banarasi Silk & Cotton Lining',
    timeline: '5-7 Days Delivery',
    includes: 'Sherwani, Silk Kurta & Churidar'
  },
  {
    id: 'kid-4',
    name: 'Boys Brocade Kurta & Nehru Jacket Set',
    categoryTag: "Kids' Festive & Party",
    category: 'festive',
    price: '₹9,800',
    tag: 'Festive Classic',
    image: 'assets/images/brand_story.jpg',
    description: 'Comfortable festive styling for little ones with lightweight brocade jacket and cotton-silk kurta pajama.',
    fabric: 'Brocade & Cotton-Silk',
    timeline: '4-5 Days Delivery',
    includes: 'Nehru Jacket, Kurta & Pants'
  },
  {
    id: 'kid-5',
    name: 'Junior Indo-Western Angrakha Set',
    categoryTag: "Kids' Occasion Wear",
    category: 'sherwanis',
    price: '₹11,900',
    tag: 'Royal Junior',
    image: 'assets/images/mens_editorial.jpg',
    description: 'Cross-over angrakha jacket with handcrafted tassel ties and contrast embroidered borders.',
    fabric: 'Pure Silk Blend',
    timeline: '5-6 Days Delivery',
    includes: 'Angrakha Jacket, Kurta & Dhoti/Pants'
  },
  {
    id: 'kid-6',
    name: 'Kids Party Tuxedo & Velvet Blazer',
    categoryTag: "Kids' Formal & Party",
    category: 'coat-suits',
    price: '₹10,500',
    tag: 'Party Special',
    image: 'assets/images/hero_editorial.jpg',
    description: 'Deep micro-velvet single-breasted blazer with satin lapels and tailored slim formal trousers.',
    fabric: 'Soft Velvet & Satin',
    timeline: '5-7 Days Master Tailoring',
    includes: 'Velvet Blazer, Bow Tie & Trousers'
  }
];

// All Products Map
const ALL_PRODUCTS = [...MEN_PRODUCTS, ...KIDS_PRODUCTS];

// Wishlist & Cart Local State
let wishlistItems = JSON.parse(localStorage.getItem('mahawar_wishlist')) || ['prod-1', 'prod-2'];
let cartItems = JSON.parse(localStorage.getItem('mahawar_cart')) || [];

// App Initializer
document.addEventListener('DOMContentLoaded', () => {
  initRouter();
  renderCatalog('men-products-grid', MEN_PRODUCTS);
  renderCatalog('kids-products-grid', KIDS_PRODUCTS);
  initCategoryFilters();
  initModals();
  initDrawers();
  initSearch();
  initVideoAutoplay();
  initContactForms();
  updateWishlistUI();
  updateCartUI();
});

/* ==========================================================================
   MULTI-SCREEN CLIENT ROUTER
   ========================================================================== */

function initRouter() {
  // Handle initial hash on page load
  const initialHash = window.location.hash.replace('#', '') || 'home';
  navigateTo(initialHash, false);

  // Handle browser back / forward navigation
  window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateTo(hash, false);
  });
}

function navigateTo(screenId, updateHistory = true) {
  const validScreens = ['home', 'men', 'kids', 'collections', 'services', 'about'];
  const targetId = validScreens.includes(screenId) ? screenId : 'home';

  // Update navigation active states
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('data-nav') === targetId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Switch active screen view with smooth fade
  const allViews = document.querySelectorAll('.screen-view');
  allViews.forEach(view => {
    view.classList.remove('active');
  });

  const targetView = document.getElementById(`view-${targetId}`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Scroll to top of window smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Update browser URL hash
  if (updateHistory) {
    window.location.hash = targetId;
  }

  // Close any open drawers
  closeAllDrawers();
  closeAllModals();
}

/* ==========================================================================
   SHOWROOM CATALOG RENDERER
   ========================================================================== */

function renderCatalog(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products.map(prod => {
    const isWishlisted = wishlistItems.includes(prod.id);
    return `
      <article class="product-card" onclick="openProductModal('${prod.id}')">
        <div class="product-img-box">
          <img src="${prod.image}" alt="${prod.name}" loading="lazy">
          <button type="button" class="product-wishlist-btn ${isWishlisted ? 'active' : ''}" data-product-id="${prod.id}" onclick="event.stopPropagation(); toggleWishlist('${prod.id}', this);" aria-label="Add to wishlist">
            <svg viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
        <div class="product-info">
          <div>
            <span class="product-cat">${prod.categoryTag}</span>
            <h3 class="product-name">${prod.name}</h3>
          </div>
          <div class="product-price-row">
            <span class="product-price">${prod.price}</span>
            <span class="product-view-text">Enquire Piece →</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/* ==========================================================================
   CATEGORY FILTER HANDLERS (MEN & KIDS)
   ========================================================================== */

function initCategoryFilters() {
  // Men's Filter Pills
  const menPills = document.querySelectorAll('#men-filter-pills .filter-pill');
  menPills.forEach(pill => {
    pill.addEventListener('click', () => {
      menPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-category');
      const filtered = cat === 'all' ? MEN_PRODUCTS : MEN_PRODUCTS.filter(p => p.category === cat);
      renderCatalog('men-products-grid', filtered);
    });
  });

  // Kids' Filter Pills
  const kidsPills = document.querySelectorAll('#kids-filter-pills .filter-pill');
  kidsPills.forEach(pill => {
    pill.addEventListener('click', () => {
      kidsPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-category');
      const filtered = cat === 'all' ? KIDS_PRODUCTS : KIDS_PRODUCTS.filter(p => p.category === cat);
      renderCatalog('kids-products-grid', filtered);
    });
  });
}

/* ==========================================================================
   CINEMATIC VIDEO CONTROLS
   ========================================================================== */

function initVideoAutoplay() {
  const video = document.getElementById('brand-film-video');
  const soundToggleBtn = document.getElementById('video-sound-toggle-btn');
  const playpauseBtn = document.getElementById('video-playpause-btn');

  if (!video) return;

  // Autoplay muted attempt
  video.play().catch(() => {
    // Autoplay policy fallback
  });

  if (soundToggleBtn) {
    const text = soundToggleBtn.querySelector('#sound-toggle-text');
    soundToggleBtn.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        if (text) text.textContent = 'MUTE SOUND';
      } else {
        video.muted = true;
        if (text) text.textContent = 'UNMUTE SOUND';
      }
    });
  }

  if (playpauseBtn) {
    const text = playpauseBtn.querySelector('#playpause-text');
    playpauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        if (text) text.textContent = 'PAUSE';
      } else {
        video.pause();
        if (text) text.textContent = 'PLAY';
      }
    });
  }
}

/* ==========================================================================
   PRODUCT DETAIL MODAL & ENQUIRY CONSULTATION
   ========================================================================== */

function initModals() {
  // Global modal close triggers
  document.querySelectorAll('.modal-close-btn, .modal-backdrop').forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target === btn || btn.classList.contains('modal-close-btn') || btn.closest('.modal-close-btn')) {
        closeAllModals();
      }
    });
  });

  // Global consultation trigger buttons
  document.querySelectorAll('[data-open-enquiry]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || 'Bespoke Wardrobe Consultation';
      openEnquiryModal(service);
    });
  });

  // Escape key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
      closeAllDrawers();
      closeSearchOverlay();
    }
  });
}

function openProductModal(productId) {
  const product = ALL_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('product-detail-modal');
  const imgEl = modal.querySelector('#modal-product-img');
  const tagEl = modal.querySelector('#modal-product-tag');
  const nameEl = modal.querySelector('#modal-product-name');
  const catEl = modal.querySelector('#modal-product-category');
  const priceEl = modal.querySelector('#modal-product-price');
  const descEl = modal.querySelector('#modal-product-desc');
  const fabricEl = modal.querySelector('#modal-product-fabric');
  const timelineEl = modal.querySelector('#modal-product-timeline');
  const includesEl = modal.querySelector('#modal-product-includes');
  const enquireBtn = modal.querySelector('#modal-enquire-btn');

  if (imgEl) { imgEl.src = product.image; imgEl.alt = product.name; }
  if (tagEl) tagEl.textContent = product.tag;
  if (nameEl) nameEl.textContent = product.name;
  if (catEl) catEl.textContent = product.categoryTag;
  if (priceEl) priceEl.textContent = product.price;
  if (descEl) descEl.textContent = product.description;
  if (fabricEl) fabricEl.textContent = product.fabric;
  if (timelineEl) timelineEl.textContent = product.timeline;
  if (includesEl) includesEl.textContent = product.includes;

  if (enquireBtn) {
    enquireBtn.onclick = () => {
      closeAllModals();
      openEnquiryModal(`Piece: ${product.name} (${product.price})`);
    };
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function openEnquiryModal(subject = 'Bespoke Wardrobe Consultation') {
  const modal = document.getElementById('enquiry-modal');
  const subjectInput = modal.querySelector('#enquiry-subject');
  if (subjectInput) {
    subjectInput.value = subject;
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = '';
}

/* ==========================================================================
   DRAWERS (WISHLIST, BAG, MOBILE MENU)
   ========================================================================== */

function initDrawers() {
  const wishlistBtn = document.getElementById('header-wishlist-btn');
  const bagBtn = document.getElementById('header-cart-btn');
  const mobileToggle = document.getElementById('mobile-nav-toggle');

  if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => openDrawer('wishlist-drawer'));
  }
  if (bagBtn) {
    bagBtn.addEventListener('click', () => openDrawer('bag-drawer'));
  }
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => openDrawer('mobile-menu-drawer'));
  }

  document.querySelectorAll('.drawer-close-btn, .drawer-backdrop').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || el.classList.contains('drawer-close-btn') || el.closest('.drawer-close-btn')) {
        closeAllDrawers();
      }
    });
  });
}

function openDrawer(drawerId) {
  closeAllDrawers();
  const drawer = document.getElementById(drawerId);
  if (drawer) {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeAllDrawers() {
  document.querySelectorAll('.drawer-backdrop').forEach(drawer => {
    drawer.classList.remove('active');
  });
  document.body.style.overflow = '';
}

/* ==========================================================================
   WISHLIST & ENQUIRY BAG
   ========================================================================== */

function toggleWishlist(productId, buttonElement = null) {
  const index = wishlistItems.indexOf(productId);
  const product = ALL_PRODUCTS.find(p => p.id === productId);
  const name = product ? product.name : 'Piece';

  if (index > -1) {
    wishlistItems.splice(index, 1);
    if (buttonElement) buttonElement.classList.remove('active');
    showToast(`Removed "${name}" from Wishlist`);
  } else {
    wishlistItems.push(productId);
    if (buttonElement) buttonElement.classList.add('active');
    showToast(`Saved "${name}" to Wishlist`);
  }

  localStorage.setItem('mahawar_wishlist', JSON.stringify(wishlistItems));
  updateWishlistUI();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-count-badge');
  if (badge) badge.textContent = wishlistItems.length;

  const wishlistContainer = document.getElementById('wishlist-items-list');
  if (!wishlistContainer) return;

  if (wishlistItems.length === 0) {
    wishlistContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--color-charcoal-muted);">
        <p style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-burgundy-dark); margin-bottom: 0.4rem;">Wishlist is Empty</p>
        <p style="font-size: 0.85rem;">Browse our Men & Kids digital showrooms to save pieces for bespoke consultation.</p>
      </div>
    `;
    return;
  }

  wishlistContainer.innerHTML = wishlistItems.map(id => {
    const prod = ALL_PRODUCTS.find(p => p.id === id);
    if (!prod) return '';
    return `
      <div style="display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(185, 154, 99, 0.25); align-items: center;">
        <img src="${prod.image}" alt="${prod.name}" style="width: 65px; height: 80px; object-fit: cover; border-radius: 2px; border: 1px solid var(--color-gold);">
        <div style="flex-grow: 1;">
          <h4 style="font-family: var(--font-serif); font-size: 1.1rem; color: var(--color-burgundy-dark); line-height: 1.2;">${prod.name}</h4>
          <p style="font-size: 0.9rem; font-weight: 600; color: var(--color-charcoal); margin: 0.2rem 0;">${prod.price}</p>
          <div style="display: flex; gap: 0.75rem; margin-top: 0.35rem;">
            <button onclick="openEnquiryModal('Enquiry for ${prod.name}')" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-burgundy); font-weight: 600;">Enquire Piece</button>
            <button onclick="toggleWishlist('${prod.id}')" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function updateCartUI() {
  const badge = document.getElementById('cart-count-badge');
  if (badge) badge.textContent = cartItems.length;

  const bagContainer = document.getElementById('bag-items-list');
  if (!bagContainer) return;

  if (cartItems.length === 0) {
    bagContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--color-charcoal-muted);">
        <p style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--color-burgundy-dark); margin-bottom: 0.4rem;">Your Curated Bag is Empty</p>
        <p style="font-size: 0.85rem;">Add pieces from the Men and Kids showrooms to request a multi-garment consultation.</p>
      </div>
    `;
    return;
  }
}

/* ==========================================================================
   SEARCH OVERLAY
   ========================================================================== */

function initSearch() {
  const searchBtn = document.getElementById('header-search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('search-input-field');

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => { if (searchInput) searchInput.focus(); }, 100);
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', closeSearchOverlay);
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        searchGarment(searchInput.value.trim());
      }
    });
  }
}

function searchGarment(term) {
  if (!term) return;
  closeSearchOverlay();
  navigateTo('men');
  showToast(`Searching for "${term}" in Showroom`);
}

function closeSearchOverlay() {
  const searchOverlay = document.getElementById('search-overlay');
  if (searchOverlay) {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   FORMS & TOAST NOTIFICATIONS
   ========================================================================== */

function initContactForms() {
  const form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      closeAllModals();
      showToast('Thank you! Our master stylist will contact you via WhatsApp shortly.');
      form.reset();
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg style="width: 18px; height: 18px; stroke: var(--color-gold); fill: none; stroke-width: 2;" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
    <span>${message}</span>
  `;

  toast.classList.add('show');

  if (window.toastTimeout) {
    clearTimeout(window.toastTimeout);
  }

  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
