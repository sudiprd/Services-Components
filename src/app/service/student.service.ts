import { Injectable } from '@angular/core';

 
@Injectable()

export class StudentService {
      
  stud1 :string[]= ["sudip", "M245", "sudip@gmail.com"];
  stud2 :string[]= ["pradhan", "EE245", "pradhan@omega.com"];
  stud3 :string[]= ["rajan", "CS245", "rajan@yahoo.com"];

  constructor() { }

  getInfo1():string[] {
    return this.stud1;
  }
  getInfo2() : string[]{
    return this.stud2;
  }
  getInfo3() : string[]{
    return this.stud3;
  }



}


