/* =============================================
   NEXCORE — app.js
   ============================================= */

// ===== PRODUCT DATABASE =====
const PRODUCTS = [
  // CPUs
  { id: 1, name: 'Intel Core i9-14900K', category: 'CPU', price: 589.99, oldPrice: 699.99, rating: 4.9, reviews: 1204, emoji: '🧠', badges: ['hot'], specs: { Núcleos: '24 (8P+16E)', Threads: '32', 'TDP Base': '125W', 'Frecuencia Max': '6.0 GHz', Socket: 'LGA1700', Cache: '36MB L3' }, desc: 'El procesador tope de gama de Intel con arquitectura híbrida. Ideal para gaming de alto rendimiento y creación de contenido profesional.', featured: true },
  { id: 2, name: 'AMD Ryzen 9 7950X', category: 'CPU', price: 649.99, oldPrice: null, rating: 4.8, reviews: 876, emoji: '🔴', badges: ['new'], specs: { Núcleos: '16', Threads: '32', 'TDP Base': '170W', 'Frecuencia Max': '5.7 GHz', Socket: 'AM5', Cache: '64MB L3' }, desc: 'Monstruo de 16 núcleos para workstations y streaming. La CPU más potente de AMD para el mercado de consumo.', featured: true },
  { id: 3, name: 'Intel Core i5-13600K', category: 'CPU', price: 289.99, oldPrice: 329.99, rating: 4.7, reviews: 2341, emoji: '💻', badges: ['sale'], specs: { Núcleos: '14 (6P+8E)', Threads: '20', 'TDP Base': '125W', 'Frecuencia Max': '5.1 GHz', Socket: 'LGA1700', Cache: '24MB L3' }, desc: 'La CPU de mejor relación calidad-precio para gaming. Competitivo con los mejores de AMD sin romper el presupuesto.', featured: false },
  { id: 4, name: 'AMD Ryzen 5 7600X', category: 'CPU', price: 199.99, oldPrice: null, rating: 4.6, reviews: 1543, emoji: '⚡', badges: [], specs: { Núcleos: '6', Threads: '12', 'TDP Base': '105W', 'Frecuencia Max': '5.3 GHz', Socket: 'AM5', Cache: '32MB L3' }, desc: 'El mejor CPU para gaming en el rango medio. PCIe 5.0 y DDR5 incluidos. Eficiencia y potencia en un mismo paquete.', featured: false },

  // GPUs
  { id: 5, name: 'NVIDIA RTX 4090', category: 'GPU', price: 1599.99, oldPrice: 1999.99, rating: 5.0, reviews: 654, emoji: '🎮', badges: ['hot', 'sale'], specs: { VRAM: '24GB GDDR6X', 'Núcleos CUDA': '16384', 'TDP': '450W', 'Bus de Memoria': '384-bit', 'Conector': 'PCIe 4.0 x16', 'Salidas': '3x DP, 1x HDMI' }, desc: 'La GPU más poderosa jamás creada para el mercado de consumo. 4K a más de 100fps en cualquier juego. DLSS 3 incluido.', featured: true },
  { id: 6, name: 'NVIDIA RTX 4070 Ti', category: 'GPU', price: 799.99, oldPrice: 999.99, rating: 4.8, reviews: 987, emoji: '🟢', badges: ['sale'], specs: { VRAM: '12GB GDDR6X', 'Núcleos CUDA': '7680', TDP: '285W', 'Bus de Memoria': '192-bit', Conector: 'PCIe 4.0 x16', Salidas: '3x DP, 1x HDMI' }, desc: 'Rendimiento 4K ultra en un paquete más accesible. La elección ideal para gaming de alto rendimiento.', featured: true },
  { id: 7, name: 'AMD Radeon RX 7900 XTX', category: 'GPU', price: 999.99, oldPrice: 1199.99, rating: 4.7, reviews: 543, emoji: '🔴', badges: ['sale'], specs: { VRAM: '24GB GDDR6', 'Stream Processors': '12288', TDP: '355W', 'Bus de Memoria': '384-bit', Conector: 'PCIe 4.0 x16', Salidas: '2x DP, 1x HDMI, 1x USB-C' }, desc: 'El buque insignia de AMD. 24GB de VRAM para trabajo y gaming. La GPU perfecta para creadores de contenido.', featured: false },
  { id: 8, name: 'NVIDIA RTX 4060', category: 'GPU', price: 299.99, oldPrice: null, rating: 4.4, reviews: 2109, emoji: '💚', badges: ['new'], specs: { VRAM: '8GB GDDR6', 'Núcleos CUDA': '3072', TDP: '115W', 'Bus de Memoria': '128-bit', Conector: 'PCIe 4.0 x16', Salidas: '3x DP, 1x HDMI' }, desc: 'La GPU de entrada perfecta para la generación de IA. 1080p y 1440p ultra con DLSS 3. Muy eficiente en consumo.', featured: false },

  // RAM
  { id: 9, name: 'Corsair Dominator DDR5-6000 32GB', category: 'RAM', price: 179.99, oldPrice: 219.99, rating: 4.8, reviews: 432, emoji: '💡', badges: ['sale'], specs: { Capacidad: '32GB (2x16GB)', Velocidad: 'DDR5-6000', Latencia: 'CL30', Voltaje: '1.35V', Tecnología: 'DDR5', Perfil: 'XMP 3.0 / EXPO' }, desc: 'RAM de alto rendimiento con los icónicos disipadores Dominator. Perfecta para los sistemas AM5 y LGA1700 más exigentes.', featured: false },
  { id: 10, name: 'G.Skill Trident Z5 RGB 64GB', category: 'RAM', price: 249.99, oldPrice: null, rating: 4.9, reviews: 287, emoji: '🌈', badges: ['new'], specs: { Capacidad: '64GB (2x32GB)', Velocidad: 'DDR5-6400', Latencia: 'CL32', Voltaje: '1.4V', Tecnología: 'DDR5', Perfil: 'XMP 3.0' }, desc: '64GB de RAM DDR5 con iluminación RGB espectacular. Para workstations extremas y sistemas de edición de video 8K.', featured: false },
  { id: 11, name: 'Kingston Fury Beast DDR4-3600 16GB', category: 'RAM', price: 54.99, oldPrice: 69.99, rating: 4.6, reviews: 3421, emoji: '🔵', badges: ['sale'], specs: { Capacidad: '16GB (2x8GB)', Velocidad: 'DDR4-3600', Latencia: 'CL17', Voltaje: '1.35V', Tecnología: 'DDR4', Perfil: 'XMP 2.0' }, desc: 'La RAM más popular para LGA1700 con DDR4. Excelente compatibilidad y rendimiento estable para gaming y trabajo diario.', featured: false },

  // Storage
  { id: 12, name: 'Samsung 990 Pro 2TB NVMe', category: 'Storage', price: 189.99, oldPrice: 229.99, rating: 4.9, reviews: 1876, emoji: '💾', badges: ['hot', 'sale'], specs: { Capacidad: '2TB', 'Interfaz': 'PCIe 4.0 NVMe M.2', 'Lectura Seq.': '7450 MB/s', 'Escritura Seq.': '6900 MB/s', NAND: 'Samsung TLC V-NAND', Garantía: '5 años' }, desc: 'El SSD NVMe más veloz disponible. Ideal para SSDs de carga del sistema operativo y juegos AAA. Incluye software Samsung Magician.', featured: true },
  { id: 13, name: 'WD Black SN850X 1TB', category: 'Storage', price: 99.99, oldPrice: null, rating: 4.8, reviews: 1123, emoji: '⬛', badges: [], specs: { Capacidad: '1TB', Interfaz: 'PCIe 4.0 NVMe M.2', 'Lectura Seq.': '7300 MB/s', 'Escritura Seq.': '6300 MB/s', NAND: 'WD 3D TLC NAND', Garantía: '5 años' }, desc: 'Optimizado para gaming con tecnología Game Mode 2.0. Carga de juegos ultrarrápida. Compatible con PS5.', featured: false },
  { id: 14, name: 'Seagate Barracuda 4TB HDD', category: 'Storage', price: 79.99, oldPrice: null, rating: 4.3, reviews: 5432, emoji: '🗄️', badges: [], specs: { Capacidad: '4TB', Interfaz: 'SATA 6Gb/s', Velocidad: '5400 RPM', Caché: '256MB', Factor: '3.5" HDD', Garantía: '2 años' }, desc: 'Almacenamiento masivo y confiable para tu colección de juegos, fotos y medios. La opción más económica por GB.', featured: false },

  // Motherboards
  { id: 15, name: 'ASUS ROG Maximus Z790 Apex', category: 'Placa Base', price: 699.99, oldPrice: 849.99, rating: 4.9, reviews: 234, emoji: '🖥️', badges: ['hot', 'sale'], specs: { Socket: 'LGA1700', Chipset: 'Intel Z790', 'Form Factor': 'ATX', RAM: 'DDR5, hasta 192GB', PCIe: '5x M.2, PCIe 5.0 x16', Conectividad: 'WiFi 6E, 2.5G LAN' }, desc: 'La placa base definitiva para overclockers. Diseñada para exprimir al máximo el i9-14900K con potencia de VRM incomparable.', featured: false },
  { id: 16, name: 'MSI MAG B650 Tomahawk', category: 'Placa Base', price: 229.99, oldPrice: null, rating: 4.7, reviews: 876, emoji: '🟥', badges: ['new'], specs: { Socket: 'AM5', Chipset: 'AMD B650', 'Form Factor': 'ATX', RAM: 'DDR5, hasta 128GB', PCIe: '2x M.2, PCIe 4.0 x16', Conectividad: 'WiFi 6E, 2.5G LAN' }, desc: 'La placa base AM5 más equilibrada. Excelente VRM para Ryzen 7000, PCIe 5.0 y DDR5. Perfecta para builds de rendimiento.', featured: false },

  // Cooling
  { id: 17, name: 'NZXT Kraken 360 RGB', category: 'Enfriamiento', price: 199.99, oldPrice: 249.99, rating: 4.7, reviews: 654, emoji: '❄️', badges: ['sale'], specs: { Tipo: 'AIO Líquido', Radiador: '360mm', Ventiladores: '3x 120mm PWM', 'Velocidad Max': '2800 RPM', TDP: '400W+', RGB: 'NZXT CAM RGB' }, desc: 'El AIO de 360mm con las mejores temperaturas del mercado. Diseño minimalista con pantalla LCD en la bomba y RGB total.', featured: false },
  { id: 18, name: 'Noctua NH-D15 Chromax Black', category: 'Enfriamiento', price: 109.99, oldPrice: null, rating: 4.9, reviews: 2341, emoji: '🖤', badges: [], specs: { Tipo: 'Torre Doble', Ventiladores: '2x 140mm NF-A15', 'Velocidad Max': '1500 RPM', TDP: '250W', 'Base': 'Cobre', Ruido: '24.6 dB' }, desc: 'El mejor cooler de aire del mundo. Silencioso, eficiente y elegante en negro. Bate a muchos AIOs de 240mm.', featured: false },

  // Power Supply
  { id: 19, name: 'Seasonic Prime TX-1000W 80+ Titanium', category: 'PSU', price: 259.99, oldPrice: 299.99, rating: 4.9, reviews: 432, emoji: '🔌', badges: ['sale'], specs: { Potencia: '1000W', Certificación: '80+ Titanium', 'Tipo': 'Modular completo', 'Protecciones': 'OCP, OVP, UVP, OPP', 'Conector ATX': '24-pin ATX 3.0', Garantía: '12 años' }, desc: 'La mejor fuente de alimentación del mercado. Eficiencia titanio (96%+ a carga media). Para builds con RTX 4090 e i9.', featured: false },
  { id: 20, name: 'Corsair RM850x 850W 80+ Gold', category: 'PSU', price: 149.99, oldPrice: 179.99, rating: 4.8, reviews: 1876, emoji: '⚡', badges: ['sale'], specs: { Potencia: '850W', Certificación: '80+ Gold', Tipo: 'Modular completo', Ventilador: 'Semi-pasivo 135mm', Conector: 'PCIe 5.0 16-pin', Garantía: '10 años' }, desc: 'Una de las fuentes más fiables y silenciosas del mercado. Modo semi-pasivo para operación silenciosa en carga baja.', featured: false },

  // Cases
  { id: 21, name: 'Lian Li O11 Dynamic EVO', category: 'Case', price: 179.99, oldPrice: null, rating: 4.9, reviews: 1234, emoji: '🏠', badges: ['hot'], specs: { 'Form Factor': 'Mid-Tower ATX', Material: 'Aluminio/Vidrio', 'Ventiladores Incl.': 'Ninguno', 'Slots 120mm': 'Hasta 10x 120mm', Bahías: '4x 3.5", 4x 2.5"', 'Panel': 'Vidrio Templado x2' }, desc: 'El case más popular para builds de gama alta. Diseño interior flexible para todo tipo de refrigeración liquid y aireada.', featured: false },
  { id: 22, name: 'Fractal Design Torrent', category: 'Case', price: 199.99, oldPrice: 229.99, rating: 4.8, reviews: 765, emoji: '🌬️', badges: ['sale', 'new'], specs: { 'Form Factor': 'Mid-Tower ATX', Material: 'Acero/Vidrio', 'Ventiladores Incl.': '2x 180mm + 3x 140mm', 'Flujo de Aire': 'Máximo', 'Panel': 'Vidrio Templado', 'PCIe Riser': 'PCIe 4.0 vertical incluido' }, desc: 'El case con mejor flujo de aire del mercado. 2 ventiladores de 180mm frontales para temperaturas mínimas. Diseño premium.', featured: false },
];

