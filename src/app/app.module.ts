import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
//  import { CustomerProblemComponent } from './Components/customer-problem/customer-problem.component';
// import { CustomerSectionsComponent } from './Components/customer-sections/customer-sections.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { DetailsComponent } from './Components/details/details.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './Components/payment/payment.component';
import { CustomerProfileComponent } from './Components/customer-profile/customer-profile.component';
import { UpdateProfileComponent } from './Components/update-profile/update-profile.component';
import { ProfileProblemsComponent } from './Components/profile-problems/profile-problems.component';
import { ProfileBlockedCustomerComponent } from './Components/profile-blocked-customer/profile-blocked-customer.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatMenuModule} from '@angular/material/menu';
  import {MatIconModule} from '@angular/material/icon';
import { SectionCustomerComponent } from './Components/section-customer/section-customer.component';
import { ProblemCustomerComponent } from './Components/problem-customer/problem-customer.component';
import { SearchTchnComponent } from './Components/search-tchn/search-tchn.component';
import { RegisterTechComponent } from './Components/register-tech/register-tech.component';
import { MatChipsModule } from '@angular/material/chips';










@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    CustomerProfileComponent,
    LoginComponent,
    RegisterComponent,
// CustomerProblemComponent,
//     CustomerSectionsComponent,
    NotFoundComponent,
    DetailsComponent,
    PaymentComponent,
    UpdateProfileComponent,
    ProfileProblemsComponent,
    ProfileBlockedCustomerComponent,
    SectionCustomerComponent,
    ProblemCustomerComponent,
    SearchTchnComponent,
    RegisterTechComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatListModule,
    HttpClientModule,
 MatMenuModule,
  MatIconModule,
  MatChipsModule



  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
