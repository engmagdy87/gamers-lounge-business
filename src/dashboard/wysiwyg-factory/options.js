const queryCommandState = command => document.queryCommandState(command)
const queryCommandValue = command => document.queryCommandValue(command)

const editorOptions = [
    'bold',
    'italic',
    'underline',
    {
        icon: '<img src="/images/increase_font.svg" />',
        title: 'Increase Font Size',
        state: () => queryCommandState('fontSize'),
        result: () => window.pell.exec('fontSize', Math.min(Number(queryCommandValue('FontSize')) + 1, 7))
    },
    {
        icon: '<img src="/images/decrease_font.svg" />',
        title: 'Decrease Font Size',
        state: () => queryCommandState('fontSize'),
        result: () => window.pell.exec('fontSize', Math.max(Number(queryCommandValue('FontSize')) - 1, 1))
    },
    {
        icon: '<i class="nc-icon nc-align-left-2"></i>',
        title: 'Align Left',
        state: () => queryCommandState('justifyLeft'),
        result: () => window.pell.exec('justifyLeft')
    },
    {
        icon: '<i class="nc-icon nc-align-center"></i>',
        title: 'Align Center',
        state: () => queryCommandState('justifyCenter'),
        result: () => window.pell.exec('justifyCenter')
    },
    {
        icon: '<i class="nc-icon nc-align-left-2" style="transform:rotateZ(180deg);margin-top:5px"></i>',
        title: 'Align Right',
        state: () => queryCommandState('justifyRight'),
        result: () => window.pell.exec('justifyRight')
    },
    'olist',
    'ulist',
    {
        name: 'link',
        result: () => {
            const url = window.prompt('Enter the link URL')
            if (url) window.pell.exec('createLink', url)
        }
    },
]

export default editorOptions