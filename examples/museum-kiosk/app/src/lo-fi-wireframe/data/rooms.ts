export interface Artifact {
  id: string
  name: string
  era: string
  dateRange: string
  stagePosition: string
  summary: string
  echo: string
  roomId: string
}

export interface Room {
  id: string
  name: string
  description: string
  thesis: string
  artifacts: Artifact[]
}

export const rooms: readonly Room[] = [
  {
    id: 'wysiwyg',
    name: 'WYSIWYG',
    description:
      'The page editor traces a line from hand-written manuscripts through movable type, phototypesetting, and paste-up to the cloud-based document you opened this morning.',
    thesis:
      'The virtual page still mimics paper — clipboards reference paste-up boards, font menus echo type specimen books.',
    artifacts: [
      {
        id: 'scrolls',
        name: 'Scrolls',
        era: 'Manuscript · c. 3000 BC',
        dateRange: 'c. 3000 BC – c. 400 AD',
        stagePosition: '1 of 6',
        summary:
          'Continuous rolls of papyrus or parchment written by hand — no pages, no margins, no undo.',
        echo: 'Infinite vertical scrolling in web browsers preserves the scroll metaphor.',
        roomId: 'wysiwyg',
      },
      {
        id: 'printing-press',
        name: 'Printing Press',
        era: 'Mechanical · c. 1450',
        dateRange: 'c. 1450 – c. 1880',
        stagePosition: '2 of 6',
        summary:
          'Individual letters cast in lead, assembled by hand into lines of text, inked and pressed onto paper.',
        echo: '"Leading" in CSS is named after the lead strips placed between lines of type.',
        roomId: 'wysiwyg',
      },
      {
        id: 'linotype',
        name: 'Linotype Machine',
        era: 'Industrial · 1886',
        dateRange: '1886 – c. 1970',
        stagePosition: '3 of 6',
        summary:
          'A keyboard-operated machine that cast entire lines of type as single metal slugs, revolutionizing newspaper production.',
        echo: 'The QWERTY-like keyboard layout for typesetting became the model for computer text input.',
        roomId: 'wysiwyg',
      },
      {
        id: 'indesign',
        name: 'Adobe InDesign',
        era: 'Digital · 1999',
        dateRange: '1999 – present',
        stagePosition: '4 of 6',
        summary:
          'Desktop publishing software that replaced paste-up boards with digital artboards, rulers, and master pages.',
        echo: 'The pasteboard, rulers, and "paste" command all descend from the physical layout table.',
        roomId: 'wysiwyg',
      },
      {
        id: 'google-docs',
        name: 'Google Docs',
        era: 'Cloud · 2006',
        dateRange: '2006 – present',
        stagePosition: '5 of 6',
        summary:
          'Real-time collaborative editing in the browser — the document is no longer a file on your desk but a shared, living object.',
        echo: 'The white rectangle on screen still mimics a sheet of paper, even though no paper exists.',
        roomId: 'wysiwyg',
      },
    ],
  },
  {
    id: 'camera-shutter',
    name: 'Camera Shutter',
    description:
      'The shutter click traces from wooden box cameras through film SLRs to the synthetic sound effect your phone plays when you take a screenshot.',
    thesis:
      'Phones play a mechanical click when capturing a photo — and even a screenshot — where no shutter exists.',
    artifacts: [
      {
        id: 'box-camera',
        name: 'Box Camera',
        era: 'Early Photographic · 1839',
        dateRange: '1839 – c. 1900',
        stagePosition: '1 of 5',
        summary:
          'A simple light-tight box with a lens and a mechanical shutter that exposed a photographic plate.',
        echo: 'The rectangular camera icon on every phone descends from the box shape.',
        roomId: 'camera-shutter',
      },
      {
        id: 'film-slr',
        name: 'Film SLR',
        era: 'Mechanical · c. 1936',
        dateRange: 'c. 1936 – c. 2005',
        stagePosition: '2 of 5',
        summary:
          'A mirror-and-prism reflex system that let photographers see exactly what the lens saw before pressing the shutter.',
        echo: 'The satisfying "ka-chunk" of the mirror and shutter became the definitive camera sound.',
        roomId: 'camera-shutter',
      },
      {
        id: 'digital-camera',
        name: 'Digital Camera',
        era: 'Digital · c. 1991',
        dateRange: 'c. 1991 – present',
        stagePosition: '3 of 5',
        summary:
          'CCD sensors replaced film, but the mechanical shutter sound was retained as user feedback.',
        echo: 'Early digital cameras kept physical shutters they no longer needed — pure skeuomorphism.',
        roomId: 'camera-shutter',
      },
      {
        id: 'smartphone-camera',
        name: 'Smartphone Camera',
        era: 'Mobile · c. 2007',
        dateRange: 'c. 2007 – present',
        stagePosition: '4 of 5',
        summary:
          'A lens flush with a glass slab. No mirror, no mechanical shutter — but the click sound persists.',
        echo: 'The synthetic shutter sound is required by law in some countries, even though no shutter exists.',
        roomId: 'camera-shutter',
      },
      {
        id: 'screenshot',
        name: 'Screenshot',
        era: 'Software · c. 2007',
        dateRange: 'c. 2007 – present',
        stagePosition: '5 of 5',
        summary:
          'A screen capture — no lens, no light, no shutter — yet it plays the same camera click sound.',
        echo: 'The shutter sound on a screenshot is a skeuomorph of a skeuomorph: a fake sound of a fake mechanism.',
        roomId: 'camera-shutter',
      },
    ],
  },
  {
    id: 'envelope',
    name: 'Envelope',
    description:
      'The paper envelope traces from wax-sealed letters through telegrams to the icon you tap to read a message that was never folded or sealed.',
    thesis:
      'The sealed paper envelope persists as the symbol for electronic messages decades after physical mail stopped being the default.',
    artifacts: [
      {
        id: 'wax-sealed-letter',
        name: 'Wax-Sealed Letter',
        era: 'Medieval · c. 500',
        dateRange: 'c. 500 – c. 1850',
        stagePosition: '1 of 5',
        summary:
          'A folded sheet of paper sealed with melted wax and stamped with a signet ring — privacy enforced by physics.',
        echo: '"Sealed" and "unsealed" language persists in digital encryption and permissions.',
        roomId: 'envelope',
      },
      {
        id: 'paper-envelope',
        name: 'Paper Envelope',
        era: 'Industrial · c. 1845',
        dateRange: 'c. 1845 – present',
        stagePosition: '2 of 5',
        summary:
          'Machine-made paper envelopes made personal correspondence affordable and standardized the postal system.',
        echo: 'The envelope icon on every email app is a direct drawing of this object.',
        roomId: 'envelope',
      },
      {
        id: 'telegram',
        name: 'Telegram',
        era: 'Electric · 1844',
        dateRange: '1844 – c. 2006',
        stagePosition: '3 of 5',
        summary:
          'Electrical impulses over wire — the first time a message moved faster than a horse. No envelope, but delivered in one.',
        echo: 'The messaging app "Telegram" borrows the name; "wired" still means connected.',
        roomId: 'envelope',
      },
      {
        id: 'email-client',
        name: 'Email Client',
        era: 'Digital · 1971',
        dateRange: '1971 – present',
        stagePosition: '4 of 5',
        summary:
          'Electronic mail — packets of data routed across networks. No paper, no envelope, no postmark.',
        echo: 'The envelope icon, "inbox," "outbox," "CC" (carbon copy), and "attachment" (paper clip) all reference the physical mail system.',
        roomId: 'envelope',
      },
      {
        id: 'chat-dm',
        name: 'Chat / DM',
        era: 'Mobile · c. 2009',
        dateRange: 'c. 2009 – present',
        stagePosition: '5 of 5',
        summary:
          'Instant messaging in speech bubbles — conversation as a stream, not a letter. Yet the notification icon is still an envelope.',
        echo: 'The speech bubble is a skeuomorph of a comic-book convention. The "DM" stands for "direct message" — mail language.',
        roomId: 'envelope',
      },
    ],
  },
  {
    id: 'hanging-up',
    name: 'Hanging Up',
    description:
      'The gesture of ending a call traces from physically hanging a candlestick receiver on a hook to tapping a red circle on a glass screen.',
    thesis:
      'Replacing a handset on its cradle became a red button tap, preserving the gesture of a rotary-era device most users have never touched.',
    artifacts: [
      {
        id: 'candlestick-phone',
        name: 'Candlestick Phone',
        era: 'Early Electric · c. 1890',
        dateRange: 'c. 1890 – c. 1930',
        stagePosition: '1 of 5',
        summary:
          'A two-piece phone: the transmitter stood upright on a desk and the receiver hung on a hook on the side. Ending a call meant physically hanging the receiver back on the hook.',
        echo: '"Hang up" comes directly from this action — hanging the earpiece on its hook.',
        roomId: 'hanging-up',
      },
      {
        id: 'rotary-phone',
        name: 'Rotary Phone',
        era: 'Mechanical · c. 1919',
        dateRange: 'c. 1919 – c. 1980',
        stagePosition: '2 of 5',
        summary:
          'A single-piece handset resting in a cradle. Lifting it connected the line; placing it back ended the call with a satisfying click.',
        echo: '"On the hook" / "off the hook" — still used to describe phone availability.',
        roomId: 'hanging-up',
      },
      {
        id: 'touch-tone-phone',
        name: 'Touch-Tone Phone',
        era: 'Electronic · 1963',
        dateRange: '1963 – c. 2005',
        stagePosition: '3 of 5',
        summary:
          'Push-button dialing replaced the rotary dial, but the cradle remained — you still "hung up" by placing the handset down.',
        echo: 'DTMF tones still play in phone menus. The handset-on-cradle gesture persisted unchanged.',
        roomId: 'hanging-up',
      },
      {
        id: 'flip-phone',
        name: 'Flip Phone',
        era: 'Mobile · c. 1996',
        dateRange: 'c. 1996 – c. 2007',
        stagePosition: '4 of 5',
        summary:
          'Closing the clamshell ended the call — a physical gesture that echoed placing a handset on its cradle.',
        echo: 'The dramatic snap-shut became a cultural gesture — anger, finality, mic-drop.',
        roomId: 'hanging-up',
      },
      {
        id: 'smartphone-end-call',
        name: 'Smartphone End Call',
        era: 'Touchscreen · c. 2007',
        dateRange: 'c. 2007 – present',
        stagePosition: '5 of 5',
        summary:
          'A red circle with a handset icon. No cradle, no hinge, no hook — just a tap on glass to end a call.',
        echo: 'The red button shows a handset rotated to "hung up" position. We still say "hang up" despite having nothing to hang.',
        roomId: 'hanging-up',
      },
    ],
  },
] as const

/** Flat lookup of all artifacts across all rooms */
export function findArtifact(artifactId: string): Artifact | undefined {
  for (const room of rooms) {
    const found = room.artifacts.find((a) => a.id === artifactId)
    if (found) return found
  }
  return undefined
}

/** Find the room a given artifact belongs to */
export function findRoom(roomId: string): Room | undefined {
  return rooms.find((r) => r.id === roomId)
}

/** Get previous and next artifacts in the same room */
export function getAdjacentArtifacts(
  artifact: Artifact,
): { prev: Artifact | undefined; next: Artifact | undefined } {
  const room = findRoom(artifact.roomId)
  if (!room) return { prev: undefined, next: undefined }
  const idx = room.artifacts.findIndex((a) => a.id === artifact.id)
  return {
    prev: idx > 0 ? room.artifacts[idx - 1] : undefined,
    next: idx < room.artifacts.length - 1 ? room.artifacts[idx + 1] : undefined,
  }
}
