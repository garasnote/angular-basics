import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  exportAs: 'app-heroes-list',
})
export class ListComponent {
  public HeroNames: string[] = ['ironman', 'spiderman', 'thor', 'hulk', 'she hulk', 'black widow', 'captain america', 'black panther', 'scarlet witch', 'vision', 'falcon', 'winter soldier',];
  public deletedHero?: string;

  removeLastHero(): void {
    this.deletedHero = this.HeroNames.pop();
  }

}
