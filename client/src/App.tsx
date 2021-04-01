import * as React from "react";
import './App.css'
import { Navbar } from "./Navbar";
import { GeneralInfo } from "./GeneralInfo";
import { Health } from "./Health";
import { Chow } from "./Chow";
import { Potty } from "./Potty";
  
export const App: React.FC = () => {
    const [renderPage, setRenderPage] = React.useState('Info')

    const onGeneralInfoClicked = () => {
        setRenderPage('Info')
    }

    const onHealthClicked = () => {
        setRenderPage('Health')
    }

    const onChowClicked = () => {
        setRenderPage('Chow')
    }

    const onPottyClicked = () => {
        setRenderPage('Potty')
    }
  
  
  if (renderPage === "Info") {
    return (
        <div>
            <Navbar onGeneralInfoClicked={onGeneralInfoClicked} onHealthClicked={onHealthClicked} onChowClicked={onChowClicked} onPottyClicked={onPottyClicked}/>
            <GeneralInfo />
        </div>
    );
  }
  if (renderPage === "Health") {
    return (
        <div>
            <Navbar onGeneralInfoClicked={onGeneralInfoClicked} onHealthClicked={onHealthClicked} onChowClicked={onChowClicked} onPottyClicked={onPottyClicked}/>
            <Health />
        </div>
    );
  }
  if (renderPage === "Chow") {
    return (
        <div>
            <Navbar onGeneralInfoClicked={onGeneralInfoClicked} onHealthClicked={onHealthClicked} onChowClicked={onChowClicked} onPottyClicked={onPottyClicked}/>
            <Chow />
        </div>
    );
  }
  if (renderPage === "Potty") {
    return (
        <div>
            <Navbar onGeneralInfoClicked={onGeneralInfoClicked} onHealthClicked={onHealthClicked} onChowClicked={onChowClicked} onPottyClicked={onPottyClicked}/>
            <Potty/>
        </div>
    );
  }
  else {
      return (
          <div>Hello</div>
      )
  }
  
}
  

// interface IProps {
//  name: string
//  text: string
//  log: () => void
// }