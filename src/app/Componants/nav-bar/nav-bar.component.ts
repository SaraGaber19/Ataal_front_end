import { Component ,ViewChild,ElementRef, OnInit} from '@angular/core';
import { NavBarService } from '../Services/Nav_Services/nav-bar.service';
import { ProblemService } from '../Services/Problem/problem.service';
import { Router } from '@angular/router';
import { SearchService } from '../Services/search.service';
// import * as $ from 'jquery';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss',"../../../assets/style.css"]
})
export class NavBarComponent implements OnInit {
notificationNumber:number=0;
notification:any
AllSection:any
currentData:any;
currentOffer:any;
Recom:boolean=false;
query:string='';
added:boolean=false;
offer:any
  ngOnInit(): void {
    this.customer.getNotificationNumber(2).subscribe(
      (data)=>{console.log(data)
      this.notificationNumber=data;
    })
this.Section.GetAllSections().subscribe((data)=>{console.log(data)
this.AllSection=data;
})

  }
  // SendId(id:number){
  //   // this._Router.navigate([`../SectionCustomer`,id])
  // //  this._Router.navigateByUrl(`/SectionCustomer/${id}`);
  // }

  getNotification(){
    this.customer.getNotification(2).subscribe((data)=>{console.log(data)
      this.notification=data.notifications;

      this.notificationNumber=0;
      }
      )
  }


  AcceptOffer(){
    var data={
 "technicalId":this.offer.technicalid,
  "problemId":this.offer.problemID,
  "offerId": this.offer.offerId

    }
    this. Section.AcceptOffer(data).subscribe((data)=>{console.log(data)

      this.added=true;
  })
}

  handleClick(i:number){

    this.added=false;
this.currentData=this.notification[i];
console.log(this.currentData)
if(this.currentData.offerId==null){
  this.Recom=true;
}
else{
  this.Recom=false;
  this. Section.getOfferById(this.currentData.offerId).subscribe((data)=>{console.log(data)
    this.offer=data;
  })

  //get offer by id  and display here
 // add buton to accept
 // button to close

 //acept offer will call api to send data for accept
}
  }



  onSearch(){
    this.search.setSearchQuery(this.query)
  this._Router.navigateByUrl("/Search")


  }


  getDate(NotDate:any){

    const Now= new Date();
    const NotificationDate = new Date(NotDate);
    if(Now.getFullYear()>NotificationDate.getFullYear()){
      return `${Now.getFullYear()-NotificationDate.getFullYear()} year`
    }
    else if(Now.getMonth()>NotificationDate.getMonth()){
      return `${Now.getMonth()-NotificationDate.getMonth()} month`
    }
    else if(Now.getDate()>NotificationDate.getDate()){
      return `${Now.getDate()-NotificationDate.getDate()} day`
    }
    else if(Now.getHours()>NotificationDate.getHours()){
      return `${Now.getHours()-NotificationDate.getHours()} hour`
    }
    else if(Now.getMinutes()>NotificationDate.getMinutes()){
      return `${Now.getMinutes()-NotificationDate.getMinutes()}minute`
    }
    else if(Now.getSeconds()>NotificationDate.getSeconds()){
      return `${Now.getSeconds()-NotificationDate.getSeconds()}second`
    }
return 1;

  }
  constructor(private customer: NavBarService,private Section:ProblemService,private _Router:Router,private search:SearchService){

  }



  // getTime(date:any){
  //   const Datee = new Date(date);
  //  return `${Datee.getHours()}:${Datee.getMinutes()}:${Datee.getSeconds()} ${Datee.getHours() >= 12 ? 'PM' : 'AM'}`
  //   // this.realyTime=Datee.getTime()

  // }

}
