import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAgendaComponent } from './editar-agenda.component';

describe('EditarAgendaComponent', () => {
    let component: EditarAgendaComponent;
    let fixture: ComponentFixture<EditarAgendaComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditarAgendaComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditarAgendaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
    
});
