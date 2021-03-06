import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './materialmodule/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {LayoutComponent} from './layout/layout.component';
import {HomeComponent} from './home/home.component';
import {RoutingModule} from './shared/routing/routing.module';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {FooterComponent} from './navigation/footer/footer.component';
import {GridPresse} from './home/grid-presse/grid-presse.component';
import {LoginComponent} from './shared/components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {MatCardModule, MatInputModule, MatProgressSpinnerModule} from '@angular/material';
import {LoaderComponent} from './shared/components/loader/loader.component';
import {CoreModule} from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        HomeComponent,
        HeaderComponent,
        SidenavListComponent,
        FooterComponent,
        GridPresse,
        LoginComponent,
        LoaderComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        FlexLayoutModule,
        RoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        MatInputModule,
        MatCardModule,
        MatProgressSpinnerModule,
        CoreModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
