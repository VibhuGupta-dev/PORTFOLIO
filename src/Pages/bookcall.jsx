import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import "./BookCall.css"
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal className='info' namespace="30min"
    calLink="vibhu-gupta-d2rvc8/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view"}}
    
    
  />;
};
  
