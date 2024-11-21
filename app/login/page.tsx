'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare} from 'lucide-react'
import "./main.css"
import  {register} from "./main"

let email = ""
let password = ""

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
            <center>
               <div id="cart" className="border-*">
                 <p className="text-2xl ">Login / register</p>
                 <Input onChange={(event) => {email = event.target.value;}} placeholder="email" type="email" className="flex-1 w-9/12  h-12 m-5 bg-gray-700 border-gray-600 text-white placeholder-gray-400 "></Input>
                 <Input  onChange={(event) => {password = event.target.value;}} placeholder="password" type="password" className="flex-1  h-12 m-5 bg-gray-700 border-gray-600 text-white placeholder-gray-400  w-9/12"></Input>
                 <Button  onClick={trigger}  id="btn" type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">Sign Up</Button>
                 <div id="error"></div>
                </div>
            </center>
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
function create_error(text: string){
  const err = document.getElementById("error")
  if(err==null){
    return
  }
  err.className = "border-*"
  err.innerHTML = ""
  const p = document.createElement("p")
  p.className = "text-lg text-red-800 "
  const err_t = document.createTextNode("ERROR log: " + text)
  p.append(err_t)
  err?.append(p)
}

function create_succes(text: string){
  const err = document.getElementById("error")
  if(err==null){
    return
  }
  err.className = "border-*"
  err.innerHTML = ""
  const p = document.createElement("p")
  p.className = "text-lg text-green-800 "
  const err_t = document.createTextNode("SUCCES log: " + text)
  p.append(err_t)
  err?.append(p)
}

async function trigger(){
  const r = await register(email, password)
  if(r != undefined){
    create_error(r.message)
  }
  else{
    create_succes("Nice work! you prefixed a acc!")
  }
} 