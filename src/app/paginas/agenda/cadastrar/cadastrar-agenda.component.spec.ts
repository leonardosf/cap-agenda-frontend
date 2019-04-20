import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAgendaComponent } from './cadastrar-agenda.component';

describe('CadastrarAgendaComponent', () => {
    let component: CadastrarAgendaComponent;
    let fixture: ComponentFixture<CadastrarAgendaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CadastrarAgendaComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CadastrarAgendaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
});
