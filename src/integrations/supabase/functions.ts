function getSupabaseUrl(): string {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  if (!url) {
    throw new Error('Missing VITE_SUPABASE_URL in your .env file.');
  }
  return url;
}

export function getSupabaseFunctionsBaseUrl(): string {
  const explicit = import.meta.env.VITE_SUPABASE_FUNCTIONS_URL as string | undefined;
  if (explicit) return explicit.replace(/\/+$/, '');

  const supabaseUrl = getSupabaseUrl().replace(/\/+$/, '');
  return supabaseUrl.replace(/\.supabase\.co$/, '.functions.supabase.co');
}

export function getSupabaseFunctionUrl(pathname: string): string {
  const base = getSupabaseFunctionsBaseUrl();
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}`;
}

