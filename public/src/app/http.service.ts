import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(private _http: HttpClient) {

	}

  newProducts(data){
		return this._http.post('/api/products', data);
  }

  getAuthors(){
  	return this._http.get('/api/products')
  }

  removeAuthor(product){
  	return this._http.delete('/api/products/'+product._id)
  }

  getAuthorInfo(author){
  	return this._http.get('/api/products/'+author)
  }

  updateAuthor(author){
  	return this._http.put('/api/products/'+author._id, author)
  }
}
