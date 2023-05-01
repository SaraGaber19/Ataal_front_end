import { Component ,OnInit} from '@angular/core';
import { CustomerService } from '../Services/Customer_Servides/customer.service';

@Component({
  selector: 'app-profile-problems',
  templateUrl: './profile-problems.component.html',
  styleUrls: ['./profile-problems.component.scss']
})
export class ProfileProblemsComponent  implements OnInit{
  Problems:any;
  date:string="";
ProblemId:number=0
constructor(private customer :CustomerService){}
ngOnInit(): void {
  this.customer.getproblemsForCustomer(1).subscribe((data)=>{
    console.log(data)
    this.Problems=data
    this.date= this.Problems.date


  })
}
sendProblemId(id:number){
this.ProblemId=id
console.log(id)
}
AssignAsSolved(){
  this.customer.AssignProblemAsSolved(this.ProblemId).subscribe((data)=>{console.log(data)})
}



getDate(date:any){
  const Datee = new Date(date);
 return `${Datee.getDate()}/${Datee.getMonth()}/${Datee.getFullYear()}`;

  // this.realyTime=Datee.getTime()

}
getTime(date:any){
  const Datee = new Date(date);
 return `${Datee.getHours()}:${Datee.getMinutes()}:${Datee.getSeconds()} ${Datee.getHours() >= 12 ? 'PM' : 'AM'}`
  // this.realyTime=Datee.getTime()

}
}


