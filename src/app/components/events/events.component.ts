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
      isExpanded: true
    },
    {
      name: 'Мafia party',
      number: '02',
      isExpanded: false
    },
    {
      name: 'Party',
      number: '03',
      isExpanded: false
    },
    {
      name: 'Party on the beach',
      number: '04',
      isExpanded: false
    },
    {
      name: 'Home Security',
      number: '05',
      isExpanded: false
    },
    {
      name: 'Network Design & Implementation',
      number: '06',
      isExpanded: false
    },
    {
      name: 'System Design & Engineering',
      number: '07',
      isExpanded: false
    },
    {
      name: 'Client Care Plans',
      number: '08',
      isExpanded: false
    },
  ]

  @ViewChild('data', {read: ElementRef}) panel: ElementRef;

  constructor(private validation: ValidationService) {
  }

  ngAfterViewInit(): void {
    this.validation.data = document.querySelector('.accordion');
    /* console.log(this.panel.nativeElement) */
  }

  forward() {
    window.location.href = 'https://maxkorzh.live/';
  }

}
