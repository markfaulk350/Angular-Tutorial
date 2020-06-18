# Angular-Password-Generator
Angular Tutorial taught by Stephen Grider on Udemy

Create new Angular Project
```bash
ng new projectName
```

Start an Angular Project
```bash
ng serve
```

## Code
Property binding using []
```html
<input [value]="password">
```

Event binding using ()
```html
<button (click)="onButtonClick()">Generate!</button>
```

Interpolation of values into html using {{}}
```html
{{ someValue }}
```

Binding values to input
```html
<input (input)="onChangeWhatever($event.target.value)">
```

Structural Directives. Conditional rendering using *ngIf
```html
<div *ngIf="password">
  <label>Your Password</label>
  <input [value]="password" type="text">
</div>
```