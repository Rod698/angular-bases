import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get getCapitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 20;
  }

  resetForm(): void {
    this.age = 45;
    this.name = 'Ironman';

    // document.querySelectorAll('h1').forEach(element => {
    //   element.innerHTML = '<h1> Desde anguar </h1>'
    // });
  }
}
