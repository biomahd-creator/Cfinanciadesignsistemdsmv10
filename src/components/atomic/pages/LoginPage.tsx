import { AuthTemplate } from "../templates/AuthTemplate";
import { LoginForm } from "../organisms/LoginForm";

export function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}
