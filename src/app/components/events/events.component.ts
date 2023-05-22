import { AfterViewInit, Component, ElementRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { ValidationService } from 'src/app/services/validation.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements AfterViewInit {
  public infromation = [
    {
      name: 'Hawaiian party',
      number: '01',
      isExpanded: true,
      isDisabled: true
    },
    {
      name: 'Мafia party',
      number: '02',
      isExpanded: false,
      isDisabled: false
    },
    {
      name: 'Party',
      number: '03',
      isExpanded: false,
      isDisabled: false
    },
    {
      name: 'Party on the beach',
      number: '04',
      isExpanded: false,
      isDisabled: false
    },
    {
      name: 'Home Security',
      number: '05',
      isExpanded: false,
      isDisabled: false
    },
    {
      name: 'Network Design & Implementation',
      number: '06',
      isExpanded: false,
      isDisabled: false
    },
    {
      name: 'System Design & Engineering',
      number: '07',
      isExpanded: false,
      isDisabled: false
    },
    {
      name: 'Client Care Plans',
      number: '08',
      isExpanded: false,
      isDisabled: false
    },
  ]

  @ViewChild('data', {read: ElementRef}) panel: ElementRef;
  @ViewChild('header', {read: ElementRef}) header: ElementRef;

  constructor(private validation: ValidationService) {
  }

  ngAfterViewInit(): void {
    this.validation.data = document.querySelector('.accordion');
    /* console.log(this.panel.nativeElement) */
  }

  hello(event: any) {
    this.infromation.forEach(val => {
      if(val.name === event.target.innerHTML.trim()) {

        val.isDisabled = true;
      } else {
        val.isDisabled = false;
      }
    })

  }

  forward() {
    window.location.href = 'https://maxkorzh.live/';
  }

}
