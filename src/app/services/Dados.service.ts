import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SolicitacaoService {
 
  constructor(private http: HttpClient) { }
}
