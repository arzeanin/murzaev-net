import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    localPatterns: [{ pathname: '/api/media/file/**' }],
  },
  sassOptions: {
    includePaths: ['./node_modules'],
  },
}

export default withPayload(nextConfig)