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
    // console.log('valores',value)
    const { name, profile_photo } = value
    let full_name = ''

    if (name) {
      full_name = `${name}`
    }
    users[value.id] = { full_name }
    if (profile_photo) {
      users[value.id].profile_photo = profile_photo
    }
    
    
  }
  // console.log('users des getNotionUsers', users)

  return { users }
}
