'use server';

import { AuthError, createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'
const supabase = createClient(process.env.HOST, process.env.ANON)
    
export async function register(email , password){
    const cookieStore = await cookies()
    const check = cookieStore.get("email")
    console.log(check)
    if(check != undefined){
        const m =  {
            "message":  "error multiple accounts is not possible"
        }
        return m 
    }
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
    if(error != null){
        return error
    }
    cookieStore.set('email', email)
    cookieStore.set("password", password)
}
