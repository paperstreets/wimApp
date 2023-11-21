import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalysisAIPage } from './analysis-ai.page';
import { IonicModule } from '@ionic/angular';
describe('AnalysisAIPage', () => {
  let component: AnalysisAIPage;
  let fixture: ComponentFixture<AnalysisAIPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalysisAIPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnalysisAIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
