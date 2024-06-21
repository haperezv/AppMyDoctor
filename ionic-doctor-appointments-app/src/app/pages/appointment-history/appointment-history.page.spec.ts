import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppointmentHistoryPage } from './appointment-history.page';

describe('AppointmentHistoryPage', () => {
  let component: AppointmentHistoryPage;
  let fixture: ComponentFixture<AppointmentHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});