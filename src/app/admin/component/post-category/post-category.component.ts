import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-post-category',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,ReactiveFormsModule,NgIf],
  templateUrl: './post-category.component.html',
  styleUrl: './post-category.component.css'
})
export class PostCategoryComponent {

  categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService
) { }

ngOnInit(): void {
    this.categoryForm = this.fb.group({
        name: [null, [Validators.required]],
        description: [null, [Validators.required]],
    })
}

  addCategory(): void {
    if (this.categoryForm.valid) {
        this.adminService.addCategory(this.categoryForm.value).subscribe(
            (res) => {
                if (res.id != null) {
                    this.snackBar.open('Category Posted Successfully!', 'Close', {
                        duration: 5000
                    });
                    this.router.navigateByUrl('/admin/dashboard');
                }
            },
            (error) => {
                this.snackBar.open(error.message, 'Close', {
                    duration: 5000,
                    panelClass: 'error-snackbar'
                });
            }
        );
    } else {
        this.categoryForm.markAllAsTouched();
    }
}

}