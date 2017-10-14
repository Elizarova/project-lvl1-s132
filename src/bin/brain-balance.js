#!/usr/bin/env node
import gameStart from '..';
import * as balance from '../games/balance';

gameStart(balance.gamePlay, balance.rules, 3);
