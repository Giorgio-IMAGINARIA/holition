import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { AppBarComponent } from './components/appBar.component';
import { MainContentComponent } from './components/mainContent.component';
import { MapPanelComponent } from './components/mapPanel.component';
import {
  MatTabsModule,
  MatFormFieldModule,
  MatSortModule,
  MatRadioModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatTableModule,
  MatSliderModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatTooltipModule,
  MatMenuModule,
  MatSelectModule
} from '@angular/material';
// External modules
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    MainContentComponent,
    MapPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSortModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    MatInputModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
