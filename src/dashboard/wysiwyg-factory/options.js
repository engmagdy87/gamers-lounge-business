const editorOptions = [
    'bold',
    'italic',
    'underline',
    'olist',
    'ulist',
    {
        name: 'link',
        result: () => {
            const url = window.prompt('Enter the link URL')
            if (url) window.pell.exec('createLink', url)
        }
    }
]

export default editorOptions