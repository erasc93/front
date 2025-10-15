import {
  Component,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./shared/ui/panel-menu/panel-menu.component";
import { BadgeModule } from 'primeng/badge';
import { BasketService } from "./shared/basket.service";
import { SidebarModule } from "primeng/sidebar";
import { ButtonModule } from "primeng/button";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: true,
  imports: [ButtonModule,SidebarModule,RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent, BadgeModule],
})
export class AppComponent {
  constructor(protected basketService: BasketService) { }

  public sidebarVisible = false;
  title = "ALTEN SHOP";
}
