import Image from 'next/image'
import Todo from './components/Todo'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
        <Todo />
    </main>
  )
}
