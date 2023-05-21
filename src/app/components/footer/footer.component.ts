import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/app/services/http.service';
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
    private httpService: HttpService,
    private dialog: MatDialog
  ) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

  request(mail: FormControl<string | null>) {
    if(mail.value) {
      console.log(mail.value);
      this.openDialog();
    }

  }

}
