import { NgModule } from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { TabelaPaginadaComponent } from './../componentes/tabelas/tabela-paginada/tabela-paginada.component';
import { DialogConfirmacaoComponent } from '../componentes/dialog/confirmacao/dialog-confirmacao.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormEnderecoComponent } from '../componentes/formularios/endereco/form-endereco.component';
import { FormTelefoneComponent } from '../componentes/formularios/telefone/form-telefone.component';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from '../diretivas/mascaras/mascara';
import { NumeroDiretiva } from '../diretivas/validadores/numero.diretiva';

@NgModule({
  declarations: [FormEnderecoComponent, FormTelefoneComponent, 
    MascaraDirective, NumeroDiretiva, TabelaPaginadaComponent, DialogConfirmacaoComponent
  ],
  entryComponents: [ DialogConfirmacaoComponent ],
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
    NgxDatatableModule
  ],
  exports: [
    CommonModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    FlexLayoutModule,
    NgxDatatableModule,
    // Componentes da aplicação e diretivas
    FormEnderecoComponent, FormTelefoneComponent,
    MascaraDirective, NumeroDiretiva, TabelaPaginadaComponent, DialogConfirmacaoComponent
  ]
})
export class ModuleCompartilhado { }
