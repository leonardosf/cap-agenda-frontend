import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarConsultorioComponent } from './pesquisar-consultorio.component';

describe('AssociadoComponent', () => {
  let component: PesquisarConsultorioComponent;
  let fixture: ComponentFixture<PesquisarConsultorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarConsultorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarConsultorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
