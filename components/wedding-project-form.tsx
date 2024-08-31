"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

type Role = 'Bride' | 'Groom' | 'Planner' | 'Other';

export default function WeddingProjectForm() {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  const roles: Role[] = ['Bride', 'Groom', 'Planner', 'Other'];

  const handleRoleSelection = (role: Role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected role:', selectedRole);
    // TODO: Implement project creation logic
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Who are you?</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div
              key={role}
              className={`relative bg-white rounded-lg p-4 cursor-pointer transition-all ${selectedRole === role ? 'ring-2 ring-purple-500' : ''
                }`}
              onClick={() => handleRoleSelection(role)}
            >
              <Image
                src={`/svg-export/${role.toLowerCase()}.svg`}
                alt={role}
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <p className="text-center text-lg font-medium text-purple-700">{role}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            disabled={!selectedRole}
          >
            Create Project
          </Button>
        </div>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600">
        By creating a new wedding project you agree to the{' '}
        <a href="#" className="text-purple-600 hover:underline">
          Privacy & Legal Terms
        </a>
      </p>
    </div>
  );
}