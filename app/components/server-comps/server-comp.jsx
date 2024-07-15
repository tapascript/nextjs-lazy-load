import ComponentA from "./a-client-comp";
import ComponentB from "./b-client-comp";

import React from 'react'

const AServerComp = () => {
  return (
    <div className="flex flex-col m-8 w-[300px]">
      <ComponentA />
      <ComponentB />
    </div>
  )
}

export default AServerComp