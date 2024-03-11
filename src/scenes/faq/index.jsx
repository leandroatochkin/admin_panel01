import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () =>{
const theme = useTheme();
const colors = tokens(theme.palette.mode);
return <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions" />
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                IMPORTANT QUESTION #1
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit hic labore obcaecati provident ipsam fuga deserunt omnis distinctio, consequatur nostrum, alias impedit aut repellendus tempore deleniti cupiditate voluptatem dolores dolor.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                IMPORTANT QUESTION #2
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit hic labore obcaecati provident ipsam fuga deserunt omnis distinctio, consequatur nostrum, alias impedit aut repellendus tempore deleniti cupiditate voluptatem dolores dolor.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                IMPORTANT QUESTION #3
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit hic labore obcaecati provident ipsam fuga deserunt omnis distinctio, consequatur nostrum, alias impedit aut repellendus tempore deleniti cupiditate voluptatem dolores dolor.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                IMPORTANT QUESTION #4
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit hic labore obcaecati provident ipsam fuga deserunt omnis distinctio, consequatur nostrum, alias impedit aut repellendus tempore deleniti cupiditate voluptatem dolores dolor.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                IMPORTANT QUESTION #5
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit hic labore obcaecati provident ipsam fuga deserunt omnis distinctio, consequatur nostrum, alias impedit aut repellendus tempore deleniti cupiditate voluptatem dolores dolor.
            </Typography>
        </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography color={colors.greenAccent[500]} variant="h5">
                IMPORTANT QUESTION #6
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit hic labore obcaecati provident ipsam fuga deserunt omnis distinctio, consequatur nostrum, alias impedit aut repellendus tempore deleniti cupiditate voluptatem dolores dolor.
            </Typography>
        </AccordionDetails>
    </Accordion>
</Box>
}

export default FAQ;