import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAssociadoComponent } from './editar-associado.component';

describe('AssociadoComponent', () => {
  let component: EditarAssociadoComponent;
  let fixture: ComponentFixture<EditarAssociadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarAssociadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAssociadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
