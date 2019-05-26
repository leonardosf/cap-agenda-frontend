import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisarConsultaComponent } from './pesquisar-consulta.component';


describe('AssociadoComponent', () => {
  let component: PesquisarConsultaComponent;
  let fixture: ComponentFixture<PesquisarConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
