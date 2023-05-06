import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CustomerProfileComponent } from './Components/customer-profile/customer-profile.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
// import { CustomerProblemComponent } from './Components/customer-problem/customer-problem.component';
// import { CustomerSectionsComponent } from './Components/customer-sections/customer-sections.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DetailsComponent } from './Components/details/details.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { UpdateProfileComponent } from './Components/update-profile/update-profile.component';
import { ProfileProblemsComponent } from './Components/profile-problems/profile-problems.component';
import { ProfileBlockedCustomerComponent } from './Components/profile-blocked-customer/profile-blocked-customer.component';
import { SectionCustomerComponent } from './Components/section-customer/section-customer.component';
import { ProblemCustomerComponent } from './Components/problem-customer/problem-customer.component';
import { SearchTchnComponent } from './Components/search-tchn/search-tchn.component';
import { RegisterTechComponent } from './Components/register-tech/register-tech.component';
const routes: Routes = [
// {path:"",redirectTo:HomeComponent},
{path:"",component:HomeComponent},
{path:"Home",component:HomeComponent},
{path:"Customer_Profile",component:CustomerProfileComponent,children:[
   {path:"",component:UpdateProfileComponent},
  {path:"UpdateProfile",component:UpdateProfileComponent},

  {path:"blocked-technical",component:ProfileBlockedCustomerComponent},

]},
{path:"ProfileProblems",component:ProfileProblemsComponent},
{path:"Login",component:LoginComponent},
{path:"Register",component:RegisterComponent},

// {path:"CustomerProblem",component:CustomerProblemComponent},
{path:"RegisterTech",component:RegisterTechComponent},
{path:"details/:id",component:DetailsComponent},
{path:"payment",component:PaymentComponent},
{path:"SectionCustomer/:id",component:SectionCustomerComponent},
{path:"ProblemCustomer/:id",component:ProblemCustomerComponent},
{ path:'ProblemCustomer', component: ProblemCustomerComponent },

{path:"Search",component:SearchTchnComponent},

{path:"**",component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
