import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  exportAs: 'app-heroes-hero',
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 45;
  public changedHero:boolean = true;
  public changedAge:boolean = true;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} years old`;
  }

  changeHero(): void {
    this.name = 'spiderman';
    this.changedHero = false;
  }

  changeAge(): void {
    this.age = 25;
    this.changedAge = false;
  }

  reset(): void {
    this.name = 'ironman';
    this.age = 45;
    this.changedHero = true;
    this.changedAge = true;
  }

}
