import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class HeroService {
  constructor(private messageService: MessageService) {}

  /*
    Por exemplo getHeroes(), getHero()tem uma assinatura assíncrona.
    Ele retorna um herói simulado como um Observable, usando a of()função RxJS.
    Você será capaz de reimplementar getHero()como um Http pedido real sem ter
    que alterar o HeroDetailComponentque o chama.
  */

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
