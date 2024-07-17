import ComponentA from "./a-client-comp";
import ComponentB from "./b-client-comp";

import React from 'react'

const AServerComp = () => {
  return (
    <div className="flex flex-col m-8 w-[300px]">
      <h2 className="text-xl my-1"> Demonstrating <strong>Server Component</strong></h2>
      <ComponentA />
      <ComponentB />
    </div>
  )
}

export default AServerComp