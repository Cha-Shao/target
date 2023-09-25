import { Focus, Status, Step } from "@/types/focus"
import { atom } from "nanostores"

export const focusStore = atom<Focus>({
  round: 0,
  seconds: null,
  status: Status.Stop,
  step: Step.Focus,
  focusId: null,
})
