import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Member, UserData } from '../model/user';
import { MatTableDataSource } from '@angular/material/table';
import { UserDetailsDialogComponent } from '../user-details-dialog/user-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  userData: UserData | undefined;
  dataSource = new MatTableDataSource<Member>([]); // Initialize dataSource with an empty array
  displayedColumns: string[] = ['details', 'firstName', 'lastName', 'email']; // Define displayed columns

  constructor(private dataService: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataService.getUserData().subscribe(data => {
      this.userData = data;
      this.dataSource.data = data.data.members || []; // Assign data to dataSource or an empty array
    });
  }

  viewUserDetails(user: any): void {
    const dialogRef = this.dialog.open(UserDetailsDialogComponent, {
      width: '400px',
      data: { user }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Simulate a REST call to update the user details
        user.firstName = result.firstName;
        user.lastName = result.lastName;
        this.dataSource.data = [...this.dataSource.data]; // Refresh the table data
      }
    });
  }

}

