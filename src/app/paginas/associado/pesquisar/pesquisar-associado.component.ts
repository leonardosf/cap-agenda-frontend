import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AssociadoService } from 'src/app/servicos/associado/associado.service';
import { AssociadoModelo } from 'src/app/modelos/associado/associadoModelo';
import { Utils } from 'src/app/utils/utils';
import { AssociadoFormGroup } from '../associado.form.group';
import { AcaoBuilder, TabelaBuilder, Tabela } from 'src/app/componentes/tabelas/tabela-paginada/tabela';
import { Router } from '@angular/router';
import { MensagemToast } from 'src/app/componentes/mensagens/mensagem-toast';

@Component({
  selector: 'app-pesquisar-associado',
  templateUrl: './pesquisar-associado.component.html',
  styleUrls: ['./pesquisar-associado.component.scss']
})
export class PesquisarAssociadoComponent implements OnInit {

  formPesquisaAssociado:FormGroup;
  lstAssociado: Array<AssociadoModelo> = new Array<AssociadoModelo>();
  associadoModelo;
  filtro = { pagina: 0, limite: 10 };
  total = 0;
  tabela: Tabela;

  

  constructor(public fb: FormBuilder, private http:AssociadoService, private router:Router,
      private mensagem:MensagemToast){

    const associadoFormGroup = new AssociadoFormGroup(this.fb);
    this.formPesquisaAssociado = associadoFormGroup.montarFormGroupPesquisa();

    const acoes = AcaoBuilder.getBuilder()
                             .add('edit', associado => this.editar(associado))
                             .add('delete_outline', associado => this.remover(associado))
                             .add('search', associado => this.visualizar(associado))
                             .build();
    this.tabela = TabelaBuilder.getBuilder()
                               .addColunaTexto('matricula', 'Matrícula', 2)
                               .addColunaTexto('nome', 'Nome', 6)
                               .addColunaData('dataNascimento', 'Data Nascimento', 2)
                               .addColunaAcao('Ações', 2, acoes)
                               .build();
  }

  ngOnInit(): void {
    this.carregarAssociados();
  }

  editar(associado) {
    this.router.navigate([`/page/associado/editar/${associado.id}`]);      
  }

  remover(associado) {
      this.http.remover(associado.id, () => {
          this.lstAssociado = new Array<AssociadoModelo>();
          this.carregarTabela(this.filtro);
          this.mensagem.mostrar("Removido com sucesso!");
      });        
  }

  visualizar(associado) {
    this.router.navigate([`/page/associado/visualizar/${associado.id}`]);
  }

  private carregarAssociados() {
    this.http.recuperarPaginada({ limite: 1000 }, response => {
      this.lstAssociado = response.conteudo;
      this.total = response.total;
    }, () => {
    });
  }

  private carregarTabela(filtro) {
    this.http.recuperarPaginada(filtro, resposta => {
        this.lstAssociado = resposta.conteudo;
        this.total = resposta.total;
    }, erro => {
        this.mensagem.mostrar(erro.error.mensagem, "OK");
    });
  }

  pesquisar() {
    this.filtro = {...this.filtro, ...this.formPesquisaAssociado.value};
    Utils.removerCaracteresEspeciais(this.filtro);
    this.carregarTabela(this.filtro);
  }

}
