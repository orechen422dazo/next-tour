// app/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          ページが見つかりません
        </h2>
        <p className="text-gray-600 mb-8">
          お探しのページは存在しないか、移動された可能性があります。
        </p>
        <Link 
          href="/"
          className="inline-block px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  )
}