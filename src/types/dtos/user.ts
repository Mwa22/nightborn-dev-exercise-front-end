/**
 * Generated by orval v6.1.1 🍺
 * Do not edit manually.
 * Nightborn Dev Exercise API
 * Swagger for Nightborn-dev-exercise-back-end project.

Schemes: [http, https]
 * OpenAPI spec version: 1.0.0
 */
import type { Role } from './role';

/**
 * An user of the application
 */
export interface User {
  CreatedAt?: string;
  DeletedAt?: string;
  ID?: number;
  UpdatedAt?: string;
  /** The email */
  email: string;
  /** The firstname */
  first_name: string;
  /** The lastname */
  last_name: string;
  /** The password */
  password: string;
  role: Role;
}
