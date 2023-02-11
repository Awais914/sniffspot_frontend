import { CLOUDNARY_PRESET, CLOUDNARY_URI } from './constant'

export const uploadPicture = async (picture) => {
  if (picture !== undefined) {
    const data = new FormData()
    data.append('file', picture)
    data.append('upload_preset', CLOUDNARY_PRESET)
    data.append('cloud_name', 'mawais914')
    return fetch(CLOUDNARY_URI, {
      method: 'post',
      body: data,
    }).then(res => res.json()).then(data => data?.url)
      .catch(error => error?.message)
  }
}
