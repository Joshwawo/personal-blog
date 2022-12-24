import { useEffect } from 'react'
import ClipboardJS from 'clipboard'
import { toast } from 'react-toastify'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

const Code = ({ children, language = 'javascript' }) => {
  useEffect(() => {
    new ClipboardJS('.copy-button')
  }, [])

  const notify = () => toast('Copied to clipboard!')

  return (
    <div>
      <pre>
        <code
          className="code-block"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              children,
              Prism.languages[language.toLowerCase()] ||
                Prism.languages.javascript,
                'javascript'
              
             
            ),
          }}
        />
      </pre>
      <button
        className="copy-button"
        data-clipboard-text={children}
        onClick={notify}
      >
        Copy code
      </button>

      <style jsx>{`
        pre {
          tab-size: 2;
        }
        .copy-button {
          display: block;
          position: absolute;
          margin: 1rem 0;
          padding: 0.2rem 0.1rem;
          color: #fff;
          background-color: #333;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          margin-left: auto;
          top: -.7rem;
          right: .3rem;
          opacity: 50%;
        }
        .copy-button:hover {
          background-color: #444;
        }

        code {
          overflow: auto;
          display: block;
          padding: 0.8rem;
          line-height: 1.5;
          background: #f5f5f5;
          font-size: 0.75rem;
          border-radius: var(--radius);
        }
        div{
          position: relative;
        }
        .papa{
          position: relative;
        }
      `}</style>
    </div>
  )
}

export default Code
