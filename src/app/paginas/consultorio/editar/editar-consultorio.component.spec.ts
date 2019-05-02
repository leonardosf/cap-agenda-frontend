import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarConsultorioComponent } from './editar-consultorio.component';

describe('AssociadoComponent', () => {
  let component: EditarConsultorioComponent;
  let fixture: ComponentFixture<EditarConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
