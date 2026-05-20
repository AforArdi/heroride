'use client'

import { SyncLoader } from "react-spinners";

const Loading = () => {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-[70vh] w-full gap-4">
            <SyncLoader 
                color="#0a192f"
                size={15} 
                speedMultiplier={0.8} 
            />
        </div>
     );
}
 
export default Loading;