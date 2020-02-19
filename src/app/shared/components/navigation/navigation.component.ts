import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  activatedRoute: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.checkActivatedRoute();
      }
    });

    this.checkActivatedRoute();
  }

  private checkActivatedRoute() {
    this.activatedRoute = this.router.url;
  }

}
