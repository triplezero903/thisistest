import { useRouter } from "next/router";
import React from "react";

export default function User() {
  const router = useRouter();
  console.log(router);
  const { username } = router.query;
  return (
    <div>
      <h1>User Detail Page - 당신의 이름은 {username}</h1>
    </div>
  );
}
