import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("", [Validators.email, Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      address: new FormGroup({
        country: new FormControl("ua"),
        city: new FormControl("Київ", Validators.required),
      }),
    });
  }
  submit() {
    if (this.form.valid) {
      console.log("Form: ", this.form);
      const formData = { ...this.form.value };

      console.log("Form Data", formData);
    }
  }
  setCapital() {
    const cityMap = {
      ua: "Київ",
      by: "Мєнск",
      ru: "Москова",
    };

    const cityKey = this.form.get("address").get("country").value;
    const city = cityMap[cityKey];

    this.form.patchValue({
      address: { city },
    });
  }
}
