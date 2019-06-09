import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Utils } from 'src/app/utils/utils';
import { AcaoBuilder, TabelaBuilder, Tabela } from 'src/app/componentes/tabelas/tabela-paginada/tabela';
import { Router } from '@angular/router';
import { MensagemToast } from 'src/app/componentes/mensagens/mensagem-toast';
import { FuncionarioModelo } from 'src/app/modelos/funcionario/funcionarioModelo';
import { FuncionarioService } from 'src/app/servicos/funcionario/funcionario.service';
import { FuncionarioFormGroup } from '../funcionario.form.group';

@Component({
  selector: 'pesquisar-funcionario',
  templateUrl: './pesquisar-funcionario.component.html',
  styleUrls: ['./pesquisar-funcionario.component.scss']
})
export class PesquisarFuncionarioComponent implements OnInit {

  formPesquisaFuncionario:FormGroup;
  lstFuncionario:Array<FuncionarioModelo> = new Array<FuncionarioModelo>();
  filtro = { pagina: 0, limite: 10 };
  total = 0;
  tabela: Tabela;

  constructor(public fb: FormBuilder, private http:FuncionarioService, private router:Router,
    private mensagem:MensagemToast){

    const funcionarioFormGroup = new FuncionarioFormGroup(this.fb);
    this.formPesquisaFuncionario = funcionarioFormGroup.montarFormGroupPesquisa();

    const acoes = AcaoBuilder.getBuilder()
                             .add('edit', funcionario => this.editar(funcionario))
                             .add('delete_outline', funcionario => this.remover(funcionario))
                             .add('search', funcionario => this.visualizar(funcionario))
                             .build();
    this.tabela = TabelaBuilder.getBuilder()
                               .addColunaTexto('cpf', 'CPF', 2)
                               .addColunaTexto('nome', 'Nome', 6)
                               .addColunaData('dataNascimento', 'Data Nascimento', 2)
                               .addColunaAcao('Ações', 2, acoes)
                               .build();
  }

  ngOnInit(): void {
    this.carregarFuncionarios();
  }

  editar(funcionario) {
    this.router.navigate([`/page/funcionario/editar/${funcionario.id}`]);      
  }

  remover(funcionario) {
      this.http.remover(funcionario.id, () => {
          this.lstFuncionario = new Array<FuncionarioModelo>();
          this.carregarTabela(this.filtro);
          this.mensagem.mostrar("Removido com sucesso!");
      });        
  }

  visualizar(funcionario) {
    this.router.navigate([`/page/funcionario/visualizar/${funcionario.id}`]);
  }

  private carregarFuncionarios() {
    this.http.recuperarPaginada({ limite: 1000 }, response => {
      this.lstFuncionario = response.conteudo;
      this.total = response.total;
    }, () => {
    });
  }

  private carregarTabela(filtro) {
    this.http.recuperarPaginada(filtro, resposta => {
        this.lstFuncionario = resposta.conteudo;
        this.total = resposta.total;
    }, erro => {
        this.mensagem.mostrar(erro.error.mensagem, "OK");
    });
  }

  pesquisar() {
    this.filtro = {...this.filtro, ...this.formPesquisaFuncionario.value};
    Utils.removerCaracteresEspeciais(this.filtro);
    this.carregarTabela(this.filtro);
  }  
  
}
