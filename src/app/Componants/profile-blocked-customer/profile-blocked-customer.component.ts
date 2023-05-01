import { Component ,OnInit} from '@angular/core';
import { CustomerService } from '../Services/Customer_Servides/customer.service';
import { BlockedTechnican } from 'src/app/Interfaces/blocked-technican';

@Component({
  selector: 'app-profile-blocked-customer',
  templateUrl: './profile-blocked-customer.component.html',
  styleUrls: ['./profile-blocked-customer.component.scss']
})
export class ProfileBlockedCustomerComponent implements  OnInit {
Technicans:any
Technican_ID:number=0;
constructor(private Customer:CustomerService){}

Unblock(){

  this.Customer.UnBlockTechnican({customerId:2,technicalId:this.Technican_ID}).subscribe((data)=>
  console.log(data)
  )

}

sendTechnicanId(id:number){
 this. Technican_ID=id;
}





ngOnInit(): void {
  this.Customer.getBlockedCustomer(2).subscribe((data)=>{
    this.Technicans=data
  })



}










}
