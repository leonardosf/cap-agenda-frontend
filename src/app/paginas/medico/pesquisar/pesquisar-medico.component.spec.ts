import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarMedicoComponent } from './pesquisar-medico.component';

describe('AssociadoComponent', () => {
  let component: PesquisarMedicoComponent;
  let fixture: ComponentFixture<PesquisarMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
