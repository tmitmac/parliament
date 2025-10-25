class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: opacity 0.2s;
        }
        .nav-links a:hover {
          opacity: 0.9;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
        .nav-links a.active {
          font-weight: 600;
        }
        .nav-links a.active::after {
          width: 100%;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: #1e3a8a;
            flex-direction: column;
            padding: 1rem 2rem;
            gap: 1rem;
          }
          .nav-links.show {
            display: flex;
          }
        }
      </style>
      <nav>
        <a href="index.html" class="logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="4" fill="white"/>
            <rect x="6" y="6" width="12" height="12" rx="2" fill="#1e40af"/>
          </svg>
          Square Parliament
        </a>
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="members.html">Members</a></li>
          <li><a href="history.html">History</a></li>
          <li><a href="map.html">House Map</a></li>
          <li><a href="live.html">Live Proceedings</a></li>
        </ul>
      </nav>
    `;

    // Initialize mobile menu toggle
    const menuButton = this.shadowRoot.querySelector('.mobile-menu-btn');
    const navLinks = this.shadowRoot.querySelector('.nav-links');
    
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      feather.replace();
    });
  }
}

customElements.define('custom-navbar', CustomNavbar);
