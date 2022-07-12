import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Dados } from 'src/app/models/Solictacao';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';
import { ngxCsv } from 'ngx-csv/ngx-csv';



const DADOS_DATA: Dados[] = [
  {id:1,position: 1, NomeEmpresa: 'Sinaf 24h', DtSolic: '2022-07-09', DtVenc: '' , NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {id:2,position: 2, NomeEmpresa: 'Casa Bom Pastor', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {id:3,position: 3, NomeEmpresa: 'Vital Latina', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {id:4,position: 4, NomeEmpresa: 'Sinaf seguros', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {id:5,position: 5, NomeEmpresa: 'Uni', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {id:6,position: 6, NomeEmpresa: 'Uni Filial', DtSolic: '2022-07-09', DtVenc: '', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},

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
        id:null,
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
      }: {
        id:element.id,
        position: element.position,
        NomeEmpresa: element.NomeEmpresa,
        DtSolic: element.DtSolic,
        DtVenc: element.DtVenc,
        NomeFornec: element.NomeFornec,
        CPFCNPJ: element.CPFCNPJ,
        EndFornc: element.EndFornc,
        EndNumbFornc: element.EndNumbFornc,
        EndCompFornc: element.EndCompFornc,
        EndBairFornc: element.EndBairFornc,
        EndCepFornc: element.EndCepFornc,
        EndCidFornc: element.EndCidFornc,
        HistFornc: element.HistFornc,
        ValorBruto: element.ValorBruto,
        ValorLiq: element.ValorLiq,
        Inss:element.Inss,
        Iss:element.Iss,
        Irrf:element.Irrf,
        Cofins:element.Cofins,
        Csll:element.Csll,
        Pis:element.Pis,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result !== undefined){
        if(this.dataSource.map(p => p.id).includes(result.id)){
          this.dataSource[result.id -1] = result;
          this.table.renderRows();


        }else{
          console.log(result);

            this.dataSource.push(result);
            this.table.renderRows();
        }


      }
    });

  }

  copy(element: Dados):void{
   
    this.dataSource.push(element);
    this.table.renderRows()

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

