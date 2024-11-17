'use client'
 
import { useRouter } from 'next/navigation'
const NextPage = () => {
    const router = useRouter()
 
    return (
      <button type="button" onClick={() => router.push('/about')}>
        Avator
      </button>
    )
}

export default NextPage