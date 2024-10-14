// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher(['/,/sign-in(.*)', '/sign-up(.*)']);

// export default clerkMiddleware((auth, request) => {
//   if(!isPublicRoute(request)) {
//     auth().protect();
//   }
// }, {afterSignInUrl:'/dashboard', afterSignUpUrl:'/dashboard'});
 
// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };
 

export { default } from "next-auth/middleware";


export const config = {
    matcher: [
      "/docs",
      "/new",
      "/api/like",
      "/classroom"
    ],
};


