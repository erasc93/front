import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { ContactComponent } from "./features/contact/contact.component";

export const CONTACT_ROUTES: Routes = [
	{
		path: "form",
		component: ContactComponent,
	},
	{
		path: "**", redirectTo: "form" },
];

