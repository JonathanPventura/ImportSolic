import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Dados } from 'src/app/models/Solictacao';
import { ElementDialogComponent } from 'src/app/shared/element-dialog/element-dialog.component';



const DADOS_DATA: Dados[] = [
  {position: 1, NomeEmpresa: 'Hydrogen', DtSolic: 1.0079, DtVenc: 'H' , NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 2, NomeEmpresa: 'Helium', DtSolic: 4.0026, DtVenc: 'He', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 3, NomeEmpresa: 'Lithium', DtSolic: 6.941, DtVenc: 'Li', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 4, NomeEmpresa: 'Beryllium', DtSolic: 9.0122, DtVenc: 'Be', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 5, NomeEmpresa: 'Boron', DtSolic: 10.811, DtVenc: 'B', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 6, NomeEmpresa: 'Carbon', DtSolic: 12.0107, DtVenc: 'C', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 7, NomeEmpresa: 'Nitrogen', DtSolic: 14.0067, DtVenc: 'N', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 8, NomeEmpresa: 'Oxygen', DtSolic: 15.9994, DtVenc: 'O', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 9, NomeEmpresa: 'Fluorine', DtSolic: 18.9984, DtVenc: 'F', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
  {position: 10, NomeEmpresa: 'Neon', DtSolic: 20.1797, DtVenc: 'Ne', NomeFornec: 'a', CPFCNPJ: 0 , EndFornc: '', EndNumbFornc: 0, EndCompFornc : '', EndBairFornc:'', EndCepFornc: 0, EndCidFornc:'',HistFornc: '', ValorBruto: 0 , ValorLiq: 0 , Inss: 0 , Iss:0 , Irrf: 0, Cofins: 0, Csll: 0 , Pis: 0,},
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
        NomeEmpresa: '',
        position: null,
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
          this.dataSource.push(result);
          this.table.renderRows();
        }


      }
      console.log(this.dataSource);
    });
  }

  EditSolic(element: Dados):void{
    this.OpenModal(element);
  }

  DeleteSolic( position: number):void{
    this.dataSource = this.dataSource.filter(p => p.position !== position)
  }

}
