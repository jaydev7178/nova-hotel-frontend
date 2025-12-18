import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer bg-dark text-light py-5 mt-5">
      <div class="container">
        <div class="row">
          <!-- Company Info -->
          <div class="col-lg-4 mb-4">
            <h5 class="fw-bold mb-3">
              <i class="fas fa-crown me-2 text-warning"></i>
              Nova Hotel Supplies
            </h5>
            <p class="text-light-emphasis">
              Elevating guest experiences through premium hotel amenities and exceptional service. 
              Your trusted partner in hospitality excellence.
            </p>
            <div class="social-links">
              <a href="#" class="text-light me-3">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="text-light me-3">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="text-light me-3">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="text-light">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="fw-bold mb-3">Quick Links</h6>
            <ul class="list-unstyled">
              <li><a routerLink="/home" class="text-light-emphasis text-decoration-none">Home</a></li>
              <li><a routerLink="/products" class="text-light-emphasis text-decoration-none">Products</a></li>
              <li><a routerLink="/about" class="text-light-emphasis text-decoration-none">About Us</a></li>
              <li><a routerLink="/admin" class="text-light-emphasis text-decoration-none">Admin</a></li>
            </ul>
          </div>

          <!-- Categories -->
          <div class="col-lg-2 col-md-6 mb-4">
            <h6 class="fw-bold mb-3">Categories</h6>
            <ul class="list-unstyled">
              <li><a href="#" class="text-light-emphasis text-decoration-none">Toiletries</a></li>
              <li><a href="#" class="text-light-emphasis text-decoration-none">Bathroom</a></li>
              <li><a href="#" class="text-light-emphasis text-decoration-none">Bedroom</a></li>
              <li><a href="#" class="text-light-emphasis text-decoration-none">Dining</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-4 mb-4">
            <h6 class="fw-bold mb-3">Contact Us</h6>
            <div class="contact-info">
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-map-marker-alt me-3 text-warning"></i>
                <span class="text-light-emphasis">123 Hospitality Ave, Hotel District, HX 12345</span>
              </div>
              <div class="d-flex align-items-center mb-2">
                <i class="fas fa-phone me-3 text-warning"></i>
                <span class="text-light-emphasis">+1 (555) 123-4567</span>
              </div>
              <div class="d-flex align-items-center">
                <i class="fas fa-envelope me-3 text-warning"></i>
                <span class="text-light-emphasis">info&#64;novahotelsupplies.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr class="my-4 border-secondary">

        <!-- Copyright -->
        <div class="row align-items-center">
          <div class="col-md-6">
            <p class="mb-0 text-light-emphasis">
              &copy; {{ currentYear }} Nova Hotel Supplies Ltd. All rights reserved.
            </p>
          </div>
          <div class="col-md-6 text-md-end">
            <a href="#" class="text-light-emphasis text-decoration-none me-3">Privacy Policy</a>
            <a href="#" class="text-light-emphasis text-decoration-none">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
