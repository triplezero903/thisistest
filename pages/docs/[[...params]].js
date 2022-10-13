import { useRouter } from "next/router";
import React, { PureComponent } from "react";

export default function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  return (
    <div>
      <h1>Document service</h1>
      {params.map((param) => (
        <p key={param}>{param}</p>
      ))}
    </div>
  );
}
