import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LProduct } from '../app/products';
import { Observable } from 'rxjs';



@Injectable()
export class productlistService{

    private _url: string="../assets/data/products.json";

    constructor (private http:HttpClient){}


    getProducts():Observable<LProduct[]>{
        return this.http.get<LProduct[]>(this._url);
    }
}