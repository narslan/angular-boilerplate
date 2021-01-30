import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="ui info huge message">
  
  <div class="header">
  404: Not Found
  </div>
  <ul class="list">
    <li>Hey! It looks like this page doesn't exist yet.</li>
    <li>
    <button class="ui green button"  routerLink="/">Take Me Home</button>
    </li>
  </ul>
</div>
  
  `,
  styles: [
    `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class NotFoundPageComponent {}
