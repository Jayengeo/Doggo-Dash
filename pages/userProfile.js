import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import SignedInNavbar from "@/src/components/signedInNav.js";
import UserProfile from "@/src/components/userProfile";
import { PrismaClient } from "@prisma/client";

export default function Profile({ serializedUserProfiles}) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
  return (
    <div>
      <SignedInNavbar />
      <UserProfile userProfiles={serializedUserProfiles} />
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const userProfiles = await prisma.user.findMany();

  
  const serializedUserProfiles = userProfiles.map((userProfile) => {
    return {
      firstName: userProfile.firstName,
      lastName: userProfile.lastName,
      userType: userProfile.userType,
      streetAddress: userProfile.streetAddress,
      email: userProfile.email,
      city: userProfile.city,
      postalCode: userProfile.postalCode,
      province: userProfile.province,
      rating: Number(userProfile.rating)
    };
  });
  
  
  return {
    props: { serializedUserProfiles },
  };
}
