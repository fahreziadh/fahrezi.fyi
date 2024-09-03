export const GET = async(req: Request) =>{
    return Response.json({loc: req.headers.get("X-Vercel-IP-Country")})
}