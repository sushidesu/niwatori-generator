import React, {} from "react"
import styled from "@emotion/styled"
import { EmojiPicker } from "./EmojiPicker"

type Props = {
  register: () => void
  onSubmit?: React.DOMAttributes<HTMLFormElement>["onSubmit"]
  onEmojiClick: (emoji: string) => void
  emoji: string
}

const NonMemoNiwatoriEditor: React.FC<Props> = ({ register, onSubmit, onEmojiClick, emoji }) => (
  <Wrapper>
    <Form onSubmit={onSubmit}>
      <Input
        name="place"
        label="どこに"
        ref={register}
      />
      <Input
        name="count"
        label="いくつの"
        type="number"
        ref={register}
      />
      {/* <Input
        name="unit"
        ref={register}
      /> */}
      <Row>
        <Input
          name="niwatori"
          label="何が"
          ref={register}
        />
        <EmojiPicker emoji={emoji} onEmojiClick={onEmojiClick} />
      </Row>
      <Input
        name="whatHappened"
        label="どうした"
        ref={register}
      />
      <button>OK</button>
    </Form>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  font-size: .9em;
  margin-right: .2em;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 240px;
  margin: auto;
`

const Row = styled.div`
  display: flex;
  align-items: flex-end;
`

export const NiwatoriEditor = React.memo(NonMemoNiwatoriEditor)

type InputProps = {
  name: keyof Niwatori
  label?: string
  type?: string
}

const WithoutRefInput: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, type }, ref) => (
  <Control>
    {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
    <StyledInput
      id={name}
      name={name}
      ref={ref}
      type={type}
    />
  </Control>
)

const Control = styled.div`
  margin-bottom: .8em;
`

const StyledLabel = styled.label`
  color: #23262b;
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 1em;
  border-radius: 6px;
  -webkit-appearance: none;
  color: #333;
  border: 1px solid #CDD9ED;
  background: #fff;
  transition: border .3s ease;

  &:focus {
    outline: none;
    border-color: #275EFE;
  }
`

const Input = React.forwardRef(WithoutRefInput)
