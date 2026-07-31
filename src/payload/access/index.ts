import type { Access, Where } from "payload";

type Role = "super-admin" | "admin" | "editor" | "sales";

const getRole = (user: unknown): Role | null => {
  if (!user || typeof user !== "object" || !("role" in user)) {
    return null;
  }

  const role = user.role;
  return typeof role === "string" ? (role as Role) : null;
};

const hasRole = (user: unknown, roles: Role[]) => {
  const role = getRole(user);
  return role ? roles.includes(role) : false;
};

export const publicRead: Access = () => true;

export const publishedRead: Access = ({ req }) => {
  if (req.user) return true;

  const publishedWhere: Where = {
    _status: { equals: "published" },
  };

  return publishedWhere;
};

export const canAccessAdmin = ({ req }: { req: { user: unknown } }) =>
  hasRole(req.user, ["super-admin", "admin", "editor", "sales"]);

export const isAdmin: Access = ({ req }) =>
  hasRole(req.user, ["super-admin", "admin"]);

export const isEditorOrAdmin: Access = ({ req }) =>
  hasRole(req.user, ["super-admin", "admin", "editor"]);

export const isSalesOrAdmin: Access = ({ req }) =>
  hasRole(req.user, ["super-admin", "admin", "sales"]);
