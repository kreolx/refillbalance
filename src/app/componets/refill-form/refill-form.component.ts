import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import IOperator from 'src/app/models/IOperator';
import { OperatorService } from 'src/app/services/operator.service';

@Component({
  selector: 'app-refill-form',
  templateUrl: './refill-form.component.html',
  styleUrls: ['./refill-form.component.scss']
})
export class RefillFormComponent implements OnInit, OnDestroy {
  private subParams: any;
  operatorId: number;
  refillForm: FormGroup;
  operatorName: string;
  constructor(private route: ActivatedRoute,
              private operatorService: OperatorService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subParams = this.route.params.subscribe(data => {
      this.operatorId = +data.id;
      this.operatorName = data.name;
    });
    this.initForm();
  }

  initForm() {
    this.refillForm = this.formBuilder.group({
      operatorId: [this.operatorId],
      operatorName: [this.operatorName],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[\d][0-9]{10}/)]],
      sum: [1]
    });
  }
  submitForm(e: any): void {
    e.preventDefault();
    if (!this.refillForm.valid) {
      return;
    }
  }

  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
