// Menu Data - Indian and British Food
const menuData = [
    // Indian Food
    {
        id: 1,
        name: "Chicken Tikka Masala",
        category: "indian",
        price: 450,
        image: "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
        description: "Tender chicken in a creamy tomato sauce with aromatic spices"
    },
    {
        id: 2,
        name: "Butter Chicken",
        category: "indian",
        price: 499,
        image: "https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg",
        description: "Rich and creamy curry with succulent chicken pieces"
    },
    {
        id: 3,
        name: "Lamb Biryani",
        category: "indian",
        price: 599,
        image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
        description: "Fragrant basmati rice with tender lamb and exotic spices"
    },
    {
        id: 4,
        name: "Palak Paneer",
        category: "indian",
        price: 350,
        image: "https://www.themealdb.com/images/media/meals/g1orzp1683208756.jpg",
        description: "Fresh spinach curry with soft cottage cheese cubes"
    },
    {
        id: 5,
        name: "Tandoori Chicken",
        category: "indian",
        price: 399,
        image: "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg",
        description: "Marinated chicken grilled in traditional clay oven"
    },
    {
        id: 6,
        name: "Samosa (4 pcs)",
        category: "indian",
        price: 120,
        image: "https://www.themealdb.com/images/media/meals/ysqrus1487425681.jpg",
        description: "Crispy pastry filled with spiced potatoes and peas"
    },
    {
        id: 7,
        name: "Naan Bread",
        category: "indian",
        price: 50,
        image: "https://www.themealdb.com/images/media/meals/yypuqs1511796797.jpg",
        description: "Soft and fluffy traditional Indian flatbread"
    },
    {
        id: 8,
        name: "Vegetable Korma",
        category: "indian",
        price: 299,
        image: "https://www.themealdb.com/images/media/meals/1520081754.jpg",
        description: "Mixed vegetables in a mild creamy coconut sauce"
    },

    // British Food
    {
        id: 9,
        name: "Fish and Chips",
        category: "british",
        price: 399,
        image: "https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg",
        description: "Crispy battered fish with golden chips and mushy peas"
    },
    {
        id: 10,
        name: "Beef Wellington",
        category: "british",
        price: 999,
        image: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
        description: "Tender beef fillet wrapped in puff pastry with mushroom duxelles"
    },
    {
        id: 11,
        name: "Shepherd's Pie",
        category: "british",
        price: 350,
        image: "https://www.themealdb.com/images/media/meals/xrrtss1487339558.jpg",
        description: "Minced lamb with vegetables topped with creamy mashed potato"
    },
    {
        id: 12,
        name: "Bangers and Mash",
        category: "british",
        price: 299,
        image: "https://www.themealdb.com/images/media/meals/vwwspt1487425519.jpg",
        description: "Traditional sausages with mashed potatoes and onion gravy"
    },
    {
        id: 13,
        name: "Chicken Tikka Pizza",
        category: "british",
        price: 499,
        image: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg",
        description: "Fusion pizza with chicken tikka and British cheese"
    },
    {
        id: 14,
        name: "Sunday Roast",
        category: "british",
        price: 649,
        image: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg",
        description: "Roasted meat with Yorkshire pudding, vegetables and gravy"
    },
    {
        id: 15,
        name: "Steak and Kidney Pie",
        category: "british",
        price: 450,
        image: "https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg",
        description: "Classic British pie with tender beef and kidney in rich gravy"
    },
    {
        id: 16,
        name: "Ploughman's Lunch",
        category: "british",
        price: 250,
        image: "https://www.themealdb.com/images/media/meals/58oia61564916529.jpg",
        description: "British cheese, ham, pickles, bread and salad"
    },

    // Desserts
    {
        id: 17,
        name: "Gulab Jamun",
        category: "desserts",
        price: 99,
        image: "https://www.themealdb.com/images/media/meals/yqqqwu1511816912.jpg",
        description: "Sweet milk dumplings in rose-flavored syrup"
    },
    {
        id: 18,
        name: "Sticky Toffee Pudding",
        category: "desserts",
        price: 149,
        image: "https://www.themealdb.com/images/media/meals/xqqqtu1511637379.jpg",
        description: "Moist sponge cake with toffee sauce and vanilla ice cream"
    },
    {
        id: 19,
        name: "Ras Malai",
        category: "desserts",
        price: 129,
        image: "https://www.themealdb.com/images/media/meals/ryppsv1511815505.jpg",
        description: "Soft cheese patties in sweet creamy milk"
    },
    {
        id: 20,
        name: "Eton Mess",
        category: "desserts",
        price: 179,
        image: "https://www.themealdb.com/images/media/meals/uuxwvq1483907861.jpg",
        description: "Strawberries, meringue and whipped cream"
    },

    // Drinks
    {
        id: 21,
        name: "Mango Lassi",
        category: "drinks",
        price: 89,
        image: "https://www.themealdb.com/images/media/meals/hx335q1619789561.jpg",
        description: "Refreshing yogurt drink with sweet mango"
    },
    {
        id: 22,
        name: "Masala Chai",
        category: "drinks",
        price: 49,
        image: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
        description: "Spiced Indian tea with milk"
    },
    {
        id: 23,
        name: "English Breakfast Tea",
        category: "drinks",
        price: 39,
        image: "https://www.themealdb.com/images/media/meals/xxtsvx1511814083.jpg",
        description: "Classic British black tea"
    },
    {
        id: 24,
        name: "Fresh Lemonade",
        category: "drinks",
        price: 69,
        image: "https://www.themealdb.com/images/media/meals/5bw9k51598306157.jpg",
        description: "Freshly squeezed lemon with mint"
    }
];

