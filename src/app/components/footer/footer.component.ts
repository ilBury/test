import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ValidationService } from 'src/app/services/validation.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public form = this.fb.group({
    mail: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(19),
      ValidationService.mailValidator()
    ])
  })

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private validation: ValidationService
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  scroll(event: any) {
    this.validation.data.scrollIntoView({behavior: 'smooth'});
  }

  request(mail: FormControl<string | null>) {
    if(mail.value) {
      console.log(mail.value);
      this.openDialog();
    }

  }

}