// ===== CATEGORIES =====
const CATEGORIES = [
  { id: 'all', name: 'Todo', icon: '🏪' },
  { id: 'CPU', name: 'Procesadores', icon: '🧠' },
  { id: 'GPU', name: 'Tarjetas Gráficas', icon: '🎮' },
  { id: 'RAM', name: 'Memoria RAM', icon: '💡' },
  { id: 'Storage', name: 'Almacenamiento', icon: '💾' },
  { id: 'Placa Base', name: 'Placas Base', icon: '🖥️' },
  { id: 'Enfriamiento', name: 'Enfriamiento', icon: '❄️' },
  { id: 'PSU', name: 'Fuentes', icon: '🔌' },
  { id: 'Case', name: 'Gabinetes', icon: '🏠' },
];

// ===== STATE =====
let state = {
  cart: JSON.parse(localStorage.getItem('nexcore_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('nexcore_wishlist') || '[]'),
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  filteredProducts: [...PRODUCTS],
};

// ===== UTILS =====
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

function formatPrice(n) {
  return '$' + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getDiscount(price, old) {
  if (!old) return null;
  return Math.round((1 - price / old) * 100);
}

function starsHTML(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '☆';
  return s;
}

function saveToLS() {
  localStorage.setItem('nexcore_cart', JSON.stringify(state.cart));
  localStorage.setItem('nexcore_wishlist', JSON.stringify(state.wishlist));
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span>${msg}</span>`;
  $('#toastContainer').appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toast-out 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

// ===== CART =====
function getCartTotal() {
  return state.cart.reduce((t, i) => t + i.price * i.qty, 0);
}
function getCartQty() {
  return state.cart.reduce((t, i) => t + i.qty, 0);
}

function updateCartUI() {
  const count = getCartQty();
  const countEl = $('#cartCount');
  countEl.textContent = count;
  countEl.classList.add('bump');
  setTimeout(() => countEl.classList.remove('bump'), 300);

  const cartItems = $('#cartItems');
  const total = getCartTotal();
  $('#cartTotal').textContent = formatPrice(total);

  if (state.cart.length === 0) {
    cartItems.innerHTML = `<div class="cart-empty"><span>🛍️</span><p>Tu carrito está vacío</p></div>`;
    return;
  }

  cartItems.innerHTML = state.cart.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <span class="cart-item-icon">${item.emoji}</span>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">−</button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Eliminar">🗑</button>
    </div>
  `).join('');
  saveToLS();
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = state.cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    state.cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`${product.name} agregado al carrito`);
  // Update button state
  $$(`[data-add-btn="${id}"]`).forEach(btn => {
    btn.classList.add('added');
    btn.textContent = '✓ Agregado';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = '+ Agregar al carrito';
    }, 1500);
  });
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  updateCartUI();
  showToast('Producto eliminado del carrito', 'error');
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { updateCartUI(); saveToLS(); }
}

