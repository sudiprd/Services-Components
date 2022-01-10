import { Component, OnInit } from '@angular/core';
import { StudentService } from './service/student.service'
import { DataComponent} from '../app/data/data.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title= "Sudip Pradhan- Angular Tutorial"

  postImg1 ={
    img : './assets/image.jpg',
    width : 350,
    height: 300
   } 
   postImg2 = {
    img: './assets/image2.jpg',
   width : 350,
   height: 300
  
  }
  btnSubmit :string= 'Save';
  img: string= "/assets/img1.jpg";
  flag : any = 1;

  student : any = {
    firstName  : 'sudip',
    lastName : 'pradhan',
    age : 26
  }
  
  studentInfo1 :string[]=[];
  studentInfo2 :string[]=[];
  studentInfo3 :string[]=[];
 
  getStudentInfofromService1(){
    this.studentInfo1 = this.stuservice.getInfo1();
  }
  getStudentInfofromService2(){
    this.studentInfo2 = this.stuservice.getInfo1() ;
  }
  getStudentInfofromService3(){
    this.studentInfo2 = this.stuservice.getInfo1() ;
  }
 
  constructor(private stuservice : StudentService){

  }

  ngOnInit(){
    
    console.log(this.getStudentInfofromService1());
    console.log(this.getStudentInfofromService2());
    console.log( this.getStudentInfofromService3());
  }
}

