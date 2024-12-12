import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-details-dialog',
  templateUrl: './user-details-dialog.component.html',
  styleUrls: ['./user-details-dialog.component.css']
})
export class UserDetailsDialogComponent {

  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<UserDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.userForm = this.fb.group({
      firstName: [data.user.firstName],
      lastName: [data.user.lastName],
      email: [{ value: data.user.email, disabled: true }],
      created: [{ value: data.user.created, disabled: true }],
      userId: [{ value: data.user.userId, disabled: true }]
    });
  }

  onSave(): void {
    this.dialogRef.close(this.userForm.value);
  }

  onClose(): void {
    this.dialogRef.close();
  }

}