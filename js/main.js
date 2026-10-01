/**
 * MAHAWAR GARMENTS - Interactive Engine
 * Refined luxury fashion interactions, state management, modal handlers, and drawer controls.
 * Specializing in Men's Wear & Kids' Wear.
 */

// Product Catalog Data for Dynamic Modals & Showcase (Men & Kids Only)
const PRODUCTS_DATA = [
  {
    id: 'prod-1',
    name: 'Bespoke Floral Embroidered Tuxedo Suit',
    category: "Men's Formal & Party",
    price: '₹38,500',
    tag: 'Signature Couture',
    image: 'assets/images/hero_model_elegance.png',
    description: 'Precision-tailored black formal tuxedo featuring intricate metallic botanical embroidery, structured shawl lapels, contrast black waistcoat, crisp white dress shirt with silk bow tie, and flat-front trousers.',
    fabric: 'Italian Wool Blend & Pure Silk Satin Lapel',
    timeline: '7-10 Days Master Tailoring',
    includes: 'Embroidered Blazer, Waistcoat, Shirt, Bow Tie & Trousers'
  },
  {
    id: 'prod-2',
    name: 'Royal Blue Patterned Indo-Western Set',
    category: "Men's Indo-Western",
    price: '₹32,000',
    tag: 'Bespoke Heritage',
    image: 'assets/images/mens_model_seated.png',
    description: 'Mastercrafted navy and slate blue woven jacquard bandhgala jacket with Mandarin collar and bespoke brass brooch. Paired with tailored slim-fit trousers in deep midnight blue.',
    fabric: 'Silk Brocade Jacquard & Premium Tropical Wool',
    timeline: '8-10 Days Master Tailoring',
    includes: 'Indo-Western Jacket, Brooch & Tapered Trouser'
  },
  {
    id: 'prod-3',
    name: 'Imperial Velvet Royal Sherwani',
    category: "Men's Wedding Couture",
    price: '₹48,500',
    tag: 'Bridal & Groom',
    image: 'assets/images/hero_editorial.jpg',
    description: 'Mastercrafted in deep burgundy Italian micro-velvet, embellished with exquisite hand-worked antique gold zardozi along the collar, cuffs, and hemline. Paired with a tailored pure silk churidar and handcrafted velvet stole.',
    fabric: 'Pure Silk Velvet & Raw Silk Churidar',
    timeline: '12-15 Days Tailoring Time',
    includes: 'Sherwani, Churidar, Stole & Pocket Square'
  },
  {
    id: 'prod-4',
    name: 'Kids Royal Ivory & Maroon Festive Ensemble',
    category: "Kids' Festive & Occasion",
    price: '₹12,500',
    tag: 'Kids Couture',
    image: 'assets/images/kids_editorial.jpg',
    description: 'Handcrafted festive Indo-Western sherwani for young boys and ornate lehenga sets for girls. Tailored with lightweight silk blends and gentle linings for royal comfort.',
    fabric: 'Raw Silk Blend & Soft Cotton Lining',
    timeline: '4-6 Days Delivery',
    includes: 'Jacket/Sherwani, Kurta & Churidar Set'
  },
  {
    id: 'prod-5',
    name: 'Ornate Ivory & Gold Nehru Jacket Set',
    category: "Men's Festive & Indo-Western",
    price: '₹18,500',
    tag: 'Festive Classic',
    image: 'assets/images/nehru_editorial.jpg',
    description: 'Rich metallic gold jaal embroidery on raw silk bandi, layered gracefully over a deep burgundy satin silk cowl kurta and tailored tapered trousers.',
    fabric: 'Banarasi Raw Silk & Satin Silk',
    timeline: '6-8 Days Tailoring Time',
    includes: 'Nehru Jacket, Kurta & Tapered Trouser'
  },
  {
    id: 'prod-6',
    name: 'Junior Bespoke Three-Piece Coat Suit',
    category: "Kids' Party & Formal",
    price: '₹14,900',
    tag: 'Junior Gentleman',
    image: 'assets/images/suit_editorial.jpg',
    description: 'Miniature precision tailoring for young boys. Structured jacket with contrast waistcoat, crisp formal shirt, and comfortable stretch-wool formal pants.',
    fabric: 'Fine Wool Blend & Breathable Silk Lining',
    timeline: '5-7 Days Master Tailoring',
    includes: 'Suit Jacket, Vest, Shirt, Tie & Trouser'
  }
];

