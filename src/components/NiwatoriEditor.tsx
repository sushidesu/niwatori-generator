import React from "react"
import styled from "@emotion/styled"
import { BaseEmoji, Picker } from "emoji-mart"

type Props = {
  register: () => void
  onSubmit?: React.DOMAttributes<HTMLFormElement>["onSubmit"]
  onEmojiClick: (emoji: string) => void
}

const NonMemoNiwatoriEditor: React.FC<Props> = ({ register, onSubmit, onEmojiClick }) => (
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
      <Input
        name="unit"
        ref={register}
      />
      <Input
        name="niwatori"
        label="何が"
        ref={register}
      />
      <Input
        name="whatHappened"
        label="どうした"
        ref={register}
      />
      <button>OK</button>
    </Form>
    <Picker set="twitter" onSelect={emoji => onEmojiClick((emoji as BaseEmoji)?.native)} />
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 200px;
`

export const NiwatoriEditor = React.memo(NonMemoNiwatoriEditor)

type InputProps = {
  name: keyof Niwatori
  label?: string
  type?: string
}

const WithoutRefInput: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, type }, ref) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <input
      id={name}
      name={name}
      ref={ref}
      type={type}
    />
  </>
)

const Input = React.forwardRef(WithoutRefInput)
