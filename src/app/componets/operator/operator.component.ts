import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import IOperator from 'src/app/models/IOperator';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorComponent implements OnInit {
  operatorList: Array<IOperator> = [];
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.data) {
      this.route.data.subscribe(data => {
        this.operatorList = data.operators;
      });
    }
  }

}
