'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PasswordForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'esquizofrenia' || password === 'dc') {
      router.push('/second');
    } else {
      setError('Contraseña incorrecta');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 flex flex-col items-center gap-2">
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError('');
        }}
        placeholder="Ingresa la contraseña"
        className="rounded-lg border-2 border-black px-4 py-2 text-center text-lg font-semibold text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
      />
      {error && (
        <p className="text-sm font-semibold text-red-600">{error}</p>
      )}
      <button
        type="submit"
        className="rounded-lg bg-black px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
      >
        Entrar
      </button>
    </form>
  );
}

