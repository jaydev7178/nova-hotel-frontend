import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="card shadow">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <h2 class="fw-bold text-primary">Login</h2>
                <p class="text-muted">Sign in to your account</p>
              </div>
              
              <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
                <div class="mb-3">
                  <label class="form-label">Email or Username</label>
                  <input 
                    type="text" 
                    class="form-control" 
                    [(ngModel)]="credentials.usernameOrEmail"
                    name="usernameOrEmail"
                    required>
                </div>
                
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input 
                    type="password" 
                    class="form-control" 
                    [(ngModel)]="credentials.password"
                    name="password"
                    required>
                </div>
                
                <div class="mb-3" *ngIf="errorMessage">
                  <div class="alert alert-danger">{{ errorMessage }}</div>
                </div>
                
                <button 
                  type="submit" 
                  class="btn btn-primary w-100"
                  [disabled]="loading || !loginForm.valid">
                  <span *ngIf="loading" class="spinner-border spinner-border-sm me-2"></span>
                  {{ loading ? 'Signing in...' : 'Sign In' }}
                </button>
              </form>
              
              <div class="mt-4 text-center">
                <small class="text-muted">
                  Demo Credentials:<br>
                  User: jaydev&#64;gmail.com / user123<br>
                  Admin: admin&#64;novahotelsupplies.com / admin123
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: none;
      border-radius: 15px;
    }
    .form-control {
      border-radius: 10px;
      padding: 12px;
    }
    .btn {
      border-radius: 10px;
      padding: 12px;
    }
  `]
})
export class LoginComponent {
  credentials = {
    usernameOrEmail: '',
    password: ''
  };
  
  loading = false;
  errorMessage = '';
  returnUrl = '/';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(): void {
    if (!this.credentials.usernameOrEmail || !this.credentials.password) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';

    this.authService.login(this.credentials.usernameOrEmail, this.credentials.password)
      .subscribe({
        next: (response) => {
          if (response.success) {
            if (this.authService.isAdmin()) {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate([this.returnUrl]);
            }
          } else {
            this.errorMessage = response.message || 'Login failed';
          }
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          this.loading = false;
        }
      });
  }
}