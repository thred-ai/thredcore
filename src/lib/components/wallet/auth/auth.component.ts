import { isPlatformBrowser } from "@angular/common";
import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID,
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Media, Page } from "../../../models";

@Component({
  selector: "thred-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit, OnDestroy {
  mode = 1;
  keyMode = 0;

  layoutConsts = {
    labelHeight: 15,
    fieldHeight: 18,
    titleHeight: 17,
    cornerRadius: 15,
    spacing: 18,
  };

  @Input() displayFrame: { innerWidth: number; innerHeight: number } = window;

  @Input() authMode: number = 0;
  @Input() img?: Media;
  @Input() name?: string;
  @Input() err?: string;
  @Input() page?: Page;
  @Input() layoutMode?: string = 'mobile';

  @Output() authUpdated = new EventEmitter<{ type: string; data: any }>();

  @Input() loading?: boolean;

  signUpForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
    confirmPass: ["", Validators.required],
  });

  // email: new UntypedFormControl(''),
  //   password: new UntypedFormControl('')

  signInForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });

  privateKeyForm = this.fb.group({
    key: ["", Validators.required],
  });

  passResetForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
  });

  // @ViewChild(ButterflyComponent) butterfly?: ButterflyComponent;

  constructor(
    private fb: FormBuilder,
    // private root: AppComponent,
    @Inject(PLATFORM_ID) private platformID: Object
  ) {}

  continue() {
    this.beginAuth(async (result) => {
      if (result.status == false) {
        this.err = result.msg;
        this.authUpdated.emit({ type: "error", data: this.err });
      }
    });
  }

  private beginAuth(
    callback: (result: { status: boolean; msg: string }) => any
  ) {
    var form: FormGroup;

    switch (this.authMode) {
      case 1:
        switch (this.mode) {
          case 0:
            form = this.signUpForm;

            let conditions0 = [
              {
                condition: (form.controls["password"].value.length ?? 0) >= 6,
                msg: "Password not long enough",
              },
              {
                condition:
                  form.controls["password"].value ==
                  form.controls["confirmPass"].value,
                msg: "Passwords do not match",
              },
            ];
            let isValid0 = this.validateForm(form, conditions0);

            if (isValid0.status) {
              this.handleSignUp(form);
            } else {
              callback(isValid0);
            }
            return;
          case 1:
            form = this.signInForm;
            let conditions1 = [
              {
                condition: (form.controls["password"].value.length ?? 0) >= 6,
                msg: "Invalid password",
              },
            ];
            let isValid1 = this.validateForm(form, conditions1);
            if (isValid1.status) {
              this.handleSignIn(form);
            } else {
              callback(isValid1);
            }
            return;
          case 2:
            form = this.passResetForm;
            let isValid2 = this.validateForm(form);
            if (isValid2.status) {
              this.handlePassReset(form);
            } else {
              callback(isValid2);
            }
            return;
          default:
            return;
        }
      case 2:
        switch (this.keyMode) {
          case 0:
            form = this.privateKeyForm;

            this.handleNewAccount(form);
            return;
          case 1:
            form = this.privateKeyForm;

            let conditions1 = [
              {
                condition: (form.controls["key"].value.length ?? 0) >= 6,
                msg: "Invalid Key / Phrase",
              },
            ];
            let isValid1 = this.validateForm(form, conditions1);
            if (isValid1.status) {
              this.handleImport(form);
            } else {
              callback(isValid1);
            }
            return;
          default:
            return;
        }
      default:
        return;
    }
  }

  private validateForm(
    form: FormGroup,
    extra: { condition: boolean; msg: string }[] = []
  ) {
    let invalidConditions = extra.filter((val) => val.condition == false);
    if (form.valid && invalidConditions.length == 0) {
      return { status: true, msg: "" };
    } else {
      if (!form.valid) {
        return { status: false, msg: "Missing required fields" };
      } else if (invalidConditions.length > 0) {
        return {
          status: false,
          msg: invalidConditions.map((c) => c.msg).join(", "),
        };
      }
      return { status: false, msg: "Missing required fields" };
    }
  }

  private handleSignUp(form: FormGroup) {
    let email = form.controls["email"].value;
    let pass = form.controls["password"].value;
    this.authUpdated.emit({ type: "sign_up", data: { email, pass } });
  }

  private handleSignIn(form: FormGroup) {
    let email = form.controls["email"].value;
    let pass = form.controls["password"].value;
    this.authUpdated.emit({ type: "sign_in", data: { email, pass } });
  }

  private handleImport(form: FormGroup) {
    let key = form.controls["key"].value;
    this.authUpdated.emit({ type: "import_account", data: { key } });
  }

  private handleNewAccount(form: FormGroup) {
    this.authUpdated.emit({ type: "new_account", data: null });
  }

  private handlePassReset(form: FormGroup) {
    let email = form.controls["email"].value;
    this.authUpdated.emit({ type: "pass_reset", data: { email } });
  }

  ngOnDestroy(): void {
    window.onclick = null;
  }

  async ngOnInit() {
    this.mode = 1;
    //
    window.onclick = (e) => {
      if (isPlatformBrowser(this.platformID)) {
        if ((e.target as any).id != "continue") {
          this.err = undefined;
        }
      }
    };
  }
}
