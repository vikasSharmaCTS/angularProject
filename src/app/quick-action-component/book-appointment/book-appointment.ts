import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-appointment',
  imports: [FormsModule,CommonModule],
  templateUrl: './book-appointment.html',
  styleUrl: './book-appointment.css'
})
export class BookAppointment {
  patient={
  name:'',
  gender:'',
  age:'',
  doctorName:'',
  speciality:'',
  date:''
 }
 showDetails=false
 book(){
    this.patient
    this.showDetails=true
    const {name,gender,age,doctorName,speciality,date}=this.patient
    console.log(this.patient)
  if (name && gender && age && doctorName && speciality && date){
    alert("Appointment Booked Successfully")
  this.showDetails=true
  }
  else{
    alert("please fill all the details")
    this.showDetails=false
  }
}
}