import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {
  private _http: Http;
  _albumUrl = '../assets/album.json';
  constructor() { }

  getAlbum(id: number) {
    return this._http.get('../assets/album.json').map(response => response.json())
  }

}
