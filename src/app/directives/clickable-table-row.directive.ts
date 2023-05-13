import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'a routerLink'
})
export class ClickableTableRowDirective {
  @HostBinding('class')
  className = 'clickable-table-row';


  constructor() { }

}
