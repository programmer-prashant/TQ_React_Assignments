// 2. Create a custom hook to update the document title if the count
// is multiple of 5

import {useEffect} from 'react'

function useDocumentTitle(count) {
    useEffect(()=>{
        document.title=`count ${count}`
    },[count])
    
}

export default useDocumentTitle
