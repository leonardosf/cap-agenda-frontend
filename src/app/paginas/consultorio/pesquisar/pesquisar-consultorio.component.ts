import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { AcaoBuilder, TabelaBuilder, Tabela } from 'src/app/componentes/tabelas/tabela-paginada/tabela';
import { Router } from '@angular/router';
import { MensagemToast } from 'src/app/componentes/mensagens/mensagem-toast';
import { ConsultorioFormGroup } from '../consultorio.form.group';
import { ConsultorioModelo } from 'src/app/modelos/consultorio/consultorioModelo';
import { ConsultorioService } from 'src/app/servicos/consultorios/consultorio.service';

@Component({
  selector: 'pesquisar-consultorio',
  templateUrl: './pesquisar-consultorio.component.html',
  styleUrls: ['./pesquisar-consultorio.component.scss']
})
export class PesquisarConsultorioComponent implements OnInit {

  formPesquisaConsultorio:FormGroup;
  lstConsultorio:Array<ConsultorioModelo> = new Array<ConsultorioModelo>();
  filtro = { pagina: 0, limite: 10 };
  total = 0;
  tabela: Tabela;

  constructor(public fb: FormBuilder, private http:ConsultorioService, private router:Router,
    private mensagem:MensagemToast){

    const consultorioFormGroup = new ConsultorioFormGroup(this.fb);
    this.formPesquisaConsultorio = consultorioFormGroup.montarFormGroupPesquisa();

    const acoes = AcaoBuilder.getBuilder()
                             .add('edit', consultorio => this.editar(consultorio))
                             .add('delete_outline', consultorio => this.remover(consultorio))
                             .add('search', consultorio => this.visualizar(consultorio))
                             .build();
    this.tabela = TabelaBuilder.getBuilder()
                               .addColunaTexto('nome', 'Nome', 5)
                               .addColunaTexto('descricao', 'Descrição', 5)
                               .addColunaAcao('Ações', 2, acoes)
                               .build();
  }

  ngOnInit(): void {
    this.carregarConsultorios();
  }

  editar(consultorio) {
    this.router.navigate([`/page/consultorio/editar/${consultorio.id}`]);      
  }

  remover(consultorio) {
      this.http.remover(consultorio.id, () => {
          this.lstConsultorio = new Array<ConsultorioModelo>();
          this.carregarTabela(this.filtro);
          this.mensagem.mostrar("Removido com sucesso!");
      });        
  }

  visualizar(consultorio) {
    this.router.navigate([`/page/consultorio/visualizar/${consultorio.id}`]);
  }

  private carregarConsultorios() {
    this.http.recuperarPaginada({ limite: 1000 }, response => {
      this.lstConsultorio = response.conteudo;
      this.total = response.total;
    }, () => {
    });
  }

  private carregarTabela(filtro) {
    this.http.recuperarPaginada(filtro, resposta => {
        this.lstConsultorio = resposta.conteudo;
        this.total = resposta.total;
    }, erro => {
        this.mensagem.mostrar(erro.error.mensagem, "OK");
    });
  }

  pesquisar() {
    this.filtro = {...this.filtro, ...this.formPesquisaConsultorio.value};
    Utils.removerCaracteresEspeciais(this.filtro);
    this.carregarTabela(this.filtro);
  }  
  
}
