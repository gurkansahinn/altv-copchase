import 'reflect-metadata';

import { container } from 'tsyringe';
import { PlayerContext } from './domain/playerContext';

const PlayerContextInstance = container.resolve(PlayerContext);
PlayerContextInstance.login({ username: '', password: '' });