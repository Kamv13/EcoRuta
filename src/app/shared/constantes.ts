import { Nivel } from '../services/auth.service';

export const TIPOS_RUTA = ['Senderismo', 'Recreativa', 'Ciclismo', 'Kayak', 'Acampada'];

export const DIFICULTADES = ['Baja', 'Media', 'Alta'];

export const NIVELES: Nivel[] = ['Novato', 'Intermedio', 'Experto'];

export const ORDEN_DIFICULTAD: Record<string, number> = { Baja: 0, Media: 1, Alta: 2 };

export const DIFICULTAD_POR_NIVEL: Record<Nivel, string> = {
  Novato: 'Baja',
  Intermedio: 'Media',
  Experto: 'Alta'
};
