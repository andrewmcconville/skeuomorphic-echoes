/** A segment of source text — plain string or a cited title */
export type SourcePart = string | { cite: string }

/** Single source entry in a glossary item */
export interface GlossarySource {
  parts: SourcePart[]
  note?: boolean
}

/** Glossary entry for a typographic glyph */
export interface GlossaryEntry {
  id: string
  char: string
  unicode: string
  name: string
  aliases: string[]
  familiar: string
  origin: {
    era: string
    context: string
    etymology: string
  }
  function: {
    original: string
    modern: string
    status: 'active' | 'vestigial' | 'extinct' | 'repurposed'
    statusNote: string
  }
  presentational: {
    bestFace: string
    decorativeUse: string
  }
  sources: GlossarySource[]
}

export const glossaryEntries: readonly GlossaryEntry[] = [
  {
    id: 'pilcrow',
    char: '¶',
    unicode: 'U+00B6',
    name: 'Pilcrow',
    aliases: ['paragraph mark', 'paragraph sign', 'paraph', 'blind P', 'alinea'],
    familiar: 'The backwards-P formatting button in Microsoft Word that reveals hidden characters.',
    origin: {
      era: '4th century BC (as paragraphos); modern form by the 12th century',
      context:
        'Ancient Greek scribes drew a horizontal line called a paragraphos in the left margin to mark a change in topic or speaker. By the 12th century, the Latin letter C (for capitulum, "little head") was embellished by rubricators with vertical bars until it evolved into the reversed-P form we recognize today.',
      etymology:
        'Greek paragraphos ("written beside") → Old French paragraphe → pelagraphe → pelagreffe → Middle English pylcrafte (c.\u00a01440, possibly influenced by the English word "craft") → pilcrow.',
    },
    function: {
      original:
        'Marked the beginning of a new paragraph or section in continuous text. Rubricators painted it in red ink after scribes copied the main text, leaving space for the mark.',
      modern:
        'Toggle icon for "show formatting marks" in word processors (Microsoft Word, Google Docs). Appears as a hidden character indicating paragraph breaks and hard returns.',
      status: 'vestigial',
      statusNote:
        'Present in every modern editor but invisible by default. The indented paragraph it left behind when rubricators couldn\u2019t keep up with the printing press is now the standard.',
    },
    presentational: {
      bestFace:
        'Cormorant Garamond — the doubled stem and calligraphic bowl are most visible at display sizes.',
      decorativeUse:
        'Background texture (large, low opacity), evolutionary stage marker, section divider.',
    },
    sources: [
      {
        parts: [
          'Houston, Keith. ',
          { cite: 'Shady Characters: The Secret Life of Punctuation, Symbols, and Other Typographical Marks' },
          '. New York: W.\u00a0W.\u00a0Norton, 2013. Ch.\u00a01, "The Pilcrow." Primary source for the evolution from paragraphos → capitulum → pilcrow, and the rubricator-deadline narrative.',
        ],
      },
      {
        parts: [
          'Parkes, M.\u00a0B. ',
          { cite: 'Pause and Effect: An Introduction to the History of Punctuation in the West' },
          '. Berkeley: University of California Press, 1993. Broader context on the paragraphos and medieval punctuation systems.',
        ],
      },
      {
        parts: [
          'Harper, Douglas. "Pilcrow." ',
          { cite: 'Online Etymology Dictionary' },
          '. Etymonline.com. Confirms the pylcrafte → pilcrow derivation chain and 1440 Middle English attestation.',
        ],
      },
      {
        parts: [
          '"Pilcrow." ',
          { cite: 'Wikipedia' },
          '. Cross-referenced for Unicode encoding details and capitulum lineage. Consistent with Houston and Parkes.',
        ],
      },
    ],
  },
  {
    id: 'section',
    char: '§',
    unicode: 'U+00A7',
    name: 'Section Sign',
    aliases: ['section mark', 'double-s', 'silcrow'],
    familiar: 'The double-S curve in legal citations — "16 U.S.C. § 580p."',
    origin: {
      era: 'Medieval period; modern form established by the 15th century',
      context:
        'Most likely a ligature of two S glyphs, from the Latin signum sectiōnis ("sign of the section"). Medieval scribes used it to reference numbered divisions in legal, religious, and scholarly manuscripts. An alternative theory traces it to the Greek paragraphos tradition.',
      etymology:
        'Latin signum sectiōnis ("sign of the section") → the two S letters stacked and joined into the distinctive double-curve form. The name "silcrow" is modern and less established.',
    },
    function: {
      original:
        'Denoted individually numbered sections in codices, particularly in legal and canonical texts, allowing precise cross-referencing.',
      modern:
        'Standard in legal citation (e.g., "16 U.S.C. § 580p"). Also used as the sixth footnote symbol in the traditional sequence: * † ‡ § ‖ ¶.',
      status: 'active',
      statusNote:
        'Still the standard section reference mark in legal writing worldwide.',
    },
    presentational: {
      bestFace:
        'Cormorant Garamond — the intertwined S-curves are most elegant in serif. JetBrains Mono renders it cleanly at small UI sizes.',
      decorativeUse:
        'Background texture (its vertical symmetry and double-curve create a strong, abstract silhouette). Stage marker for legal/manuscript eras.',
    },
    sources: [
      {
        parts: [
          '"Section sign." ',
          { cite: 'Wikipedia' },
          '. Cites the signum sectiōnis ligature theory and the alternative paragraphos derivation. Cross-referenced with Parkes for the broader medieval scribal context.',
        ],
      },
      {
        parts: [
          'Parkes, M.\u00a0B. ',
          { cite: 'Pause and Effect' },
          ', 1993. General context on the evolution of section-level marks from the paragraphos tradition.',
        ],
      },
      {
        parts: [
          'No dedicated monograph exists for the section sign. The signum sectiōnis etymology is widely repeated but, as Wikipedia notes, some scholars are skeptical of the double-S explanation.',
        ],
        note: true,
      },
    ],
  },
  {
    id: 'dagger',
    char: '†',
    unicode: 'U+2020',
    name: 'Dagger',
    aliases: ['obelus', 'obelisk', 'long cross'],
    familiar: 'The tiny cross next to footnotes and before death dates in obituaries.',
    origin: {
      era: '2nd century BC (as the obelus); cross-shaped form by the medieval period',
      context:
        'The Alexandrian scholar Aristarchus of Samothrace used a plain horizontal stroke (obelus, from Greek obelos, "roasting spit") to mark suspect passages in his editions of Homer. Medieval scribes reshaped it into the cross-like dagger form, possibly influenced by the Christian cross symbol.',
      etymology:
        'Greek obelos ("roasting spit," "pointed pillar") → Latin obelus → medieval cross form → English "dagger" from its visual resemblance to a short blade.',
    },
    function: {
      original:
        'Marked spurious or doubtful text in critical editions of classical works. Later adopted as the second footnote reference symbol (after the asterisk).',
      modern:
        'Second footnote marker in the traditional sequence. In biographical contexts, placed before a date to indicate year of death (e.g., †1455). In linguistics, marks a reconstructed or extinct form.',
      status: 'active',
      statusNote:
        'Still used in footnotes, obituaries, and scholarly notation.',
    },
    presentational: {
      bestFace:
        'Cormorant Garamond — the serifs give the cross-arms weight. JetBrains Mono is clean at label size.',
      decorativeUse:
        'Stage marker (pairs naturally with ‡ for sequential stages), inline accent.',
    },
    sources: [
      {
        parts: [
          'Houston, Keith. ',
          { cite: 'Shady Characters' },
          ', 2013. Ch.\u00a06, "The Asterisk and Dagger." Covers Aristarchus\u2019s use of the obelus at the Library of Alexandria, its transformation into the cross-shaped dagger, and the footnote reference sequence.',
        ],
      },
      {
        parts: [
          'Parkes, M.\u00a0B. ',
          { cite: 'Pause and Effect' },
          ', 1993. Contextualizes the obelus alongside the asterisk in the broader critical-marks tradition.',
        ],
      },
    ],
  },
  {
    id: 'double-dagger',
    char: '‡',
    unicode: 'U+2021',
    name: 'Double Dagger',
    aliases: ['diesis', 'double obelisk'],
    familiar: 'The third footnote symbol when a page already uses * and \u2020.',
    origin: {
      era: 'Medieval period, as an extension of the dagger',
      context:
        'Created to extend the footnote reference sequence beyond the dagger. The name diesis comes from the Greek word for "quarter tone" in music, though the connection is uncertain — it may reflect the mark\u2019s role in subdividing text into finer increments.',
      etymology:
        'Greek diesis ("a letting through," also a musical quarter-tone interval) → typographic use as the third footnote marker.',
    },
    function: {
      original:
        'Third footnote reference mark in the traditional sequence (* † ‡). Used where two footnotes had already been assigned on the same page.',
      modern:
        'Rare outside of traditional footnoting. Occasionally used in liturgical or scholarly texts.',
      status: 'vestigial',
      statusNote:
        'Largely replaced by superscript numerals in modern publishing.',
    },
    presentational: {
      bestFace:
        'Cormorant Garamond — the doubled crossbars are distinctly legible. Visually pairs with the dagger.',
      decorativeUse:
        'Sequential stage marker (with †), scattered background texture at low opacity.',
    },
    sources: [
      {
        parts: [
          'Houston, Keith. ',
          { cite: 'Shady Characters' },
          ', 2013. Ch.\u00a06. Discussed as the third mark in the footnote sequence alongside the asterisk and dagger.',
        ],
      },
      {
        parts: [
          'The double dagger lacks its own dedicated scholarly treatment. Its history is typically subsumed within discussions of the dagger and the footnote-symbol convention.',
        ],
        note: true,
      },
    ],
  },
  {
    id: 'asterism',
    char: '⁂',
    unicode: 'U+2042',
    name: 'Asterism',
    aliases: ['triple asterisk', 'three stars'],
    familiar: 'The triangle of three stars marking a scene break in novels.',
    origin: {
      era: 'In use by the early modern period (16th–17th century typography)',
      context:
        'A triangular arrangement of three asterisks used by printers to signal a major section break, especially where the break was thematic rather than structural. Its astronomical namesake refers to a prominent grouping of stars within a constellation.',
      etymology:
        'Greek asterismos ("a marking with stars"), from aster ("star"). The typographic mark borrows the astronomical term for a pattern of stars.',
    },
    function: {
      original:
        'Marked a significant break between sections of text — stronger than a paragraph break, less formal than a chapter heading. Functioned as a visible silence on the page.',
      modern:
        'Largely replaced by the dinkus (three centered asterisks in a row: * * *) or simple whitespace. Occasionally used in literary publishing for aesthetic reasons.',
      status: 'vestigial',
      statusNote:
        'The dinkus or blank line has replaced it in most contexts.',
    },
    presentational: {
      bestFace:
        'Cormorant Garamond — the triangular arrangement reads clearly at large sizes.',
      decorativeUse:
        'Section break divider (centered between content blocks), background texture element.',
    },
    sources: [
      {
        parts: [
          'Bringhurst, Robert. ',
          { cite: 'The Elements of Typographic Style' },
          '. 4th ed. Vancouver: Hartley & Marks, 2012. Brief mention within the context of section-break conventions and ornamental marks.',
        ],
      },
      {
        parts: [
          'No dedicated scholarly source identified. The asterism\u2019s history is diffusely documented across printer\u2019s manuals and typographic reference works. Its relationship to the dinkus (three horizontally spaced asterisks) is widely acknowledged but not formally studied.',
        ],
        note: true,
      },
    ],
  },
  {
    id: 'manicule',
    char: '☞',
    unicode: 'U+261E',
    name: 'Manicule',
    aliases: ['pointing hand', 'index', 'bishop\u2019s fist', 'mutton fist', 'fist', 'digit'],
    familiar: 'The pointing-hand cursor that appears when you hover over a link.',
    origin: {
      era: '12th century (earliest attested examples); widespread by the 14th–15th century',
      context:
        'Readers drew pointing hands in manuscript margins to mark significant passages — the medieval equivalent of a highlighter. The earliest known examples appear in 12th-century Spanish manuscripts and possibly the Domesday Book (1086). The mark was not provided by the author but was part of the apparatus of reading itself, drawn by and for individual readers.',
      etymology:
        'Latin maniculum ("little hand"). The term was standardized by paleographer William H. Sherman in his 2005 paper "Toward a History of the Manicule."',
    },
    function: {
      original:
        'Reader\u2019s annotation mark directing attention to important text. Also used by printers from the 15th century onward as a section indicator and decorative element on title pages.',
      modern:
        'The CSS cursor:\u00a0pointer (the hand icon that appears over hyperlinks) is a direct digital descendant. Also survives in signage, wayfinding, and retro design.',
      status: 'repurposed',
      statusNote:
        'No longer drawn by readers, but its form persists as the universal "clickable" cursor and in directional signage.',
    },
    presentational: {
      bestFace:
        'Falls back to system font in most typefaces (not natively drawn in Cormorant Garamond). Consider sourcing a dedicated manicule glyph from a dingbat or ornamental font, or using it as a graphic asset.',
      decorativeUse:
        'Directional accent (pointing to content), wayfinding cue on the kiosk floor map, inline callout.',
    },
    sources: [
      {
        parts: [
          'Sherman, William H. "Toward a History of the Manicule." ',
          { cite: 'Lives and Letters' },
          ', 2005. The foundational scholarly study of the manicule. Coined the standard English term, catalogued 14+ historical names, and established the 12th-century Spanish manuscript attestation.',
        ],
      },
      {
        parts: [
          'Sherman, William H. ',
          { cite: 'Used Books: Marking Readers in Renaissance England' },
          '. Philadelphia: University of Pennsylvania Press, 2008. Expanded treatment of the manicule as a reader\u2019s annotation tool.',
        ],
      },
      {
        parts: [
          'Houston, Keith. ',
          { cite: 'Shady Characters' },
          ', 2013. Ch.\u00a09, "The Manicule." Synthesizes Sherman\u2019s scholarship and traces the mark\u2019s transition from manuscript margin to printed dingbat to digital cursor.',
        ],
      },
    ],
  },
  {
    id: 'hedera',
    char: '❧',
    unicode: 'U+2767',
    name: 'Hedera',
    aliases: ['fleuron', 'ivy leaf', 'aldus leaf', 'printer\u2019s flower', 'vine leaf', 'floral heart'],
    familiar: 'The ivy-leaf ornament on old book title pages and formal invitations.',
    origin: {
      era: 'Ancient Greek and Latin texts; formalized as a typographic sort in the 16th century',
      context:
        'One of the oldest typographic ornaments. Scribes in early Greek and Latin manuscripts used a stylized ivy leaf as an inline character to divide paragraphs. The Italian Renaissance printer Aldus Manutius (1449–1515) popularized the form as a cast metal sort. Robert Bringhurst calls fleurons "horticultural dingbats."',
      etymology:
        'Latin hedera ("ivy"). The alternate name fleuron derives from Old French floron ("flower"). The term "aldus leaf" honors Aldus Manutius.',
    },
    function: {
      original:
        'Paragraph separator in continuous text. Also used to fill the whitespace left by paragraph indentation and as a purely ornamental element. Printers built repeating border patterns from multiple hedera sorts.',
      modern:
        'Rare in body text. Occasionally appears in fine book typography, wedding invitations, and display design as a decorative divider.',
      status: 'extinct',
      statusNote:
        'Replaced by whitespace, pilcrows, and asterisks for functional paragraph separation. Survives only as deliberate ornamentation.',
    },
    presentational: {
      bestFace:
        'Typically falls back to system dingbat font. For authentic rendering, consider LTC Vine Leaves or source individual SVGs from public-domain specimen sheets.',
      decorativeUse:
        'Section divider (centered, standalone), decorative border element, inline paragraph accent.',
    },
    sources: [
      {
        parts: [
          'Bringhurst, Robert. ',
          { cite: 'The Elements of Typographic Style' },
          ', 2012. Describes fleurons as "horticultural dingbats." Brief but authoritative on the hedera\u2019s role in typographic ornament.',
        ],
      },
      {
        parts: [
          '"Fleuron (typography)." ',
          { cite: 'Wikipedia' },
          '. Documents Unicode codepoints, the Aldus Manutius attribution, and the Old French floron etymology.',
        ],
      },
    ],
  },
  {
    id: 'ampersand',
    char: '&',
    unicode: 'U+0026',
    name: 'Ampersand',
    aliases: ['and sign', 'et ligature', 'short and', 'epershand'],
    familiar: 'The & on every keyboard \u2014 Shift-7, shorthand for "and."',
    origin: {
      era: '1st century AD (as a ligature); the word "ampersand" by the early 19th century',
      context:
        'A ligature of the Latin word et ("and"). The earliest known example appears in a piece of Pompeian graffiti from the 1st century. Roman cursive writing gradually merged the letters E and T into a single flowing stroke. In many typefaces, the original E-T letterforms remain visible.',
      etymology:
        'A contraction of "and per se and" — the phrase schoolchildren recited when the symbol appeared at the end of the alphabet as the 27th character: "X, Y, Z, and per se and." Spoken quickly, it slurred into "ampersand" (first attested c.\u00a01837).',
    },
    function: {
      original:
        'Shorthand for the conjunction "and" in Latin text, especially in titles, headings, and informal writing.',
      modern:
        'Universal conjunction symbol. Also a logical AND operator in programming (&&). Among the most frequently used typographic symbols in the world.',
      status: 'active',
      statusNote:
        'Fully alive. One of the few ancient ligatures to survive as a standard keyboard character.',
    },
    presentational: {
      bestFace:
        'Cormorant Garamond — the italic ampersand is particularly beautiful and reveals the original E-T ligature. Every face in the stack renders it distinctly, making it useful for font comparison displays.',
      decorativeUse:
        'Display accent (large, as a typographic hero element), font comparison specimen.',
    },
    sources: [
      {
        parts: [
          'Houston, Keith. ',
          { cite: 'Shady Characters' },
          ', 2013. Ch.\u00a04, "The Ampersand." Covers the Pompeian graffiti evidence, the E-T ligature evolution, and the "and per se and" schoolroom etymology.',
        ],
      },
      {
        parts: [
          'Harper, Douglas. "Ampersand." ',
          { cite: 'Online Etymology Dictionary' },
          '. Etymonline.com. Confirms the "and per se and" contraction and first attestation c.\u00a01837.',
        ],
      },
      {
        parts: [
          'Bringhurst, Robert. ',
          { cite: 'The Elements of Typographic Style' },
          ', 2012. Discusses the ampersand\u2019s calligraphic forms across typeface families.',
        ],
      },
    ],
  },
  {
    id: 'numero',
    char: '№',
    unicode: 'U+2116',
    name: 'Numero Sign',
    aliases: ['number sign', 'numero'],
    familiar: 'The elegant "No." on European addresses and Russian keyboards.',
    origin: {
      era: 'Medieval Latin scribal abbreviation; typographic form standardized in European printing',
      context:
        'A ligature of the Latin word numero (ablative of numerus, "number"), combining a capital N with a superscript lowercase o. Common in European (especially French, Italian, and Russian) typographic tradition as the abbreviation for "number."',
      etymology:
        'Latin numero ("by number," ablative case of numerus). The glyph is simply the abbreviation rendered as a ligature: N + superscript o.',
    },
    function: {
      original:
        'Shorthand for "number" preceding a numeral in European texts (e.g., №\u00a05).',
      modern:
        'Standard in Russian and some European typographic conventions. Largely replaced by # or "No." in English. Present on Russian keyboard layouts.',
      status: 'active',
      statusNote:
        'In non-English European contexts. Vestigial in English.',
    },
    presentational: {
      bestFace:
        'Cormorant Garamond — renders as a true ligature with a connected superscript o. JetBrains Mono also includes it natively.',
      decorativeUse:
        'Label prefix for evolutionary stage numbering (e.g., "№\u00a03 — The Typewriter Era"), display headings.',
    },
    sources: [
      {
        parts: [
          '"Numero sign." ',
          { cite: 'Wikipedia' },
          '. General reference for the ligature\u2019s Latin derivation, its use in European and Russian typographic convention, and Unicode encoding.',
        ],
      },
      {
        parts: [
          'No dedicated scholarly source identified. The numero sign is documented in Unicode Technical Notes and general typographic references but has not been the subject of independent historical study.',
        ],
        note: true,
      },
    ],
  },
  {
    id: 'interrobang',
    char: '‽',
    unicode: 'U+203D',
    name: 'Interrobang',
    aliases: ['interabang', 'quesclamation mark'],
    familiar: 'The combined ?! that ad copywriters in the 1960s wished would catch on.',
    origin: {
      era: '1962',
      context:
        'Invented by American advertising executive Martin K. Speckter, who proposed it in a 1962 article in TYPEtalks magazine. Speckter argued that advertising copywriters needed a single mark to express rhetorical questions that convey surprise or disbelief.',
      etymology:
        'Latin interrogatio ("question") + bang (printers\u2019 slang for the exclamation mark).',
    },
    function: {
      original:
        'Punctuation mark combining the question mark and exclamation mark into one glyph to end a rhetorical or surprised question (e.g., "You call that a typeface\u203d").',
      modern:
        'Never achieved mainstream adoption. Included in Unicode and supported by many typefaces, but rarely used outside of typographic enthusiasm and design contexts.',
      status: 'vestigial',
      statusNote:
        'Born modern, never widely adopted. A cautionary tale: not all typographic inventions take root.',
    },
    presentational: {
      bestFace:
        'Coverage varies — may fall back to system font. Cormorant Garamond includes it. Good for display sizes where the overlapping forms are legible.',
      decorativeUse:
        'Thematic accent (it\u2019s a skeuomorph itself — a physical mark that never fully transitioned to digital convention). Conversation starter on the kiosk.',
    },
    sources: [
      {
        parts: [
          'Houston, Keith. ',
          { cite: 'Shady Characters' },
          ', 2013. Ch.\u00a02, "The Interrobang." Detailed account of Martin K. Speckter\u2019s 1962 proposal in ',
          { cite: 'TYPEtalks' },
          ' magazine, the naming contest, and the mark\u2019s brief period of typographic adoption in the 1960s–70s.',
        ],
      },
      {
        parts: [
          'Speckter, Martin K. "Making a New Point, Or How About That\u2026" ',
          { cite: 'TYPEtalks' },
          ', 1962. The original proposal article.',
        ],
      },
    ],
  },
  {
    id: 'interpunct',
    char: '·',
    unicode: 'U+00B7',
    name: 'Interpunct',
    aliases: ['middle dot', 'centered dot', 'interpoint', 'space dot'],
    familiar: 'The middle dot separating links in breadcrumb navigation \u2014 Home \u00b7 About \u00b7 Contact.',
    origin: {
      era: 'Ancient Rome and earlier; among the oldest punctuation marks in Western writing',
      context:
        'Roman inscriptions used a raised dot (interpunctus) between words in continuous uppercase text — essentially inventing the word space. When lowercase letters and word spacing became standard in medieval manuscripts, the interpunct lost its primary function.',
      etymology:
        'Latin interpunctus ("pricked between"), from inter ("between") + punctus ("point").',
    },
    function: {
      original:
        'Word separator in Roman monumental inscriptions carved in CAPITALLETTERSWITHOUTSPACES. The dot sat at the midline between words.',
      modern:
        'Used in Catalan to distinguish between a geminate L (l·l) and a double L. Also common as a typographic separator in navigation, breadcrumbs, and UI labels (e.g., "Home · About · Contact").',
      status: 'repurposed',
      statusNote:
        'No longer a word separator, but thriving as a UI delimiter and in specific orthographies.',
    },
    presentational: {
      bestFace:
        'Universally supported. All five faces render it well. At small sizes, Outfit and JetBrains Mono give it the most presence.',
      decorativeUse:
        'Inline delimiter (navigation, metadata labels), section divider composites (e.g., ✦ · ✦ · ✦).',
    },
    sources: [
      {
        parts: [
          'Parkes, M.\u00a0B. ',
          { cite: 'Pause and Effect' },
          ', 1993. Discusses the interpunct in the context of Roman inscriptional practice and the transition to word spacing in medieval manuscripts.',
        ],
      },
      {
        parts: [
          'Houston, Keith. ',
          { cite: 'Shady Characters' },
          ', 2013. References the interpunct across multiple chapters as part of the broader history of scriptio continua and word separation.',
        ],
      },
    ],
  },
  {
    id: 'capitulum',
    char: '⸿',
    unicode: 'U+2E3F',
    name: 'Capitulum',
    aliases: ['chapter mark'],
    familiar: 'Nowhere \u2014 the extinct ancestor of \u00b6, a decorated C that rubricators once painted in red ink.',
    origin: {
      era: '12th century',
      context:
        'The direct ancestor of the pilcrow. Rubricators embellished the letter C (for Latin capitulum, "little head") with one or two vertical bars. This intermediate form — a C with a vertical stroke — represents the transitional stage between the simple letter abbreviation and the fully evolved pilcrow.',
      etymology:
        'Latin capitulum ("little head"), diminutive of caput ("head"). Refers to the "head" or beginning of a new section or chapter.',
    },
    function: {
      original:
        'Marked the beginning of a new chapter or section in manuscripts, the same function later taken over by the pilcrow.',
      modern:
        'None. Included in Unicode solely for backward compatibility and historical studies.',
      status: 'extinct',
      statusNote:
        'Fully supplanted by the pilcrow. Its inclusion in Unicode is an act of archaeological preservation.',
    },
    presentational: {
      bestFace:
        'Likely falls back to system font in most faces. Valuable precisely because of this — its visual absence demonstrates the ghost concept.',
      decorativeUse:
        'Evolutionary chain exhibit (display it alongside the pilcrow to show the transformation). Conceptual — showing what disappeared.',
    },
    sources: [
      {
        parts: [
          'Houston, Keith. ',
          { cite: 'Shady Characters' },
          ', 2013. Ch.\u00a01, "The Pilcrow." Describes the capitulum as the intermediate form between the letter C and the fully evolved pilcrow.',
        ],
      },
      {
        parts: [
          '"Pilcrow." ',
          { cite: 'Wikipedia' },
          '. Notes U+2E3F CAPITULUM as an obsolete character included in Unicode for backward compatibility and historical studies.',
        ],
      },
      {
        parts: [
          'Everson, Michael, et al. "Proposal to encode medieval punctuation characters in the UCS." ',
          { cite: 'Unicode Consortium Document L2/16-125 (N4726)' },
          ', 2016.',
        ],
      },
    ],
  },
  {
    id: 'reference-mark',
    char: '※',
    unicode: 'U+203B',
    name: 'Reference Mark',
    aliases: ['kome', 'komejirushi', 'rice mark'],
    familiar: 'The snowflake-like mark before disclaimers and fine print in Japanese text.',
    origin: {
      era: 'Japanese typographic tradition; exact origin uncertain',
      context:
        'A Japanese typographic convention (komejirushi, "rice mark") used to draw attention to a note, correction, or important point. Its form — an X with four dots — may derive from the visual similarity to the kanji for rice (米). Not historically part of the Western typographic tradition, making it a cross-cultural outlier in this glossary.',
      etymology:
        'Japanese 米印 (komejirushi), literally "rice mark," from the visual resemblance to the kanji 米 (kome, "rice").',
    },
    function: {
      original:
        'Attention marker in Japanese text, similar to the Western asterisk or dagger. Used before annotations, disclaimers, and supplementary notes.',
      modern:
        'Still common in Japanese typography. Occasionally borrowed in Western design for its visual distinctiveness.',
      status: 'active',
      statusNote:
        'In Japanese typographic contexts. Ornamental import in Western use.',
    },
    presentational: {
      bestFace:
        'Typically renders from CJK system fonts or a Unicode fallback rather than the Latin typefaces in the stack.',
      decorativeUse:
        'Visual counterpoint (its non-Western origin makes it a useful contrast in a project about Western typographic ghosts). Annotation marker, inline callout.',
    },
    sources: [
      {
        parts: [
          '"Reference mark." ',
          { cite: 'Wikipedia' },
          '. General reference for the komejirushi designation and its use in Japanese typography.',
        ],
      },
      {
        parts: [
          'No Western scholarly source identified. The reference mark originates in Japanese typographic convention and has not been the subject of English-language academic study. Included here as a deliberate cross-cultural outlier.',
        ],
        note: true,
      },
    ],
  },
] as const
