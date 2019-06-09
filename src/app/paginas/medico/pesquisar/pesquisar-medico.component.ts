import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { MedicoModelo } from 'src/app/modelos/medico/medicoModelo';
import { MedicoService } from 'src/app/servicos/medicos/medico.service';
import { MedicoFormGroup } from '../medico.form.group';
import { AcaoBuilder, TabelaBuilder, Tabela } from 'src/app/componentes/tabelas/tabela-paginada/tabela';
import { Route, Router } from '@angular/router';
import { MensagemToast } from 'src/app/componentes/mensagens/mensagem-toast';

@Component({
  selector: 'pesquisar-medico',
  templateUrl: './pesquisar-medico.component.html',
  styleUrls: ['./pesquisar-medico.component.scss']
})
export class PesquisarMedicoComponent implements OnInit {

  formPesquisaMedico:FormGroup;
  lstMedico:Array<MedicoModelo> = new Array<MedicoModelo>();
  medicoModelo;
  filtro = { pagina: 0, limite: 10 };
  total = 0;
  tabela: Tabela;

  constructor(public fb: FormBuilder, private http:MedicoService, private router:Router,
    private mensagem:MensagemToast){

    const medicoFormGroup = new MedicoFormGroup(this.fb);
    this.formPesquisaMedico = medicoFormGroup.montarFormGroupPesquisa();

    const acoes = AcaoBuilder.getBuilder()
                             .add('edit', medico => this.editar(medico))
                             .add('delete_outline', medico => this.remover(medico))
                             .add('search', medico => this.visualizar(medico))
                             .build();
    this.tabela = TabelaBuilder.getBuilder()
                               .addColunaTexto('numeroConselho', 'Nº Conselho', 2)
                               .addColunaTexto('nome', 'Nome', 6)
                               .addColunaData('dataNascimento', 'Data Nascimento', 2)
                               .addColunaAcao('Ações', 2, acoes)
                               .build();
  }

  ngOnInit(): void {
    this.carregarMedicos();
  }

  editar(medico) {
    this.router.navigate([`/page/medico/editar/${medico.id}`]);      
  }

  remover(medico) {
      this.http.remover(medico.id, () => {
          this.lstMedico = new Array<MedicoModelo>();
          this.carregarTabela(this.filtro);
          this.mensagem.mostrar("Removido com sucesso!");
      });        
  }

  visualizar(medico) {
    this.router.navigate([`/page/medico/visualizar/${medico.id}`]);
  }

  private carregarMedicos() {
    this.http.recuperarPaginada({ limite: 1000 }, response => {
      this.lstMedico = response.conteudo;
      this.total = response.total;
    }, () => {
    });
  }

  private carregarTabela(filtro) {
    this.http.recuperarPaginada(filtro, resposta => {
        this.lstMedico = resposta.conteudo;
        this.total = resposta.total;
    }, erro => {
        this.mensagem.mostrar(erro.error.mensagem, "OK");
    });
  }

  pesquisar() {
    this.filtro = {...this.filtro, ...this.formPesquisaMedico.value};
    Utils.removerCaracteresEspeciais(this.filtro);
    this.carregarTabela(this.filtro);
  }  
  
}
