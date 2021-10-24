import styled, {ThemeProvider} from "styled-components";
import React from "react";
import { GlobalStyleNetworkVis, theme } from '@styles'

const StyledForm = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  text-align: center;
  background-color: #000000;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: 1;
  margin: 0px 10px 0px 10px;
  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: var(--nav-height);
  background-color: rgba(0, 0, 0, 0.5);
  filter: none !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
`;


const Header = (props) => {
    const {name, weight, start, stop, nameChange, weightChange, startChange, stopChange, submit} = props;

    return(
        <ThemeProvider theme={theme}>

            <GlobalStyleNetworkVis />

            <StyledForm>
                <form>
                        Researcher:  &nbsp; <input type="text" value={name} onChange={nameChange} list = "suggestions" />
                                            <datalist id="suggestions">
                                                <option value="Boston"/>
                                                <option value="Cambridge"/>
                                            </datalist>
                        &emsp; &emsp;

                        Show:  &nbsp; <select  name="weight" id = "weight" value = {weight} onChange={weightChange}>
                                                    <option value="1" selected>1+ Papers</option>
                                                    <option value="2">2+ Papers</option>
                                                    <option value="3">3+ Papers</option>
                                                    <option value="4">4+ Papers</option>
                                                    <option value="5">5+ Papers</option>
                                                    <option value="10">10+ Papers</option>
                                                    <option value="20">20+ Papers</option>
                        </select>
                        &emsp; &emsp;

                        From:  &nbsp;<input type="number" size = "4" value = {start} onChange = {startChange}/>
                        &emsp; &emsp;

                        To:    &nbsp;<input type="number" size = "4" value = {stop} onChange = {stopChange}/>
                        &emsp; &emsp;

                        On:  &nbsp; <select  name="on" id = "on">
                                                    <option value="1" selected>Race/Racism</option>
                                                    <option value="2">COVID-19 (coming soon)</option>
                                                    <option value="3">Both (coming soon)</option>
                                            </select>
                        &emsp; &emsp; &emsp;

                        <button onClick = {submit}>Lets Go!</button>

                    </form>
                </StyledForm>
            </ThemeProvider>
    )
}

export default Header;