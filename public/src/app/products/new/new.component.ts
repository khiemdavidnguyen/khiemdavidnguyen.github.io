import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../../http.service';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  product: any;
  err: any
  constructor(
  	private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService) { }

  ngOnInit() {
    this.product = {}
  }

  createProduct(){
    let observable = this._httpService.newProducts(this.product)
    observable.subscribe(data =>{
      if(data['err']){
        this.err =data['err']
        console.log("Data returned as.",data)
      }
      else{
        this.err = null
        console.log("Data returned as.",data)
        this._router.navigate(['pets'])
      }

    })

  }




}
