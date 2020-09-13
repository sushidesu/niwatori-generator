import React, { useState } from "react"
import styled from "@emotion/styled"
import Twemoji from "react-twemoji"
import { Picker, BaseEmoji } from "emoji-mart"

type Props = {
  emoji: string
  onEmojiClick: (emoji: string) => void
}

export const EmojiPicker: React.FC<Props> = ({ emoji, onEmojiClick }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <EmojiButton onClick={() => setOpen(prev => !prev)}>{ emoji }</EmojiButton>
      {open
        ? <Overlay id="overlay" onClick={(event) => {
            const target = event.target as { id?: string }
            if (target?.id) setOpen(false)
          }}>
            <Picker
              sheetSize={32}
              set="twitter"
              onSelect={emoji => {
                onEmojiClick((emoji as BaseEmoji)?.native)
                setOpen(false)
              }
            } />
          </Overlay>
        : null
      }
    </>
  )
}

const EmojiButton = styled(Twemoji)`
  position: relative;
  margin-left: .4em;
  margin-bottom: .8em;
  width: 43px;
  height: 43px;

  & img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
  }
  border: 1px solid #CDD9ED;
  border-radius: 6px;
`

const Overlay = styled.div`
  background-color: rgba(100, 100, 100, 0.4);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .emoji-mart {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }
`
