export interface HappyPathStep {
  action: string
  element: string
  elementType: string
}

export interface HappyPath {
  title: string
  steps: HappyPathStep[]
}

export interface UserTask {
  title: string
  context: string
  scenario: string
  task: string
}

export interface HappyPathPair {
  happyPath: HappyPath
  userTask: UserTask
}

const happyPath1: HappyPath = {
  title: 'Explore an Artifact and Collect It',
  steps: [
    { action: 'Open', element: 'Floor Plan Map', elementType: 'page' },
    { action: 'Tap', element: 'WYSIWYG', elementType: 'zone overlay' },
    { action: 'Open', element: 'Skeuomorph Room: WYSIWYG', elementType: 'page' },
    { action: 'Scroll', element: 'Skeuomorph Room: WYSIWYG', elementType: 'page' },
    { action: 'Tap', element: 'Google Docs', elementType: 'artifact card' },
    { action: 'Open', element: 'Google Docs', elementType: 'artifact page' },
    { action: 'Scroll', element: 'Google Docs', elementType: 'artifact page' },
    { action: 'Read', element: 'Skeuomorphic Echo', elementType: 'text content' },
    { action: 'Tap', element: 'Collect', elementType: 'button' },
    { action: 'View', element: 'Collectible Confirmation', elementType: 'toast popup' },
    { action: 'Identify', element: 'Collected', elementType: 'state indicator' },
  ],
}

const happyPath2: HappyPath = {
  title: 'Review Artifact Collection and Navigate to an Uncollected Artifact',
  steps: [
    { action: 'Open', element: 'Floor Plan Map', elementType: 'page' },
    { action: 'Tap', element: 'Artifact Collection', elementType: 'icon button' },
    { action: 'Open', element: 'Artifact Collection', elementType: 'list page' },
    { action: 'Scan', element: 'Camera Shutter', elementType: 'room group' },
    { action: 'Read', element: '2 / 5 collected', elementType: 'progress text' },
    { action: 'Tap', element: 'Box Camera', elementType: 'uncollected artifact card' },
    { action: 'Open', element: 'Box Camera', elementType: 'artifact page' },
    { action: 'Read', element: 'One-line Summary', elementType: 'text content' },
  ],
}

const userTask1: UserTask = {
  title: 'Explore an Artifact and Collect It',
  context:
    'You\u2019re standing in front of a museum kiosk running Before the Prompt: The Rise and Fall of Digital Icons. The screen shows a top-down floor plan with four highlighted rooms.',
  scenario:
    'You\u2019re curious about how modern word processors inherited their design from older technologies, and you want to save an interesting artifact to your personal collection.',
  task:
    'Starting from the floor plan, navigate to the WYSIWYG room, open the Google Docs artifact, and collect it.',
}

const userTask2: UserTask = {
  title: 'Review Artifact Collection and Navigate to an Uncollected Artifact',
  context:
    'You\u2019ve already been using the Before the Prompt kiosk for a few minutes and have collected some artifacts. The screen shows the floor plan home screen.',
  scenario:
    'You want to check which artifacts you\u2019ve already collected in the Camera Shutter room and find one you haven\u2019t collected yet.',
  task:
    'Using the Artifact Collection screen, find the Camera Shutter group, check your progress, then navigate to the Box Camera artifact you haven\u2019t collected yet.',
}

export const pairs: HappyPathPair[] = [
  { happyPath: happyPath1, userTask: userTask1 },
  { happyPath: happyPath2, userTask: userTask2 },
]