// ===== WISHLIST =====
function toggleWishlist(id) {
  const idx = state.wishlist.indexOf(id);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
    showToast('Eliminado de favoritos', 'error');
  } else {
    state.wishlist.push(id);
    showToast('Agregado a favoritos ❤️');
  }
  $$(`[data-wishlist="${id}"]`).forEach(btn => {
    btn.classList.toggle('active', state.wishlist.includes(id));
    btn.textContent = state.wishlist.includes(id) ? '❤️' : '♡';
  });
  saveToLS();
}

// ===== RENDER CATEGORIES =====
function renderCategories() {
  const grid = $('#categoriesGrid');
  grid.innerHTML = CATEGORIES.map(cat => {
    const count = cat.id === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.category === cat.id).length;
    return `
      <div class="category-card ${state.activeCategory === cat.id ? 'active' : ''}"
           onclick="filterByCategory('${cat.id}')" data-cat="${cat.id}">
        <span class="cat-icon">${cat.icon}</span>
        <div class="cat-name">${cat.name}</div>
        <div class="cat-count">${count} productos</div>
      </div>`;
  }).join('');
}

// ===== RENDER PRODUCTS =====
function renderProducts() {
  let products = [...PRODUCTS];

  // Category filter
  if (state.activeCategory !== 'all') {
    products = products.filter(p => p.category === state.activeCategory);
  }

  // Search filter
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    products = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (state.sortBy) {
    case 'price-asc': products.sort((a, b) => a.price - b.price); break;
    case 'price-desc': products.sort((a, b) => b.price - a.price); break;
    case 'name-asc': products.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'rating': products.sort((a, b) => b.rating - a.rating); break;
    default: products.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break;
  }

  state.filteredProducts = products;

  const grid = $('#productsGrid');
  const noResults = $('#noResults');
  const countEl = $('#productCount');

  if (products.length === 0) {
    grid.innerHTML = '';
    noResults.classList.remove('hidden');
    countEl.textContent = 'Sin resultados';
    return;
  }

  noResults.classList.add('hidden');
  countEl.textContent = `Mostrando ${products.length} producto${products.length !== 1 ? 's' : ''}`;

  grid.innerHTML = products.map(p => {
    const disc = getDiscount(p.price, p.oldPrice);
    const inWishlist = state.wishlist.includes(p.id);
    const badgesHTML = p.badges.map(b => {
      const labels = { sale: 'Oferta', new: 'Nuevo', hot: 'Popular' };
      return `<span class="badge badge-${b}">${labels[b]}</span>`;
    }).join('');

    return `
      <div class="product-card" onclick="openModal(${p.id})" id="card-${p.id}">
        <div class="product-image-wrap">
          <span class="product-emoji">${p.emoji}</span>
          <div class="product-badges">${badgesHTML}</div>
          <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-wishlist="${p.id}"
                  onclick="event.stopPropagation(); toggleWishlist(${p.id})"
                  title="${inWishlist ? 'Quitar de favoritos' : 'Agregar a favoritos'}">
            ${inWishlist ? '❤️' : '♡'}
          </button>
        </div>
        <div class="product-body">
          <div class="product-category">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-rating">
            <span class="stars">${starsHTML(p.rating)}</span>
            <span>${p.rating.toFixed(1)}</span>
            <span class="rating-count">(${p.reviews.toLocaleString()})</span>
          </div>
          <div class="product-price-row">
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
            ${disc ? `<span class="product-discount">-${disc}%</span>` : ''}
          </div>
          <button class="product-add-btn" data-add-btn="${p.id}"
                  onclick="event.stopPropagation(); addToCart(${p.id})">
            + Agregar al carrito
          </button>
        </div>
      </div>`;
  }).join('');

  renderActiveFilters();
}

