import { Hono } from 'hono'

const app = new Hono()

async function AuthMiddleware(c:any, next:any) {
  if (c.req.header("Authorization")) {
    await next()
  } else {
    return c.text("You don't have acces");
  }
}


app.post('/', AuthMiddleware, async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})
app.get('/', async (c) => {
  return c.text('Hello Hono!');l
 })

export default app