// Cart Array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMenu('all');
    updateCartUI();
    setupSmoothScroll();
});

// Load Menu Items
function loadMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    const filteredItems = category === 'all' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="menu-item-badge">${item.category}</span>
                </div>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">₹${item.price}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Menu
function filterMenu(category) {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Load filtered menu
    loadMenu(category);
    
    // Scroll to menu
    scrollToSection('menu');
}

// Add to Cart
function addToCart(itemId) {
    const item = menuData.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    saveCart();
    updateCartUI();
    showToast(`${item.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart');
}

// Update Quantity
function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update items
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">₹${item.price}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total}`;
}

// Save Cart
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Toggle Cart
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    cartSidebar.classList.toggle('active');
    cartOverlay.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : '';
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemsList = cart.map(item => `${item.quantity}x ${item.name}`).join('\n');
    
    alert(`Order Summary:\n\n${itemsList}\n\nTotal: £${total.toFixed(2)}\n\nThank you for your order!\nYour food will be delivered in 30-45 minutes.`);
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
    
    showToast('Order placed successfully!');
}

// Show Toast
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Toggle Mobile Menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Smooth Scroll
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Close mobile menu if open
                document.getElementById('navMenu').classList.remove('active');
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Scroll to Menu
function scrollToMenu() {
    scrollToSection('menu');
}

// Handle Contact Form
function handleContactForm(e) {
    e.preventDefault();
    showToast('Thank you! We will contact you soon.');
    e.target.reset();
}

// Handle Newsletter
function handleNewsletter(e) {
    e.preventDefault();
    showToast('Successfully subscribed to newsletter!');
    e.target.reset();
}

// Navbar scroll effect & Scroll to Top Button
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollTop = document.getElementById('scrollTop');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    }
    
    // Show/hide scroll to top button
    if (window.scrollY > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Search Modal Functions
function openSearchModal() {
    document.getElementById('searchModal').classList.add('active');
    document.getElementById('searchInput').focus();
}

function closeSearchModal() {
    document.getElementById('searchModal').classList.remove('active');
    document.getElementById('searchInput').value = '';
    document.getElementById('searchResults').innerHTML = '';
}

// Search Menu
function searchMenu() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (searchTerm.length < 2) {
        searchResults.innerHTML = '<p style="text-align:center; padding:2rem; color:#999;">Type at least 2 characters to search...</p>';
        return;
    }
    
    const results = menuData.filter(item => 
        item.name.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p style="text-align:center; padding:2rem; color:#999;">No items found</p>';
        return;
    }
    
    searchResults.innerHTML = results.map(item => `
        <div class="search-result-item" onclick="addToCartFromSearch(${item.id})">
            <img src="${item.image}" alt="${item.name}" class="search-result-image">
            <div class="search-result-info">
                <div class="search-result-name">${item.name}</div>
                <div class="search-result-price">₹${item.price}</div>
                <div style="font-size:0.85rem; color:#666;">${item.description.substring(0, 60)}...</div>
            </div>
        </div>
    `).join('');
}

