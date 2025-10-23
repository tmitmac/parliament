class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          text-align: left;
        }
        .footer-column h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: white;
        }
        .footer-column ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-column li {
          margin-bottom: 0.75rem;
        }
        .footer-column a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-column a:hover {
          color: white;
          text-decoration: underline;
        }
        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .social-links a {
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .social-links a:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-column">
            <h3>Square Parliament</h3>
            <p>The democratic institution representing the people of Square Country.</p>
          </div>
          <div class="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="members.html">Members</a></li>
              <li><a href="history.html">History</a></li>
              <li><a href="map.html">House Map</a></li>
              <li><a href="live.html">Live Proceedings</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Legislation</a></li>
              <li><a href="#">Committee Reports</a></li>
              <li><a href="#">Parliamentary Calendar</a></li>
              <li><a href="#">Visitor Information</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Contact</h3>
            <ul>
              <li>Parliament Building</li>
              <li>Capital Square, Square Country</li>
              <li>Email: info@squareparliament.gov.sc</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Square Country House of Representatives. All rights reserved.</p>
          <div class="social-links">
            <a href="#" aria-label="Twitter"><i data-feather="twitter"></i></a>
            <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
            <a href="#" aria-label="YouTube"><i data-feather="youtube"></i></a>
            <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
