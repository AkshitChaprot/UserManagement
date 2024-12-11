export interface User {
    created: Date; // Date type for created
    email: string;
    firstName: string;
    lastName: string;
    userId: string;
  }
  
  export interface Member {
    user: User;
  }
  
  export interface UserData {
    data: {
      memberCount: number;
      members: Member[];
    };
  }
  