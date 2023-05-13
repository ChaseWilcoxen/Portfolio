import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  isMobile: Observable<BreakpointState>;


  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit() { 
    this.isMobile = this.breakpointObserver.observe(Breakpoints.Handset);

  }

}
