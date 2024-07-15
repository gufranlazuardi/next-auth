"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      <main className="flex flex-col gap-2 mx-auto">
        {session ? (
          <h1>Welcome back, {JSON.stringify(session.user?.email)}</h1>
        ) : (
          <>
            <div className="flex flex-col mx- items-center gap-5">
              <p className="pb-5">Please login</p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => signIn("google")}
                  className="border border-black px-3 py-2 rounded-md bg-blue-800 text-white text-sm"
                >
                  Login with Google
                </button>
                <button
                  className="border border-black px-3 py-2 rounded-md bg-black text-white text-sm"
                  onClick={() => signIn("github")}
                >
                  Login with Github
                </button>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Dashboard;
