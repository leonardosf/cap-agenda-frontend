import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarConsultorioComponent } from './cadastrar-consultorio.component';

describe('AssociadoComponent', () => {
  let component: CadastrarConsultorioComponent;
  let fixture: ComponentFixture<CadastrarConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
