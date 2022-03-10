import { createAction, props } from '@ngrx/store';

export type filtrosPermitidos = 'todos' | 'completados' | 'pendientes';

export const setFiltro = createAction(
    '[FILTRO] Set Filtro',
    props<{filtro : filtrosPermitidos}>()
);

