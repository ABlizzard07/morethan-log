module.exports = {
  images: {
    domains: ['www.notion.so', 'lh5.googleusercontent.com', 's3-us-west-2.amazonaws.com'],
  },
}

const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/?tag=Landing",
        permanent: true,
      }
    ]
  }
}