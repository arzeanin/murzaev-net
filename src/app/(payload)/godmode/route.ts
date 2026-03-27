import { NextResponse } from 'next/server'
import payload from 'payload'
import configPromise from '@/payload.config' // Проверьте этот путь, обычно он такой

export async function GET() {
  const p = await payload.init({ config: configPromise })

  try {
    const user = await p.create({
      collection: 'users',
      data: {
        email: 'super-admin@gmail.com',
        password: 'admin123',
        // Добавьте роль, если она у вас обязательна, например:
        // role: 'admin',
      },
    })

    return NextResponse.json({ message: 'Admin created!', user: user.email })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
