// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log(res)
  res.status(200).json({ name: 'Akrosh Tiwari' })
}
