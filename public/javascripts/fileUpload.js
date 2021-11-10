const mainStyles = window.getComputedStyle(document.documentElement)

if(mainStyles.getPropertyValue('--book-cover-width-large')!=null && mainStyles.getPropertyValue('--book-cover-width-large')!= ''){
    ready()
}else{
    document.getElementById('main.css').addEventListener('load', ready)
}

function ready(){
    const coverWidth = parseFloat(mainStyles.getPropertyValue('--book-cover-width-large')) 
    const coverRatio = parseFloat(mainStyles.getPropertyValue('--book-cover-ratio'))
    const coverHeight = coverWidth / coverRatio
    FilePond.registerPlugin(
        FilePondPluginImagePreview,
        FilePondPluginImageResize,
        FilePondPluginFileEncode,
    )
    
    FilePond.setOptions({
        stylePanelAspectRatio: coverRatio,
        imageResizeTargetWidth:coverWidth,
        imageResizeTargetHeight: coverHeight
    })
    
    FilePond.parse(document.body);
}

