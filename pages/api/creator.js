// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    login: 'SteezyGzeus',
    id: 777,
    name: 'Vlad',
    company: '@ServiceNow',
    location: "San Diego",
    email: 'vladbodnarenkoofficial@gmail.com',
    // hireable: true,
    // site_admin: true,
    type: 'Admin',
    url: 'https://bankrollerrec.com'
  })
}
