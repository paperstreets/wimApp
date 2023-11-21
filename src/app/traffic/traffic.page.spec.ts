import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrafficPage } from './traffic.page';
import { IonicModule } from '@ionic/angular';

describe('TrafficPage', () => {
  let component: TrafficPage;
  let fixture: ComponentFixture<TrafficPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrafficPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrafficPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
