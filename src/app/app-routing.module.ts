import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componants/home/home.component';
import { CustomerProfileComponent } from './Componants/customer-profile/customer-profile.component';
import { LoginComponent } from './Componants/login/login.component';
import { RegisterComponent } from './Componants/register/register.component';
// import { CustomerProblemComponent } from './Componants/customer-problem/customer-problem.component';
// import { CustomerSectionsComponent } from './Componants/customer-sections/customer-sections.component';
import { NotFoundComponent } from './Componants/not-found/not-found.component';
import { DetailsComponent } from './Componants/details/details.component';
import { PaymentComponent } from './Componants/payment/payment.component';
import { UpdateProfileComponent } from './Componants/update-profile/update-profile.component';
import { ProfileProblemsComponent } from './Componants/profile-problems/profile-problems.component';
import { ProfileBlockedCustomerComponent } from './Componants/profile-blocked-customer/profile-blocked-customer.component';
import { SectionCustomerComponent } from './Componants/section-customer/section-customer.component';
import { ProblemCustomerComponent } from './Componants/problem-customer/problem-customer.component';
import { SearchTchnComponent } from './Componants/search-tchn/search-tchn.component';
import { RegisterTechComponent } from './Componants/register-tech/register-tech.component';
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
{path:"ProblemCustomer",component:ProblemCustomerComponent},
{path:"Search",component:SearchTchnComponent},

{path:"**",component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
