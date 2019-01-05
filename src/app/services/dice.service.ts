import { Injectable } from '@angular/core';
import { RollResult } from '../interfaces/roll-result';

@Injectable({
  providedIn: 'root'
})
export class DiceService {  
  // Constructors
  constructor() {

  }

  static Roll(dice: number, sides: number, threshold?: number): RollResult {
    if (dice <= 0) {
      return null;
    }

    if (sides <= 0) {
      return null;
    }

    // If no threshold is provided, the threshold for a success is defaulted to 1.
    if (!threshold) {
      threshold = 1;
    }

    const rolls: number[] = [];
    let roll: number, total: number, successes: number;
    total = 0;
    successes = 0;
    for (let i = 0; i < dice; i++) {
      roll = Math.floor(Math.random() * (sides - 1 + 1)) + 1;
      
      rolls.push(roll);
      total += roll;

      if (roll >= threshold) {
        successes++;
      }
    }

    const result: RollResult = {
      Total: total,
      Rolls: rolls,
      Successes: successes
    };

    return result;
  }
}