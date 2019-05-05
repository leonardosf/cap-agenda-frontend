import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PesquisarFuncionarioComponent } from './pesquisar-funcionario.component';


describe('AssociadoComponent', () => {
  let component: PesquisarFuncionarioComponent;
  let fixture: ComponentFixture<PesquisarFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
