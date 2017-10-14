#!/usr/bin/env node

import gameStart from '..';
import * as gcd from '../games/gcd';

gameStart(gcd.gamePlay, gcd.rules, 3);
