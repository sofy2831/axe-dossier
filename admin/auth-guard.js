import { watchAuth } from "./firebase-auth.js";

const ADMIN_EMAIL = "s.dumas974@gmail.com";

watchAuth((user) => {
  if (!user || user.email !== ADMIN_EMAIL) {
    window.location.href = "/axe-dossier/admin/";
  }
});
