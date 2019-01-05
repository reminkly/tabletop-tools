import { Injectable } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Route } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Paths } from '../../enums/shared/paths.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  // Variables
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private titleService: Title, private location: Location) {

  }

  // Methods
  public Initialize(): void {
    // Set the title.
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
    .subscribe((data) => {
      const baseTitle = 'Tabletop Tools';

      if (data['title']) {
        this.SetTitle(baseTitle + ': ' + data['title']);
      } else {
        this.SetTitle(baseTitle);
      }
    });
  }

  public SetTitle(title: string): void {
    this.titleService.setTitle(title);
  }

  public GetRoute(path: Paths): Route {
    return this.router.config.find(config => config.data['pathEnum'] === path);
  }

  public GoTo(route: Route): void {
    this.router.navigate([route.path]);
  }
}