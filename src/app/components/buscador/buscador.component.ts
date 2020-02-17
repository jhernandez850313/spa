import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent  {

  heroes: any = {};
  termino: string;

  constructor( private activatedRouted: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router ) {
                this.activatedRouted.params.subscribe( params => {
                  this.termino = params['termino'];
                  this.heroes = this._heroesService.buscarHeroes(params['termino']);
                  console.log(this.heroes);
                } );

              }

  verHeroe( idx: number ) {
    this.router.navigate(['/heroe', idx]);
  }

}
