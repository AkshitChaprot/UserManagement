import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Member, UserData } from '../model/user';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  userData: UserData | undefined;
  dataSource = new MatTableDataSource<Member>([]);
  // Initialize dataSource with an empty array
  displayedColumns: string[] = ['details', 'firstName', 'lastName', 'email'];
  // Define displayed columns
  constructor(private dataService: DataService) { }
  ngOnInit(): void {
    this.dataService.getUserData().subscribe(data => {
      console.log('Fetched Data:', data);
      // Add this line to log the fetched data
      this.userData = data; this.dataSource.data = data.data.members || [];
      // Assign data to dataSource or an empty array 
    });
  }
  viewUserDetails(user: any): void {
    if (user) {
      // Handle the button click event to view user details 
      console.log('User Details:', user);
    }
  }
}