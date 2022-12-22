import {useEffect} from 'react'
import ClipboardJS from 'clipboard'
import {toast} from 'react-toastify'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

const Code = ({ children, language = 'javascript' }) => {
  useEffect(()=>{
    new ClipboardJS('.copy-button')
  },[])

  const notify = () => toast('Copied to clipboard!')

  return (
    <>
      <pre>
        <code className='code-block'
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              children,
              Prism.languages[language.toLowerCase()] ||
                Prism.languages.javascript,
              language.toLowerCase()
                
            ),
          }}
        />
      </pre>
      <button className="copy-button" data-clipboard-text={children} onClick={notify}>
      Copy code
    </button>

      <style jsx>{`
        pre {
          tab-size: 2;
        }
        .copy-button {
          display: block;
          margin: 1rem 0;
          padding: 0.5rem .7rem;
          color: #fff;
          background-color: #333;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          margin-left: auto;

          
          
          
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
      `}</style>
    </>
  )
}

export default Code
