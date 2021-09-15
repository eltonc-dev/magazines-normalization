import { denormalize, normalize } from 'normalizr';

import { Magazine } from '../../models/magazine';
import { MagazineSchemas } from './magazine-schemas';
import { EntityMagazineState, ResultMagazineState } from '../state/magazine.state';

/*
 * I separate the normalizers in a single file just to create a wrapper and isolate this part of the code
 *
 */
export const normalizeMagazines = (magazines: Magazine[] = []): { entities: EntityMagazineState, result: ResultMagazineState } => {
  return normalize({magazines} , MagazineSchemas.completeSchema);
}

export const denormalizeMagazines = (data: Partial<ResultMagazineState>, entities: EntityMagazineState ) => {
  return denormalize(data, MagazineSchemas.completeSchema, entities);
}

export const MagazineNormalizer = {
  normalize: normalizeMagazines,
  denormalize: denormalizeMagazines
}
