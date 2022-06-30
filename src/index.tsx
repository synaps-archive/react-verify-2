import * as React from 'react'
import './styles.css'

type Service = 'individual' | 'corporate'
interface Color {
  primary?: string
  secondary?: string
}
interface Props {
  sessionId: string
  service: Service
  onReady?: () => void
  onFinish?: () => void
  className?: string
  color?: Color
  lang?: string
  tier?: number
}

const serviceUrl = {
  individual: 'https://verify.synaps.io',
  corporate: 'https://verify-v3.synaps.io'
}
export default class Synaps extends React.PureComponent<Props> {
  _listernerMessage = ({ data }: MessageEvent) => {
    if (data.type === 'ready') {
      this.props.onReady && this.props.onReady()
    } else if (data.type === 'finish') {
      this.props.onFinish && this.props.onFinish()
    }
  }

  componentDidMount() {
    window.addEventListener('message', this._listernerMessage)
  }

  componentWillUnmount() {
    window.removeEventListener('message', this._listernerMessage)
  }

  getUrl() {
    const { sessionId, service, color, lang, tier } = this.props
    const params = {
      session_id: sessionId,
      service,
      primary_color: color ? color.primary : undefined,
      secondary: color ? color.secondary : undefined,
      lang: lang || 'en',
      tier: tier || undefined
    }
    return `${serviceUrl[service]}?${Object.keys(params)
      .reduce((acc: string[], key): string[] => {
        if (params[key]) {
          acc.push(`${key}=${params[key]}`)
        }
        return acc
      }, [])
      .join('&')}`
  }

  render() {
    return (
      <iframe
        className={this.props.className}
        src={this.getUrl()}
        style={{ minWidth: 400, minHeight: 687 }}
        allow='microphone; camera; midi; encrypted-media; usb; ethereum'
        allowFullScreen
        frameBorder='none'
      />
    )
  }
}
