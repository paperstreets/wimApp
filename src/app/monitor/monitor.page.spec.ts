import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonitorPage } from './monitor.page';
import { IonicModule } from '@ionic/angular';

describe('MonitorPage', () => {
  let component: MonitorPage;
  let fixture: ComponentFixture<MonitorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonitorPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
