export async function POST(req: Request) {
  const email = await req.json();
  console.log(email);

  return new Response('Email is saved successfully!', {
    status: 200,
  })
}