import rpc from './rpc'

export default async function getNotionUsers(ids: string[]) {
  const { results = [] } = await rpc('getRecordValues', {
    requests: ids.map((id: string) => ({
      id,
      table: 'notion_user',
    })),
  })

  // console.log('results des getNotionUsers', results)

  const users: any = {}
  // console.log('results des getNotionUsers', results)

  for (const result of results) {
    const { value } = result || { value: {} }
    const { name } = value
    let full_name = ''

    if (name) {
      full_name = `${name}`
    }
    users[value.id] = { full_name }
  }
  // console.log('users des getNotionUsers', users)

  return { users }
}
