import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receba',
  templateUrl: './receba.page.html',
  styleUrls: ['./receba.page.scss'],
})
export class RecebaPage implements OnInit {

  nome: any;
  par: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(localStorage.getItem("nome"));
    this.nome= localStorage.getItem("nome");

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.par = params.id
    });

  }

}
