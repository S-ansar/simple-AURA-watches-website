let navbar = document.getElementById('navbar');
navbar.innerHTML = `<a class="navbar-brand" href="index.html">
      <img src="./images/2logo.jpg" alt="" width="50px" height="50px " style="border-radius: 50%;"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="index.html">Home</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" style="color: white; :hover{ color:  #5c0e14;}"href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      products
                    </a>
                    <ul class="dropdown-menu" style="color: white; background-color:black;">
                      <li><a class="dropdown-item" href="productscasual.html">Premiers</a></li>
                      <li><a class="dropdown-item" href="product-limited-edition.html">Limited Editions</a></li>
                      <li><a class="dropdown-item" href="product-DATE.html">Classic</a></li>
                      <li><a class="dropdown-item" href="product-Digital.html">Digital</a></li>
                      <li><a class="dropdown-item" href="product-Sport.html">Sports</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="technology.html">Watchmaking</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="storelocator.html">Store Locator</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="ContactUs.html">Support</a>
                    </li>
                </ul>
              </div>
            </div>`
let footer = document.getElementById('footer');
footer.innerHTML = `
           <div class="footer-wrapper">
            <div class="brand-logo"><img src="./images/2logo.jpg" alt="Logo"></div>
            <ul>
                <li>
                    <h3>Business</h3>
                </li>
                <li><a href="index.html">AURA watches</a></li>
                <li><a href="#">AURA footer</a></li>
                <li><a href="#">AURA clothes</a></li>
                <li><a href="#">AURA jewrllers</a></li>
            </ul>

            <ul>
                <li>
                    <h3>Support</h3>
                </li>
                <li><a href="ContactUs.html">Return</a></li>
                <li><a href="ContactUs.html">Replace order</a></li>
                <li><a href="ContactUs.html">Wrong order</a></li>
            </ul>

            <ul>
                <li>
                    <h3>Support us</h3>
                </li>
                <ul class="list-unstyled text-small" style="display: flex;gap: 4px;">
                    <li><a class="link-secondary" href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a></li>
                    <li><a class="link-secondary" href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                    <li><a class="link-secondary" href="https://blog.x.com/"><i class="fab fa-twitter"></i></a></li>
                </ul>
            </ul>

            <div class="connect-with-us">
                <h2>Connect with us</h2>
                <div class="newsletter">
                    <form>
                        <input type="email" id="email-id" placeholder="Enter your Email address">
                        <button class="submit">Subscribe</button>
                    </form>
                    <p>We promise we won't spam instead we'll send you updates before anybody else from time to time</p>
                </div>
            </div>
            <div class="flex-c">
                <div class="copyright">Copyright © 2024 | <a href="#">AURA</a> | All Rights Reserved</div>
                <ul class="pages-link">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="ContactUs.html">Contact</a></li>
                    <li><a href="technology.html">About</a></li>
                    <li><a href="#">Terms & Policy</a></li>
                </ul>
            </div>
        </div>`
        document.addEventListener("DOMContentLoaded", function() {
          const contactForm = document.getElementById('contactForm');
          
          // Ensure the form is present
          if (!contactForm) {
              console.error("Form with id 'contactForm' not found!");
              return;
          }
      
          contactForm.addEventListener('submit', function(e) {
              e.preventDefault();
      
              const name = document.getElementById('name').value.trim();
              const email = document.getElementById('email').value.trim();
              const message = document.getElementById('message').value.trim();
      
              // Validate form fields
              if (!name || !email || !message) {
                  alert("Please fill in all fields.");
                  return;
              }
      
              // Simple alert on form submission (In a real scenario, you'd send data to a server)
              alert(`Thank you, ${name}! We have received your message. We will get back to you at ${email}.`);
      
              // Reset the form after submission
              contactForm.reset();
          });
      });
      
