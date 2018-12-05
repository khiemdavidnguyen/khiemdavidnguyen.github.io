import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-producth-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
	display: any;
  constructor(
  	private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
  	this.grabAuthors();
  	this.display = '';
  }

  grabAuthors(){
  	let observable = this._httpService.getAuthors()
  	observable.subscribe(data =>{
  		console.log('Authors came back as', data)
  		this.display = data['products']
  	});
  }

  deleteProduct(author){
  	let observable = this._httpService.removeAuthor(author)
  	observable.subscribe(data =>{
  		console.log('deleted author data', data)
  		this.grabAuthors()
  	})
  }

}
