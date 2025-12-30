import { redirect } from 'next/navigation';

export default function HomePage() {
  // In development, redirect to resume. In production, redirect to about
  if (process.env.NODE_ENV === 'development') {
    redirect('/resume');
  } else {
    redirect('/about');
  }
}