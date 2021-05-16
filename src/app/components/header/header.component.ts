import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker!';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiServiceService, private router: Router) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
