#!/usr/bin/env node
import gameStart from '..';
import * as even from '../games/even';


gameStart(even.gamePlay, even.rules, 3);