// ===== ACTIVE FILTERS =====
function renderActiveFilters() {
  const container = $('#activeFilters');
  const tags = [];
  if (state.activeCategory !== 'all') {
    const cat = CATEGORIES.find(c => c.id === state.activeCategory);
    tags.push(`<span class="filter-tag">${cat.icon} ${cat.name}<button onclick="filterByCategory('all')">✕</button></span>`);
  }
  if (state.searchQuery) {
    tags.push(`<span class="filter-tag">🔍 "${state.searchQuery}"<button onclick="clearSearch()">✕</button></span>`);
  }
  container.innerHTML = tags.join('');
}

// ===== FILTERS =====
function filterByCategory(catId) {
  state.activeCategory = catId;
  $$('.category-card').forEach(c => c.classList.toggle('active', c.dataset.cat === catId));
  $('#categoryFilter').value = catId;
  renderProducts();
  document.querySelector('#productos').scrollIntoView({ behavior: 'smooth' });
}

function clearSearch() {
  state.searchQuery = '';
  $('#searchInput').value = '';
  renderProducts();
}

function resetFilters() {
  state.activeCategory = 'all';
  state.searchQuery = '';
  state.sortBy = 'featured';
  $('#categoryFilter').value = 'all';
  $('#sortFilter').value = 'featured';
  renderCategories();
  renderProducts();
}

