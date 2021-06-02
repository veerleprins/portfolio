import { cases } from './_cases'

export function get(req, res) {
  const { slug } = req.params
  const project = cases.find((caseItem) => caseItem.slug == slug)

  if (project) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(project))
  } else {
    res.statusCode = 404
    res.end(JSON.stringify({ error: 'That project I have not made yet.' }))
  }
}
