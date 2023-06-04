import { useUser } from "@auth0/nextjs-auth0/client";

export default function CurrentUser() {
  const { user } = useUser();
  const currentUser = async () => {
   return user.email;
  };
return currentUser()
}
