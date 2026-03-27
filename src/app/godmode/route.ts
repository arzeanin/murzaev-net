import { NextResponse } from 'next/server'
import crypto from 'crypto'
import dbConnect from '@/lib/dbConnect' // проверьте путь к вашему подключению БД
import User from '@/models/User' // проверьте путь к модели User

export async function GET() {
  await dbConnect()

  const password = 'admin123' // ВАШ НОВЫЙ ПАРОЛЬ
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')

  const newUser = await User.create({
    email: 'super-admin@gmail.com',
    salt: salt,
    hash: hash,
    loginAttempts: 0,
  })

  return NextResponse.json({
    message: 'Готово! Заходи под super-admin@gmail.com с паролем admin123',
    user: newUser,
  })
}
