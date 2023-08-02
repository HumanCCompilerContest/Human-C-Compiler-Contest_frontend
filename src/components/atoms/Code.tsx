import { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

type CodeProps = {
  language: string
  styleName?: 'atomOneDark'
  children?: string
}

const styles = {
  atomOneDark: atomOneDark,
}

const Code: FC<CodeProps> = ({
  language,
  styleName = 'atomOneDark',
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
