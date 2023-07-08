/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	env: {
		API_URL: process.env.API_URL
	},
	images: {
		domains: ['cdn.esoft.digital']
	}
}

module.exports = nextConfig
