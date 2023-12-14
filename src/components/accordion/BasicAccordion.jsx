import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>Ola!</Typography>
        </AccordionSummary>
       
      </Accordion>
    </div>
  )
}
