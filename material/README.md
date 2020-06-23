# Angular Material

```bash
ng add @angular/material
```

Go to your app.module.ts file and import what you need from material
```ts
import { MatButtonModule } from '@angular/material/button';

imports: [
    MatButtonModule
  ]
```

Then use the component in your html
```html
<button mat-raised-button>Click Me!</button>
```

