import { Player, Youtube } from '@vime/react'
import * as C from './style'
import { AiOutlineArrowLeft } from 'react-icons/ai'

export const Video = ({ playVideo, handleClosePlayVideo }) => {
  return playVideo ? (
    <C.Container>
      <C.Button onClick={handleClosePlayVideo}>
        <AiOutlineArrowLeft />
        Back
      </C.Button>

      <Player controls>
        <Youtube videoId='0i86oM1nHjM'></Youtube>
      </Player>
    </C.Container>
  ) : null;
};
