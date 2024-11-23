export function Footer() {
  return `
    <footer class="footer" id="footer">
      <section class="footer__section">
        <h3>Chamber of Commerce</h3>
        <p>
          10 Rue De La Paix<br>
          San Salvador, El Salvador
        </p>
        <p>info@chamberofcommerce.com</p>
        <p>+1 (123) 456-7890</p>
      </section>
      <section class="footer__section inline display:flex flex:justify:center">
        <div class="icon">
          <img src="images/youtube-logo.svg" alt="">
        </div>
        <div class="icon">
          <img src="images/twitter-logo.svg" alt="">
        </div>
        <div class="icon">
          <img src="images/linkedin-logo.svg" alt="">
        </div>
      </section>
      <section class="footer__section">
        <p>WDD231 Class Project</p>
        <p>Mau Reyes</p>
        <p>All rights reserved &copy; 2024</p>
        <p>Last modified: <span id="last-modified-date"></span></p>
      </section>
    </footer>
  `;
}
