import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  /*
    O route.snapshot é uma imagem estática das informações da rota logo após a criação do componente.
    O paramMap é um dicionário de valores de parâmetros de rota extraídos da URL. A "id"chave retorna o id do herói para buscar.
    Os parâmetros de rota são sempre strings. O operador JavaScript (+) converte a string em um número, que é o que um herói iddeve ser.
  */
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
  /*
  Adicione um goBack() método à classe de componente que navega uma etapa
  para trás na pilha de histórico do navegador usando o Location serviço que você injetou anteriormente .
  */
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
