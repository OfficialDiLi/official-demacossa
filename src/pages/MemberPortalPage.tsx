
import React from 'react';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

const MemberPortalPage = () => {
  // This is a placeholder. Actual Supabase integration is needed.
  // I'll remind the user how to enable Supabase.
  
  const handleLogin = () => {
    // Placeholder for Supabase login logic
    console.log("Login button clicked. Supabase integration needed.");
    alert("Login functionality requires Supabase integration. Please enable it in your Lovable project settings.");
  };

  return (
    <div className="container mx-auto py-12 px-4 min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 text-center max-w-md w-full">
        <Lock size={48} className="mx-auto mb-6 text-deep-purple" />
        <h1 className="text-3xl font-bold text-deep-purple mb-4">Member Portal</h1>
        <p className="text-dark-navy mb-8">
          Access exclusive resources, mentorship programs, and connect with fellow members.
        </p>
        <Button 
          onClick={handleLogin}
          className="w-full bg-bright-gold text-deep-purple hover:bg-yellow-500 text-lg py-3"
        >
          Login with Supabase
        </Button>
        <p className="text-xs text-gray-500 mt-4">
          Note: Full login functionality requires Supabase integration.
        </p>
      </div>
    </div>
  );
};

export default MemberPortalPage;
