"use client";
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';
import { useEffect } from 'react';

const withAuth = (Component) => {
  return function ProtectedRoute(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push('/authenticate'); // Redirect to sign-in page if not authenticated
      }
    }, [user, loading, router]);

    if (loading) {
      return <p>Loading...</p>; // Show a loading state while checking auth
    }

    if (!user) {
      return null; // Prevent rendering if not authenticated
    }

    return <Component {...props} />;
  };
};

export default withAuth;
