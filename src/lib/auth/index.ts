// Authentication helpers — implement with NextAuth.js or Supabase Auth in a future phase.

export type UserRole =
  | 'super_admin'
  | 'club_admin'
  | 'content_admin'
  | 'order_manager'
  | 'viewer';

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
}

/** Placeholder: returns null until auth is wired up. */
export async function getCurrentUser(): Promise<AuthUser | null> {
  return null;
}
