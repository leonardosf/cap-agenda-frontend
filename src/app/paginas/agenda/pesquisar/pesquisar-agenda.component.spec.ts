import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisarAgendaComponent } from './pesquisar-agenda.component';

describe('PesquisarAgendaComponent', () => {
  let component: PesquisarAgendaComponent;
  let fixture: ComponentFixture<PesquisarAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisarAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
