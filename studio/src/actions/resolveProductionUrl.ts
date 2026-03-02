const remoteURL = 'https://combo-factory.vercel.app'
const localURL = 'http://localhost:3000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

// const baseURL = 'http://localhost:3000/api/preview'
// const baseURL = 'http://localhost:8000/'
export function resolveProductionUrl(props: any) {
  console.log(props)
  const _onHandle = async () => {
    const {_type, slug} = props.published
    // console.log(location.origin)
    // let pagePath = `?slug=${slug.current}&type=${_type}`
    let pagePath = ''
    switch (_type) {
      case 'home':
        pagePath = '/'
        break
      case 'pageModulaire':
        pagePath = `/${slug.current}`
        break
    }
    if (window) window.open(`${previewURL}/${pagePath}`, '_blank')
  }

  return {
    label: 'Open Preview',
    onHandle: _onHandle,
  }
}
