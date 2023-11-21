import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeasuramentErrorPage } from './measurament-error.page';
import { IonicModule } from '@ionic/angular';

describe('MeasuramentErrorPage', () => {
  let component: MeasuramentErrorPage;
  let fixture: ComponentFixture<MeasuramentErrorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeasuramentErrorPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MeasuramentErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