// Add to Cart from Search
function addToCartFromSearch(itemId) {
    addToCart(itemId);
    closeSearchModal();
}

// Order Confirmation Modal
function closeOrderModal() {
    document.getElementById('orderModal').classList.remove('active');
}

// Enhanced Checkout - Show Payment Modal
let currentDiscount = 0;

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = total * 0.1;
    const deliveryFee = 50;
    const grandTotal = total + tax + deliveryFee - currentDiscount;
    
    const itemsList = cart.map(item => `
        <div class="order-summary-item">
            <span>${item.quantity}x ${item.name}</span>
            <span>₹${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `).join('');
    
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = `
        <div class="order-summary">
            <h3 style="margin-bottom:1rem;">Order Summary</h3>
            ${itemsList}
            <div class="order-summary-total">
                <span>Total:</span>
                <span>₹${total.toFixed(2)}</span>
            </div>
        </div>
        <p style="text-align:center; color:#666;">
            <i class="fas fa-truck"></i> Your food will be delivered in 30-45 minutes
        </p>
        <p style="text-align:center; color:#666; margin-top:0.5rem;">
            <i class="fas fa-check-circle"></i> Order confirmation sent to your email
        </p>
    `;document.getElementById('payButtonAmount').textContent = `₹${grandTotal.toFixed(2)}`;
    document.getElementById('codAmount').textContent = `₹${grandTotal.toFixed(2)}`;
    
    // Show payment modal
    document.getElementById('paymentModal').classList.add('active');
    toggleCart();
}

// Apply Promo Code
function applyPromo() {
    const promoInput = document.getElementById('promoInput');
    const promoCode = promoInput.value.toUpperCase();
    
    const promoCodes = {
        'FIRST20': 0.20,
        'SAVE10': 0.10,
        'WELCOME': 0.15
    };
    
    if (promoCodes[promoCode]) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        currentDiscount = total * promoCodes[promoCode];
        
        document.getElementById('discountRow').style.display = 'flex';
        document.getElementById('discountAmount').textContent = `-₹${Math.round(currentDiscount)}`;
        
        // Recalculate total
        const tax = total * 0.1;
        const deliveryFee = 50;
        const grandTotal = total + tax + deliveryFee - currentDiscount;
        
        document.getElementById('totalAmount').textContent = `₹${Math.round(grandTotal)}`;
        document.getElementById('payButtonAmount').textContent = `₹${Math.round(grandTotal)}`;
        document.getElementById('codAmount').textContent = `₹${Math.round(grandTotal)}`;
        
        showToast(`Promo code applied! ${(promoCodes[promoCode] * 100)}% off`);
        promoInput.value = '';
    } else {
        showToast('Invalid promo code');
    }
}

// Show Payment Form based on selection
function showPaymentForm(method) {
    // Hide all forms
    document.getElementById('cardForm').style.display = 'none';
    document.getElementById('upiForm').style.display = 'none';
    document.getElementById('walletForm').style.display = 'none';
    document.getElementById('codForm').style.display = 'none';
    
    // Show selected form
    if (method === 'card') {
        document.getElementById('cardForm').style.display = 'block';
    } else if (method === 'upi') {
        document.getElementById('upiForm').style.display = 'block';
    } else if (method === 'wallet') {
        document.getElementById('walletForm').style.display = 'block';
    } else if (method === 'cod') {
        document.getElementById('codForm').style.display = 'block';
    }
}

// Close Payment Modal
function closePaymentModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

// Process Payment
function processPayment() {
    const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    // Simulate payment processing
    showToast('Processing payment...');
    
    setTimeout(() => {
        // Generate order number
        const orderNumber = 'FC' + Math.floor(100000 + Math.random() * 900000);
        
        // Save order to localStorage
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        const newOrder = {
            orderNumber: orderNumber,
            items: [...cart],
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            paymentMethod: selectedMethod,
            status: 'placed',
            timestamp: new Date().toISOString(),
            statusHistory: [
                { status: 'placed', time: new Date().toISOString() }
            ]
        };
        orders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Clear cart
        cart = [];
        saveCart();
        updateCartUI();
        
        // Close payment modal
        closePaymentModal();
        
        // Show success and tracking
        showToast('Payment successful! Order placed.');
        
        setTimeout(() => {
            showOrderTracking(orderNumber);
            
            // Simulate order status updates
            simulateOrderProgress(orderNumber);
        }, 1000);
        
    }, 2000);
}

