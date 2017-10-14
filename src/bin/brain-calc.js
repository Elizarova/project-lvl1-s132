#!/usr/bin/env node

import gameStart from '..';
import * as calc from '../games/calc';

gameStart(calc.gamePlay, calc.rules, 3);
