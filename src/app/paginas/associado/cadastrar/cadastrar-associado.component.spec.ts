import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAssociadoComponent } from './cadastrar-associado.component';

describe('AssociadoComponent', () => {
  let component: CadastrarAssociadoComponent;
  let fixture: ComponentFixture<CadastrarAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
