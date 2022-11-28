#!/usr/bin/env node
import isResultEquals from '../src/games/calc-expression.js';

isResultEquals();

import { program } from 'commander';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .parse(process.argv);
