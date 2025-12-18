import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero-section bg-primary text-white py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h1 class="display-4 fw-bold mb-4">About Nova Hotel Supplies</h1>
            <p class="lead mb-4">
              Elevating guest experiences through premium hotel amenities and exceptional service. 
              We are your trusted partner in hospitality excellence.
            </p>
          </div>
          <div class="col-lg-6 text-center">
            <img src="assets/images/about-hero.jpg" 
                 alt="About Nova Hotel Supplies" 
                 class="img-fluid rounded shadow-lg">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="our-story py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <h2 class="display-5 fw-bold text-dark mb-4">Our Story</h2>
            <p class="lead text-muted mb-5">
              At Nova Hotel Supplies Ltd., we believe that every detail shapes the guest experience. 
              Based on a vision of elegance, comfort, and reliability, we specialize in providing 
              premium hotel toiletries and essentials that go beyond amenities, into experience.
            </p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="story-card text-center">
              <div class="story-icon mb-3">
                <i class="fas fa-eye fa-3x text-primary"></i>
              </div>
              <h4 class="fw-bold mb-3">Our Vision</h4>
              <p class="text-muted">
                To be the leading provider of luxury hotel supplies, creating memorable 
                experiences that exceed guest expectations and build lasting loyalty.
              </p>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="story-card text-center">
              <div class="story-icon mb-3">
                <i class="fas fa-target fa-3x text-primary"></i>
              </div>
              <h4 class="fw-bold mb-3">Our Mission</h4>
              <p class="text-muted">
                We partner with hotels, resorts, and hospitality businesses to deliver 
                solutions that elevate comfort and create lasting impressions through 
                premium quality products.
              </p>
            </div>
          </div>
          
          <div class="col-lg-4">
            <div class="story-card text-center">
              <div class="story-icon mb-3">
                <i class="fas fa-heart fa-3x text-primary"></i>
              </div>
              <h4 class="fw-bold mb-3">Our Values</h4>
              <p class="text-muted">
                Excellence, innovation, and trust guide everything we do. We're committed 
                to delivering the highest standards in quality and service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="what-we-offer bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="display-5 fw-bold text-dark">What We Offer</h2>
            <p class="lead text-muted">Comprehensive solutions for all your hotel supply needs</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="offer-card">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <div class="offer-icon">
                    <i class="fas fa-spa fa-3x text-primary"></i>
                  </div>
                </div>
                <div class="col-md-9">
                  <h5 class="fw-bold mb-2">Luxury Toiletries</h5>
                  <p class="text-muted mb-0">
                    Premium shampoo, conditioner, shower gel, and personal care products 
                    with elegant fragrances and eco-friendly packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="offer-card">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <div class="offer-icon">
                    <i class="fas fa-bed fa-3x text-primary"></i>
                  </div>
                </div>
                <div class="col-md-9">
                  <h5 class="fw-bold mb-2">Bedroom Essentials</h5>
                  <p class="text-muted mb-0">
                    High-quality linens, towels, and bedroom amenities designed for 
                    maximum comfort and durability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="offer-card">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <div class="offer-icon">
                    <i class="fas fa-bath fa-3x text-primary"></i>
                  </div>
                </div>
                <div class="col-md-9">
                  <h5 class="fw-bold mb-2">Bathroom Accessories</h5>
                  <p class="text-muted mb-0">
                    Elegant bathroom fixtures, dispensers, and accessories that combine 
                    functionality with sophisticated design.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-6">
            <div class="offer-card">
              <div class="row align-items-center">
                <div class="col-md-3">
                  <div class="offer-icon">
                    <i class="fas fa-utensils fa-3x text-primary"></i>
                  </div>
                </div>
                <div class="col-md-9">
                  <h5 class="fw-bold mb-2">Dining & Kitchen</h5>
                  <p class="text-muted mb-0">
                    Fine dining accessories, kitchen essentials, and room service 
                    items that enhance the culinary experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="display-5 fw-bold text-dark">Why Choose Nova Hotel Supplies?</h2>
            <p class="lead text-muted">Your success is our commitment</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-3 col-md-6">
            <div class="feature-card text-center">
              <div class="feature-icon mb-3">
                <i class="fas fa-star fa-3x text-warning"></i>
              </div>
              <h5 class="fw-bold mb-3">Premium Quality</h5>
              <p class="text-muted">
                We source only the finest materials and work with trusted manufacturers 
                to ensure exceptional quality in every product.
              </p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="feature-card text-center">
              <div class="feature-icon mb-3">
                <i class="fas fa-shipping-fast fa-3x text-primary"></i>
              </div>
              <h5 class="fw-bold mb-3">Reliable Delivery</h5>
              <p class="text-muted">
                Our streamlined logistics and dedicated support team ensure timely 
                delivery and consistent supply chain management.
              </p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="feature-card text-center">
              <div class="feature-icon mb-3">
                <i class="fas fa-handshake fa-3x text-success"></i>
              </div>
              <h5 class="fw-bold mb-3">Partnership Approach</h5>
              <p class="text-muted">
                We're more than just a supplier - we're your partner in creating 
                exceptional guest experiences that build lasting loyalty.
              </p>
            </div>
          </div>
          
          <div class="col-lg-3 col-md-6">
            <div class="feature-card text-center">
              <div class="feature-icon mb-3">
                <i class="fas fa-leaf fa-3x text-success"></i>
              </div>
              <h5 class="fw-bold mb-3">Eco-Friendly</h5>
              <p class="text-muted">
                Committed to sustainability, our products and packaging are designed 
                with environmental responsibility in mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Clients Section -->
    <section class="our-clients bg-light py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="display-5 fw-bold text-dark">Trusted by Leading Hotels</h2>
            <p class="lead text-muted">We proudly serve hospitality businesses worldwide</p>
          </div>
        </div>
        
        <div class="row g-4">
          <div class="col-lg-2 col-md-4 col-6">
            <div class="client-logo text-center">
              <div class="logo-placeholder">
                <i class="fas fa-hotel fa-2x text-muted"></i>
                <small class="d-block text-muted mt-2">Luxury Resort</small>
              </div>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-4 col-6">
            <div class="client-logo text-center">
              <div class="logo-placeholder">
                <i class="fas fa-building fa-2x text-muted"></i>
                <small class="d-block text-muted mt-2">Business Hotel</small>
              </div>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-4 col-6">
            <div class="client-logo text-center">
              <div class="logo-placeholder">
                <i class="fas fa-umbrella-beach fa-2x text-muted"></i>
                <small class="d-block text-muted mt-2">Beach Resort</small>
              </div>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-4 col-6">
            <div class="client-logo text-center">
              <div class="logo-placeholder">
                <i class="fas fa-mountain fa-2x text-muted"></i>
                <small class="d-block text-muted mt-2">Mountain Lodge</small>
              </div>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-4 col-6">
            <div class="client-logo text-center">
              <div class="logo-placeholder">
                <i class="fas fa-city fa-2x text-muted"></i>
                <small class="d-block text-muted mt-2">City Hotel</small>
              </div>
            </div>
          </div>
          
          <div class="col-lg-2 col-md-4 col-6">
            <div class="client-logo text-center">
              <div class="logo-placeholder">
                <i class="fas fa-home fa-2x text-muted"></i>
                <small class="d-block text-muted mt-2">Boutique Hotel</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section bg-primary text-white py-5">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-8 mx-auto">
            <h2 class="display-5 fw-bold mb-4">
              Ready to Elevate Your Guest Experience?
            </h2>
            <p class="lead mb-4">
              Join hundreds of hotels that trust Nova Hotel Supplies for their 
              premium amenities and exceptional service.
            </p>
            <div class="d-flex gap-3 justify-content-center">
              <a routerLink="/products" class="btn btn-light btn-lg px-4">
                <i class="fas fa-shopping-bag me-2"></i>
                Browse Products
              </a>
              <a href="mailto:info@novahotelsupplies.com" class="btn btn-outline-light btn-lg px-4">
                <i class="fas fa-envelope me-2"></i>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {}
