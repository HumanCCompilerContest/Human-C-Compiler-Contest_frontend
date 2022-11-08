import { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { materialDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeProps = {
  language: string
  styleName?: 'materialDark'
  children?: string
}

const styles = {
  materialDark: materialDark,
}

const Code: FC<CodeProps> = ({
  language,
  styleName = 'materialDark',
  children = '',
}) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={styles[styleName]}
      showLineNumbers
    >
      {children}
    </SyntaxHighlighter>
  )
}

export default Code
