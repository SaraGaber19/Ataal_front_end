import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './Componants/nav-bar/nav-bar.component';
import { FooterComponent } from './Componants/footer/footer.component';
import { HomeComponent } from './Componants/home/home.component';
import { LoginComponent } from './Componants/login/login.component';
import { RegisterComponent } from './Componants/register/register.component';
//  import { CustomerProblemComponent } from './Componants/customer-problem/customer-problem.component';
// import { CustomerSectionsComponent } from './Componants/customer-sections/customer-sections.component';
import { NotFoundComponent } from './Componants/not-found/not-found.component';
import { DetailsComponent } from './Componants/details/details.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './Componants/payment/payment.component';
import { CustomerProfileComponent } from './Componants/customer-profile/customer-profile.component';
import { UpdateProfileComponent } from './Componants/update-profile/update-profile.component';
import { ProfileProblemsComponent } from './Componants/profile-problems/profile-problems.component';
import { ProfileBlockedCustomerComponent } from './Componants/profile-blocked-customer/profile-blocked-customer.component';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatMenuModule} from '@angular/material/menu';
  import {MatIconModule} from '@angular/material/icon';
import { SectionCustomerComponent } from './Componants/section-customer/section-customer.component';
import { ProblemCustomerComponent } from './Componants/problem-customer/problem-customer.component';
import { SearchTchnComponent } from './Componants/search-tchn/search-tchn.component';
import { RegisterTechComponent } from './Componants/register-tech/register-tech.component';









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
  MatIconModule



  ],

  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