// ===== MODAL =====
function openModal(id) {
  const p = PRODUCTS.find(prod => prod.id === id);
  if (!p) return;
  const disc = getDiscount(p.price, p.oldPrice);
  const inWishlist = state.wishlist.includes(p.id);

  const specsHTML = Object.entries(p.specs).map(([k, v]) => `
    <div class="spec-row"><span class="spec-key">${k}</span><span class="spec-val">${v}</span></div>
  `).join('');

  $('#modalContent').innerHTML = `
    <div class="modal-product-grid">
      <div class="modal-img-wrap">${p.emoji}</div>
      <div class="modal-info">
        <div class="product-category">${p.category}</div>
        <h2>${p.name}</h2>
        <div class="product-rating">
          <span class="stars">${starsHTML(p.rating)}</span>
          <span>${p.rating.toFixed(1)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()} reseñas)</span>
        </div>
        <p class="modal-desc">${p.desc}</p>
        <div class="modal-specs">${specsHTML}</div>
        <div class="modal-price-row">
          <span class="modal-price">${formatPrice(p.price)}</span>
          ${p.oldPrice ? `<span class="product-old-price">${formatPrice(p.oldPrice)}</span>` : ''}
          ${disc ? `<span class="product-discount">-${disc}%</span>` : ''}
        </div>
        <div class="modal-actions">
          <button class="btn-primary modal-add-btn" onclick="addToCart(${p.id}); closeModal()">
            🛒 Agregar al carrito
          </button>
          <button class="modal-cart-btn ${inWishlist ? 'active' : ''}" onclick="toggleWishlist(${p.id})"
                  title="Favoritos" data-wishlist="${p.id}">
            ${inWishlist ? '❤️' : '♡'}
          </button>
        </div>
      </div>
    </div>`;

  $('#modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  $('#modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== COUNTER ANIMATION =====
function animateCounters() {
  $$('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    const dur = 2000;
    const step = dur / 60;
    let current = 0;
    const increment = target / (dur / step);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.textContent = target.toLocaleString();
        clearInterval(timer);
      } else {
        el.textContent = Math.floor(current).toLocaleString();
      }
    }, step);
  });
}

