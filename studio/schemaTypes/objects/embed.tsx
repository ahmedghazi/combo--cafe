import React from 'react'
import ReactPlayer from 'react-player'
import {defineField} from 'sanity'

type Props = {
  url?: string
  iframe?: string
  renderDefault: Function
}

const EmbedPreview = (props: Props): JSX.Element => {
  const {url, iframe, renderDefault} = props

  const playerConfig = {
    youtube: {
      playerVars: {
        controls: 1,
        disablekb: 1,
        enablejsapi: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        cc_load_policy: 0,
        showinfo: 0,
        rel: 0,
        origin: 'https://studio-eker-backoffice.sanity.studio',
      },
      embedOptions: {
        host: 'https://www.youtube-nocookie.com',
      },
    },
  }

  console.log('url', url)
  // if (!url || !iframe) return <div>{renderDefault(props)}</div>
  console.log('iframe', iframe)
  return (
    <div>
      {renderDefault({...props, title: 'YouTube Embed'})}
      {url && <ReactPlayer url={url} config={playerConfig} width="100%" height="auto" />}
      {iframe && <div dangerouslySetInnerHTML={{__html: iframe}} />}
    </div>
  )
}

export default {
  title: 'Embed',
  name: 'embed',
  type: 'object',

  fields: [
    defineField({
      name: 'url',
      type: 'url',
      // description: 'url publique du media ex: https://www.youtube.com/watch?v=exTZ9vB6ZeE',
      description: 'for youtube, vimeo ex: https://www.youtube.com/watch?v=exTZ9vB6ZeE',
    }),
    defineField({
      name: 'iframe',
      type: 'text',
      rows: 4,
    }),
  ],
  components: {
    preview: EmbedPreview, // Add custom preview component
  },
  preview: {
    select: {
      url: 'url',
      iframe: 'iframe',
    },
  },
}
