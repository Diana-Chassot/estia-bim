import ModalVideo from "react-modal-video";
import { useContext } from "react";
import {ModalVideoContext} from "./VideoContext"
function ModalVideoReact() {
    const {isOpen , updateState } = useContext(ModalVideoContext)
  return (
    <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="VGTEcx_tNYU"
         onClose={() => updateState(false)} 
      />
  )
}

export default ModalVideoReact
