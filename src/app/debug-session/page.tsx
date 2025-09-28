'use client';

import { useSession } from 'next-auth/react';

export default function DebugSession() {
  const { data: session, status } = useSession();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Session Debug</h1>
      
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="font-semibold">Status:</h2>
        <p>{status}</p>
      </div>

      <div className="bg-gray-100 p-4 rounded mb-4">
        <h2 className="font-semibold">Session Data:</h2>
        <pre className="text-sm overflow-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-semibold">User Info:</h2>
        {session?.user ? (
          <div>
            <p>ID: {session.user.id}</p>
            <p>Email: {session.user.email}</p>
            <p>Name: {session.user.name}</p>
          </div>
        ) : (
          <p>No user data</p>
        )}
      </div>
    </div>
  );
}