// ===== PARTICLES =====
function createParticles() {
  const container = $('#heroParticles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 4 + 2;
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 12 + 8}s;
      animation-delay: ${Math.random() * 8}s;
    `;
    container.appendChild(p);
  }
}

// ===== FORM SUBMIT =====
function submitForm(e) {
  e.preventDefault();
  showToast('¡Mensaje enviado! Te responderemos pronto 📬');
  e.target.reset();
}

// ===== SEARCH =====
function setupSearch() {
  const searchBtn = $('#searchBtn');
  const searchOverlay = $('#searchOverlay');
  const searchClose = $('#searchClose');
  const searchInput = $('#searchInput');

  function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.focus();
  }
  function closeSearchOverlay() {
    searchOverlay.classList.remove('active');
    state.searchQuery = '';
    searchInput.value = '';
    renderProducts();
  }

  searchBtn.addEventListener('click', openSearch);
  searchClose.addEventListener('click', closeSearchOverlay);
  searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearchOverlay(); });

  let debounceTimer;
  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      state.searchQuery = searchInput.value.trim();
      renderProducts();
      if (state.searchQuery) {
        closeSearchOverlay();
        document.querySelector('#productos').scrollIntoView({ behavior: 'smooth' });
      }
    }, 400);
  });
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearchOverlay();
    if (e.key === 'Enter') {
      state.searchQuery = searchInput.value.trim();
      renderProducts();
      closeSearchOverlay();
      document.querySelector('#productos').scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// ===== NAVBAR CONTROLS =====
function setupNavbar() {
  const hamburger = $('#hamburger');
  const navLinks = $('#navLinks');
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  window.addEventListener('scroll', () => {
    $('#navbar').classList.toggle('scrolled', window.scrollY > 20);
    $('#backTop').classList.toggle('visible', window.scrollY > 400);
  });

  $('#backTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== CART CONTROLS =====
function setupCart() {
  const cartBtn = $('#cartBtn');
  const cartClose = $('#cartClose');
  const cartOverlay = $('#cartOverlay');
  const sidebar = $('#cartSidebar');

  function openCart() { sidebar.classList.add('open'); cartOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
  function closeCart() { sidebar.classList.remove('open'); cartOverlay.classList.remove('active'); document.body.style.overflow = ''; }

  cartBtn.addEventListener('click', openCart);
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  $('#checkoutBtn').addEventListener('click', () => {
    if (state.cart.length === 0) { showToast('Tu carrito está vacío', 'error'); return; }
    showToast(`Pedido de ${formatPrice(getCartTotal())} procesado. ¡Gracias por tu compra! 🎉`);
    state.cart = [];
    updateCartUI();
    closeCart();
  });
}

// ===== MODAL CONTROLS =====
function setupModal() {
  $('#modalClose').addEventListener('click', closeModal);
  $('#modalOverlay').addEventListener('click', e => { if (e.target === $('#modalOverlay')) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
}

// ===== FILTER CONTROLS =====
function setupFilters() {
  // Populate category select
  const catFilter = $('#categoryFilter');
  CATEGORIES.filter(c => c.id !== 'all').forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id; opt.textContent = c.name;
    catFilter.appendChild(opt);
  });

  catFilter.addEventListener('change', () => filterByCategory(catFilter.value));
  $('#sortFilter').addEventListener('change', () => {
    state.sortBy = $('#sortFilter').value;
    renderProducts();
  });

  // GPU offer btn
  $('#gpuFilterBtn').addEventListener('click', () => filterByCategory('GPU'));
}

// ===== INTERSECTION OBSERVER =====
function setupObservers() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  const heroObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) animateCounters();
  }, { threshold: 0.5 });

  document.querySelectorAll('.category-card, .product-card, .offer-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  heroObserver.observe($('.hero-stats'));
}

// ===== INIT =====
function init() {
  renderCategories();
  renderProducts();
  setupSearch();
  setupNavbar();
  setupCart();
  setupModal();
  setupFilters();
  createParticles();
  updateCartUI();

  // Delay observers to let DOM settle
  setTimeout(setupObservers, 100);
}

document.addEventListener('DOMContentLoaded', init);
