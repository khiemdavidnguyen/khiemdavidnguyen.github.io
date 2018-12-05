import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
	product_id:any
	display: any
	product: any

  constructor(
  	private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
  	this.product_id = ''
  this._route.params.subscribe((params: Params) => {
        console.log(params['id']);
        this.product_id = params['id'];
    });
  this.product = {}
  this.display = {}
  this.getAuthor()
  }

  getAuthor(){
  	let observable = this._httpService.getAuthorInfo(this.product_id)
  	observable.subscribe(data =>{
  		console.log('got product back as..',data)
  		this.product = data['product']
  	})

  }

  editProduct(){
  	let observable = this._httpService.updateAuthor(this.product)
  	observable.subscribe(data =>{
  		console.log('updated and returned as', data)
        this._router.navigate(['/pets', this.product_id])
  	});
  }






}
