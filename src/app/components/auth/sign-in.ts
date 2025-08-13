import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignInComponent {
  credentials = { email: '', password: '' };
  error: string | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    // Simulate authentication
    if (this.credentials.email === 'test@example.com' && this.credentials.password === 'password') {
      this.router.navigate(['/tasks']);
    } else {
      this.error = 'Invalid email or password';
    }
  }
}
