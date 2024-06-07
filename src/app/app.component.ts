import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reportviewer17';
  public serviceUrl: string;
  public reportPath: string;
  constructor() {
    this.serviceUrl = 'https://demos.boldreports.com/services/api/ReportViewer';
    this.reportPath = '~/Resources/docs/sales-order-detail.rdl';
}
}
