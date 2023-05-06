import { Component ,ViewChild,ElementRef, OnInit} from '@angular/core';
import { NavBarService } from 'src/app/Services/Nav_Services/nav-bar.service';
import { ProblemService } from 'src/app/Services/Problem/problem.service';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/Services/search.service';
import { AuthService } from 'src/app/Services/Auth_Services/auth.service';
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
IsLogin:boolean=false;
customerPhoto:any=null;
customerName:string="";
  ngOnInit(): void {




    this.Auth.UserId.subscribe(
    ()=>{
  if(this.Auth.UserId.getValue()!=null&&this.Auth.userRole.getValue()=="Customer"){

    this.customer.getNotificationNumber(this.Auth.UserId.getValue()).subscribe(
      (data)=>{console.log(this.Auth.UserId)
      this.notificationNumber=data;
    });




   this.Auth.photo.subscribe(()=>{
    if(  this.Auth.photo.getValue()!=null){
      this.customerPhoto=this.Auth.photo.getValue()


    }

   })
   this.Auth.name.subscribe(()=>{
    if( this.Auth.name.getValue()!=null){
      this.customerName=this.Auth.name.getValue();
    }
   })

    console.log( this.customerName)
    this.IsLogin=true







  }
  else{
    this.IsLogin=false;
  }
}

  )




this.Section.GetAllSections().subscribe((data)=>{console.log(data)
this.AllSection=data;
})

  }
  // SendId(id:number){
  //   // this._Router.navigate([`../SectionCustomer`,id])
  // //  this._Router.navigateByUrl(`/SectionCustomer/${id}`);
  // }

  getNotification(){
    this.customer.getNotification(this.Auth.UserId).subscribe((data)=>{console.log(data)
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


  getDate(dateString: string): string {
    const NotificationDate = new Date(dateString);
    const diffMs = new Date().getTime() - NotificationDate.getTime();
    const diffMins = Math.round(diffMs / 60000); // convert to minutes
    if (diffMins < 60) {
      return `${diffMins} minute${diffMins === 1 ? '' : 's'} ago`;
    } else if (diffMins < 1440) {
      const diffHours = Math.floor(diffMins / 60);
      return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;
    } else {
      const diffDays = Math.floor(diffMins / 1440);
      return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;
    }
  }


  constructor(private customer: NavBarService,private Section:ProblemService,private _Router:Router,private search:SearchService,private Auth:AuthService){

  }

logout(){
  this.Auth.sinout();
}

  // getTime(date:any){
  //   const Datee = new Date(date);
  //  return `${Datee.getHours()}:${Datee.getMinutes()}:${Datee.getSeconds()} ${Datee.getHours() >= 12 ? 'PM' : 'AM'}`
  //   // this.realyTime=Datee.getTime()

  // }

}