// Wishlist State (persisted in localStorage)
let wishlistItems = JSON.parse(localStorage.getItem('mahawar_wishlist')) || ['prod-1', 'prod-2'];
let cartItems = JSON.parse(localStorage.getItem('mahawar_cart')) || [];

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initModals();
  initDrawers();
  initSearch();
  initWishlist();
  initCategoryChips();
  initSmoothScroll();
  initContactForms();
  initVideoAutoplay();
  updateWishlistUI();
  updateCartUI();
});

/* --------------------------------------------------------------------------
   Sticky Header Scroll Behavior
   -------------------------------------------------------------------------- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   Video Autoplay, Sound Toggle & Interactive Controls
   -------------------------------------------------------------------------- */
function initVideoAutoplay() {
  const video = document.getElementById('brand-film-video');
  const fallbackPlayBtn = document.getElementById('video-fallback-play-btn');
  const soundToggleBtn = document.getElementById('video-sound-toggle-btn');
  const playpauseBtn = document.getElementById('video-playpause-btn');

  if (!video) return;

  // Attempt autoplay muted
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      if (fallbackPlayBtn) fallbackPlayBtn.style.display = 'flex';
    });
  }

  if (fallbackPlayBtn) {
    fallbackPlayBtn.addEventListener('click', () => {
      video.muted = true;
      video.play();
      fallbackPlayBtn.style.display = 'none';
      if (playpauseBtn) {
        const text = playpauseBtn.querySelector('#playpause-text');
        if (text) text.textContent = 'Pause';
      }
    });
  }

  // Sound Mute/Unmute Toggle
  if (soundToggleBtn) {
    const mutedIcon = soundToggleBtn.querySelector('.sound-icon-muted');
    const unmutedIcon = soundToggleBtn.querySelector('.sound-icon-unmuted');
    const toggleText = soundToggleBtn.querySelector('#sound-toggle-text');

    soundToggleBtn.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        if (mutedIcon) mutedIcon.style.display = 'none';
        if (unmutedIcon) unmutedIcon.style.display = 'inline-block';
        if (toggleText) toggleText.textContent = 'Mute';
      } else {
        video.muted = true;
        if (mutedIcon) mutedIcon.style.display = 'inline-block';
        if (unmutedIcon) unmutedIcon.style.display = 'none';
        if (toggleText) toggleText.textContent = 'Unmute';
      }
    });
  }

  // Play / Pause Toggle
  if (playpauseBtn) {
    const playText = playpauseBtn.querySelector('#playpause-text');
    playpauseBtn.addEventListener('click', () => {
      if (video.paused) {
        video.play();
        if (playText) playText.textContent = 'Pause';
      } else {
        video.pause();
        if (playText) playText.textContent = 'Play';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   Product & Consultation Modals
   -------------------------------------------------------------------------- */
function initModals() {
  const productModal = document.getElementById('product-detail-modal');
  const enquiryModal = document.getElementById('enquiry-modal');
  const closeButtons = document.querySelectorAll('.modal-close-btn, .modal-backdrop');

  // Close when clicking outside modal container
  closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (e.target === btn || btn.classList.contains('modal-close-btn') || btn.closest('.modal-close-btn')) {
        closeAllModals();
      }
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

  // Global trigger for consultation enquiry
  document.querySelectorAll('[data-open-enquiry]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || 'Custom Tailoring & Styling Consultation';
      openEnquiryModal(service);
    });
  });
}

function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
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
  const addBagBtn = modal.querySelector('#modal-add-bag-btn');

  if (imgEl) imgEl.src = product.image;
  if (imgEl) imgEl.alt = product.name;
  if (tagEl) tagEl.textContent = product.tag;
  if (nameEl) nameEl.textContent = product.name;
  if (catEl) catEl.textContent = product.category;
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

  if (addBagBtn) {
    addBagBtn.onclick = () => {
      addToBag(product.id);
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

/* --------------------------------------------------------------------------
   Drawers (Wishlist & Cart/Bag & Mobile Menu)
   -------------------------------------------------------------------------- */
function initDrawers() {
  // Wishlist Drawer Trigger
  const wishlistBtn = document.getElementById('header-wishlist-btn');
  const wishlistDrawer = document.getElementById('wishlist-drawer');

  if (wishlistBtn && wishlistDrawer) {
    wishlistBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer('wishlist-drawer');
    });
  }

  // Cart/Bag Drawer Trigger
  const bagBtn = document.getElementById('header-cart-btn');
  const bagDrawer = document.getElementById('bag-drawer');

  if (bagBtn && bagDrawer) {
    bagBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openDrawer('bag-drawer');
    });
  }

  // Mobile Navigation Drawer
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      openDrawer('mobile-menu-drawer');
    });
  }

  // Close Buttons on Drawers
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

