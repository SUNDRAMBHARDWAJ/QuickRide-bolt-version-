import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '@/store/slices/authSlice';

const loginSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      dispatch(loginStart());
      
      // This would be replaced with an actual API call
      // For now, we'll simulate a successful login
      setTimeout(() => {
        dispatch(loginSuccess({
          user: {
            id: '1',
            name: 'Test User',
            email: data.email,
          },
          token: 'fake-jwt-token',
        }));
        setIsLoading(false);
        // Redirect to dashboard or home page
        window.location.href = '/dashboard';
      }, 1500);
      
    } catch (error) {
      setIsLoading(false);
      dispatch(loginFailure('Invalid email or password'));
    }
  };

  return (
    <div>HEllo</div>
  )

}