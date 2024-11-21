'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Users, Lock, Zap } from 'lucide-react'





export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a className="flex items-center justify-center" href="#">
            <MessageSquare className="h-6 w-6 mr-2 text-blue-400" />
            <span className="font-bold text-xl text-blue-400">ChatApp</span>
          </a>
          <nav className="hidden md:flex space-x-4">
            <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">Features</a>
            <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">Pricing</a>
            <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">About</a>
            <a className="text-sm font-medium hover:text-blue-400 transition-colors" href="#">Contact</a>
          </nav>
          <Button variant="outline" className="md:hidden">Menu</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6 md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Connect Instantly with ChatApp
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience seamless communication with our intuitive chat platform. Stay connected with friends, family, and colleagues anytime, anywhere.
            </p>
            <div className="space-x-4">
              <Button onClick={req} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-800/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Why Choose ChatApp?</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <MessageSquare className="h-10 w-10 mb-2 text-blue-400" />
                  <CardTitle className="text-blue-400">Real-time Messaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Instant message delivery for smooth conversations.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-blue-400" />
                  <CardTitle className="text-blue-400">Group Chats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Create and manage group conversations with ease.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Lock className="h-10 w-10 mb-2 text-blue-400" />
                  <CardTitle className="text-blue-400">End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Your conversations are secure and private.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-blue-400" />
                  <CardTitle className="text-blue-400">Fast & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">High-performance infrastructure for uninterrupted chatting.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-blue-400">Ready to Start Chatting?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of users already enjoying ChatApp. Sign up now and experience the future of messaging.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex space-x-2">
                <Input className="flex-1 bg-gray-700 border-gray-600 text-white placeholder-gray-400" placeholder="Enter your email" type="email" />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
              </form>
              <p className="text-sm text-gray-400 mt-2">
                By signing up, you agree to our <a className="underline hover:text-blue-400" href="#">Terms & Conditions</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-400">© 2024 ChatApp. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 md:mt-0">
            <a className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#">Terms of Service</a>
            <a className="text-sm text-gray-400 hover:text-blue-400 transition-colors" href="#">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
 )
}

function req(){
  window.location.replace("/login")
}