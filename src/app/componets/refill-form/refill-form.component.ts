import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClrLoadingState } from '@clr/angular';
import { RefillService } from 'src/app/services/refill.service';
import { EResultCode } from 'src/app/models/EResultCode';

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
  resultMessage: string;
  resultStatus: number;
  resultEnum = EResultCode;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  re: RegExp;
  timeOut: any;
  sendRequest = false;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private refillService: RefillService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (this.route.params) {
      this.subParams = this.route.params.subscribe(data => {
        this.operatorId = +data.id;
        this.operatorName = data.name;
      });
    }
    this.initForm();
    const validatePattern = '[0-9]';
    // create one instance Regexp on component
    this.re = new RegExp(validatePattern);
  }
  // create form group
  initForm() {
    this.refillForm = this.formBuilder.group({
      operatorId: [this.operatorId],
      operatorName: [this.operatorName],
      phoneNumber: ['', [Validators.required, Validators.pattern(/[0-9]{11}/), Validators.maxLength(11)]],
      amount: [1, [Validators.required, Validators.min(1), Validators.max(1000)]]
    });
  }

  // validate phone input. Delete all not digital and control length on 11 char.
  changePhone(e: any): void {
    if (e.data != null && !this.re.test(e.data) || this.refillForm.get('phoneNumber').value.length > 11) {
      let phone = this.refillForm.get('phoneNumber').value;
      phone = phone.substring(0, phone.length - 1);
      this.refillForm.get('phoneNumber').setValue(phone);
    }
  }
  // send form to server
  submitForm(e: any): void {
    e.preventDefault();
    if (!this.refillForm.valid) {
      return;
    }
    this.submitBtnState = ClrLoadingState.LOADING;
    this.sendRequest = true;
    this.resultMessage = '';
    this.resultStatus = 2;
    this.subParams = this.refillService.refillBalance(this.refillForm.value).subscribe(data => {
      this.resultStatus = data.status;
      if (data.status === EResultCode.Ok) {
        this.resultMessage = `${data.message} You will automaticle navigate on main screen after 5 seconds.`;
        // wait 5 sec for display message and redirect to main.
        this.timeOut = setTimeout(() => {
          this.router.navigate(['']);
        }, 5000);
      } else {
        // oops. error. Try again.
        this.sendRequest = false;
        this.resultMessage = data.message;
        this.submitBtnState = ClrLoadingState.DEFAULT;
      }
    });
  }
  // return class for alert icon
  getAlertShape() {
    return this.resultStatus === EResultCode.Ok ? 'check-circle' : 'exclamation-triangle';
  }

  // cancel refill and return to main.
  cancelSend(e: any): void {
    e.preventDefault();
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    if (this.subParams){
      this.subParams.unsubscribe();
    }
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
  }
}
