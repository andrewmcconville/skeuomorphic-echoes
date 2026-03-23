/** Single step in a happy path */
export interface HappyPathStep {
  action: string
  element: string
  elementType: string
}

/** Happy path through the kiosk */
export interface HappyPath {
  title: string
  steps: HappyPathStep[]
}

/** Scripted user task for think-aloud testing */
export interface UserTask {
  title: string
  context: string
  scenario: string
  task: string
}

/** Paired happy path and user task */
export interface HappyPathPair {
  happyPath: HappyPath
  userTask: UserTask
}
