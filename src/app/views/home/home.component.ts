import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Dados } from 'src/app/models/Solictacao';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';
import { ngxCsv } from 'ngx-csv/ngx-csv';



const DADOS_DATA: Dados[] = [
  {position: 1, NomeEmpresa: 'Sinaf 24h', DtSolic: '2022-07-09', DtVenc: '' , NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 2, NomeEmpresa: 'Casa Bom Pastor', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 3, NomeEmpresa: 'Vital Latina', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 4, NomeEmpresa: 'Sinaf seguros', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 5, NomeEmpresa: 'Uni', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 6, NomeEmpresa: 'Uni Filial', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>
  displayedColumns: string[] = ['position', 'NomeEmpresa', 'DtSolic', 'DtVenc','NomeFornec','Acoes'];
  dataSource = DADOS_DATA;
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  OpenModal(element: Dados | null): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {

      data: element === null ? {
        position: null,
        NomeEmpresa: '',
        DtSolic: null,
        DtVenc: '',
        NomeFornec: '',
        CPFCNPJ: null,
        EndFornc: '',
        EndNumbFornc: '',
        EndCompFornc: '',
        EndBairFornc: '',
        EndCepFornc: null,
        EndCidFornc: '',
        HistFornc: '',
        ValorBruto: null,
        ValorLiq: null,
        Inss:null,
        Iss:null,
        Irrf:null,
        Cofins:null,
        Csll:null,
        Pis:null,
      }: element
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        if(this.dataSource.map(p => p.position).includes(result.position)){
          this.dataSource[result.position -1] = result;
          this.table.renderRows();


        }else{
          console.log(result);
            this.dataSource.push(result);
            this.table.renderRows();
        }


      }



    });

  }

  EditSolic(element: Dados):void{
    this.OpenModal(element);
  }


  DeleteSolic( position: number):void{
    this.dataSource = this.dataSource.filter(p => p.position !== position)
  }

  baixar():void{
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Your title',
      useBom: true,
      noDownload: false,
      headers: ["NomeEmpresa ", "position", "DtSolic", "DtVenc "
      ,"NomeFornec","CPFCNPJ","EndFornc","EndNumbFornc","EndCompFornc","EndBairFornc","EndCepFornc","EndCidFornc","HistFornc","ValorBruto","ValorLiq","Inss","Iss","Irrf","Cofins","Csll","Pis"
    ]
    };

    new ngxCsv(DADOS_DATA, "filename", options);
  }

}

