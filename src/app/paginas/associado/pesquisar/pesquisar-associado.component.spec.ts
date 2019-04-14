import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarAssociadoComponent } from './pesquisar-associado.component';

describe('AssociadoComponent', () => {
  let component: PesquisarAssociadoComponent;
  let fixture: ComponentFixture<PesquisarAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
