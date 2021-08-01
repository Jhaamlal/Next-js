import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div>
      <Image
        src="https://pbs.twimg.com/profile_images/706885368868515840/Fz8bXkGp.jpg"
        alt="logo"
        height={400}
        width={400}
        objectFit="contain"
      />
    </div>
  );
}

export default Login;
