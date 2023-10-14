import { authMiddleware } from '@clerk/nextjs'
export default authMiddleware({
  publicRoutes: ['/', '/contact', '/skills', '/about', '/teamproject'],
})
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
