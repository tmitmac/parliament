class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: sticky;
          top: 0;
          z-index: 50;
        }

        nav {
          background: #0f2a44;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0.9rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: white;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          letter-spacing: 0.02em;
        }

        .logo-mark {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-mark span {
          width: 16px;
          height: 16px;
          background: #0f2a44;
          border-radius: 3px;
          display: block;
        }

        .logo small {
          display: block;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c7d2fe;
        }

        /* Desktop nav */
        ul {
          display: flex;
          list-style: none;
          gap: 1.75rem;
          margin: 0;
          padding: 0;
        }

        ul a {
          color: #e5e7eb;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.35rem 0;
          position: relative;
        }

        ul a:hover {
          color: white;
        }

        ul a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: #93c5fd;
          transition: width 0.25s ease;
        }

        ul a:hover::after,
        ul a.active::after {
          width: 100%;
        }

        ul a.active {
          color: white;
          font-weight: 600;
        }

        ul a.active::after {
  transition-delay: 0.1s;
}


        /* Mobile button */
        .menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        /* Mobile menu */
        .mobile-panel {
          display: none;
          background: #0f2a44;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .mobile-panel a {
          display: block;
          padding: 0.9rem 1.5rem;
          color: #e5e7eb;
          text-decoration: none;
          font-size: 0.95rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .mobile-panel a:hover {
          background: rgba(255,255,255,0.06);
          color: white;
        }

        .mobile-panel.show {
          display: block;
        }

        @media (max-width: 900px) {
          ul {
            display: none;
          }

          .menu-btn {
            display: block;
          }
        }
      </style>

      <nav>
        <div class="container">
          <a href="index.html" class="logo">
            <div class="logo-mark">
              <span></span>
            </div>
            <div>
              Square Parliament
              <small>House of Representatives</small>
            </div>
          </a>

          <button class="menu-btn" aria-label="Open menu">
            <i data-feather="menu"></i>
          </button>

          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="members.html">Members</a></li>
            <li><a href="history.html">History</a></li>
            <li><a href="map.html">House Map</a></li>
            <li><a href="live.html">Live</a></li>
          </ul>
        </div>

        <div class="mobile-panel">
          <a href="index.html">Home</a>
          <a href="members.html">Members</a>
          <a href="history.html">History</a>
          <a href="map.html">House Map</a>
          <a href="live.html">Live Proceedings</a>
        </div>
      </nav>
    `;

// --- Active page underline (FIXED) ---
const path = window.location.pathname;
const currentPage = path === '/' ? 'index.html' : path.split('/').pop();

// Desktop links
this.shadowRoot.querySelectorAll('ul a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});

// Mobile links
this.shadowRoot.querySelectorAll('.mobile-panel a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.style.color = 'white';
    link.style.fontWeight = '600';
    link.style.background = 'rgba(255,255,255,0.06)';
  }
});



    const menuBtn = this.shadowRoot.querySelector('.menu-btn');
    const panel = this.shadowRoot.querySelector('.mobile-panel');

    menuBtn.addEventListener('click', () => {
      panel.classList.toggle('show');
      feather.replace();
    });

    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);