/* --------------------------------------------------------------------------
   Wishlist Functionality
   -------------------------------------------------------------------------- */
function initWishlist() {
  document.querySelectorAll('.wishlist-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const productId = btn.getAttribute('data-product-id');
      toggleWishlist(productId, btn);
    });
  });
}

function toggleWishlist(productId, buttonElement = null) {
  const index = wishlistItems.indexOf(productId);
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  const name = product ? product.name : 'Piece';

  if (index > -1) {
    wishlistItems.splice(index, 1);
    showToast(`Removed "${name}" from Wishlist`);
  } else {
    wishlistItems.push(productId);
    showToast(`Saved "${name}" to Wishlist`);
  }

  localStorage.setItem('mahawar_wishlist', JSON.stringify(wishlistItems));
  updateWishlistUI();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-count-badge');
  if (badge) {
    badge.textContent = wishlistItems.length;
  }

  document.querySelectorAll('.wishlist-toggle').forEach(btn => {
    const pId = btn.getAttribute('data-product-id');
    if (wishlistItems.includes(pId)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const listContainer = document.getElementById('wishlist-items-list');
  if (!listContainer) return;

  if (wishlistItems.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--color-charcoal-muted);">
        <p style="font-family: var(--font-serif-headline); font-size: 1.3rem; margin-bottom: 0.5rem; color: var(--color-burgundy);">Your wishlist is empty</p>
        <p style="font-size: 0.85rem;">Discover our men & kids signatures and click the heart icon on any piece you admire.</p>
      </div>
    `;
    return;
  }

  const itemsHtml = wishlistItems.map(id => {
    const prod = PRODUCTS_DATA.find(p => p.id === id);
    if (!prod) return '';
    return `
      <div style="display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(201, 174, 138, 0.3); align-items: center;">
        <img src="${prod.image}" alt="${prod.name}" style="width: 70px; height: 90px; object-fit: cover; border-radius: 2px; border: 1px solid var(--color-gold-muted);">
        <div style="flex-grow: 1;">
          <h4 style="font-family: var(--font-serif-headline); font-size: 1.05rem; color: var(--color-burgundy-dark); line-height: 1.2;">${prod.name}</h4>
          <p style="font-size: 0.88rem; font-weight: 600; color: var(--color-charcoal); margin: 0.2rem 0;">${prod.price}</p>
          <div style="display: flex; gap: 0.75rem; margin-top: 0.35rem;">
            <button onclick="openProductModal('${prod.id}')" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-gold); font-weight: 600;">View Piece</button>
            <button onclick="toggleWishlist('${prod.id}')" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  listContainer.innerHTML = itemsHtml;
}

/* --------------------------------------------------------------------------
   Bag / Cart Management
   -------------------------------------------------------------------------- */
function addToBag(productId) {
  const prod = PRODUCTS_DATA.find(p => p.id === productId);
  if (!prod) return;

  if (!cartItems.includes(productId)) {
    cartItems.push(productId);
    localStorage.setItem('mahawar_cart', JSON.stringify(cartItems));
  }

  updateCartUI();
  closeAllModals();
  openDrawer('bag-drawer');
  showToast(`Added "${prod.name}" to your enquiry collection`);
}

function removeFromBag(productId) {
  const index = cartItems.indexOf(productId);
  if (index > -1) {
    cartItems.splice(index, 1);
    localStorage.setItem('mahawar_cart', JSON.stringify(cartItems));
  }
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cart-count-badge');
  if (badge) {
    badge.textContent = cartItems.length;
  }

  const bagContainer = document.getElementById('bag-items-list');
  if (!bagContainer) return;

  if (cartItems.length === 0) {
    bagContainer.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--color-charcoal-muted);">
        <svg style="width: 48px; height: 48px; stroke: var(--color-gold); fill: none; stroke-width: 1; margin: 0 auto 1rem; display: block;" viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p style="font-family: var(--font-serif-headline); font-size: 1.25rem; margin-bottom: 0.4rem; color: var(--color-burgundy);">Your Collection is Empty</p>
        <p style="font-size: 0.82rem; line-height: 1.5;">This is an editorial luxury portfolio for Men & Kids. Add garments to your curated enquiry bag to request tailored fittings.</p>
      </div>
    `;
    return;
  }

  const itemsHtml = cartItems.map(id => {
    const prod = PRODUCTS_DATA.find(p => p.id === id);
    if (!prod) return '';
    return `
      <div style="display: flex; gap: 1rem; padding: 1rem 0; border-bottom: 1px solid rgba(201, 174, 138, 0.3); align-items: center;">
        <img src="${prod.image}" alt="${prod.name}" style="width: 70px; height: 90px; object-fit: cover; border-radius: 2px; border: 1px solid var(--color-gold-muted);">
        <div style="flex-grow: 1;">
          <h4 style="font-family: var(--font-serif-headline); font-size: 1.05rem; color: var(--color-burgundy-dark); line-height: 1.2;">${prod.name}</h4>
          <p style="font-size: 0.88rem; font-weight: 600; color: var(--color-charcoal); margin: 0.2rem 0;">${prod.price}</p>
          <div style="display: flex; gap: 0.75rem; margin-top: 0.35rem;">
            <button onclick="openEnquiryModal('Enquiry for ${prod.name}')" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-gold); font-weight: 600;">Enquire Piece</button>
            <button onclick="removeFromBag('${prod.id}')" style="font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: #888;">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join('');

  bagContainer.innerHTML = itemsHtml;
}

/* --------------------------------------------------------------------------
   Search Overlay
   -------------------------------------------------------------------------- */
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
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 100);
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', closeSearchOverlay);
  }

  document.querySelectorAll('.suggestion-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      const term = tag.textContent.trim();
      if (searchInput) {
        searchInput.value = term;
      }
      closeSearchOverlay();
      const target = document.getElementById('signatures');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      showToast(`Browsing "${term}" Collection`);
    });
  });
}

function closeSearchOverlay() {
  const searchOverlay = document.getElementById('search-overlay');
  if (searchOverlay) {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* --------------------------------------------------------------------------
   Category Chips (Men's & Kids' Feature)
   -------------------------------------------------------------------------- */
function initCategoryChips() {
  const chips = document.querySelectorAll('.mens-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const categoryName = chip.textContent.trim();
      showToast(`Selected Category: ${categoryName}`);
    });
  });
}

/* --------------------------------------------------------------------------
   Smooth Scroll for Navigation
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        closeAllDrawers();
        closeAllModals();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Contact & Consultation Forms
   -------------------------------------------------------------------------- */
function initContactForms() {
  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeAllModals();
      showToast('Thank you! Our master stylist will contact you via WhatsApp shortly.');
      enquiryForm.reset();
    });
  }

  const newsForm = document.getElementById('footer-newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thank you for subscribing to Mahawar Garments Privé.');
      newsForm.reset();
    });
  }
}

/* --------------------------------------------------------------------------
   Toast Notification System
   -------------------------------------------------------------------------- */
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
  }, 3800);
}
