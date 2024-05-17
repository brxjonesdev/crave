import React from 'react'
import Link from "next/link"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"





export default function Login() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-black-200">
      <Card>
  <CardHeader>
    <CardTitle>
      Sign Into Your Account
      </CardTitle>
    
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
  <a href="/api/auth/login">Login</a>
  </CardFooter>
</Card>

      

      
    </div>
  )
}
