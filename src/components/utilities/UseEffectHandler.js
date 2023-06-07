import { useEffect } from "react";
import axios from "axios";

const useEffectHandler = ({selectedConfig, hostname, policy, services, vpnUser, sipAlg, idleTime, Policy, Services, VPNUser, 
  SipAlg, setContent, int1, Int1, int2, Int2, int3, Int3, intA, IntA, intWAN, IntWAN}) =>
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/configFiles/${selectedConfig}`);
        console.log(response)
        const regexHostname = new RegExp('{hostname}', 'g');
        const regexIdleTime = new RegExp('{idletimeout}', 'g');
        const replacedText = response.data
          //replace data comming from "Fortigate.js"
          .replace(regexHostname, hostname)
          .replace(regexIdleTime, idleTime)
          .replace('{policy}', policy ? Policy : '')
          .replace('{services}', services ? Services : '')
          .replace('{vpnuser}', vpnUser ? VPNUser : '')
          .replace('{sipalg}', sipAlg ? SipAlg : '')

          //replace data comming from "Ports40F.js"
          .replace('{int1}', int1 ? Int1 : '')
          .replace('{int2}', int2 ? Int2 : '')
          .replace('{int3}', int3 ? Int3 : '')
          .replace('{intA}', intA ? IntA : '')
          .replace('{intWAN}', intWAN ? IntWAN : '')
          
          setContent(replacedText)
        } catch (error) {
          console.log(error);
        }
        console.log(int1);
      };
      fetchData();

  }, [selectedConfig, hostname, policy, services, vpnUser, sipAlg, idleTime, int1, Int1, int2, Int2, int3, Int3, intA, IntA, intWAN, IntWAN ]);

export default useEffectHandler