// Show Order Tracking
function showOrderTracking(orderNumber) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders.find(o => o.orderNumber === orderNumber);
    
    if (!order) return;
    
    document.getElementById('trackingOrderNumber').textContent = orderNumber;
    document.getElementById('trackingStatus').textContent = getStatusText(order.status);
    
    // Update timeline
    updateTimeline(order.status, order.statusHistory);
    
    // Show tracking modal
    document.getElementById('trackingModal').classList.add('active');
}

// Close Tracking Modal
function closeTrackingModal() {
    document.getElementById('trackingModal').classList.remove('active');
}

// Update Timeline
function updateTimeline(currentStatus, statusHistory) {
    const statuses = ['placed', 'confirmed', 'preparing', 'outfordelivery', 'delivered'];
    const currentIndex = statuses.indexOf(currentStatus);
    
    statuses.forEach((status, index) => {
        const timelineItem = document.getElementById(`timeline-${status}`);
        const timeElement = document.getElementById(`time-${status}`);
        
        if (index <= currentIndex) {
            timelineItem.classList.add('active');
            const history = statusHistory.find(h => h.status === status);
            if (history) {
                const time = new Date(history.time);
                timeElement.textContent = time.toLocaleTimeString();
            }
        } else {
            timelineItem.classList.remove('active');
            timeElement.textContent = 'Pending';
        }
    });
}

// Get Status Text
function getStatusText(status) {
    const statusTexts = {
        'placed': 'Order Placed',
        'confirmed': 'Confirmed',
        'preparing': 'Preparing',
        'outfordelivery': 'Out for Delivery',
        'delivered': 'Delivered'
    };
    return statusTexts[status] || status;
}

// Simulate Order Progress
function simulateOrderProgress(orderNumber) {
    const statuses = ['confirmed', 'preparing', 'outfordelivery', 'delivered'];
    let currentStatusIndex = 0;
    
    const interval = setInterval(() => {
        if (currentStatusIndex >= statuses.length) {
            clearInterval(interval);
            return;
        }
        
        const newStatus = statuses[currentStatusIndex];
        updateOrderStatus(orderNumber, newStatus);
        currentStatusIndex++;
        
    }, 10000); // Update every 10 seconds for demo
}

// Update Order Status
function updateOrderStatus(orderNumber, newStatus) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderIndex = orders.findIndex(o => o.orderNumber === orderNumber);
    
    if (orderIndex === -1) return;
    
    orders[orderIndex].status = newStatus;
    orders[orderIndex].statusHistory.push({
        status: newStatus,
        time: new Date().toISOString()
    });
    
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Update UI if tracking modal is open
    const trackingModal = document.getElementById('trackingModal');
    if (trackingModal.classList.contains('active')) {
        const displayedOrderNumber = document.getElementById('trackingOrderNumber').textContent;
        if (displayedOrderNumber === orderNumber) {
            document.getElementById('trackingStatus').textContent = getStatusText(newStatus);
            updateTimeline(newStatus, orders[orderIndex].statusHistory);
            showToast(`Order ${newStatus}!`);
        }
    }
}

// Show My Orders
function showMyOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    if (orders.length === 0) {
        showToast('No orders yet!');
        return;
    }
    
    // Show latest order tracking
    const latestOrder = orders[orders.length - 1];
    showOrderTracking(latestOrder.orderNumber);
}

// Add Favorites Functionality
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function toggleFavorite(itemId) {
    const index = favorites.indexOf(itemId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(itemId);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    showToast(index > -1 ? 'Removed from favorites' : 'Added to favorites');
}

// Close modals on outside click
window.onclick = function(event) {
    const searchModal = document.getElementById('searchModal');
    const orderModal = document.getElementById('orderModal');
    
    if (event.target === searchModal) {
        closeSearchModal();
    }
    if (event.target === orderModal) {
        closeOrderModal();
    }
}
