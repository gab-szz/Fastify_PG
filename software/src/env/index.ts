import 'dotenv/config';
/* ←→ Esse import carrega automaticamente as variáveis do arquivo `.env`
para dentro do `process.env` (objeto global com as variáveis de ambiente).
     É equivalente a usar `dotenv.config()` no início da aplicação. */

import { z } from 'zod';
/* ←→ Aqui estamos importando o Zod, com ele podemos descrever quais variáveis espera do ambiente e garantir que elas estejam corretas (tipo certo, valor permitido etc.). */

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
  DATABASE_USER: z.string(),
  DATABASE_HOST: z.string(),
  DATABASE_NAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  DATABASE_PORT: z.coerce.number().default(5432),
});

const _env = envSchema.safeParse(process.env);
// ←→ Aqui validamos `process.env` com o esquema definido acima:
//     - `safeParse` retorna um objeto com `{ success: true, data }` se tudo estiver certo,
//     - ou `{ success: false, error }` se houver algo errado (tipo ou valor inválido).

if (!_env.success) {
  console.error('Invalid environment variables', _env.error.format());

  throw new Error('Invalid environment variables');
}

export const env = _env.data;
