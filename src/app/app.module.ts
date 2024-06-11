import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BoldReportViewerModule } from '@boldreports/angular-reporting-components';
import { AppComponent } from './app.component';
// Report viewer
import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.common.min';

import '@boldreports/javascript-reporting-controls/Scripts/v2.0/common/bold.reports.widgets.min';

import '@boldreports/javascript-reporting-controls/Scripts/v2.0/bold.report-viewer.min';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoldReportViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
